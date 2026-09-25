"""Bake Ofcom Connected Nations fixed coverage postcode data for the end screen.

Usage: python3 tools/build_fibre.py <ofcom-postcode-download.zip or folder or .csv> [out_dir]

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

SRC = sys.argv[1]
OUT = sys.argv[2] if len(sys.argv) > 2 else '.data/fibre'
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
for name, fh in csv_streams(SRC):
    reader = csv.DictReader(fh)
    cols = reader.fieldnames or []
    c_pc = pick(cols, 'postcode', avoid=('area', 'district', 'sector')) or pick(cols, 'pcds')
    c_gig = pick(cols, 'gigabit', '%') or pick(cols, 'gigabit', 'availability')
    c_sfb = pick(cols, 'sfbb', '%') or pick(cols, 'superfast', '%')
    c_all = pick(cols, 'all premises') or pick(cols, 'premises', avoid=('%',))
    if not c_pc or not c_gig:
        print(f'skip {name}: no postcode or gigabit column ({cols[:8]}...)')
        continue
    for r in reader:
        pc = re.sub(r'\s+', '', (r.get(c_pc) or '').upper())
        g = num(r.get(c_gig, ''))
        if len(pc) < 5 or g is None:
            continue
        rec = {'g': g}
        if c_sfb:
            s = num(r.get(c_sfb, ''))
            if s is not None:
                rec['s'] = s
        if c_all:
            p = num(r.get(c_all, ''))
            if p is not None:
                rec['p'] = int(p)
        out[pc[:-3]][pc] = rec
        rows += 1
    print(f'{name}: using {c_pc!r}, {c_gig!r}, {c_sfb!r}, {c_all!r}')

os.makedirs(OUT, exist_ok=True)
for outcode, pcs in out.items():
    with open(os.path.join(OUT, f'{outcode}.json'), 'w') as f:
        json.dump({'source': SOURCE, 'postcodes': pcs}, f, separators=(',', ':'))
print(f'{rows} postcodes into {len(out)} outcode files in {OUT}')
