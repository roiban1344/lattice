---
title: Sphere packings and spherical designs
---

Place a ball of radius $\tfrac12\sqrt{\min\Lambda}$ at every point of a lattice. The balls do not overlap, and each fundamental cell, of volume $\sqrt{\det\Lambda}$, holds one ball. The proportion of space they fill is therefore

$$
\frac{\text{volume of a ball of radius }\tfrac12\sqrt{\min\Lambda}}{\sqrt{\det\Lambda}} .
$$

For unimodular lattices the denominator is $1$, so among even unimodular lattices of a given dimension, a larger minimum means a denser packing, and an extremal lattice gives the densest packing that the bound allows. Each ball touches as many others as there are vectors of minimal norm; this number is the **kissing number** of the packing and is the last column of the table above.

This does not mean that an extremal lattice is the densest packing of its dimension, since most lattices, and most packings, are not even unimodular. In two cases it is: the extremal lattices $E_8$ and the Leech lattice give the densest sphere packings of all in dimensions $8$ and $24$, as Viazovska and her collaborators proved [[Via17]](#ref-Via17), [[CKMRV17]](#ref-CKMRV17).

The vectors of a fixed norm in an extremal lattice are also evenly spread over their sphere. A finite set $X$ on a sphere is a **spherical $t$-design** if, for every polynomial $f$ of degree at most $t$, the average of $f$ over $X$ equals its average over the whole sphere. Venkov showed that in an extremal lattice of dimension $n$, the vectors of each nonzero norm form a spherical $11$-design if $n\equiv 0$, a $7$-design if $n\equiv 8$, and a $3$-design if $n\equiv16\pmod{24}$ [[BV01, Cor. 4.1]](#ref-BV01).
