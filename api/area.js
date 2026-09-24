// Vercel serverless function version of the /api/area dev middleware in
// vite.config.js. Node runtime, not edge, because server/tiles.js uses
// zlib and fs. Postcode in, playable map out.
import { getArea } from '../server/area.js';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, 'http://localhost');
    const area = await getArea(url.searchParams.get('postcode'));
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    res.status(200).json(area);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.status ? err.message : 'Something went wrong loading that area.' });
    if (!err.status) console.error(err);
  }
}
