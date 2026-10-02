// Turns a UK postcode into a playable street map.
// postcodes.io gives the location; OpenStreetMap gives the roads, buildings
// and police stations, from our own tiles (server/tiles.js) or Overpass. The result is a small road graph in metres,
// cached on disk per postcode so each area is fetched once.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tilesReady, elementsAround } from './tiles.js';

// On Vercel the filesystem is read-only except /tmp, so the area cache moves there.
const CACHE_DIR = process.env.VERCEL ? '/tmp/altnets-areas' : fileURLToPath(new URL('../.cache/areas', import.meta.url));
const UA = 'altnets-game/0.1 (+https://thealtnets.com)';
// browsers set their own User-Agent (and a custom one forces a CORS preflight)
const UA_HEADERS = typeof window === 'undefined' ? { 'User-Agent': UA } : {};
// Raced in parallel, first good JSON wins. Checked 23 Sep 2026: the bare
// overpass-api.de name mostly answers 504 "too busy" (it fronts lz4 and z, so
// asking those directly is better); kumi.systems and private.coffee time out.
const OVERPASS = [
  'https://lz4.overpass-api.de/api/interpreter',
  'https://z.overpass-api.de/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
];
const OVERPASS_TIMEOUT = 20000; // per race, all endpoints share it
// Fetch radius, and a wide one for sparse areas. Towns and even rural
// villages usually reach TARGET_LEN by R 200 to 300m, so 450m covers R up to
// 400m (edges may run to R * 1.12, buildings to R + 40).
const NEAR_R = 450;
const WIDE_R = 1800;
// Road length (whole ways) inside NEAR_R below which the same query also pulls
// WIDE_R. Measured Sep 2026: places that play at 450m had 15 to 23 km, places
// that needed the wide fetch about 5 km.
const SPARSE_LEN = 10000;
const TARGET_LEN = 1500; // metres of street in one level: about 2 minutes of play
const MERGE_DIST = 10; // junctions closer than this become one
const STUB_LEN = 120; // dead ends shorter than this are removed, so U-turns are rare

export class AreaError extends Error {
  constructor(message, status = 400) { super(message); this.status = status; }
}

const FULL = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const OUTCODE = /^[A-Z]{1,2}\d[A-Z\d]?$/i;

export function normalisePostcode(raw) {
  const pc = String(raw || '').trim().toUpperCase().replace(/\s+/g, ' ');
  if (FULL.test(pc)) return pc.replace(/\s/g, '').replace(/(\d[A-Z]{2})$/, ' $1');
  if (OUTCODE.test(pc)) return pc;
  throw new AreaError('That does not look like a UK postcode. Try something like EC4M 7EH.');
}

async function getJson(url, init = {}, timeoutMs = 45000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: ctl.signal, headers: { ...UA_HEADERS, Accept: 'application/json', ...(init.headers || {}) } });
    const type = res.headers.get('content-type') || '';
    if (!type.includes('json')) return { ok: false, status: res.status, body: null };
    return { ok: res.ok, status: res.status, body: await res.json() };
  } finally {
    clearTimeout(t);
  }
}

export async function lookupPostcode(pc) {
  const full = pc.includes(' ');
  const url = `https://api.postcodes.io/${full ? 'postcodes' : 'outcodes'}/${encodeURIComponent(pc)}`;
  const r = await getJson(url, {}, 10000);
  if (r.status === 404) throw new AreaError(`We couldn't find ${pc}. Check it and try again.`, 404);
  if (!r.ok || !r.body?.result) throw new AreaError('Postcode lookup is not responding. Try again in a moment.', 502);
  const x = r.body.result;
  const ward = full ? x.admin_ward || x.parish : (x.admin_ward || [])[0];
  const district = full ? x.admin_district : (x.admin_district || [])[0];
  return { postcode: full ? x.postcode : x.outcode, lat: x.latitude, lon: x.longitude, label: ward || district || pc, district: district || '' };
}

// Asks every endpoint at once and keeps the first complete answer, then
// aborts the rest. Busy servers reply with HTML (504 "too busy", 429) or a
// JSON "runtime error" remark (partial data); both count as a miss. A server
// that misses quickly is asked again, with backoff, while the race has time.
async function overpassRace(query) {
  const ctl = new AbortController();
  const deadline = Date.now() + OVERPASS_TIMEOUT;
  const timer = setTimeout(() => ctl.abort(), OVERPASS_TIMEOUT);
  const body = 'data=' + encodeURIComponent(query);
  const ask = async (ep) => {
    let last = new Error(`${ep} not asked`);
    for (let wait = 1000; !ctl.signal.aborted; wait *= 2) {
      try {
        const res = await fetch(ep, { method: 'POST', body, signal: ctl.signal, headers: { ...UA_HEADERS, Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' } });
        if (!res.ok || !(res.headers.get('content-type') || '').includes('json')) throw new Error(`${ep} ${res.status}`);
        const json = await res.json();
        if (!Array.isArray(json.elements) || /runtime error/i.test(json.remark || '')) throw new Error(`${ep} ${json.remark || 'no elements'}`);
        return { elements: json.elements, host: new URL(ep).host };
      } catch (err) { last = err; }
      if (deadline - Date.now() < wait + 3000) break; // no time left for a useful answer
      await new Promise((ok) => setTimeout(ok, wait));
    }
    throw last;
  };
  try {
    return await Promise.any(OVERPASS.map(ask));
  } finally {
    clearTimeout(timer);
    ctl.abort();
  }
}

async function overpass(query) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      return await overpassRace(query);
    } catch { /* every endpoint missed */ }
    if (!attempt) await new Promise((ok) => setTimeout(ok, 1000));
  }
  throw new AreaError('The map server is busy right now. Try again in a minute, or play the Old Bailey.', 503);
}

const HIGHWAY = '^(trunk|primary|secondary|tertiary|unclassified|residential|living_street|pedestrian|service|road)$';

const HIGHWAY_RE = new RegExp(HIGHWAY);

// Roads, buildings and police stations in one round trip. With wideR set and
// few roads near, the same query adds everything out to wideR (minus what it
// already sent) and a {type: 'wide'} marker. The small timeout and maxsize
// (64 MB) keep the job cheap so busy servers still accept it.
function areaQuery(lat, lon, r, wideR = 0) {
  const at = (d) => `(around:${d},${lat},${lon})`;
  let q = `[out:json][timeout:15][maxsize:67108864];
way["highway"~"${HIGHWAY}"]${at(r)}->.roads;
(.roads;way["building"]${at(r)};)->.near;
.near out geom qt;
(node["amenity"="police"]${at(8000)};way["amenity"="police"]${at(8000)};);out center qt;`;
  if (wideR) {
    q += `
if (roads.sum(length()) < ${SPARSE_LEN}) {
((way["highway"~"${HIGHWAY}"]${at(wideR)};way["building"]${at(wideR)};); - .near;);out geom qt;
make wide radius=${wideR};out;
}`;
  }
  return q;
}

function keepRoad(t) {
  if (t.access === 'private' || t.access === 'no') return false;
  if (t.highway === 'service') return Boolean(t.name) || t.service === 'alley';
  return true;
}

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const polyLen = (pts) => pts.reduce((s, p, i) => (i ? s + dist(pts[i - 1], p) : 0), 0);

// ---------------------------------------------------------------- graph build

function rawGraph(ways, proj) {
  const pos = new Map();
  const uses = new Map();
  for (const w of ways) {
    w.nodes.forEach((id, i) => {
      pos.set(id, proj(w.geometry[i].lat, w.geometry[i].lon));
      uses.set(id, (uses.get(id) || 0) + (i === 0 || i === w.nodes.length - 1 ? 2 : 1));
    });
  }
  const edges = [];
  for (const w of ways) {
    let start = 0;
    for (let i = 1; i < w.nodes.length; i++) {
      if (uses.get(w.nodes[i]) >= 2 || i === w.nodes.length - 1) {
        const ids = w.nodes.slice(start, i + 1);
        edges.push({ a: ids[0], b: ids[ids.length - 1], pts: ids.map((id) => pos.get(id)), name: w.tags.name || '', kind: w.tags.highway });
        start = i;
      }
    }
  }
  return { pos, edges };
}

function simplify(g, R) {
  let { pos, edges } = g;
  // clip to the play circle
  edges = edges.filter((e) => e.pts.every((p) => Math.hypot(p[0], p[1]) <= R * 1.12) && Math.hypot(...e.pts[Math.floor(e.pts.length / 2)]) <= R);

  // merge junctions that sit close together (dual carriageways, staggered crossings)
  const ids = new Set();
  edges.forEach((e) => { ids.add(e.a); ids.add(e.b); });
  const parent = new Map([...ids].map((id) => [id, id]));
  const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
  const cell = new Map();
  const key = (p) => `${Math.floor(p[0] / MERGE_DIST)},${Math.floor(p[1] / MERGE_DIST)}`;
  for (const id of ids) {
    const k = key(pos.get(id));
    (cell.get(k) || cell.set(k, []).get(k)).push(id);
  }
  for (const id of ids) {
    const p = pos.get(id);
    const [cx, cz] = key(p).split(',').map(Number);
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
      for (const o of cell.get(`${cx + dx},${cz + dz}`) || []) {
        if (o !== id && dist(p, pos.get(o)) < MERGE_DIST) parent.set(find(o), find(id));
      }
    }
  }
  const groups = new Map();
  for (const id of ids) { const r = find(id); (groups.get(r) || groups.set(r, []).get(r)).push(pos.get(id)); }
  const npos = new Map();
  for (const [r, ps] of groups) npos.set(r, [ps.reduce((s, p) => s + p[0], 0) / ps.length, ps.reduce((s, p) => s + p[1], 0) / ps.length]);
  edges = edges.map((e) => {
    const a = find(e.a), b = find(e.b);
    const pts = e.pts.slice();
    pts[0] = npos.get(a); pts[pts.length - 1] = npos.get(b);
    return { ...e, a, b, pts };
  }).filter((e) => (e.a !== e.b || polyLen(e.pts) > 40) && polyLen(e.pts) > 2);

  // drop near duplicate parallel edges
  const seen = new Map();
  edges = edges.filter((e) => {
    const k = e.a < e.b ? `${e.a}|${e.b}` : `${e.b}|${e.a}`;
    const len = polyLen(e.pts);
    const prev = seen.get(k) || [];
    if (prev.some((l) => Math.max(l, len) / Math.min(l, len) < 1.35)) return false;
    seen.set(k, [...prev, len]);
    return true;
  });

  const degree = () => {
    const d = new Map();
    edges.forEach((e) => { d.set(e.a, (d.get(e.a) || 0) + 1); d.set(e.b, (d.get(e.b) || 0) + 1); });
    return d;
  };
  const chain = () => {
    const inc = new Map();
    const add = (e) => { for (const n of [e.a, e.b]) (inc.get(n) || inc.set(n, new Set()).get(n)).add(e); };
    const del = (e) => { for (const n of [e.a, e.b]) inc.get(n)?.delete(e); };
    const alive = new Set(edges);
    edges.forEach(add);
    const queue = [...inc.keys()];
    while (queue.length) {
      const n = queue.pop();
      const s = inc.get(n);
      if (!s || s.size !== 2) continue;
      const [e1, e2] = [...s];
      if (e1.a === e1.b || e2.a === e2.b) continue;
      const p1 = e1.b === n ? e1.pts : e1.pts.slice().reverse();
      const p2 = e2.a === n ? e2.pts : e2.pts.slice().reverse();
      const o1 = e1.b === n ? e1.a : e1.b;
      const o2 = e2.a === n ? e2.b : e2.a;
      const merged = { a: o1, b: o2, pts: [...p1, ...p2.slice(1)], name: e1.name || e2.name, kind: e1.kind };
      if (o1 === o2 && polyLen(merged.pts) < 40) continue;
      del(e1); del(e2); alive.delete(e1); alive.delete(e2);
      add(merged); alive.add(merged);
      queue.push(o1, o2);
    }
    edges = [...alive];
  };
  const pruneStubs = () => {
    let changed = true;
    while (changed) {
      changed = false;
      const d = degree();
      const before = edges.length;
      edges = edges.filter((e) => !((d.get(e.a) === 1 || d.get(e.b) === 1) && polyLen(e.pts) < STUB_LEN));
      if (edges.length !== before) changed = true;
    }
  };
  pruneStubs();
  chain();
  pruneStubs();
  chain();

  // keep the largest connected piece
  const adj = new Map();
  edges.forEach((e, i) => { for (const n of [e.a, e.b]) (adj.get(n) || adj.set(n, []).get(n)).push(i); });
  let best = new Set();
  const done = new Set();
  for (const start of adj.keys()) {
    if (done.has(start)) continue;
    const comp = new Set([start]);
    const q = [start];
    while (q.length) {
      const n = q.pop();
      for (const i of adj.get(n)) for (const m of [edges[i].a, edges[i].b]) if (!comp.has(m)) { comp.add(m); q.push(m); }
    }
    comp.forEach((n) => done.add(n));
    if (comp.size > best.size) best = comp;
  }
  edges = edges.filter((e) => best.has(e.a));
  return edges;
}

function thinPoints(pts) {
  const out = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) if (dist(out[out.length - 1], pts[i]) >= 3) out.push(pts[i]);
  out.push(pts[pts.length - 1]);
  return out;
}

const r1 = (v) => Math.round(v * 10) / 10;

function finalise(edges) {
  const index = new Map();
  const nodes = [];
  const nid = (id, p) => {
    if (!index.has(id)) { index.set(id, nodes.length); nodes.push([r1(p[0]), r1(p[1])]); }
    return index.get(id);
  };
  const out = edges.map((e) => {
    const pts = thinPoints(e.pts).map((p) => [r1(p[0]), r1(p[1])]);
    return { a: nid(e.a, e.pts[0]), b: nid(e.b, e.pts[e.pts.length - 1]), pts, len: r1(polyLen(pts)), name: e.name, kind: e.kind };
  });
  return { nodes, edges: out, total: Math.round(out.reduce((s, e) => s + e.len, 0)) };
}

function pickStation(elements, proj) {
  // a police building can also arrive in the geometry output, without a centre
  const all = elements.filter((e) => e.tags?.amenity === 'police' && (e.lat ?? e.center?.lat) != null).map((e) => {
    const lat = e.lat ?? e.center?.lat, lon = e.lon ?? e.center?.lon;
    const p = proj(lat, lon);
    return { name: e.tags.name || '', x: r1(p[0]), z: r1(p[1]), dist: Math.round(Math.hypot(p[0], p[1])), score: /police station/i.test(e.tags.name || '') ? 0 : /police/i.test(e.tags.name || '') ? 1 : 2 };
  });
  all.sort((a, b) => a.score - b.score || a.dist - b.dist);
  const s = all[0];
  return s ? { name: s.name, x: s.x, z: s.z, dist: s.dist } : null;
}

function hash(n) { n = (n ^ 61) ^ (n >>> 16); n = n + (n << 3); n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); return ((n ^ (n >>> 15)) >>> 0) / 4294967296; }

function buildBuildings(elements, proj, R) {
  const out = [];
  for (const w of elements) {
    if (w.type !== 'way' || !w.tags?.building || !w.geometry || w.geometry.length < 4) continue;
    const pts = w.geometry.map((g) => proj(g.lat, g.lon));
    if (!pts.some((p) => Math.hypot(p[0], p[1]) < R + 40)) continue;
    pts.pop();
    const t = w.tags || {};
    let h = parseFloat(t.height);
    if (!(h > 0)) h = parseFloat(t['building:levels']) * 3.3;
    if (!(h > 0)) h = 9 + hash(w.id) * 14;
    out.push({ p: thinPoints([...pts, pts[0]]).slice(0, -1).map((q) => [r1(q[0]), r1(q[1])]), h: Math.round(Math.min(h, 120)) });
    if (out.length >= 6000) break;
  }
  return out;
}

// ---------------------------------------------------------------- public

export async function buildArea(postcodeRaw) {
  const t0 = Date.now();
  const pc = normalisePostcode(postcodeRaw);
  const loc = await lookupPostcode(pc);
  const k = Math.cos((loc.lat * Math.PI) / 180);
  const proj = (lat, lon) => [(lon - loc.lon) * k * 111320, -(lat - loc.lat) * 110574];

  // One query normally does it. The wide query only runs when the near
  // fetch did not look sparse but still could not reach TARGET_LEN.
  let fetchR = 0, elements = [], edges = [], R = 150, overpassMs = 0;
  const hosts = [];
  for (const wideR of [WIDE_R, 0]) {
    let res;
    const tq = Date.now();
    try {
      // our own tiles when present, the public Overpass servers otherwise
      res = (await tilesReady())
        ? { elements: await elementsAround(loc.lat, loc.lon, wideR ? NEAR_R : WIDE_R, wideR, SPARSE_LEN), host: 'tiles' }
        : await overpass(wideR ? areaQuery(loc.lat, loc.lon, NEAR_R, wideR) : areaQuery(loc.lat, loc.lon, WIDE_R));
    } catch (err) {
      if (!wideR && edges.length >= 4) break; // the wide retry failed, keep the smaller map
      throw err;
    } finally {
      overpassMs += Date.now() - tq;
    }
    hosts.push(res.host);
    elements = res.elements;
    fetchR = wideR && !elements.some((e) => e.type === 'wide') ? NEAR_R : WIDE_R;
    const raw = rawGraph(elements.filter((e) => e.type === 'way' && e.geometry && HIGHWAY_RE.test(e.tags?.highway || '') && keepRoad(e.tags)), proj);
    // edges may reach R * 1.12 and buildings R + 40, both must sit inside the fetch
    const maxR = Math.floor(Math.min(fetchR / 1.12, fetchR - 40) / 25) * 25;
    let found = false;
    if (raw.edges.reduce((s, e) => s + polyLen(e.pts), 0) >= TARGET_LEN) {
      for (R = 150; R <= maxR; R += 25) {
        edges = simplify(raw, R);
        if (edges.reduce((s, e) => s + polyLen(e.pts), 0) >= TARGET_LEN) { found = true; break; }
      }
    }
    if (!found) { R = maxR; edges = simplify(raw, R); }
    if (found || fetchR === WIDE_R) break;
  }
  if (edges.length < 4) throw new AreaError(`There aren't enough streets around ${loc.postcode} to play. Try a nearby postcode.`, 422);

  const graph = finalise(edges);
  const station = pickStation(elements, proj);
  const buildings = buildBuildings(elements, proj, R);
  console.log(`[area] ${loc.postcode} ${Date.now() - t0}ms, overpass ${overpassMs}ms via ${hosts.join(' + ') || 'none'}, fetch ${fetchR}m, R ${R}m, ${graph.total}m street`);

  return {
    v: 1,
    postcode: loc.postcode,
    label: loc.label,
    district: loc.district,
    centre: { lat: loc.lat, lon: loc.lon },
    radius: R,
    ...graph,
    station,
    buildings,
    attribution: '© OpenStreetMap contributors',
  };
}

export async function getArea(postcodeRaw) {
  const pc = normalisePostcode(postcodeRaw);
  const file = path.join(CACHE_DIR, pc.replace(/\s/g, '') + '.json');
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch { /* not cached yet */ }
  const area = await buildArea(pc);
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    await fs.writeFile(file, JSON.stringify(area));
  } catch { /* read-only filesystem, e.g. a cold Vercel function: caching is a bonus, not a requirement */ }
  return area;
}
