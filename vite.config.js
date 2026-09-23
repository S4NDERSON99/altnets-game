import { defineConfig } from 'vite';
import { getArea } from './server/area.js';

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
  return {
    name: 'area-api',
    configureServer(server) { server.middlewares.use('/api/area', handler); },
    configurePreviewServer(server) { server.middlewares.use('/api/area', handler); },
  };
}

export default defineConfig({
  plugins: [areaApi()],
  // .data holds ~257k map tiles; watching them would grind the dev server
  server: { port: 5190, host: true, watch: { ignored: ['**/.data/**', '**/.cache/**'] } },
  preview: { port: 5190, host: true },
});
