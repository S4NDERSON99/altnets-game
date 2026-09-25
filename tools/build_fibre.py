"""Bake Ofcom Connected Nations fixed coverage postcode data for the end screen.

Usage: python3 tools/build_fibre.py <homes source> [all-premises source] [--out out_dir]

Sources are a zip, folder or .csv of Ofcom postcode unit files. Homes
(residential) figures win; the all-premises file fills postcodes with no homes
(offices, courts). A postcode that is 0% for everything carries no real data
and is left out, so the game shows its plain "check your postcode" message.

Ofcom publishes postcode unit files (CSV, one or more per area) under the Open
Government Licence. Column names change a little between releases, so this
finds them by meaning: the postcode, all premises, and the percentage of
premises with gigabit-capable and with superfast (30Mbit/s+) coverage.
Writes <out_dir>/<OUTCODE>.json (default .data/fibre) for server/fibre.js.
"""
import csv
import io
import json
import os
import re
import sys
import zipfile
from collections import defaultdict

args = sys.argv[1:]
OUT = '.data/fibre'
if '--out' in args:
    i = args.index('--out')
    OUT = args[i + 1]
    del args[i:i + 2]
SOURCES = args
SOURCE = 'Ofcom Connected Nations'


def pick(cols, *words, avoid=()):
    for c in cols:
        lc = c.lower()
        if all(w in lc for w in words) and not any(a in lc for a in avoid):
            return c
    return None


def num(v):
    try:
        return round(float(str(v).strip().rstrip('%')), 1)
    except ValueError:
        return None


def csv_streams(src):
    if src.lower().endswith('.zip'):
        z = zipfile.ZipFile(src)
        for name in z.namelist():
            if name.lower().endswith('.csv'):
                yield name, io.TextIOWrapper(z.open(name), encoding='utf-8-sig', errors='replace')
    elif os.path.isdir(src):
        for root, _, files in os.walk(src):
            for f in files:
                if f.lower().endswith('.csv'):
                    yield f, open(os.path.join(root, f), encoding='utf-8-sig', errors='replace')
    else:
        yield os.path.basename(src), open(src, encoding='utf-8-sig', errors='replace')


out = defaultdict(dict)
rows = 0
for rank, src in enumerate(SOURCES):
    homes = rank == 0
    for name, fh in csv_streams(src):
        reader = csv.DictReader(fh)
        cols = reader.fieldnames or []
        c_pc = pick(cols, 'postcode', avoid=('area', 'district', 'sector', 'space')) or pick(cols, 'pcds')
        c_gig = pick(cols, 'gigabit', '%') or pick(cols, 'gigabit', 'availability')
        c_sfb = pick(cols, 'sfbb', '%') or pick(cols, 'superfast', '%')
        if not c_pc or not c_gig:
            print(f'skip {name}: no postcode or gigabit column ({cols[:8]}...)')
            continue
        for r in reader:
            pc = re.sub(r'\s+', '', (r.get(c_pc) or '').upper())
            g = num(r.get(c_gig, ''))
            s = num(r.get(c_sfb, '')) if c_sfb else None
            if len(pc) < 5 or g is None:
                continue
            if g == 0 and not s:
                continue  # 0% for everything: no real data here
            if pc in out[pc[:-3]]:
                continue  # homes figure already there
            rec = {'g': g}
            if s is not None:
                rec['s'] = s
            if homes:
                rec['h'] = 1
            out[pc[:-3]][pc] = rec
            rows += 1
    print(f'{src}: done ({"homes" if homes else "all premises"})')

os.makedirs(OUT, exist_ok=True)
for outcode, pcs in out.items():
    with open(os.path.join(OUT, f'{outcode}.json'), 'w') as f:
        json.dump({'source': SOURCE, 'postcodes': pcs}, f, separators=(',', ':'))
print(f'{rows} postcodes into {len(out)} outcode files in {OUT}')
