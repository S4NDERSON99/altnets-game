# Escape the Coppers

The Altnets' free browser game. Enter a UK postcode, run your own real streets laying full fibre, and keep ahead of the coppers sent from your nearest police station.

Built with three.js and Vite. Street data comes from OpenStreetMap (© OpenStreetMap contributors, ODbL). Postcode lookup uses postcodes.io.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5190. "Or play the Old Bailey" uses the baked map in `public/areas/old-bailey.json`, which needs no network.

## Controls

Left and Right turn at the next junction (tap the left or right half of the screen on phones), Space or swipe up jumps, Down turns round, P pauses, M mutes.

## How a postcode becomes a level

`/api/area?postcode=` (in `vite.config.js` for local dev) calls `getArea` in `server/area.js`:

1. postcodes.io turns the postcode into a latitude and longitude.
2. Roads, buildings and police stations come from our own map tiles (`server/tiles.js`). If no tiles are available, it falls back to the public Overpass servers, which are slow and often busy.
3. The roads become a simplified junction graph sized to about 2.3km of street, and the nearest police station becomes the copper spawn.
4. The result is cached in `.cache/areas/`.

A fresh postcode takes about 0.1 to 0.4 seconds from tiles.

## Map tiles

Tiles are built once from the Geofabrik UK extract and are not in git (`.data/` is ignored).

```bash
pip install osmium
curl -L -o .data/uk.osm.pbf https://download.geofabrik.de/europe/united-kingdom-latest.osm.pbf
python3 tools/build_tiles.py .data/uk.osm.pbf .data/tiles
```

This takes about 35 minutes on a laptop. It gives about 257,000 gzipped JSON tiles (1.8GB), each 0.01 by 0.01 degrees, plus `police.json`. Rebuild every few months to pick up map edits.

For hosting, upload `.data/tiles/` to any static file host (S3, R2, Vercel Blob) and set `TILES_URL` to its base URL. Without it, `TILES_DIR` or `.data/tiles` is read from disk.

## Other scripts

- `npm run bake` rebuilds the Old Bailey default map.
- `node tools/time-areas.js` times fresh lookups for a handful of postcodes.
- `python3 tools/cut_sprites.py <sheet>` cuts the mascot poses from the brand sheet.
- `python3 tools/make_og.py <sheet>` rebuilds the link preview image and favicons.
- `npm run upload-tiles` uploads `.data/tiles/` to object storage (see Deploying below).

## Deploying

The game runs on Vercel: the `dist/` build is served as a static site, and one serverless function (`api/area.js`) answers `/api/area?postcode=` the same way `vite.config.js` does locally. The 1.8GB of map tiles are too big for git or for a serverless function's own storage, so they live in their own bucket first.

1. **Create a bucket for the tiles.** Cloudflare R2 is the easiest choice, no charge for the traffic:
   - Sign in to the Cloudflare dashboard, open R2, and create a bucket (any name, e.g. `altnets-tiles`).
   - In the bucket's Settings, turn on "Public access" (a `r2.dev` subdomain is enough to start). Copy that public URL, you'll need it as `TILES_URL` below.
   - Under R2 → Manage API Tokens, create a token with read and write access to that bucket. Note the Account ID, Access Key ID and Secret Access Key it gives you.

2. **Upload the tiles from this machine.** In this folder, set the credentials and run the upload:
   ```bash
   export R2_ACCOUNT_ID=...
   export R2_ACCESS_KEY_ID=...
   export R2_SECRET_ACCESS_KEY=...
   export R2_BUCKET=altnets-tiles
   npm run upload-tiles
   ```
   This sends all 257,000 tile files (about 1.8GB) and prints progress every 5,000 files. It's safe to stop and re-run: files already uploaded at the right size are skipped, so it picks up where it left off. Add `--dry-run` first if you just want a count of files and bytes without uploading anything.

3. **Create the Vercel project.** In the Vercel dashboard, "Add New… → Project", import this repository. Vercel will read `vercel.json` and pick up the build command and output folder automatically, no need to change the framework preset.

4. **Set the tiles URL.** In the Vercel project's Settings → Environment Variables, add `TILES_URL` set to the public bucket URL from step 1 (no trailing slash, e.g. `https://pub-xxxx.r2.dev`). This is what tells the deployed game to read map tiles from the bucket instead of local disk.

5. **Deploy.** Trigger a deploy (push to the connected branch, or "Deploy" in the dashboard). Once it's live, try a postcode to check the map loads.

6. **Set the link preview image.** Once you have the live address (e.g. `https://escapethecoppers.vercel.app`), put the full `https://` URL in the `og:image` tag in `index.html` so the preview picture shows up when the link is shared, then redeploy.

The OpenStreetMap credit is already shown on the title card and during play, no extra step needed there.
