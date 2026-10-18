// 頁の本文の読み込み。src/sections/<頁>/<言語>/<順番>-<節の id>[.<部分>].md を、節ごとにまとめて返す。
// 同じ id の部分は一つの節として続けて表示し、題は最初の部分の frontmatter から取る。
import type { Lang } from '../i18n';

type Md = { frontmatter: { title?: string }; Content: any };
const all = import.meta.glob<Md>('../sections/*/*/*.md', { eager: true });

export function loadSections(page: string, lang: Lang) {
  const files = Object.entries(all)
    .filter(([p]) => p.startsWith(`../sections/${page}/${lang}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([p, m]) => {
      const [id, part] = p.split('/').pop()!.replace(/^\d+-|\.md$/g, '').split('.');
      return { id, key: part ? `${id}.${part}` : id, title: m.frontmatter.title ?? '', Content: m.Content };
    });
  return [...new Set(files.map((f) => f.id))].map((id) => {
    const fs = files.filter((f) => f.id === id);
    return { id, title: fs[0].title, files: fs };
  });
}
