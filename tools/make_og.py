"""Builds public/og.png (link preview) and the favicons from the brand sheet.

Usage: python3 tools/make_og.py <sheet.webp>
"""
import json, math, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

SHEET = sys.argv[1]
W, H = 1200, 630
NIGHT, TEAL, COPPER, PAPER = (7, 16, 15), (30, 203, 196), (200, 112, 60), (244, 243, 239)


def font(path, size, weight):
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


outfit = lambda s, w=900: font('tools/fonts/Outfit.ttf', s, w)
caveat = lambda s: font('tools/fonts/Caveat.ttf', s, 700)

img = Image.new('RGB', (W, H), NIGHT)

# the Old Bailey streets as a backdrop: copper, then fibre over most of it
area = json.load(open('public/areas/old-bailey.json'))
lines = Image.new('RGBA', (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(lines)
s = 1.25
cx, cy = 900, 320
for i, e in enumerate(area['edges']):
    pts = [(cx + x * s, cy + z * s) for x, z in e['pts']]
    d.line(pts, fill=COPPER + (120,), width=4)
    if i % 5 != 0:
        d.line(pts, fill=TEAL + (255,), width=7)
glow = lines.filter(ImageFilter.GaussianBlur(9))
img.paste(glow, (0, 0), glow)
img.paste(lines, (0, 0), lines)
shade = Image.new('RGBA', (W, H))
sd = ImageDraw.Draw(shade)
for x in range(W):
    a = int(250 * min(1, max(0, (820 - x) / 300)))
    sd.line([(x, 0), (x, H)], fill=NIGHT + (a,))
img.paste(shade, (0, 0), shade)

# hero card
hero = Image.open(SHEET).convert('RGB').crop((15, 195, 452, 985))
hero = hero.resize((int(hero.width * 0.66), int(hero.height * 0.66)), Image.LANCZOS)
card = Image.new('RGBA', (hero.width + 24, hero.height + 24), PAPER + (255,))
card.paste(hero, (12, 12))
mask = Image.new('L', card.size, 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, card.width - 1, card.height - 1], 28, fill=255)
card.putalpha(mask)
card = card.rotate(4, resample=Image.BICUBIC, expand=True)
shadow = Image.new('RGBA', card.size, (0, 0, 0, 0))
shadow.putalpha(card.getchannel('A').point(lambda v: int(v * 0.55)))
shadow = shadow.filter(ImageFilter.GaussianBlur(18))
x0, y0 = 860, 40
img.paste(shadow, (x0 + 10, y0 + 20), shadow)
img.paste(card, (x0, y0), card)

t = ImageDraw.Draw(img)
t.text((70, 70), 'ALTERNATIVE ROUTES. A BRIGHTER TOMORROW.', font=outfit(19, 500), fill=(155, 180, 179), spacing=4)
x = 66
t.text((x, 110), 'The', font=outfit(118), fill=PAPER)
x += t.textlength('The', font=outfit(118)) - 4
t.text((x, 110), 'Altnets', font=outfit(118), fill=TEAL)
t.text((72, 250), 'Escape the Coppers', font=caveat(92), fill=TEAL)
t.rounded_rectangle([76, 368, 236, 376], 4, fill=TEAL)
t.text((72, 410), 'Enter your postcode. Lay full fibre', font=outfit(38, 600), fill=PAPER)
t.text((72, 458), "down your own streets. Don't get nicked.", font=outfit(38, 600), fill=PAPER)
t.rounded_rectangle([72, 530, 470, 590], 18, fill=TEAL)
t.text((96, 541), 'Play free at thealtnets.com', font=outfit(27, 800), fill=(15, 20, 20))
img.save('public/og.png', optimize=True)

# favicons from the front view face
face = Image.open(SHEET).convert('RGB').crop((500, 100, 640, 240))
for size, name in ((64, 'favicon.png'), (180, 'apple-touch-icon.png')):
    ic = Image.new('RGB', (size, size), NIGHT)
    f = face.resize((size, size), Image.LANCZOS)
    m = Image.new('L', (size, size), 0)
    ImageDraw.Draw(m).ellipse([0, 0, size - 1, size - 1], fill=255)
    ic.paste(f, (0, 0), m)
    ic.save('public/' + name)
print('ok')
