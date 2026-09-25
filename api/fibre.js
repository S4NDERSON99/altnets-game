// Vercel function: real-world gigabit coverage for a postcode (Ofcom data),
// mirroring the /api/fibre dev route in vite.config.js.
import { getFibre } from '../server/fibre.js';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, 'http://localhost');
    const data = await getFibre(url.searchParams.get('postcode'));
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    if (!data) return res.status(404).json({ error: 'No coverage figure for that postcode.' });
    res.status(200).json(data);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.status ? err.message : 'Coverage lookup failed.' });
  }
}
