// ヒートマップ用に、data/g72/ の行列と Γ72 の Gram 行列を JSON で配る。
import type { APIRoute } from 'astro';
import { data } from '../../../lib/g72';

const names = ['F', 'A', 'Gamma'] as const;
export function getStaticPaths() {
  return names.map((name) => ({ params: { name } }));
}
export const GET: APIRoute = ({ params }) => new Response(JSON.stringify(data()[params.name as (typeof names)[number]]), { headers: { 'Content-Type': 'application/json' } });
