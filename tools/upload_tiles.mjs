#!/usr/bin/env node
// Uploads .data/tiles (built by tools/build_tiles.py) to an S3-compatible
// bucket, so the game can read tiles over TILES_URL instead of the local
// disk. Cloudflare R2 recommended (no egress fees for a public game).
//
// Tiles are raw gzip bytes that server/tiles.js gunzips itself, so they go
// up as Content-Type: application/gzip with NO Content-Encoding header.
// If a CDN sees Content-Encoding: gzip it may transparently decompress the
// response, and then tiles.js's own gunzip() fails on plain JSON.
//
// Env vars (R2):
//   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
// or generic S3:
//   S3_ENDPOINT, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, S3_REGION (optional)
//
// Usage:
//   node tools/upload_tiles.mjs           # real upload, resumable
//   node tools/upload_tiles.mjs --dry-run # just counts files and bytes

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

const DRY_RUN = process.argv.includes('--dry-run');
const CONCURRENCY = 32;
const RETRIES = 3;
const PROGRESS_EVERY = 5000;

// --fibre uploads the Ofcom coverage files (.data/fibre) under fibre/ instead
const FIBRE = process.argv.includes('--fibre');
const TILES_DIR = fileURLToPath(new URL(FIBRE ? '../.data/fibre' : '../.data/tiles', import.meta.url));
const PREFIX = FIBRE ? 'fibre/' : '';

function config() {
  const bucket = process.env.R2_BUCKET || process.env.S3_BUCKET;
  if (!bucket) {
    if (DRY_RUN) return null; // dry run doesn't need credentials
    throw new Error('Set R2_BUCKET (+ R2_ACCOUNT_ID/R2_ACCESS_KEY_ID/R2_SECRET_ACCESS_KEY) or S3_BUCKET (+ S3_ENDPOINT/S3_ACCESS_KEY_ID/S3_SECRET_ACCESS_KEY).');
  }
  const endpoint = process.env.R2_ACCOUNT_ID
    ? `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`
    : process.env.S3_ENDPOINT;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID || process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || process.env.S3_SECRET_ACCESS_KEY;
  if (!endpoint || !accessKeyId || !secretAccessKey) {
    throw new Error('Missing endpoint or credentials. Set R2_ACCOUNT_ID/R2_ACCESS_KEY_ID/R2_SECRET_ACCESS_KEY or S3_ENDPOINT/S3_ACCESS_KEY_ID/S3_SECRET_ACCESS_KEY.');
  }
  return {
    bucket,
    client: new S3Client({
      region: process.env.S3_REGION || 'auto',
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
    }),
  };
}

// Walks .data/tiles, yielding { rel, abs } for every file (police.json and
// every <lat100>/<lon100>.json.gz).
async function* walk(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(abs, base);
    } else if (e.isFile()) {
      yield { rel: path.relative(base, abs).split(path.sep).join('/'), abs };
    }
  }
}

async function headSize(client, bucket, key) {
  try {
    const res = await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
    return res.ContentLength ?? null;
  } catch (err) {
    if (err.$metadata?.httpStatusCode === 404 || err.name === 'NotFound') return null;
    throw err;
  }
}

async function uploadOne(client, bucket, rel, abs) {
  const stat = await fs.stat(abs);
  const already = await headSize(client, bucket, rel);
  if (already === stat.size) return 'skipped';
  const body = await fs.readFile(abs);
  const isJson = rel.endsWith('.json'); // police.json, uncompressed
  let lastErr;
  for (let attempt = 0; attempt < RETRIES; attempt++) {
    try {
      await client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: rel,
        Body: body,
        ContentType: isJson ? 'application/json' : 'application/gzip',
        // No ContentEncoding: these bytes are already gzip and must reach
        // the browser/function untouched for tiles.js to gunzip them itself.
      }));
      return 'uploaded';
    } catch (err) {
      lastErr = err;
      await new Promise((ok) => setTimeout(ok, 500 * 2 ** attempt));
    }
  }
  throw lastErr;
}

async function runPool(items, size, worker) {
  let i = 0;
  let done = 0;
  const counts = { uploaded: 0, skipped: 0, failed: 0 };
  const next = async () => {
    while (i < items.length) {
      const idx = i++;
      try {
        const result = await worker(items[idx]);
        counts[result] += 1;
      } catch (err) {
        counts.failed += 1;
        console.error(`  failed: ${items[idx].rel}: ${err.message}`);
      }
      done += 1;
      if (done % PROGRESS_EVERY === 0) console.log(`  ${done}/${items.length} (${counts.uploaded} uploaded, ${counts.skipped} skipped, ${counts.failed} failed)`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, next));
  return counts;
}

async function main() {
  console.log(`Scanning ${TILES_DIR}...`);
  const files = [];
  let bytes = 0;
  for await (const f of walk(TILES_DIR)) {
    files.push(f);
    bytes += (await fs.stat(f.abs)).size;
  }
  console.log(`Found ${files.length} files, ${(bytes / 1e9).toFixed(2)} GB.`);

  if (DRY_RUN) {
    console.log('Dry run: no upload performed.');
    return;
  }

  const cfg = config();
  console.log(`Uploading to bucket "${cfg.bucket}" with concurrency ${CONCURRENCY}...`);
  const t0 = Date.now();
  const counts = await runPool(files, CONCURRENCY, (f) => uploadOne(cfg.client, cfg.bucket, PREFIX + f.rel, f.abs));
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`Done in ${secs}s: ${counts.uploaded} uploaded, ${counts.skipped} already there, ${counts.failed} failed.`);
  if (counts.failed) {
    console.log('Re-run the command to retry the failed files (uploaded/skipped ones are left alone).');
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
