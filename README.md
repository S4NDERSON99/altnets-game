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

## Before going live

- Move `/api/area` into a hosted function and point it at the hosted tiles with `TILES_URL`.
- Put the full https address in the `og:image` tag in `index.html`.
- Show the OpenStreetMap credit, which the game already does on the title card and during play.
