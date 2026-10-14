// 他人のリポジトリのデータを、コミットを固定して取ってくる（このリポジトリには入れない）。
// SHA-256 が合わなければ止まる。`npm run build` の前に自動で走る。
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const SAKAMOTO = 'https://raw.githubusercontent.com/RyotaroSakamoto0113/rank-88-extremal-lattice-computations/628ce2a7ac23acf8d4c295677e4310c9ec5b21d9';
const files = [
  { url: `${SAKAMOTO}/data/L/lattice.json`, to: 'data/r88/external/L.json', sha256: 'ee7d08e6701d5d2618751c586241ab63cac8b838734e57eba73a98eeb76e8ab2' },
  { url: `${SAKAMOTO}/data/L0/lattice.json`, to: 'data/r88/external/L0.json', sha256: '1120a57c3564f60b3a90285a2b8a7746fd96324e3c70f919e194e8be39ce0efb' },
];
const sha = (buf) => createHash('sha256').update(buf).digest('hex');

for (const f of files) {
  if (fs.existsSync(f.to) && sha(fs.readFileSync(f.to)) === f.sha256) continue;
  const res = await fetch(f.url);
  if (!res.ok) throw new Error(`${f.url}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (sha(buf) !== f.sha256) throw new Error(`${f.url}: SHA-256 mismatch`);
  fs.mkdirSync(path.dirname(f.to), { recursive: true });
  fs.writeFileSync(f.to, buf);
  console.log(`fetched ${f.to}`);
}
