// 数の書き方の約束（SI / ISO 80000 にならう）。
// - 数学の量は数式（KaTeX）で書く。年・日付・節番号・所要時間は地の文のまま。
// - 5 桁以上の整数は 3 桁ごとに細い空白（\,）で区切る。4 桁はそのまま（例: 4095、24\,360）。
export function num(v: number | bigint): string {
  const s = (typeof v === 'bigint' ? v : BigInt(Math.round(Number(v)))).toString();
  const neg = s.startsWith('-'), d = neg ? s.slice(1) : s;
  const body = d.length <= 4 ? d : d.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  return (neg ? '-' : '') + body;
}
/** 数を $…$ で包む。 */
export const n$ = (v: number | bigint) => `$${num(v)}$`;
/** 科学的記数法（有効数字 3 桁）。 */
export function sci(v: number): string {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v)));
  if (Math.abs(e) < 4) return v >= 100 ? num(Math.round(v)) : String(Number(v.toPrecision(3)));
  return `${(v / 10 ** e).toFixed(2)}\\times10^{${e}}`;
}
