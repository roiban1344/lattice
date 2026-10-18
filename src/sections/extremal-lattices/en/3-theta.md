---
title: The theta series
---

To study the short vectors of a lattice, we count them. Let $N_{2j}$ be the number of vectors of norm $2j$ in an even lattice $\Lambda$, and put these numbers into a power series

$$
\theta_\Lambda(\tau)=\sum_{x\in\Lambda}q^{\langle x,x\rangle/2}=1+N_2\,q+N_4\,q^2+N_6\,q^3+\cdots,\qquad q=e^{2\pi i\tau},
$$

where $\tau$ lies in the upper half-plane. This is the **theta series** of $\Lambda$. For $E_8$ it begins

$$
\theta_{E_8}(\tau)=1+240\,q+2160\,q^2+6720\,q^3+\cdots .
$$

The theta series has two symmetries. Since all norms are even, it is unchanged under $\tau\mapsto\tau+1$. The Poisson summation formula gives the second one,

$$
\theta_\Lambda\!\left(-\frac1\tau\right)=\left(\frac{\tau}{i}\right)^{n/2}\frac{1}{\sqrt{\det\Lambda}}\;\theta_{\Lambda^{\#}}(\tau),
$$

in which the dual lattice appears on the right [[Ser73, Ch. VII, §6]](#ref-Ser73). For a unimodular lattice $\Lambda^{\#}=\Lambda$ and $\det\Lambda=1$, so the same function appears on both sides. This is the reason for requiring unimodularity: an even unimodular lattice has a theta series that transforms into itself under both $\tau\mapsto\tau+1$ and $\tau\mapsto-1/\tau$.

> **Theorem.** The theta series of an even unimodular lattice of dimension $n$ is a modular form of weight $n/2$ for $\mathrm{SL}_2(\mathbb{Z})$ [[Ser73, Ch. VII, §6]](#ref-Ser73).

Modular forms of a given weight form a finite-dimensional vector space. This is what makes the theorem useful: the numbers $N_2,N_4,\dots$ cannot be arbitrary.
