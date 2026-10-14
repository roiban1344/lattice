// 112 次元の候補 R のデータ（data/r112/ の写し）を読み、ページに載せる事実をその場で計算する。
import fs from 'node:fs';
import path from 'node:path';
import { bareiss, blocks, equal, identity, isSymmetric, matmul, parseMatrix, power, scale, transpose, type Mat } from './lattice';

const dir = path.join(process.cwd(), 'data/r112');
const read = (f: string) => parseMatrix(fs.readFileSync(path.join(dir, f), 'utf8'));

export const PUB_REPO = 'https://github.com/roiban1344/112-dimensional-extremal-even-unimodular-lattice-candidate';
export const PUB_SHA = '7111ff756ef61000a06e9899569b7b87ea16d074';
export const pub = (p: string) => `${PUB_REPO}/blob/${PUB_SHA}/${p}`;

let cache: ReturnType<typeof load> | null = null;
function load() {
  const G = read('L56_gram.txt');
  const S = read('sl2_29_generators.txt');
  const g1 = S.slice(0, 56), g2 = S.slice(56);
  const tau = read('tau.txt');
  const R = read('R112_gram_LLL.txt');
  const tauG = matmul(tau, G);
  const Rblock = blocks(scale(G, 3), tauG, transpose(tauG), scale(G, 2));
  return { G, g1, g2, tau, tau2: matmul(tau, tau), R, Rblock };
}
export const data = () => (cache ??= load());

/** 公開リポジトリの verify/01_basic.py と同じ検査。生成時に毎回計算する。 */
export function basicChecks() {
  const { G, g1, g2, tau, tau2, R, Rblock } = data();
  const I = identity(56);
  const even = (M: Mat) => M.every((r, i) => r[i] % 2 === 0);
  const dG = bareiss(G), dR = bareiss(R), dB = bareiss(Rblock);
  const pos = (p: bigint[], n: number) => p.length === n && p.every((x) => x > 0n);
  const tauG = matmul(tau, G);
  return [
    { what: String.raw`$G$ は対称、対角は偶数`, ok: isSymmetric(G) && even(G) },
    { what: String.raw`$\det G = ${dG.det}$、主小行列式 56 個はすべて正`, ok: dG.det === 1n && pos(dG.pivots, 56) },
    { what: String.raw`$g_1^5 = g_2^7 = 1$`, ok: equal(power(g1, 5), I) && equal(power(g2, 7), I) && !equal(g1, I) && !equal(g2, I) },
    { what: String.raw`$g_i G g_i^{\mathsf T} = G$`, ok: [g1, g2].every((g) => equal(matmul(matmul(g, G), transpose(g)), G)) },
    { what: String.raw`$\tau^2 = -5$`, ok: equal(tau2, scale(I, -5)) },
    { what: String.raw`$\tau G \tau^{\mathsf T} = 5G$`, ok: equal(matmul(tauG, transpose(tau)), scale(G, 5)) },
    { what: String.raw`$\tau G = -(\tau G)^{\mathsf T}$`, ok: equal(tauG, scale(transpose(tauG), -1)) },
    { what: String.raw`$\tau g_i = g_i \tau$`, ok: [g1, g2].every((g) => equal(matmul(tau, g), matmul(g, tau))) },
    { what: String.raw`ブロック版の $R$: 対角は偶数、$\det = ${dB.det}$、正定値`, ok: even(Rblock) && dB.det === 1n && pos(dB.pivots, 112) },
    { what: String.raw`公開した $R$（LLL 簡約）: 対角は偶数、$\det = ${dR.det}$、正定値`, ok: isSymmetric(R) && even(R) && dR.det === 1n && pos(dR.pivots, 112) },
  ];
}
