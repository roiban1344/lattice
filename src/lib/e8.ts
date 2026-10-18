// E8 の Gram 行列（Cartan 行列）。Dynkin 図は 7 個の鎖 0–1–…–6 に、頂点 4 から枝 7 が出る形（腕の長さ 1, 2, 4）。
import type { Mat } from './lattice';

const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 7]];
export const E8: Mat = Array.from({ length: 8 }, (_, i) =>
  Array.from({ length: 8 }, (_, j) => (i === j ? 2 : edges.some(([a, b]) => (a === i && b === j) || (a === j && b === i)) ? -1 : 0)),
);
