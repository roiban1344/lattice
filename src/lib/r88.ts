// 坂本の 88 次元格子（data/r88/external/、生成前に取ってくる）を読み、頁に載せる事実を生成時に計算する。
import fs from 'node:fs';
import path from 'node:path';
import { bareiss, equal, identity, isSymmetric, matmul, power, transpose, type Mat } from './lattice';

const dir = path.join(process.cwd(), 'data/r88/external');
export const SAK_REPO = 'https://github.com/RyotaroSakamoto0113/rank-88-extremal-lattice-computations';
export const SAK_SHA = '628ce2a7ac23acf8d4c295677e4310c9ec5b21d9';
export const sak = (p: string) => `${SAK_REPO}/blob/${SAK_SHA}/${p}`;

type L88 = { G: Mat; M5: Mat; M23: Mat };
const cache: Record<string, L88> = {};
export const lattice = (name: 'L' | 'L0'): L88 => (cache[name] ??= JSON.parse(fs.readFileSync(path.join(dir, `${name}.json`), 'utf8')));

export function basicChecks(name: 'L' | 'L0') {
  const { G, M5, M23 } = lattice(name);
  const I = identity(88), even = (M: Mat) => M.every((r, i) => r[i] % 2 === 0);
  const d = bareiss(G);
  // 坂本のデータは列ベクトルの約束（x ↦ Mx）なので、等長の条件は MᵀGM = G。
  const iso = (M: Mat) => equal(matmul(matmul(transpose(M), G), M), G);
  return [
    { what: String.raw`$G$ は対称、対角は偶数、$\det G=${d.det}$、正定値`, ok: isSymmetric(G) && even(G) && d.det === 1n && d.pivots.every((p) => p > 0n) },
    { what: String.raw`$M_5^5=1$、$M_{23}^{23}=1$（$\zeta_5$ と $\zeta_{23}$ の作用）`, ok: equal(power(M5, 5), I) && equal(power(M23, 23), I) && !equal(M5, I) && !equal(M23, I) },
    { what: String.raw`$M_5$ と $M_{23}$ は長さを保ち（列ベクトルの約束で $M^{\mathsf T}GM=G$）、互いに可換`, ok: iso(M5) && iso(M23) && equal(matmul(M5, M23), matmul(M23, M5)) },
  ];
}

/** [Sak26] Prop. 3.6, 4.1, 4.2, 4.4, 4.5 の値。d_s は階数 s の部分格子の判別式の最小値。 */
export const dE = [[1, 1], [5, 23], [1, 23], [1, 529]] as const;
export const dJ = [6, 16, 27, 48] as const;
/** Coulangeon の不等式 h ≥ s (d_s(E) d_s(J))^{1/s}。h は整数なので、下界を超える最小の整数まで上がる。 */
export const coulangeon = dE.map(([p, q], k) => {
  const s = k + 1, x = (p / q) * dJ[k], bound = s * Math.pow(x, 1 / s);
  return { s, dE: [p, q] as const, dJ: dJ[k], bound, hmin: Number.isInteger(bound) ? bound : Math.ceil(bound) };
});
