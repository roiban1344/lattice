"""Γ72 のデータを data/g72/ に書き出す（一度だけ走らせたもの。記録のために置く）。

入力:
  1. Nebe の Magma ファイル https://www.math.rwth-aachen.de/~Gabriele.Nebe/EXT72/ConstExtremal72
     から Leech 格子の Gram 行列 F と w7（w7^2 = -7、SL2(25) と可換）を読み、α = (1 + w7)/2 の行列 A を作る。
  2. 作業用リポジトリでの探索結果（Leech 格子の Z[α]-構造 43 個、行列 A のみ）から、
     極値でないもの 7 種類について代表を 1 つずつ（ノルム 6 の本数で区別）。

実行: python3 verify/g72/extract.py <Magma ファイル> <found.json> <counts.json>
"""
import json, re, sys
from fractions import Fraction
from pathlib import Path

OUT = Path(__file__).resolve().parents[2] / "data/g72"


def magma_matrix(text, name):
    m = re.search(name + r"\s*:=\s*MatrixAlgebra\([^)]*\(?\)?,\s*24\)\s*!\s*\\?\[(?:\s*RationalField\(\)\s*\|)?([^\]]*)\]", text)
    vals = [Fraction(x.strip()) for x in m.group(1).replace("\\", " ").replace("\n", " ").split(",")]
    return [vals[24 * i:24 * i + 24] for i in range(24)]


def write(path, header, M):
    path.write_text(header + "\n" + "\n".join(" ".join(str(int(v)) for v in row) for row in M) + "\n")


text = Path(sys.argv[1]).read_text()
F = magma_matrix(text, "F")
w7 = magma_matrix(text, "w7")
A = [[(int(i == j) + w7[i][j]) / 2 for j in range(24)] for i in range(24)]
assert all(v.denominator == 1 for r in A for v in r)
write(OUT / "leech_F.txt", "# Leech lattice: Gram matrix F (24x24), from Nebe's ConstExtremal72", F)
write(OUT / "alpha_SL2_25.txt", "# alpha = (1 + w7)/2 acting on the Leech lattice (row vectors x -> xA); A^2 - A + 2 = 0, A F A^T = 2F; commutes with SL2(25). From Nebe's ConstExtremal72", A)

found = json.load(open(sys.argv[2]))
counts = {c["index"]: c["T"] for c in json.load(open(sys.argv[3]))}
reps = {}
for i in sorted(counts):
    if counts[i] and counts[i] not in reps:
        reps[counts[i]] = found[i]["A"]
json.dump([{"norm6_search": t, "A": [A[24 * k:24 * k + 24] for k in range(24)] if isinstance(A[0], int) else A} for t, A in sorted(reps.items())],
          open(OUT / "alpha_others.json", "w"), separators=(",", ":"))
print("wrote", sorted(reps))
