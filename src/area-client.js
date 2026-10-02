// Static hosting (GitHub Pages): no server, so the browser builds the map
// itself from postcodes.io and OpenStreetMap (Overpass), and reads the Ofcom
// coverage figures from the static fibre/ folder shipped with the site.
globalThis.__FIBRE_URL = import.meta.env.BASE_URL + 'fibre';
const cache = new Map();

export async function areaFor(pc) {
  const { buildArea } = await import('../server/area.js');
  const key = pc.toUpperCase().replace(/\s+/g, '');
  if (!cache.has(key)) cache.set(key, buildArea(pc).catch((e) => { cache.delete(key); throw e; }));
  return cache.get(key);
}

export async function fibreFor(pc) {
  const { getFibre } = await import('../server/fibre.js');
  try { return await getFibre(pc); } catch { return null; }
}
