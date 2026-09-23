// Reads the pre-cut OpenStreetMap tiles made by tools/build_tiles.py and
// returns them in the same shape Overpass does, so area.js can use either.
// Tiles come from TILES_URL (any static host) or TILES_DIR (default .data/tiles).
import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const gunzip = promisify(zlib.gunzip);
const DIR = process.env.TILES_DIR || fileURLToPath(new URL('../.data/tiles', import.meta.url));
const BASE = (process.env.TILES_URL || '').replace(/\/$/, '');
const MAX_CACHED = 600;
const POLICE_RADIUS = 8000;

const cache = new Map();
let police = null;

async function read(rel) {
  if (BASE) {
    const res = await fetch(`${BASE}/${rel}`);
    if (res.status === 404 || res.status === 403) return null;
    if (!res.ok) throw new Error(`tile ${rel}: ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  }
  try {
    return await fs.readFile(path.join(DIR, rel));
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

// true once the tile set (its police.json) is reachable
export async function tilesReady() {
  if (police) return true;
  try {
    const buf = await read('police.json');
    if (!buf) return false;
    police = JSON.parse(buf.toString());
    return true;
  } catch {
    return false;
  }
}

async function tile(la, lo) {
  const key = `${la}/${lo}`;
  if (cache.has(key)) return cache.get(key);
  const buf = await read(`${la}/${lo}.json.gz`);
  const data = buf ? JSON.parse((await gunzip(buf)).toString()) : { r: [], b: [] };
  cache.set(key, data);
  if (cache.size > MAX_CACHED) cache.delete(cache.keys().next().value);
  return data;
}

function metres(lat0, lon0) {
  const k = Math.cos((lat0 * Math.PI) / 180) * 111320;
  return (lat, lon) => Math.hypot((lon - lon0) * k, (lat - lat0) * 110574);
}

async function collect(lat, lon, r) {
  const dLat = r / 110574;
  const dLon = r / (111320 * Math.cos((lat * Math.PI) / 180));
  const jobs = [];
  for (let la = Math.floor((lat - dLat) * 100); la <= Math.floor((lat + dLat) * 100); la++) {
    for (let lo = Math.floor((lon - dLon) * 100); lo <= Math.floor((lon + dLon) * 100); lo++) jobs.push(tile(la, lo));
  }
  const tiles = await Promise.all(jobs);
  const dist = metres(lat, lon);
  const seen = new Set();
  const els = [];
  let roadLen = 0;
  for (const t of tiles) {
    for (const w of t.r) {
      if (seen.has(w.id) || !w.g.some(([a, b]) => dist(a, b) <= r)) continue;
      seen.add(w.id);
      els.push({ type: 'way', id: w.id, nodes: w.n, geometry: w.g.map(([a, b]) => ({ lat: a, lon: b })), tags: w.t });
      for (let i = 1; i < w.g.length; i++) {
        const m = metres(w.g[i - 1][0], w.g[i - 1][1]);
        roadLen += m(w.g[i][0], w.g[i][1]);
      }
    }
    for (const b of t.b) {
      if (seen.has(b.id) || !b.g.some(([a, c]) => dist(a, c) <= r)) continue;
      seen.add(b.id);
      const tags = { building: 'yes' };
      if (b.h) tags.height = b.h;
      if (b.l) tags['building:levels'] = b.l;
      els.push({ type: 'way', id: b.id, geometry: b.g.map(([a, c]) => ({ lat: a, lon: c })), tags });
    }
  }
  return { els, roadLen };
}

// Same contract as the Overpass area query: roads and buildings within r,
// widened to wideR (with a {type: 'wide'} marker) when the roads near are
// sparse, plus police stations within 8km.
export async function elementsAround(lat, lon, r, wideR, sparseLen) {
  let { els, roadLen } = await collect(lat, lon, r);
  if (wideR && roadLen < sparseLen) {
    els = (await collect(lat, lon, wideR)).els;
    els.push({ type: 'wide' });
  }
  const dist = metres(lat, lon);
  for (const p of police || []) {
    if (dist(p.lat, p.lon) <= POLICE_RADIUS) els.push({ type: 'node', lat: p.lat, lon: p.lon, tags: { amenity: 'police', name: p.name || undefined } });
  }
  return els;
}
