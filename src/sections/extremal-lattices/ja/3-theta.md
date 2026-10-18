---
title: テータ級数
---

格子の短いベクトルを調べるには、まず本数を数えます。偶格子 $\Lambda$ に含まれるベクトルのうち、ノルムが $2j$ であるものの本数を $N_{2j}$ とし、これを係数とするべき級数

$$
\theta_\Lambda(\tau)=\sum_{x\in\Lambda}q^{\langle x,x\rangle/2}=1+N_2\,q+N_4\,q^2+N_6\,q^3+\cdots,\qquad q=e^{2\pi i\tau}
$$

を考えます。ここで $\tau$ は上半平面 $\{\operatorname{Im}\tau>0\}$ の点です。この級数を $\Lambda$ の**テータ級数**と呼びます。$E_8$ と Leech 格子のテータ級数は次のように始まります。

$$
\begin{aligned}
\theta_{E_8}(\tau)&=1+240\,q+2160\,q^2+6720\,q^3+\cdots,\\
\theta_{\Lambda_{24}}(\tau)&=1+0\cdot q+196\,560\,q^2+16\,773\,120\,q^3+\cdots .
\end{aligned}
$$

直交和のテータ級数は、それぞれのテータ級数の積になります。$\theta_{L\perp M}=\theta_L\,\theta_M$ です。$L\perp M$ のベクトルは $L$ のベクトルと $M$ のベクトルの組で、そのノルムは $2$ つのノルムの和になるからです。

テータ級数は $2$ つの変換公式に従います。ノルムがすべて偶数なので、$\tau\mapsto\tau+1$ で変わりません。もう一つは Poisson の和公式から得られる変換公式

$$
\theta_\Lambda\!\left(-\frac1\tau\right)=\left(\frac{\tau}{i}\right)^{n/2}\frac{1}{\sqrt{\det\Lambda}}\;\theta_{\Lambda^{\#}}(\tau)
$$

で、右辺には双対格子が現れます [[Ser73, Ch. VII, §6]](#ref-Ser73)。ユニモジュラー格子では $\Lambda^{\#}=\Lambda$、$\det\Lambda=1$ なので、両辺に同じ関数が現れます。ユニモジュラー性を考えるのはこのためです。偶ユニモジュラー格子のテータ級数は、次の $2$ つの式を満たします。

$$
\theta_\Lambda(\tau+1)=\theta_\Lambda(\tau),\qquad \theta_\Lambda\!\left(-\frac1\tau\right)=\left(\frac{\tau}{i}\right)^{n/2}\theta_\Lambda(\tau).
$$

この $2$ つの変換公式だけで、$n$ は $8$ の倍数でなければならないことが分かります。$2$ つを組み合わせると、$\tau\mapsto-1/(\tau+1)$ によって $\theta_\Lambda$ には因子 $\bigl((\tau+1)/i\bigr)^{n/2}$ が掛かります。この写像を $3$ 回続けるとどの $\tau$ も元に戻るので、途中で掛かる $3$ つの因子の積は $1$ でなければなりません。この写像で動かない点 $\tau=e^{2\pi i/3}$ では、各因子は $e^{-2\pi i n/24}$ で、積は $e^{-2\pi i n/8}$ になります。これが $1$ になるのは $n$ が $8$ の倍数のときだけです。

> **定理**　$n$ 次元の偶ユニモジュラー格子のテータ級数は、$\mathrm{SL}_2(\mathbb{Z})$ に関する重さ $n/2$ のモジュラー形式である [[Ser73, Ch. VII, §6]](#ref-Ser73)。

重さを固定すると、その重さのモジュラー形式全体は有限次元のベクトル空間をなします。この定理が役に立つのはそのためで、本数 $N_2,N_4,\dots$ は勝手な値を取れません。
