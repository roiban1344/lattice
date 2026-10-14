// 文字列の中の $...$ と $$...$$ を KaTeX で HTML にする（表やキャプションなど、Markdown を通らない文字列用）。
import katex from 'katex';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function tex(s: string): string {
  return s
    .split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g)
    .map((part) => {
      if (part.startsWith('$$')) return katex.renderToString(part.slice(2, -2), { displayMode: true, throwOnError: true });
      if (part.startsWith('$')) return katex.renderToString(part.slice(1, -1), { throwOnError: true });
      return part.replace(/(<[^>]+>)|([^<]+)/g, (_, tag, txt) => tag ?? esc(txt));
    })
    .join('');
}
