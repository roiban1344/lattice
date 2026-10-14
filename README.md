# lattice — 格子ノート

極値偶ユニモジュラー格子の構成と検証を、1 格子 1 頁で図と要点として並べるサイト。
公開先: https://roiban1344.github.io/lattice/

## 役割

- **このリポジトリ**: 解説の頁、格子をまたいで使う計算の道具（`src/lib/`）、各格子のデータの写し（`data/`）。今後、重い検証のコードもここへ移す。
- **[112-dimensional-extremal-even-unimodular-lattice-candidate](https://github.com/roiban1344/112-dimensional-extremal-even-unimodular-lattice-candidate)**: 112 次元の初報。データと軽い検算だけで、以後は固定。
- 依存は一方向: このリポジトリが初報のデータを（コミットとハッシュを固定して）写して使う。初報の側はこのリポジトリに依存しない。

## 構成

| 場所 | 中身 |
|---|---|
| `data/<格子>/` | 元データの写し。`SOURCE.md` に出どころ・コミット・SHA-256 |
| `src/lib/lattice.ts` | 整数・有理数で厳密な計算（Bareiss の行列式、極値テータ級数、Siegel 平均） |
| `src/lib/r112.ts` | 112 次元のデータの読み込みと、頁の生成時に毎回走らせる基本検査 |
| `src/data/` | 頁に載せる事実（出どころ付き）と文献 |
| `src/sections/` | 本文（Markdown + TeX） |
| `src/components/` | ヒートマップ、図（生成時に SVG を作る） |

数式は TeX（remark-math + rehype-katex、生成時に KaTeX で描画）。スタイルは Tailwind CSS 3。

## 手元で動かす

```bash
npm ci
npm run dev      # http://localhost:4321/lattice/
npm run build    # dist/ に静的ファイル
```

`main` に push すると GitHub Actions が GitHub Pages へ配置する（`.github/workflows/deploy.yml`）。

## 著者と AI の使用

探索・コード・計算・文章の大部分は AI（Anthropic の Claude）による。方向づけ、判断、公開の責任は roiban1344。

## ライセンス

コードは MIT、文章とデータは CC BY 4.0。
