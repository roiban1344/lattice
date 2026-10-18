---
title: Even unimodular lattices
---

A lattice is **integral** if all inner products $\langle x,y\rangle$ of its vectors are integers, that is, if its Gram matrix has integer entries. Among integral lattices, those with the following properties have names of their own.

- An integral lattice is **even** if every norm $\langle x,x\rangle$ is even. This holds exactly when the diagonal entries of $G$ are even.
- An integral lattice is **unimodular** if $\det G=1$. Equivalently, the lattice coincides with its **dual lattice**
  $$
  \Lambda^{\#}=\{\,y\in\mathbb{R}^n : \langle x,y\rangle\in\mathbb{Z}\ \text{for all}\ x\in\Lambda\,\}.
  $$

Even unimodular lattices exist only when $n$ is a multiple of $8$ [[Ser73, Ch. V]](#ref-Ser73) (the reason is explained in the next section). The lattice $\mathbb{Z}^n$ is unimodular but not even, since its basis vectors have norm $1$. On the other hand, the Gram matrix of $E_8$ in the figure above has $2$ on the diagonal and determinant $1$, so $E_8$ is even unimodular.

If we identify two lattices when a rotation or reflection carries one onto the other, there are only finitely many even unimodular lattices in each dimension. In dimension $8$ the only one is $E_8$. In dimension $16$ there are two: $E_8\perp E_8$ and a lattice called $D_{16}^{+}$. Here $\perp$ denotes the orthogonal sum: the two copies of $E_8$ lie in mutually orthogonal $8$-dimensional subspaces of $\mathbb{R}^{16}$.

In dimension $24$ there are $24$ of them. They are called the Niemeier lattices, after the mathematician who classified them [[Nie73]](#ref-Nie73). In dimension $32$ there are more than ten million, even counting only those without vectors of norm $2$ [[Kin03, Cor. 5]](#ref-Kin03), and the exact number is not known. The [mass formula](../mass-formula/) page explains how such lower bounds are obtained.

Among the $24$ Niemeier lattices, only one has no vectors of norm $2$. This is the **Leech lattice** $\Lambda_{24}$, published by Leech in 1967 [[Lee67]](#ref-Lee67). Conway proved that every even unimodular lattice of dimension $24$ without vectors of norm $2$ is the Leech lattice [[Con69]](#ref-Con69). The nonzero vectors of $\Lambda_{24}$ have norm at least $4$, and there are $196\,560$ vectors of norm $4$. The figure shows a Gram matrix of $\Lambda_{24}$.
