// ヒートマップ用に、data/l112/ の行列を JSON で配る（生成時に静的ファイルになる）。
import type { APIRoute } from 'astro';
import { data } from '../../../lib/l112';

const names = ['G', 'g1', 'g2', 'tau', 'tau2', 'Rblock', 'R'] as const;
export function getStaticPaths() {
  return names.map((name) => ({ params: { name } }));
}
export const GET: APIRoute = ({ params }) => {
  const M = data()[params.name as (typeof names)[number]];
  return new Response(JSON.stringify(M), { headers: { 'Content-Type': 'application/json' } });
};
