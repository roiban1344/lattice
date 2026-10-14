r"""Γ72 の極値性を「枠とキャップ」で確かめ、Leech 格子の他の Z[α]-構造のノルム 6 の本数を [Neb12] Table 1 と照合する。

設定（α = (1+√-7)/2, β = 1-α, αβ = 2）:
  Γ = {(u1,u2,u3) ∈ Λ^3 : u_i - u_j ∈ βΛ, u1+u2+u3 ∈ αΛ},  内積は ½Σ(u_i,u_i)
  (a) Λ/βΛ の 0 でない類 4095 個のそれぞれに、最小ベクトルがちょうど 48 本（互いに直交する 24 本の ±。枠）。
  (b) Γ のノルム 6 のベクトルは、同じ枠の最小ベクトル 3 本で u1+u2+u3 ∈ αΛ となるものだけ。
  (c) 枠の 24 本を Λ/αΛ ≅ F_2^12 に落とすと 24 点。(b) ⟺ 3 点の和が 0（射影空間で一直線）。
  (d) ノルム 6 の本数 = 48 × (一直線の 3 点組の総数)。
(a) と (d) の数値をここで計算する。(b), (c) の議論はページの本文にある。

必要なもの: SageMath（PARI の qfminim を使う）。
実行: sage -python verify/g72/caps.py        （リポジトリの最上位から。結果は data/g72/caps.json）
"""
import json, time
from pathlib import Path
import numpy as np
from sage.all import ZZ, GF, matrix, pari, identity_matrix, block_matrix

D = Path(__file__).resolve().parents[2] / "data/g72"

# [Neb12] Table 1（arXiv:1008.2862 版）: Leech 格子の 9 個の Z[α]-構造と、Γ_i のノルム 6 の本数
TABLE1 = [
    (1, "SL₂(25)", 0), (2, "2.A₆ × D₈", 2 * 20160), (3, "SL₂(13).2", 2 * 52416), (4, "(SL₂(5) × A₅).2", 2 * 100800),
    (5, "(SL₂(5) × A₅).2", 2 * 100800), (6, "可解群", 2 * 177408), (7, "±PSL₂(7) × (C₇:C₃)", 2 * 306432),
    (8, "PSL₂(7) × 2.A₇", 2 * 504000), (9, "2.J₂.2", 2 * 1209600),
]


def read(name):
    return matrix(ZZ, [[int(v) for v in l.split()] for l in (D / name).read_text().splitlines() if l.strip() and not l.startswith("#")])


def minimal_vectors(F):
    V = pari(F).qfminim(4, None, 0)[2]
    S = np.array(matrix(ZZ, V).transpose().rows(), dtype=np.int64)
    return np.vstack([S, -S])


def class_map(M):
    """x ↦ x mod (ΛM + 2Λ) を F_2^12 の整数ラベルにする 24×12 行列（M mod 2 の右核）。"""
    K = matrix(GF(2), M).right_kernel().basis_matrix().transpose()
    assert K.ncols() == 12
    return np.array(K.change_ring(ZZ).rows(), dtype=np.int64)


def same_lattice(A):
    """{u_i - u_j ∈ βΛ, Σu ∈ αΛ} が Nebe の生成行列 [[1,1,α],[0,β,β],[0,0,2]] と同じ部分格子であること。"""
    I = identity_matrix(ZZ, 24); Z = matrix(ZZ, 24, 24); B = I - A
    T = block_matrix(ZZ, [[I, I, A], [Z, B, B], [Z, Z, 2 * I]], subdivide=False)
    T2 = block_matrix(ZZ, [[A, A, A], [B, -B, Z], [Z, B, -B], [2 * I, Z, Z]], subdivide=False)
    return T.hermite_form() == T2.hermite_form(include_zero_rows=False)


def analyse(A, S):
    I = identity_matrix(ZZ, 24)
    w = 1 << np.arange(12)
    pc = ((S @ class_map(I - A)) % 2) @ w        # Λ/βΛ の類（どの枠か）
    qc = ((S @ class_map(A)) % 2) @ w            # Λ/αΛ の類（枠の中の住所）
    order = np.argsort(pc, kind="stable"); pc, qc = pc[order], qc[order]
    groups = np.split(np.arange(len(pc)), np.flatnonzero(np.diff(pc)) + 1)
    sizes, stat, example = set(), {}, None
    for grp in groups:
        sizes.add(len(grp))
        pts = sorted(set(int(v) for v in qc[grp]))
        assert len(pts) == 24 and 0 not in pts
        ps = set(pts)
        lines = [(c, pts[j], pts[i]) for i in range(24) for j in range(i) for c in [pts[i] ^ pts[j]] if c in ps and c < pts[j]]
        M = matrix(GF(2), [[(p >> t) & 1 for t in range(12)] for p in pts]); r = M.rank()
        odd = M.augment(matrix(GF(2), 24, 1, [1] * 24)).rank() == r     # 24 点すべてで 1 になる一次式があるか
        key = (int(r), bool(odd), len(lines)); stat[key] = stat.get(key, 0) + 1
        if example is None or len(lines) > len(example["lines"]):
            example = {"points": pts, "lines": [list(l) for l in lines], "rank": int(r), "odd": bool(odd)}
    return {"frames": len(groups), "frame_sizes": sorted(sizes),
            "lines": sum(k * c for (r, o, k), c in stat.items()),
            "by_type": [{"rank": r, "odd": o, "lines": k, "frames": c} for (r, o, k), c in sorted(stat.items())],
            "example_frame": example}


if __name__ == "__main__":
    t0 = time.time()
    F = read("leech_F.txt")
    assert F.is_symmetric() and F.det() == 1 and all(F[i, i] % 2 == 0 for i in range(24))
    S = minimal_vectors(F); assert len(S) == 196560
    cases = [("SL₂(25)", read("alpha_SL2_25.txt"), None)]
    for e in json.load(open(D / "alpha_others.json")):
        cases.append((None, matrix(ZZ, e["A"]), e["norm6_search"]))
    out = {"leech_minimal_vectors": int(len(S)), "same_lattice_as_nebe_generators": bool(same_lattice(cases[0][1])), "structures": []}
    for name, A, n6_search in cases:
        assert A * A - A + 2 == 0 and A * F * A.transpose() == 2 * F
        res = analyse(A, S)
        n6 = 48 * res["lines"]
        rows = [t for t in TABLE1 if t[2] == n6]
        res.update(norm6=n6, norm6_search=n6_search, table1=[{"no": t[0], "group": t[1], "norm6": t[2]} for t in rows])
        out["structures"].append(res)
        print(f"{rows[0][1] if rows else '?'}: frames {res['frames']} of sizes {res['frame_sizes']}, collinear triples {res['lines']}, "
              f"norm 6 = 48 x {res['lines']} = {n6}; Table 1: {[t[0] for t in rows]}", flush=True)
    out["seconds"] = round(time.time() - t0)
    (D / "caps.json").write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")))
    print(f"wrote data/g72/caps.json ({out['seconds']} s)")
