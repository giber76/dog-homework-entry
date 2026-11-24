// Dog-homework entry (Node 22, standard library only): the excuse lives
// in entry.txt beside this file, and this program writes it verbatim to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 200 characters;
// this excuse is one line, 89 characters.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryPath = new URL('./entry.txt', import.meta.url);
const entry = readFileSync(entryPath, 'utf8');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entry);
