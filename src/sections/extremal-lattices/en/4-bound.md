---
title: A bound on the minimum
---

The **minimum** $\min\Lambda$ of a lattice is the smallest norm of a nonzero vector. For an even lattice it is an even number. How large can the minimum of an even unimodular lattice be?

Write $n=2k$ and $m=\lfloor n/24\rfloor$. The space of modular forms of weight $k$ has dimension $m+1$, with a basis whose $j$-th member begins with $q^j$ for $j=0,1,\dots,m$ [[Ser73, Ch. VII, §3]](#ref-Ser73). So a modular form of weight $k$ is determined by its first $m+1$ coefficients. Now suppose $\Lambda$ has no nonzero vectors of norm at most $2m$. Then its theta series begins $1+0\cdot q+\dots+0\cdot q^m$, and there is exactly one modular form of weight $k$ that begins this way. Siegel proved that the coefficient of $q^{m+1}$ in this form is always positive [[Sie69]](#ref-Sie69). So $\Lambda$ has vectors of norm $2m+2$.

> **Theorem** (Mallows–Odlyzko–Sloane [[MOS75]](#ref-MOS75)). An even unimodular lattice of dimension $n$ satisfies
> $$
> \min\Lambda\le 2\left\lfloor\frac{n}{24}\right\rfloor+2 .
> $$

An even unimodular lattice is called **extremal** if equality holds. The bound rises by $2$ each time the dimension reaches a multiple of $24$: it is $2$ in dimensions $8$ and $16$, $4$ in dimensions $24$ to $40$, $6$ in dimensions $48$ to $64$, and so on.

The argument shows more. The theta series of an extremal lattice is the unique form described above, so the number of vectors of each norm is known before the lattice itself is found. The table lists the number of vectors of minimal norm. The coefficients of this form are not always positive: Mallows, Odlyzko and Sloane showed that one of them becomes negative in large dimensions, and Jenkins and Rouse determined the exact range, so that there are no extremal lattices in dimensions above $163\,264$ [[JR11]](#ref-JR11). Below that, whether an extremal lattice exists has to be decided dimension by dimension. The [history](../history/) page lists the dimensions in which examples are known.
