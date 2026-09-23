"""Cut a UK OpenStreetMap extract into small map tiles for the game.

Usage: python3 tools/build_tiles.py .data/uk.osm.pbf .data/tiles

Writes one gzipped JSON file per 0.01 x 0.01 degree tile (about 1.1km by
0.65km) at <out>/<lat100>/<lon100>.json.gz holding the roads and buildings
that touch it, plus <out>/police.json with every police station in the file.
server/tiles.js reads them back in the same shape Overpass returns, so the
rest of the area pipeline is unchanged. Takes 20 to 40 minutes for the UK.
"""
import gzip
import json
import math
import os
import sys
import time
from collections import defaultdict

import osmium

SRC, OUT = sys.argv[1], sys.argv[2]
SHARDS = 512
ROADS = {'trunk', 'primary', 'secondary', 'tertiary', 'unclassified', 'residential',
         'living_street', 'pedestrian', 'service', 'road'}
ROAD_TAGS = ('highway', 'name', 'service', 'access')
TMP = os.path.join(OUT, '_shards')
os.makedirs(TMP, exist_ok=True)

shard_files = [open(os.path.join(TMP, f'{i}.jsonl'), 'w') for i in range(SHARDS)]
police = []
counts = defaultdict(int)


def tile_of(lat, lon):
    return math.floor(lat * 100), math.floor(lon * 100)


def emit(tile, kind, rec):
    line = json.dumps([tile[0], tile[1], kind, rec], separators=(',', ':'))
    shard_files[hash(tile) % SHARDS].write(line + '\n')


def centre(nodes):
    lats = [n.lat for n in nodes]
    lons = [n.lon for n in nodes]
    return sum(lats) / len(lats), sum(lons) / len(lons)


t0 = time.time()
fp = (osmium.FileProcessor(SRC)
      .with_locations(osmium.index.create_map('flex_mem'))
      .with_filter(osmium.filter.KeyFilter('highway', 'building', 'amenity')))
for obj in fp:
    tags = obj.tags
    if obj.is_node():
        if tags.get('amenity') == 'police':
            police.append({'name': tags.get('name', ''), 'lat': round(obj.location.lat, 6), 'lon': round(obj.location.lon, 6)})
        continue
    if not obj.is_way():
        continue
    try:
        nodes = [n for n in obj.nodes if n.location.valid()]
    except osmium.InvalidLocationError:
        continue
    if len(nodes) < 2:
        continue
    hw = tags.get('highway')
    if tags.get('amenity') == 'police':
        lat, lon = centre(nodes)
        police.append({'name': tags.get('name', ''), 'lat': round(lat, 6), 'lon': round(lon, 6)})
    if hw in ROADS:
        rec = {
            'id': obj.id,
            'n': [n.ref for n in nodes],
            'g': [[round(n.lat, 6), round(n.lon, 6)] for n in nodes],
            't': {k: tags.get(k) for k in ROAD_TAGS if tags.get(k)},
        }
        for tile in {tile_of(n.lat, n.lon) for n in nodes}:
            emit(tile, 'r', rec)
        counts['roads'] += 1
    elif 'building' in tags and len(nodes) >= 4:
        rec = {'id': obj.id, 'g': [[round(n.lat, 6), round(n.lon, 6)] for n in nodes]}
        if tags.get('height'):
            rec['h'] = tags.get('height')
        if tags.get('building:levels'):
            rec['l'] = tags.get('building:levels')
        emit(tile_of(nodes[0].lat, nodes[0].lon), 'b', rec)
        counts['buildings'] += 1
    total = counts['roads'] + counts['buildings']
    if total and total % 1000000 == 0:
        print(f'{time.time() - t0:.0f}s {dict(counts)}', flush=True)

for f in shard_files:
    f.close()
print(f'read done in {time.time() - t0:.0f}s: {dict(counts)}, {len(police)} police', flush=True)

with open(os.path.join(OUT, 'police.json'), 'w') as f:
    json.dump(police, f, separators=(',', ':'))

tiles = 0
for i in range(SHARDS):
    path = os.path.join(TMP, f'{i}.jsonl')
    groups = defaultdict(lambda: {'r': [], 'b': []})
    with open(path) as f:
        for line in f:
            la, lo, kind, rec = json.loads(line)
            groups[(la, lo)][kind].append(rec)
    for (la, lo), data in groups.items():
        d = os.path.join(OUT, str(la))
        os.makedirs(d, exist_ok=True)
        with gzip.open(os.path.join(d, f'{lo}.json.gz'), 'wt', compresslevel=6) as g:
            json.dump(data, g, separators=(',', ':'))
        tiles += 1
    os.remove(path)
os.rmdir(TMP)
print(f'wrote {tiles} tiles in {time.time() - t0:.0f}s', flush=True)
