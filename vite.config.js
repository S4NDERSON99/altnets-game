import { defineConfig } from 'vite';
import { cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { getArea } from './server/area.js';
import { getFibre } from './server/fibre.js';

// Local stand-in for the hosted /api/area function: postcode in, playable map out.
function areaApi() {
  const handler = async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    try {
      const area = await getArea(url.searchParams.get('postcode'));
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(area));
    } catch (err) {
      res.statusCode = err.status || 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: err.status ? err.message : 'Something went wrong loading that area.' }));
      if (!err.status) console.error(err);
    }
  };
  const fibre = async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    res.setHeader('Content-Type', 'application/json');
    try {
      const data = await getFibre(url.searchParams.get('postcode'));
      if (!data) { res.statusCode = 404; res.end(JSON.stringify({ error: 'No coverage figure for that postcode.' })); return; }
      res.end(JSON.stringify(data));
    } catch (err) {
      res.statusCode = err.status || 500;
      res.end(JSON.stringify({ error: err.status ? err.message : 'Coverage lookup failed.' }));
    }
  };
  return {
    name: 'area-api',
    configureServer(server) { server.middlewares.use('/api/area', handler); server.middlewares.use('/api/fibre', fibre); },
    configurePreviewServer(server) { server.middlewares.use('/api/area', handler); server.middlewares.use('/api/fibre', fibre); },
  };
}

// VITE_STATIC=1 builds for GitHub Pages: no API, the browser builds maps itself
// and the Ofcom coverage files ship alongside the site.
const STATIC = process.env.VITE_STATIC === '1';
const shim = fileURLToPath(new URL('./src/shims/node.js', import.meta.url));
function copyFibre() {
  return {
    name: 'copy-fibre',
    apply: 'build',
    async closeBundle() {
      const src = fileURLToPath(new URL('./.data/fibre', import.meta.url));
      await cp(src, fileURLToPath(new URL('./dist/fibre', import.meta.url)), { recursive: true });
    },
  };
}

export default defineConfig({
  base: STATIC ? process.env.BASE_PATH || '/altnets-game/' : '/',
  plugins: [areaApi(), ...(STATIC ? [copyFibre()] : [])],
  // the browser bundle can reach the map builder (static mode), so Node
  // built-ins are swapped for stubs there; the dev server's API still runs real Node
  define: { 'process.env': '{}' },
  resolve: { alias: Object.fromEntries(['node:fs/promises', 'node:path', 'node:zlib', 'node:util', 'node:url'].map((m) => [m, shim])) },
  // .data holds ~257k map tiles; watching them would grind the dev server
  server: { port: 5190, host: true, watch: { ignored: ['**/.data/**', '**/.cache/**'] } },
  preview: { port: 5190, host: true },
});
