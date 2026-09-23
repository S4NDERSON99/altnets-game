// Times fresh area builds (no cache) for a list of postcodes.
// Usage: node tools/time-areas.js [postcode ...]
import { buildArea } from '../server/area.js';

const list = process.argv.slice(2).length ? process.argv.slice(2) : ['M20 2RN', 'E1 6AN', 'LD3 7AA', 'EC4M 7EH', 'PH33 6SY'];

for (const pc of list) {
  const t0 = Date.now();
  try {
    const a = await buildArea(pc);
    const s = a.station ? `${a.station.name} (${a.station.dist}m)` : 'none';
    console.log(`${a.postcode}: ${((Date.now() - t0) / 1000).toFixed(1)}s, ${a.edges.length} streets, ${a.total}m, radius ${a.radius}m, ${a.buildings.length} buildings, station ${s}`);
  } catch (err) {
    console.log(`${pc}: FAILED after ${((Date.now() - t0) / 1000).toFixed(1)}s: ${err.message}`);
  }
}
