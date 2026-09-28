// Postcode handling, map tiles and the real-world coverage lookup. Tests that
// need the local data folders skip themselves when the data isn't built.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { normalisePostcode, AreaError } from '../server/area.js';
import { tilesReady, elementsAround } from '../server/tiles.js';
import { getFibre } from '../server/fibre.js';

const hasTiles = fs.existsSync(new URL('../.data/tiles/police.json', import.meta.url));
const hasFibre = fs.existsSync(new URL('../.data/fibre/M20.json', import.meta.url));

test('postcodes are tidied and junk is refused', () => {
  assert.equal(normalisePostcode('ec4m7eh'), 'EC4M 7EH');
  assert.equal(normalisePostcode(' sw1a  1aa '), 'SW1A 1AA');
  assert.equal(normalisePostcode('ec4m'), 'EC4M');
  assert.throws(() => normalisePostcode('banana'), AreaError);
});

test('tiles return roads, buildings and police near the Old Bailey', { skip: !hasTiles }, async () => {
  assert.ok(await tilesReady());
  const els = await elementsAround(51.515493, -0.101971, 450, 0, 10000);
  const roads = els.filter((e) => e.type === 'way' && e.tags?.highway);
  const police = els.filter((e) => e.tags?.amenity === 'police');
  assert.ok(roads.length > 30);
  assert.ok(police.some((p) => /snow hill/i.test(p.tags.name || '')));
});

test('coverage lookup gives real figures and nothing for unknown postcodes', { skip: !hasFibre }, async () => {
  const m20 = await getFibre('M20 2RN');
  assert.ok(m20 && m20.gigabit >= 0 && m20.gigabit <= 100);
  assert.equal(m20.homes, true);
  assert.equal(await getFibre('ZZ99 9ZZ'), null);
});
