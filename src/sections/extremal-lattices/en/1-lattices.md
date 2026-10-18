---
title: Lattices and Gram matrices
---

A **lattice** in $\mathbb{R}^n$ is the set of all integer combinations of $n$ linearly independent vectors $b_1,\dots,b_n$:

$$
\Lambda=\{\,c_1b_1+\dots+c_nb_n : c_1,\dots,c_n\in\mathbb{Z}\,\}.
$$

The simplest example is $\mathbb{Z}^n$, the points with integer coordinates. We write $\langle x,y\rangle$ for the usual inner product and call $\langle x,x\rangle$, the squared length, the **norm** of $x$.

Up to rotations and reflections, a lattice is determined by the inner products of its basis vectors. They form the **Gram matrix**

$$
G=\bigl(\langle b_i,b_j\rangle\bigr)_{1\le i,j\le n}.
$$

If a vector of $\Lambda$ is written as $x=c_1b_1+\dots+c_nb_n$, its norm is $cGc^{\mathsf T}$ with $c=(c_1,\dots,c_n)$.

The basis of a lattice is not unique. Changing the basis replaces $G$ by $UGU^{\mathsf T}$ for an integer matrix $U$ with $\det U=\pm1$, so the determinant $\det G$ does not depend on the choice of basis. We call it the **determinant** $\det\Lambda$ of the lattice. Its square root is the volume of the parallelepiped $\{t_1b_1+\dots+t_nb_n : 0\le t_i<1\}$, called a **fundamental cell**. Translating the fundamental cell by all vectors of the lattice covers $\mathbb{R}^n$ without overlaps.

All lattices on this website are given by Gram matrices with integer entries (the lattices studied here have integer inner products, as the next section explains). The figure shows the Gram matrix of a lattice in $\mathbb{R}^8$ called $E_8$. Among the even unimodular lattices defined in the next section, $E_8$ is the one of smallest dimension, and it appears throughout this website.
