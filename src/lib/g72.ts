// Γ72 のデータ（data/g72/）を読み、ページに載せる事実を生成時に計算する。
import fs from 'node:fs';
import path from 'node:path';
import { bareiss, equal, identity, isSymmetric, matmul, parseMatrix, scale, transpose, type Mat } from './lattice';

const dir = path.join(process.cwd(), 'data/g72');
const read = (f: string) => parseMatrix(fs.readFileSync(path.join(dir, f), 'utf8'));
export const LATTICE_REPO = 'https://github.com/roiban1344/lattice';
export const repo = (p: string) => `${LATTICE_REPO}/blob/main/${p}`;

/** 3 つの Leech の貼り合わせ: 行 [[1,1,α],[0,β,β],[0,0,2]] が生成する Λ³ の部分格子。内積は ½(F⊕F⊕F)。 */
function gamma72(F: Mat, A: Mat): Mat {
  const n = 24, I = identity(n), Z = scale(I, 0), B = I.map((r, i) => r.map((v, j) => v - A[i][j]));
  const row = (...Ms: Mat[]) => Ms[0].map((_, i) => Ms.flatMap((M) => M[i]));
  const T = [...row(I, I, A), ...row(Z, B, B), ...row(Z, Z, scale(I, 2))];
  const FFF = [...row(F, Z, Z), ...row(Z, F, Z), ...row(Z, Z, F)];
  return scale(matmul(matmul(T, FFF), transpose(T)), 0.5);
}

let cache: ReturnType<typeof load> | null = null;
function load() {
  const F = read('leech_F.txt'), A = read('alpha_SL2_25.txt');
  return { F, A, Gamma: gamma72(F, A) };
}
export const data = () => (cache ??= load());

export const caps = () => JSON.parse(fs.readFileSync(path.join(dir, 'caps.json'), 'utf8'));

export function basicChecks() {
  const { F, A, Gamma } = data();
  const I = identity(24), even = (M: Mat) => M.every((r, i) => r[i] % 2 === 0);
  const dF = bareiss(F), dG = bareiss(Gamma);
  const A2 = matmul(A, A);
  return [
    { what: String.raw`$F$（Leech）: 対称、対角は偶数、$\det F = ${dF.det}$、正定値`, ok: isSymmetric(F) && even(F) && dF.det === 1n && dF.pivots.every((p) => p > 0n) },
    { what: String.raw`$A^2 - A + 2 = 0$（$A$ は $\alpha=\tfrac{1+\sqrt{-7}}2$ の作用）`, ok: equal(A2.map((r, i) => r.map((v, j) => v - A[i][j] + 2 * I[i][j])), scale(I, 0)) },
    { what: String.raw`$AFA^{\mathsf T} = 2F$（$|\alpha|^2 = 2$）`, ok: equal(matmul(matmul(A, F), transpose(A)), scale(F, 2)) },
    { what: String.raw`$\Gamma_{72}$ の Gram 行列: 整数、対角は偶数、$\det = ${dG.det}$、正定値`, ok: Gamma.flat().every(Number.isInteger) && even(Gamma) && dG.det === 1n && dG.pivots.every((p) => p > 0n) },
  ];
}
