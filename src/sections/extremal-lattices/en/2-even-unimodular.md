---
title: Even unimodular lattices
---

A lattice is **integral** if all inner products $\langle x,y\rangle$ of its vectors are integers, that is, if its Gram matrix has integer entries. An integral lattice is

- **even** if every norm $\langle x,x\rangle$ is even. This holds exactly when the diagonal entries of $G$ are even;
- **unimodular** if $\det G=1$. Equivalently, the lattice coincides with its **dual lattice**
  $$
  \Lambda^{\#}=\{\,y\in\mathbb{R}^n : \langle x,y\rangle\in\mathbb{Z}\ \text{for all}\ x\in\Lambda\,\}.
  $$

Even unimodular lattices exist only when $n$ is a multiple of $8$ [[Ser73, Ch. V]](#ref-Ser73); the next section explains why. The lattice $\mathbb{Z}^n$ is unimodular but not even, since its basis vectors have norm $1$. The Gram matrix of $E_8$ in the figure above has $2$ on the diagonal and determinant $1$, so $E_8$ is even unimodular.

In each dimension there are only finitely many even unimodular lattices, if we regard two lattices as the same when a rotation or reflection carries one onto the other. In dimension $8$ the only one is $E_8$. In dimension $16$ there are two, $E_8\perp E_8$ and a lattice called $D_{16}^{+}$. Here $\perp$ denotes the orthogonal sum: the two copies of $E_8$ sit in complementary $8$-dimensional subspaces of $\mathbb{R}^{16}$. In dimension $24$ there are $24$; Niemeier classified them [[Nie73]](#ref-Nie73). From dimension $32$ on, their number grows so fast that a classification is out of reach. The [mass formula](../mass-formula/) page explains how they are counted.

Among the $24$ lattices of dimension $24$, exactly one has no vectors of norm $2$. This is the **Leech lattice** $\Lambda_{24}$, published by Leech in 1967 [[Lee67]](#ref-Lee67); Conway proved that it is the only even unimodular lattice of dimension $24$ without vectors of norm $2$ [[Con69]](#ref-Con69). Its nonzero vectors have norm at least $4$, and it has $196\,560$ vectors of norm $4$. The figure shows a Gram matrix of $\Lambda_{24}$. Unlike the Gram matrix of $E_8$, it does not show the structure of the lattice at a glance.
