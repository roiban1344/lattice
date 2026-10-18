# Extremal Even Unimodular Lattices

[日本語](README.ja.md)

Source of the website https://roiban1344.github.io/lattice/, an introduction to extremal even unimodular lattices: what they are, how they were found, how their extremality is proved, and the 112-dimensional example $L_{112}$. The pages are in English (authoritative) and Japanese (`/ja/`). The website is being rewritten; pages not yet written say so.

## Layout

| Path | Contents |
|---|---|
| `src/i18n.ts` | languages, the list of pages in reading order, and their titles |
| `src/sections/<page>/<lang>/` | page text in Markdown with TeX, one file per section |
| `src/views/` | one component per page: assembles the sections and inserts figures and tables |
| `src/lib/lattice.ts` | exact integer and rational arithmetic (Bareiss determinants, extremal theta series, Siegel means) |
| `src/components/` | heatmaps, charts and other figures, generated as SVG at build time |
| `src/data/refs.ts` | bibliography |
| `data/<lattice>/` | copies of published data; `SOURCE.md` records origin, commit and SHA-256 |

Mathematics is typeset with KaTeX at build time (remark-math and rehype-katex); styles use Tailwind CSS 3.

## Running locally

```bash
npm ci
npm run dev      # http://localhost:4321/lattice/
npm run build    # static files in dist/
```

Pushing to `main` deploys to GitHub Pages through GitHub Actions (`.github/workflows/deploy.yml`).

## Authorship and use of AI

Most of the exploration, code, computation and writing was done by AI (Claude, Anthropic). roiban1344 directs the work and is responsible for publication.

## License

Code: MIT. Text and data: CC BY 4.0.
