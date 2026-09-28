// Road graph rules: junction choices, movement along streets, fibre coverage.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Graph, advance, wrap } from '../src/graph.js';

const area = JSON.parse(fs.readFileSync(new URL('../public/areas/old-bailey.json', import.meta.url)));

test('the baked Old Bailey map has no dead ends', () => {
  const deg = new Map();
  for (const e of area.edges) for (const n of [e.a, e.b]) deg.set(n, (deg.get(n) || 0) + 1);
  assert.equal([...deg.values()].filter((d) => d === 1).length, 0);
});

test('left and right pick exits on the correct side', () => {
  const g = new Graph(area);
  let checked = 0;
  g.nodes.forEach((n, i) => {
    for (const inbound of n.out) {
      // arrive at node i along this edge, travelling towards it
      const m = { edge: inbound.edge, dir: -inbound.dir, s: 0 };
      const opts = g.options(i, m, g.arriveHeading(m));
      const left = g.choose(opts, 'left'), right = g.choose(opts, 'right');
      if (left) { assert.ok(left.rel < 0, 'left exit must turn left'); checked++; }
      if (right) { assert.ok(right.rel > 0, 'right exit must turn right'); checked++; }
    }
  });
  assert.ok(checked > 10);
});

test('a mover follows the street and lays fibre cell by cell', () => {
  const g = new Graph(area);
  const m = { edge: 0, dir: 1, s: 0 };
  let nodes = 0;
  for (let i = 0; i < 2000; i++) {
    advance(g, m, 1, (mv, node, inH) => {
      nodes++;
      const o = g.choose(g.options(node, mv, inH), null) || { edge: mv.edge, dir: -mv.dir };
      mv.edge = o.edge; mv.dir = o.dir;
    });
    const e = g.edges[m.edge];
    g.lay(m.edge, m.dir === 1 ? m.s : e.len - m.s);
  }
  assert.ok(nodes > 5, 'passed through junctions');
  assert.ok(g.coverage > 0.2 && g.coverage <= 1);
});

test('shortest paths are symmetric and zero at the start', () => {
  const g = new Graph(area);
  const d0 = g.distancesTo(0);
  assert.equal(d0[0], 0);
  const d3 = g.distancesTo(3);
  assert.ok(Math.abs(d0[3] - d3[0]) < 1e-6);
});

test('wrap keeps angles within plus or minus pi', () => {
  for (const a of [-10, -3.5, 0, 3.5, 10]) {
    const w = wrap(a);
    assert.ok(w >= -Math.PI && w <= Math.PI);
  }
});
