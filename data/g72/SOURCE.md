# 出どころ

| ファイル | 中身 | 出どころ |
|---|---|---|
| `leech_F.txt` | Leech 格子の Gram 行列 $ | G. Nebe, [ConstExtremal72](https://www.math.rwth-aachen.de/~Gabriele.Nebe/EXT72/ConstExtremal72)（[Neb12] の Magma コード）の `F` |
| `alpha_SL2_25.txt` | $\alpha=(1+w_7)/2$ の作用 $ | 同じファイルの `w7` から計算 |
| `alpha_others.json` | 他の $\mathbb{Z}[\alpha]hmtBc構造の $（7 個） | 作業用リポジトリでの探索（2026-10-13）。ノルム 6 の本数ごとに代表 1 つ |
| `caps.json` | 枠とキャップの計算結果 | `verify/g72/caps.py` の出力 |

取り出しは `verify/g72/extract.py`。元の Magma ファイルの SHA-256（2026-10-15 時点の写し）:

```
eaadfa822b4a22f8ef869c1dcfcc7ad0d5de158d98c422bb67656e2cef3bf279  ConstExtremal72
```
