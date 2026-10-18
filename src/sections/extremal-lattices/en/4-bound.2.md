The combination was chosen to make the coefficients of $q$ and $q^2$ vanish. With three products we can impose three conditions: the constant term is $1$, and the coefficients of $q$ and $q^2$ are $0$. That uses up the freedom, and the coefficient of $q^3$ is then determined: it is $52\,416\,000$. So if an even unimodular lattice of dimension $48$ has no vectors of norm $2$ or $4$, its theta series is this combination, and it has $52\,416\,000$ vectors of norm $6$. Either way, every even unimodular lattice of dimension $48$ has a nonzero vector of norm at most $6$.

The same reasoning works in every dimension. Write $m=\lfloor n/24\rfloor$. There are $m+1$ products, so a theta series can avoid at most the $m$ norms $2,4,\dots,2m$, and then all its coefficients are fixed. A little more thought shows that the minimum can never exceed $2m+2$: what is needed is that the coefficient of $q^{m+1}$ in the fixed combination is always positive, and Siegel proved that it is [[Sie69]](#ref-Sie69).

> **Theorem** (Mallows–Odlyzko–Sloane [[MOS75]](#ref-MOS75)). An even unimodular lattice of dimension $n$ satisfies
> $$
> \min\Lambda\le 2\left\lfloor\frac{n}{24}\right\rfloor+2 .
> $$

An even unimodular lattice is called **extremal** if equality holds. The bound rises by $2$ each time the dimension reaches a multiple of $24$: it is $2$ in dimensions $8$ and $16$, $4$ in dimensions $24$ to $40$, $6$ in dimensions $48$ to $64$, and so on. $E_8$ and the Leech lattice are extremal.

The theta series of an extremal lattice is the fixed combination, so the number of vectors of each norm is known before the lattice itself is found. The second table lists the number of vectors of minimal norm. The coefficients of the fixed combination are not always positive: Mallows, Odlyzko and Sloane showed that one of them becomes negative in large dimensions, and Jenkins and Rouse determined the exact range, so that there are no extremal lattices in dimensions above $163\,264$ [[JR11]](#ref-JR11). Below that, whether an extremal lattice exists has to be decided dimension by dimension. The [history](../history/) page lists the dimensions in which examples are known.
