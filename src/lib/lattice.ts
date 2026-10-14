// 格子の計算の小さな道具箱。すべて整数（BigInt）か有理数で厳密に計算する。ページの生成時に node で走る。
export type Mat = number[][];

/** 「#」で始まる行を注釈として飛ばし、空白区切りの整数を行列として読む。 */
export function parseMatrix(text: string): Mat {
  return text
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'))
    .map((l) => l.trim().split(/\s+/).map(Number));
}

export function matmul(A: Mat, B: Mat): Mat {
  const m = B[0].length;
  return A.map((Ai) => {
    const row = new Array(m).fill(0);
    Ai.forEach((a, t) => {
      if (a !== 0) for (let j = 0; j < m; j++) row[j] += a * B[t][j];
    });
    return row;
  });
}
export const transpose = (A: Mat): Mat => A[0].map((_, j) => A.map((r) => r[j]));
export const scale = (A: Mat, s: number): Mat => A.map((r) => r.map((v) => v * s));
export const identity = (n: number): Mat => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
export const equal = (A: Mat, B: Mat) => A.length === B.length && A.every((r, i) => r.every((v, j) => v === B[i][j]));
export const isSymmetric = (A: Mat) => A.every((r, i) => r.every((v, j) => v === A[j][i]));
export const maxAbs = (A: Mat) => Math.max(...A.flat().map(Math.abs));
export function power(A: Mat, e: number): Mat {
  let P = identity(A.length);
  for (let i = 0; i < e; i++) P = matmul(P, A);
  return P;
}
export function blocks(A: Mat, B: Mat, C: Mat, D: Mat): Mat {
  return [...A.map((r, i) => [...r, ...B[i]]), ...C.map((r, i) => [...r, ...D[i]])];
}

/** Bareiss の分数なし消去。pivots[k] は左上 (k+1)×(k+1) の主小行列式。 */
export function bareiss(A: Mat): { det: bigint; pivots: bigint[] } {
  const n = A.length;
  const M = A.map((r) => r.map((v) => BigInt(v)));
  const pivots: bigint[] = [];
  let prev = 1n;
  for (let k = 0; k < n; k++) {
    const p = M[k][k];
    if (p === 0n) return { det: 0n, pivots };
    pivots.push(p);
    for (let i = k + 1; i < n; i++) {
      for (let j = k + 1; j < n; j++) M[i][j] = (p * M[i][j] - M[i][k] * M[k][j]) / prev;
      M[i][k] = 0n;
    }
    prev = p;
  }
  return { det: M[n - 1][n - 1], pivots };
}

// ---- 有理数 ----
type Q = [bigint, bigint];
const gcd = (a: bigint, b: bigint): bigint => {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b) [a, b] = [b, a % b];
  return a;
};
const q = (p: bigint, d = 1n): Q => {
  if (d < 0n) [p, d] = [-p, -d];
  const g = gcd(p, d) || 1n;
  return [p / g, d / g];
};
const add = (a: Q, b: Q) => q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
const sub = (a: Q, b: Q) => q(a[0] * b[1] - b[0] * a[1], a[1] * b[1]);
const mul = (a: Q, b: Q) => q(a[0] * b[0], a[1] * b[1]);
const div = (a: Q, b: Q) => q(a[0] * b[1], a[1] * b[0]);

export function sigma(n: bigint, k: bigint): bigint {
  let s = 0n;
  for (let d = 1n; d <= n; d++) if (n % d === 0n) s += d ** k;
  return s;
}
function polymul(a: bigint[], b: bigint[], N: number): bigint[] {
  const c = new Array<bigint>(N).fill(0n);
  for (let i = 0; i < N; i++) if (a[i]) for (let j = 0; i + j < N; j++) c[i + j] += a[i] * b[j];
  return c;
}
/** E_4 と B = E_4^3 - 720Δ（Leech 格子のテータ級数）の最初の N 項。 */
function eisensteinAB(N: number) {
  const A = Array.from({ length: N }, (_, n) => (n === 0 ? 1n : 240n * sigma(BigInt(n), 3n)));
  let P = new Array<bigint>(N).fill(0n);
  P[0] = 1n;
  for (let m = 1; m < N; m++)
    for (let r = 0; r < 24; r++) {
      const E = P.slice();
      for (let i = m; i < N; i++) E[i] -= P[i - m];
      P = E;
    }
  const Delta = [0n, ...P.slice(0, N - 1)];
  const A3 = polymul(polymul(A, A, N), A, N);
  return { A, B: A3.map((v, i) => v - 720n * Delta[i]) };
}
/**
 * n 次元（8 の倍数）の極値テータ級数の最初の N 項。第 k 項はノルム 2k のベクトルの本数。
 * 単項式 A^{k-3j} B^j の一次結合で 1 + O(q^{⌊n/24⌋+1}) となるものを、有理数の連立一次方程式として解く。
 */
export function extremalTheta(n: number, N: number) {
  const k = n / 8, m = Math.floor(n / 24) + 1, L = Math.max(N, m) + 1;
  const { A, B } = eisensteinAB(L);
  const mons: bigint[][] = [];
  for (let j = 0; j <= Math.floor(k / 3); j++) {
    let P = new Array<bigint>(L).fill(0n);
    P[0] = 1n;
    for (let i = 0; i < k - 3 * j; i++) P = polymul(P, A, L);
    for (let i = 0; i < j; i++) P = polymul(P, B, L);
    mons.push(P);
  }
  const r = mons.length;
  const M: Q[][] = Array.from({ length: m }, (_, row) => [...mons.map((P) => q(P[row])), q(row === 0 ? 1n : 0n)]);
  for (let c = 0; c < r; c++) {
    let p = c;
    while (M[p][c][0] === 0n) p++;
    [M[c], M[p]] = [M[p], M[c]];
    const piv = M[c][c];
    M[c] = M[c].map((v) => div(v, piv));
    for (let i = 0; i < m; i++)
      if (i !== c && M[i][c][0] !== 0n) {
        const f = M[i][c];
        M[i] = M[i].map((v, j) => sub(v, mul(f, M[c][j])));
      }
  }
  const coef = M.map((row) => row[r]);
  const theta: Q[] = [];
  for (let e = 0; e < N; e++) theta.push(coef.reduce((s, c, j) => add(s, mul(c, q(mons[j][e]))), q(0n)));
  return { min: 2 * m, coefficients: theta.map((t) => t[0] / t[1]), integral: theta.every((t) => t[1] === 1n) };
}

/** ベルヌーイ数 B_0..B_N。 */
export function bernoulli(N: number): Q[] {
  const B: Q[] = [q(1n)];
  const binom = (a: bigint, b: bigint) => {
    let r = 1n;
    for (let i = 0n; i < b; i++) r = (r * (a - i)) / (i + 1n);
    return r;
  };
  for (let m = 1; m <= N; m++) {
    let s = q(0n);
    for (let k = 0; k < m; k++) s = add(s, mul(q(binom(BigInt(m + 1), BigInt(k))), B[k]));
    B.push(div(q(-s[0], s[1]), q(BigInt(m + 1))));
  }
  return B;
}
/**
 * Siegel 平均 S(n): n = 2k 次元の偶ユニモジュラー格子の種で、ノルム 2m のベクトルの本数の平均は
 * (2k/|B_k|) σ_{k-1}(m)。極値なら持ってはならないノルム（1 ≤ m ≤ ⌊n/24⌋）にわたって足す。
 */
export function siegelMean(n: number, B: Q[]): number {
  const k = n / 2, Bk = B[k];
  const c = div(q(BigInt(2 * k)), Bk[0] < 0n ? [-Bk[0], Bk[1]] : Bk);
  let s = q(0n);
  for (let m = 1; m <= Math.floor(n / 24); m++) s = add(s, mul(c, q(sigma(BigInt(m), BigInt(k - 1)))));
  return Number((s[0] * 10n ** 6n) / s[1]) / 1e6;
}
