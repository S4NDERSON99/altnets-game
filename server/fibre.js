// Real-world broadband coverage for a postcode, from Ofcom Connected Nations
// postcode data baked by tools/build_fibre.py into one small JSON file per
// outward code (e.g. EC4M.json). Read from FIBRE_URL (static host) or
// FIBRE_DIR (default .data/fibre). Returns null when there is no entry, so the
// game can fall back to a plain "check your postcode" message.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalisePostcode } from './area.js';

const DIR = process.env.FIBRE_DIR || fileURLToPath(new URL('../.data/fibre', import.meta.url));
const BASE = (process.env.FIBRE_URL || '').replace(/\/$/, '');
const cache = new Map();

async function outcodeFile(outcode) {
  if (cache.has(outcode)) return cache.get(outcode);
  let data = null;
  try {
    if (BASE) {
      const res = await fetch(`${BASE}/${outcode}.json`);
      if (res.ok) data = await res.json();
    } else {
      data = JSON.parse(await fs.readFile(path.join(DIR, `${outcode}.json`), 'utf8'));
    }
  } catch { /* no file for this area */ }
  cache.set(outcode, data);
  if (cache.size > 400) cache.delete(cache.keys().next().value);
  return data;
}

export async function getFibre(postcodeRaw) {
  const pc = normalisePostcode(postcodeRaw);
  if (!pc.includes(' ')) return null; // outcode only: no single postcode to report
  const [outcode] = pc.split(' ');
  const file = await outcodeFile(outcode);
  const row = file?.postcodes?.[pc.replace(' ', '')];
  if (!row) return null;
  return {
    postcode: pc,
    gigabit: row.g, // % of premises that can get gigabit-capable broadband
    superfast: row.s ?? null, // % that can get 30Mbit/s or more
    homes: row.h === 1, // figure is for homes, otherwise for all premises
    source: file.source || 'Ofcom Connected Nations',
  };
}
