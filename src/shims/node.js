// Browser stand-ins for the Node built-ins the map builder imports. On a
// static host there is no filesystem, so every read reports "not found" and
// the builder falls back to the public Overpass servers.
const missing = async () => { const e = new Error('no filesystem in the browser'); e.code = 'ENOENT'; throw e; };
export const readFile = missing;
export const writeFile = missing;
export const mkdir = missing;
export const join = (...p) => p.join('/');
export const fileURLToPath = (u) => String(u);
export const promisify = (f) => f;
export const gunzip = () => { throw new Error('no zlib in the browser'); };
export default { readFile, writeFile, mkdir, join, fileURLToPath, promisify, gunzip };
