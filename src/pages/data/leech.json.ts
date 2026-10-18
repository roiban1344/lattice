// ヒートマップ用に、Leech 格子の Gram 行列を JSON で配る。
import type { APIRoute } from 'astro';
import { LEECH } from '../../lib/leech';

export const GET: APIRoute = () => new Response(JSON.stringify(LEECH()), { headers: { 'Content-Type': 'application/json' } });
