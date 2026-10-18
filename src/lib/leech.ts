// Leech 格子の Gram 行列（data/leech/ の写し）。
import fs from 'node:fs';
import path from 'node:path';
import { parseMatrix, type Mat } from './lattice';

let cache: Mat | null = null;
export const LEECH = (): Mat => (cache ??= parseMatrix(fs.readFileSync(path.join(process.cwd(), 'data/leech/gram.txt'), 'utf8')));
