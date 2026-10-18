---
title: The theta series
---

For a lattice $\Lambda\subset\mathbb{R}^n$, the **theta series** is the function

$$
\theta_\Lambda(\tau)=\sum_{x\in\Lambda}e^{\pi i\tau\langle x,x\rangle},\qquad \tau\in\mathbb{H}=\{\tau\in\mathbb{C} : \operatorname{Im}\tau>0\}.
$$

Collecting the vectors of equal norm, we can write it as $\theta_\Lambda(\tau)=\sum_{k\ge0}N_k\,e^{\pi i\tau k}$, where $N_k$ is the number of vectors of norm $k$. For an even lattice only even norms occur, so with $q=e^{2\pi i\tau}$ the theta series is a power series in $q$ whose coefficients count vectors:

$$
\theta_\Lambda(\tau)=1+N_2\,q+N_4\,q^2+N_6\,q^3+\cdots .
$$

For $E_8$ and the Leech lattice it begins

$$
\begin{aligned}
\theta_{E_8}(\tau)&=1+240\,q+2160\,q^2+6720\,q^3+\cdots,\\
\theta_{\Lambda_{24}}(\tau)&=1+0\cdot q+196\,560\,q^2+16\,773\,120\,q^3+\cdots .
\end{aligned}
$$

For lattices $L$ and $M$, the theta series of the orthogonal sum $L\perp M$ is the product of their theta series. A vector of $L\perp M$ is a pair $(x,y)$ with $x\in L$ and $y\in M$, and its norm is $\langle x,x\rangle+\langle y,y\rangle$. So

$$
\theta_{L\perp M}(\tau)=\sum_{x\in L}\sum_{y\in M}e^{\pi i\tau(\langle x,x\rangle+\langle y,y\rangle)}=\theta_L(\tau)\,\theta_M(\tau).
$$

The theta series of an even unimodular lattice obeys two transformation rules. First, since $\langle x,x\rangle$ is even, $e^{\pi i\langle x,x\rangle}=1$ for every $x$, and therefore

$$
\theta_\Lambda(\tau+1)=\sum_{x\in\Lambda}e^{\pi i\tau\langle x,x\rangle}\,e^{\pi i\langle x,x\rangle}=\theta_\Lambda(\tau).
$$

Second, the Poisson summation formula gives, for any lattice,

$$
\theta_\Lambda\!\left(-\frac1\tau\right)=\left(\frac{\tau}{i}\right)^{n/2}\frac{1}{\sqrt{\det\Lambda}}\;\theta_{\Lambda^{\#}}(\tau),
$$

with the dual lattice on the right [[Ser73, Ch. VII, §6]](#ref-Ser73). For a unimodular lattice $\Lambda^{\#}=\Lambda$ and $\det\Lambda=1$, so the same function appears on both sides:

$$
\theta_\Lambda\!\left(-\frac1\tau\right)=\left(\frac{\tau}{i}\right)^{n/2}\theta_\Lambda(\tau).
$$

This is why unimodularity is required: it makes the theta series transform into itself, up to an explicit factor.

These two rules already force $n$ to be a multiple of $8$. Combining them, the map $U(\tau)=-1/(\tau+1)$ acts on the theta series by

$$
\theta_\Lambda\bigl(U(\tau)\bigr)=A(\tau)\,\theta_\Lambda(\tau),\qquad A(\tau)=\left(\frac{\tau+1}{i}\right)^{n/2}.
$$

Applying $U$ three times returns every point to itself: $U(U(U(\tau)))=\tau$. Hence

$$
\theta_\Lambda(\tau)=A\bigl(U(U(\tau))\bigr)\,A\bigl(U(\tau)\bigr)\,A(\tau)\;\theta_\Lambda(\tau),
$$

and since $\theta_\Lambda$ is not identically zero and the factors depend continuously on $\tau$, the product of the three factors is $1$ for every $\tau$. Now take $\rho=e^{2\pi i/3}$. Then $U(\rho)=\rho$, and $(\rho+1)/i=e^{-\pi i/6}$, so each factor equals $A(\rho)=e^{-\pi i n/12}$. Therefore $e^{-\pi i n/4}=1$, which means that $n$ is a multiple of $8$.

Once $n$ is a multiple of $8$, the factor $(\tau/i)^{n/2}$ is simply $\tau^{n/2}$. A holomorphic function on $\mathbb{H}$ that is unchanged under $\tau\mapsto\tau+1$, is multiplied by $\tau^{k}$ under $\tau\mapsto-1/\tau$, and stays bounded as $\operatorname{Im}\tau\to\infty$ is called a **modular form** of weight $k$. So the theta series of an even unimodular lattice of dimension $n$ is a modular form of weight $n/2$ [[Ser73, Ch. VII, §6]](#ref-Ser73). This matters because, for a fixed weight, the modular forms of that weight form a vector space of small dimension. As the next section shows, this leaves little freedom for the numbers $N_2,N_4,\dots$.
