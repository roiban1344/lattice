The combination was chosen to make the coefficients of $q$ and $q^2$ vanish. With three products we can impose three conditions: the constant term is $1$, and the coefficients of $q$ and $q^2$ are $0$. These conditions determine the combination, and with it the coefficient of $q^3$, which is $52\,416\,000$.

Now take any even unimodular lattice of dimension $48$. If it has a nonzero vector of norm $2$ or $4$, its minimum is at most $4$. If it has none, its theta series begins $1+0\cdot q+0\cdot q^2$, so it must be this combination, and the lattice has $52\,416\,000$ vectors of norm $6$. In both cases its minimum is at most $6$.

The same reasoning works in every dimension. Write $m=\lfloor n/24\rfloor$. There are $m+1$ products, so we can require the constant term to be $1$ and the coefficients of $q,\dots,q^m$ to vanish. These conditions determine the combination, and with it all coefficients. A little more thought shows that the minimum can never exceed $2m+2$. What is needed is that the coefficient of $q^{m+1}$ in the combination so determined is always positive, and Siegel proved that it is [[Sie69]](#ref-Sie69).

> **Theorem** (Mallows–Odlyzko–Sloane [[MOS75]](#ref-MOS75)). An even unimodular lattice of dimension $n$ satisfies
> $$
> \min\Lambda\le 2\left\lfloor\frac{n}{24}\right\rfloor+2 .
> $$

An even unimodular lattice for which equality holds is called an **extremal even unimodular lattice**, or simply an **extremal lattice**. The bound rises by $2$ each time the dimension reaches a multiple of $24$: it is $2$ in dimensions $8$ and $16$, $4$ in dimensions $24$ to $40$, $6$ in dimensions $48$ to $64$, and so on. $E_8$ and the Leech lattice are extremal.

The theta series of an extremal lattice is the combination determined above. The number of vectors of each norm is therefore known before the lattice itself is found. The second table lists the number of vectors of minimal norm.

The coefficients of this combination are not always positive. Since a number of vectors cannot be negative, a negative coefficient rules out an extremal lattice in that dimension. Mallows, Odlyzko and Sloane showed that a negative coefficient appears once the dimension is large enough. Jenkins and Rouse then showed that one appears in every dimension greater than $163\,264$, so there are no extremal lattices in those dimensions [[JR11]](#ref-JR11).

In dimensions up to $163\,264$, on the other hand, whether an extremal lattice exists has to be decided dimension by dimension. The [history](../history/) page lists the dimensions in which examples are known.
