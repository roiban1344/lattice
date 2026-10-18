// 和文の禁則処理の補い。KaTeX の数式は改行の上ではインラインブロックとして扱われ、その直後で改行できてしまうので、
// 数式やリンクなどの要素の直後に句読点・閉じ括弧が続くとき、間に WORD JOINER（U+2060）を挟んで行頭に句読点が来るのを防ぐ。
export const CLOSERS = /^[、。，．・：；？！）」』】〕）]/;

export default function rehypeNobreak() {
  const walk = (node) => {
    if (!node.children) return;
    node.children.forEach((child, i) => {
      const prev = node.children[i - 1];
      if (child.type === 'text' && prev?.type === 'element' && CLOSERS.test(child.value)) child.value = '⁠' + child.value;
      walk(child);
    });
  };
  return walk;
}
