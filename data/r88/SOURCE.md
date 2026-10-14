# 出どころ

坂本の $88$ 次元格子 $L$, $L_0$ のデータは、このリポジトリには入れない。生成の前に `scripts/fetch-external.mjs` が
[RyotaroSakamoto0113/rank-88-extremal-lattice-computations](https://github.com/RyotaroSakamoto0113/rank-88-extremal-lattice-computations)
のコミット `628ce2a7ac23acf8d4c295677e4310c9ec5b21d9` から `data/L/lattice.json` と `data/L0/lattice.json` を取ってきて、SHA-256 を照合する。

| ファイル | SHA-256 |
|---|---|
| `data/L/lattice.json` | `ee7d08e6701d5d2618751c586241ab63cac8b838734e57eba73a98eeb76e8ab2` |
| `data/L0/lattice.json` | `1120a57c3564f60b3a90285a2b8a7746fd96324e3c70f919e194e8be39ce0efb` |

中身は Gram 行列 `G`（$88\times88$）と、$\zeta_5$, $\zeta_{23}$ の作用 `M5`, `M23`。
