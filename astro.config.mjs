import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://roiban1344.github.io',
  base: '/lattice',
  trailingSlash: 'ignore',
  // 英語が既定で接頭辞なし、日本語は /ja/ の下。頁の一覧と題は src/i18n.ts。
  i18n: { locales: ['en', 'ja'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  // 再編前の URL
  redirects: { '/primer': '/lattice/ja/extremal-lattices/', '/r112': '/lattice/ja/l112/' },
  integrations: [tailwind({ applyBaseStyles: false })],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
