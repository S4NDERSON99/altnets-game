// Bakes the default Old Bailey map into public/areas so the game works offline.
// Usage: node server/bake.js [postcode] [outfile]
import fs from 'node:fs/promises';
import { buildArea } from './area.js';

const pc = process.argv[2] || 'EC4M 7EH';
const out = process.argv[3] || 'public/areas/old-bailey.json';
const area = await buildArea(pc);
await fs.writeFile(out, JSON.stringify(area));
console.log(`${area.postcode} ${area.label}: ${area.edges.length} streets, ${area.total}m, radius ${area.radius}m, ${area.buildings.length} buildings, station ${area.station?.name} (${area.station?.dist}m)`);
