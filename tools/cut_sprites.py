"""Cut mascot poses out of the brand sheet and remove the off-white background.

Usage: python3 tools/cut_sprites.py <sheet.webp>
Writes public/sprites/*.png. Flood fill from the crop border, stopping at
edges (large colour steps) so white gloves and trainers survive.
"""
import sys
from collections import deque
from PIL import Image, ImageFilter

SHEET = sys.argv[1]
OUT = 'public/sprites'
CROPS = {
    'back': (1020, 50, 1195, 395),
    'hero': (15, 195, 480, 985),
    'run': (915, 745, 1225, 995),
}
ERASE = {'hero': [(0, 0, 135, 240)]}  # handwritten tagline, crop coords


def is_bg(p):
    r, g, b = p
    return min(r, g, b) > 205 and max(r, g, b) - min(r, g, b) < 18


def step(a, b):
    return sum(abs(x - y) for x, y in zip(a, b))


def cut(im):
    w, h = im.size
    px = im.load()
    mask = [[False] * w for _ in range(h)]
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if is_bg(px[x, y]):
                mask[y][x] = True; q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if is_bg(px[x, y]) and not mask[y][x]:
                mask[y][x] = True; q.append((x, y))
    while q:
        x, y = q.popleft()
        c = px[x, y]
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not mask[ny][nx]:
                n = px[nx, ny]
                if is_bg(n) and step(c, n) < 14:
                    mask[ny][nx] = True; q.append((nx, ny))
    alpha = Image.new('L', (w, h), 255)
    ap = alpha.load()
    for y in range(h):
        for x in range(w):
            if mask[y][x]:
                ap[x, y] = 0
    # soften the edge and drop the grey fringe
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))
    out = im.convert('RGBA')
    out.putalpha(alpha)
    return out.crop(out.getbbox())


sheet = Image.open(SHEET).convert('RGB')
for name, box in CROPS.items():
    im = sheet.crop(box)
    for e in ERASE.get(name, []):
        im.paste((245, 245, 243), e)
    cut(im).save(f'{OUT}/altnet-{name}.png')
    print(name, 'ok')
