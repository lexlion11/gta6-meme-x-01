// gta6-meme-x-01 entry: copies POST.json to the output directory.
// Node 22, standard library only.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./POST.json', import.meta.url), join(outDir, 'POST.json'));
