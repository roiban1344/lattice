// ヒートマップ用に、E8 の Gram 行列を JSON で配る。
import type { APIRoute } from 'astro';
import { E8 } from '../../lib/e8';

export const GET: APIRoute = () => new Response(JSON.stringify(E8), { headers: { 'Content-Type': 'application/json' } });
