---
title: Lattices and Gram matrices
---

A **lattice** in $\mathbb{R}^n$ is the set of all integer combinations of $n$ linearly independent vectors $b_1,\dots,b_n$:

$$
\Lambda=\{\,c_1b_1+\dots+c_nb_n : c_1,\dots,c_n\in\mathbb{Z}\,\}.
$$

The simplest example is $\mathbb{Z}^n$, the points with integer coordinates. We write $\langle x,y\rangle$ for the usual inner product and call $\langle x,x\rangle$, the squared length, the **norm** of $x$.

Up to rotation, a lattice is determined by the inner products of its basis vectors. They form the **Gram matrix**

$$
G=\bigl(\langle b_i,b_j\rangle\bigr)_{1\le i,j\le n}.
$$

If a vector of $\Lambda$ is written as $x=c_1b_1+\dots+c_nb_n$, its norm is $cGc^{\mathsf T}$ with $c=(c_1,\dots,c_n)$. A lattice has many bases. Changing the basis replaces $G$ by $UGU^{\mathsf T}$ for an integer matrix $U$ with $\det U=\pm1$, so the determinant $\det G$ does not depend on the basis. Its square root is the volume of a fundamental cell, the region of space that belongs to one lattice point.

All lattices on this site are given by integer Gram matrices. The figure shows the Gram matrix of a lattice in $\mathbb{R}^8$ called $E_8$. It is the first example in the next section and appears throughout the site.
