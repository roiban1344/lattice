---
title: テータ級数
---

格子 $\Lambda\subset\mathbb{R}^n$ に対して、関数

$$
\theta_\Lambda(\tau)=\sum_{x\in\Lambda}e^{\pi i\tau\langle x,x\rangle},\qquad \tau\in\mathbb{H}=\{\tau\in\mathbb{C} : \operatorname{Im}\tau>0\}
$$

を $\Lambda$ の**テータ級数**と呼びます。ノルムの等しいベクトルをまとめると、ノルム $k$ のベクトルの本数を $N_k$ として $\theta_\Lambda(\tau)=\sum_{k\ge0}N_k\,e^{\pi i\tau k}$ と書けます。偶格子ではノルムが偶数のものしか現れないので、$q=e^{2\pi i\tau}$ とおくと、テータ級数はベクトルの本数を係数とする $q$ のべき級数になります。

$$
\theta_\Lambda(\tau)=1+N_2\,q+N_4\,q^2+N_6\,q^3+\cdots .
$$

たとえば、$E_8$ と Leech 格子のテータ級数は次のように始まります。

$$
\begin{aligned}
\theta_{E_8}(\tau)&=1+240\,q+2160\,q^2+6720\,q^3+\cdots,\\
\theta_{\Lambda_{24}}(\tau)&=1+0\cdot q+196\,560\,q^2+16\,773\,120\,q^3+\cdots .
\end{aligned}
$$

格子 $L$ と $M$ の直交和 $L\perp M$ のテータ級数は、$L$ と $M$ のテータ級数の積になります。$L\perp M$ のベクトルは $x\in L$ と $y\in M$ の組 $(x,y)$ で、そのノルムは $\langle x,x\rangle+\langle y,y\rangle$ だからです。つまり、次のようになります。

$$
\theta_{L\perp M}(\tau)=\sum_{x\in L}\sum_{y\in M}e^{\pi i\tau(\langle x,x\rangle+\langle y,y\rangle)}=\theta_L(\tau)\,\theta_M(\tau).
$$

偶ユニモジュラー格子のテータ級数は、$2$ つの変換公式に従います。まず、$\langle x,x\rangle$ が偶数なので、どの $x$ についても $e^{\pi i\langle x,x\rangle}=1$ です。したがって

$$
\theta_\Lambda(\tau+1)=\sum_{x\in\Lambda}e^{\pi i\tau\langle x,x\rangle}\,e^{\pi i\langle x,x\rangle}=\theta_\Lambda(\tau)
$$

が成り立ちます。次に、Poisson の和公式から、どの格子についても

$$
\theta_\Lambda\!\left(-\frac1\tau\right)=\left(\frac{\tau}{i}\right)^{n/2}\frac{1}{\sqrt{\det\Lambda}}\;\theta_{\Lambda^{\#}}(\tau)
$$

が得られます [[Ser73, Ch. VII, §6]](#ref-Ser73)。右辺には双対格子が現れます。ユニモジュラー格子では $\Lambda^{\#}=\Lambda$、$\det\Lambda=1$ なので、両辺に同じ関数が現れます。

$$
\theta_\Lambda\!\left(-\frac1\tau\right)=\left(\frac{\tau}{i}\right)^{n/2}\theta_\Lambda(\tau).
$$

ユニモジュラー性を考えるのはこのためです。ユニモジュラー格子のテータ級数は、具体的な因子を除いて自分自身に移ります。

実は、この $2$ つの変換公式だけで、$n$ は $8$ の倍数でなければならないことが分かります。$2$ つを組み合わせると、写像 $U(\tau)=-1/(\tau+1)$ はテータ級数に次のように作用します。

$$
\theta_\Lambda\bigl(U(\tau)\bigr)=A(\tau)\,\theta_\Lambda(\tau),\qquad A(\tau)=\left(\frac{\tau+1}{i}\right)^{n/2}.
$$

$U$ を $3$ 回続けると、どの点も元に戻ります。つまり $U(U(U(\tau)))=\tau$ です。したがって

$$
\theta_\Lambda(\tau)=A\bigl(U(U(\tau))\bigr)\,A\bigl(U(\tau)\bigr)\,A(\tau)\;\theta_\Lambda(\tau)
$$

となります。$\theta_\Lambda$ は恒等的に $0$ ではなく、因子は $\tau$ について連続なので、$3$ つの因子の積はすべての $\tau$ で $1$ です。ここで $\rho=e^{2\pi i/3}$ とおくと、$U(\rho)=\rho$ であり、$(\rho+1)/i=e^{-\pi i/6}$ なので、$3$ つの因子はどれも $A(\rho)=e^{-\pi i n/12}$ に等しくなります。よって $e^{-\pi i n/4}=1$、つまり $n$ は $8$ の倍数です。

$n$ が $8$ の倍数なら、因子 $(\tau/i)^{n/2}$ は単に $\tau^{n/2}$ になります。上半平面 $\mathbb{H}$ 上の正則関数で、$\tau\mapsto\tau+1$ で変わらず、$\tau\mapsto-1/\tau$ で $\tau^{k}$ 倍になり、$\operatorname{Im}\tau\to\infty$ で有界なものを、重さ $k$ の**モジュラー形式**と呼びます。したがって、$n$ 次元の偶ユニモジュラー格子のテータ級数は、重さ $n/2$ のモジュラー形式です [[Ser73, Ch. VII, §6]](#ref-Ser73)。これが重要なのは、重さを固定すると、その重さのモジュラー形式全体が次元の小さいベクトル空間をなすからです。次の節で見るように、そのために本数 $N_2,N_4,\dots$ の自由度はほとんど残りません。
