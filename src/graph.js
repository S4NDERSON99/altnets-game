// Road graph: movement along real street polylines, junction choices,
// shortest paths for the coppers and fibre coverage cells.

const TAU = Math.PI * 2;
export const CELL = 6; // metres of street per fibre cell

export const wrap = (a) => {
  a = (a + Math.PI) % TAU;
  return (a < 0 ? a + TAU : a) - Math.PI;
};
// heading: 0 = north (-z), +PI/2 = east (+x)
export const headingOf = (dx, dz) => Math.atan2(dx, -dz);

export class Graph {
  constructor(area) {
    this.nodes = area.nodes.map(([x, z]) => ({ x, z, out: [] }));
    this.edges = area.edges.map((e, i) => {
      const cum = [0];
      for (let k = 1; k < e.pts.length; k++) {
        cum.push(cum[k - 1] + Math.hypot(e.pts[k][0] - e.pts[k - 1][0], e.pts[k][1] - e.pts[k - 1][1]));
      }
      const len = cum[cum.length - 1];
      const n = Math.max(1, Math.round(len / CELL));
      return { i, a: e.a, b: e.b, pts: e.pts, cum, len, name: e.name, kind: e.kind, cells: n, cellLen: len / n };
    });
    this.edges.forEach((e) => {
      this.nodes[e.a].out.push({ edge: e.i, dir: 1 });
      this.nodes[e.b].out.push({ edge: e.i, dir: -1 });
    });
    this.totalCells = this.edges.reduce((s, e) => s + e.cells, 0);
    this.total = this.edges.reduce((s, e) => s + e.len, 0);
    this.laid = this.edges.map((e) => new Uint8Array(e.cells));
    this.laidCount = 0;
  }

  // point at distance d measured from node a
  pointAt(e, d) {
    const { pts, cum } = e;
    d = Math.max(0, Math.min(e.len, d));
    let k = 1;
    while (k < cum.length - 1 && cum[k] < d) k++;
    const seg = cum[k] - cum[k - 1] || 1;
    const t = (d - cum[k - 1]) / seg;
    const p = pts[k - 1], q = pts[k];
    return { x: p[0] + (q[0] - p[0]) * t, z: p[1] + (q[1] - p[1]) * t, h: headingOf(q[0] - p[0], q[1] - p[1]) };
  }

  // world position + travel heading of a mover
  pose(m) {
    const e = this.edges[m.edge];
    const p = this.pointAt(e, m.dir === 1 ? m.s : e.len - m.s);
    if (m.dir === -1) p.h = wrap(p.h + Math.PI);
    return p;
  }

  endNode(m) {
    const e = this.edges[m.edge];
    return m.dir === 1 ? e.b : e.a;
  }

  startNode(m) {
    const e = this.edges[m.edge];
    return m.dir === 1 ? e.a : e.b;
  }

  // heading leaving a node along an option
  leaveHeading(opt) {
    const e = this.edges[opt.edge];
    const pts = opt.dir === 1 ? e.pts : e.pts.slice().reverse();
    let k = 1;
    while (k < pts.length - 1 && Math.hypot(pts[k][0] - pts[0][0], pts[k][1] - pts[0][1]) < 4) k++;
    return headingOf(pts[k][0] - pts[0][0], pts[k][1] - pts[0][1]);
  }

  // heading when arriving at the end of the current edge
  arriveHeading(m) {
    const e = this.edges[m.edge];
    const pts = m.dir === 1 ? e.pts : e.pts.slice().reverse();
    const n = pts.length - 1;
    let k = n - 1;
    while (k > 0 && Math.hypot(pts[n][0] - pts[k][0], pts[n][1] - pts[k][1]) < 4) k--;
    return headingOf(pts[n][0] - pts[k][0], pts[n][1] - pts[k][1]);
  }

  // exits from a node, with their angle relative to the arriving heading
  options(node, m, inHeading) {
    const opts = this.nodes[node].out
      .filter((o) => !(o.edge === m.edge && o.dir === -m.dir))
      .map((o) => ({ ...o, rel: wrap(this.leaveHeading(o) - inHeading) }));
    return opts;
  }

  // want: 'left' | 'right' | null. Returns an option or null.
  choose(opts, want) {
    if (!opts.length) return null;
    if (want === 'left' || want === 'right') {
      const sign = want === 'left' ? -1 : 1;
      const c = opts.filter((o) => o.rel * sign > 0.35);
      if (!c.length) return null;
      return c.reduce((b, o) => (Math.abs(o.rel - sign * Math.PI / 2) < Math.abs(b.rel - sign * Math.PI / 2) ? o : b));
    }
    return opts.reduce((b, o) => (Math.abs(o.rel) < Math.abs(b.rel) ? o : b));
  }

  // shortest path distance from every node to target
  distancesTo(target) {
    const n = this.nodes.length;
    const d = new Float64Array(n).fill(Infinity);
    const done = new Uint8Array(n);
    d[target] = 0;
    for (let iter = 0; iter < n; iter++) {
      let u = -1;
      for (let i = 0; i < n; i++) if (!done[i] && (u < 0 || d[i] < d[u])) u = i;
      if (u < 0 || d[u] === Infinity) break;
      done[u] = 1;
      for (const o of this.nodes[u].out) {
        const e = this.edges[o.edge];
        const v = o.dir === 1 ? e.b : e.a;
        if (d[u] + e.len < d[v]) d[v] = d[u] + e.len;
      }
    }
    return d;
  }

  nearestNode(x, z) {
    let best = 0, bd = Infinity;
    this.nodes.forEach((n, i) => {
      const d = Math.hypot(n.x - x, n.z - z);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }

  // closest point on any street: { edge, d (from node a), dist }
  nearestOnEdges(x, z, filter = null) {
    let best = null;
    for (const e of this.edges) {
      if (filter && !filter(e)) continue;
      for (let k = 1; k < e.pts.length; k++) {
        const [ax, az] = e.pts[k - 1], [bx, bz] = e.pts[k];
        const vx = bx - ax, vz = bz - az;
        const L2 = vx * vx + vz * vz || 1;
        const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / L2));
        const px = ax + vx * t, pz = az + vz * t;
        const dist = Math.hypot(px - x, pz - z);
        if (!best || dist < best.dist) best = { edge: e.i, d: e.cum[k - 1] + Math.sqrt(L2) * t, dist };
      }
    }
    return best;
  }

  // lay fibre on the cell under distance d (from node a). Returns true if new.
  lay(edgeIndex, d) {
    const e = this.edges[edgeIndex];
    const c = Math.min(e.cells - 1, Math.max(0, Math.floor(d / e.cellLen)));
    if (this.laid[edgeIndex][c]) return -1;
    this.laid[edgeIndex][c] = 1;
    this.laidCount++;
    return c;
  }

  resetFibre() {
    this.laid.forEach((a) => a.fill(0));
    this.laidCount = 0;
  }

  get coverage() {
    return this.laidCount / this.totalCells;
  }
}

// Advance a mover by dist metres. onNode(m, node, inHeading) must set the next
// edge (m.edge, m.dir) and return; it may also stop the mover by returning false.
export function advance(g, m, dist, onNode) {
  let guard = 0;
  m.s += dist;
  while (guard++ < 8) {
    const e = g.edges[m.edge];
    if (m.s < e.len) return;
    const over = m.s - e.len;
    const node = g.endNode(m);
    const inHeading = g.arriveHeading(m);
    if (onNode(m, node, inHeading) === false) { m.s = g.edges[m.edge].len; return; }
    m.s = over;
  }
}
