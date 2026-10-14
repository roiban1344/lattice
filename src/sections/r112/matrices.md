## 行列を眺める

データは公開リポジトリの 4 つのファイル。行列の各成分を 1 マスとし、正を赤、負を青、0 を灰で塗った図。濃さは絶対値の平方根に比例（大きな成分に引きずられないため）。マスに触れると位置と値。

$R$ の Gram 行列は、基底 $\tfrac1{\sqrt2}(e_i,\,e_i\tau)$ と $\tfrac1{\sqrt2}(0,\,2e_i)$ について

$$
\begin{pmatrix} 3G & \tau G\\ (\tau G)^{\mathsf T} & 2G\end{pmatrix}
$$

という 4 つのブロック。左上は $\tfrac12\bigl[(e_i,e_j)+(e_i\tau,e_j\tau)\bigr]=\tfrac12(G+5G)=3G$。$\sqrt2$ で割っても整数のまま残るのは $\tau G\tau^{\mathsf T}=5G$ のおかげ。公開した $112\times112$ の行列は、これを PARI の `qflllgram` で LLL 簡約したもの（成分まで一致することを gp で確認）。簡約すると成分は小さく揃い、ブロックの構造は消える。
