// 言語と頁の一覧。英語が正本で接頭辞なし、日本語は /ja/ の下。頁の題・ナビ・言語切替はすべてここから作る。
export type Lang = 'en' | 'ja';
export const LANGS: Lang[] = ['en', 'ja'];
/** 言語切替に出す名前。国旗は使わず、その言語自身での名前を書く。 */
export const LANG_NAME: Record<Lang, string> = { en: 'English', ja: '日本語' };

export const SITE_NAME: Record<Lang, string> = {
  en: 'Extremal Even Unimodular Lattices',
  ja: '極値偶ユニモジュラー格子',
};

/** 読む順に並べた頁。slug は両言語で共通。題は仮のもので、本文を書くときに見直す。 */
export const PAGES: { slug: string; title: Record<Lang, string> }[] = [
  { slug: 'extremal-lattices', title: { en: 'Extremal even unimodular lattices', ja: '極値偶ユニモジュラー格子とは' } },
  { slug: 'history', title: { en: 'History', ja: '歴史' } },
  { slug: 'constructions', title: { en: 'Constructions', ja: '構成法' } },
  { slug: 'proving-extremality', title: { en: 'Proving extremality', ja: '極値性の証明' } },
  { slug: 'mass-formula', title: { en: 'The mass formula', ja: '質量公式' } },
  { slug: 'why-112', title: { en: 'Why dimension 112', ja: 'なぜ 112 次元か' } },
  { slug: 'l112', title: { en: 'The lattice L₁₁₂', ja: '格子 L₁₁₂' } },
  { slug: 'references', title: { en: 'References', ja: '文献' } },
];

/** 画面に出す決まり文句。 */
export const UI = {
  contents: { en: 'Contents', ja: '目次' },
  pages: { en: 'Pages', ja: '頁' },
  prev: { en: 'Previous', ja: '前の頁' },
  next: { en: 'Next', ja: '次の頁' },
  draft: { en: 'This page is being written.', ja: 'この頁は執筆中です。' },
  wip: {
    en: 'This website is being rewritten. Pages not yet written are marked as such.',
    ja: 'このウェブサイトは書き直しの途中です。まだ書かれていない頁には、その旨を記しています。',
  },
  footer: {
    en: 'Most of the exploration, code, computation and writing was done by AI (Claude, Anthropic). Direction and responsibility for publication: roiban1344. Text and data are licensed under CC BY 4.0.',
    ja: '探索・コード・計算・文章の大部分は AI（Anthropic の Claude）によるものです。方向づけと公開の責任は roiban1344 にあります。文章とデータは CC BY 4.0 で公開しています。',
  },
} satisfies Record<string, Record<Lang, string>>;

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** 言語と slug から URL を作る。slug が空なら索引。 */
export const href = (lang: Lang, slug = '') => `${base}${lang === 'ja' ? 'ja/' : ''}${slug ? `${slug}/` : ''}`;

export const pageOf = (slug: string) => PAGES.find((p) => p.slug === slug);
