// 文献。本文を読んだもの、または Catalogue のように直接見たものだけを載せる。
export const refs: Record<string, { text: string; url: string; link: string }> = {
  MOS75: { text: 'C. L. Mallows, A. M. Odlyzko, N. J. A. Sloane, Upper bounds for modular forms, lattices, and codes, J. Algebra 36 (1975) 68–76.', url: 'https://doi.org/10.1016/0021-8693(75)90155-6', link: 'doi' },
  Neb98: { text: 'G. Nebe, Some cyclo-quaternionic lattices, J. Algebra 199 (1998) 472–498.', url: 'https://doi.org/10.1006/jabr.1997.7163', link: 'doi' },
  Neb12: { text: 'G. Nebe, An even unimodular 72-dimensional lattice of minimum 8, J. reine angew. Math. 673 (2012) 237–247.', url: 'https://arxiv.org/abs/1008.2862', link: 'arXiv:1008.2862' },
  CN13: { text: 'R. Coulangeon, G. Nebe, Dense lattices as Hermitian tensor products, Contemp. Math. 587 (2013).', url: 'https://arxiv.org/abs/1201.1832', link: 'arXiv:1201.1832' },
  Sak26: { text: 'R. Sakamoto, Two extremal even unimodular lattices of rank 88, preprint (2026).', url: 'https://arxiv.org/abs/2609.15633', link: 'arXiv:2609.15633' },
  Sak26code: { text: 'R. Sakamoto, rank-88-extremal-lattice-computations（コード、データ、証明書）, commit 628ce2a.', url: 'https://github.com/RyotaroSakamoto0113/rank-88-extremal-lattice-computations/tree/628ce2a7ac23acf8d4c295677e4310c9ec5b21d9', link: 'GitHub' },
  EXT72: { text: 'G. Nebe, Magma code for the construction of the extremal 72-dimensional lattice (ConstExtremal72).', url: 'https://www.math.rwth-aachen.de/~Gabriele.Nebe/EXT72/ConstExtremal72', link: 'web' },
  NS: { text: 'G. Nebe, N. J. A. Sloane, A Catalogue of Lattices.', url: 'https://www.math.rwth-aachen.de/~Gabriele.Nebe/LATTICES/', link: 'web' },
  SPLAG: { text: 'J. H. Conway, N. J. A. Sloane, Sphere Packings, Lattices and Groups, 3rd ed., Springer 1999.', url: 'https://doi.org/10.1007/978-1-4757-6568-7', link: 'doi' },
  ATLAS: { text: 'R. A. Wilson et al., ATLAS of Group Representations, v3: L₂(29).', url: 'https://brauer.maths.qmul.ac.uk/Atlas/v3/lin/L229/', link: 'web' },
  Bar68: { text: "E. H. Bareiss, Sylvester's identity and multistep integer-preserving Gaussian elimination, Math. Comp. 22 (1968) 565–578.", url: 'https://doi.org/10.1090/S0025-5718-1968-0226829-0', link: 'doi' },
};
