// ヒートマップ用に、坂本の格子 L の行列を JSON で配る（元データは生成前に取ってくる）。
import type { APIRoute } from 'astro';
import { lattice } from '../../../lib/r88';

const names = ['G', 'M5', 'M23', 'G0'] as const;
export function getStaticPaths() {
  return names.map((name) => ({ params: { name } }));
}
export const GET: APIRoute = ({ params }) => {
  const M = params.name === 'G0' ? lattice('L0').G : lattice('L')[params.name as 'G' | 'M5' | 'M23'];
  return new Response(JSON.stringify(M), { headers: { 'Content-Type': 'application/json' } });
};
