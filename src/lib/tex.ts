// 文字列の中の $...$ と $$...$$ を KaTeX で HTML にする（表やキャプションなど、Markdown を通らない文字列用）。
import katex from 'katex';
import { CLOSERS } from './rehype-nobreak.mjs';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function tex(s: string): string {
  return s
    .split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g)
    .map((part, i, all) => {
      if (part.startsWith('$$')) return katex.renderToString(part.slice(2, -2), { displayMode: true, throwOnError: true });
      if (part.startsWith('$')) return katex.renderToString(part.slice(1, -1), { throwOnError: true });
      // 数式の直後の句読点で改行させない（rehype-nobreak.mjs と同じ理由）
      const wj = i > 0 && all[i - 1].startsWith('$') && CLOSERS.test(part) ? '\u2060' : '';
      return wj + part.replace(/(<[^>]+>)|([^<]+)/g, (_, tag, txt) => tag ?? esc(txt));
    })
    .join('');
}
