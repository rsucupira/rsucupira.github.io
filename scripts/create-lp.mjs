#!/usr/bin/env node
import {cp, mkdir, readFile, writeFile, access} from 'node:fs/promises';
import {resolve, basename, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const [, , slugArg, titleArg] = process.argv;
if (!slugArg) {
  console.error('Uso: node scripts/create-lp.mjs <slug> "Título da LP"');
  process.exit(1);
}

const slug = slugArg.toLowerCase().trim().replace(/[^a-z0-9-]+/g, '-').replace(/^-|-$/g, '');
if (!slug) {
  console.error('O slug informado é inválido.');
  process.exit(1);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, '..');
const source = resolve(root, 'modelo-lp');
const destination = resolve(root, slug);

try {
  await access(destination);
  console.error(`A pasta ${basename(destination)} já existe.`);
  process.exit(1);
} catch {}

await mkdir(destination, {recursive:true});
await cp(source, destination, {recursive:true});

const configPath = resolve(destination, 'config.js');
let config = await readFile(configPath, 'utf8');
config = config
  .replace('Título da landing page — Dados Aplicados', `${titleArg || slug} — Dados Aplicados`)
  .replace("service: 'nova-oferta'", `service: '${slug}'`)
  .replaceAll('nova-lp', slug);
await writeFile(configPath, config);

console.log(`LP criada em /${slug}/.`);
console.log(`Edite ${slug}/config.js, substitua ${slug}/hero.svg e revise textos, Tally e responsividade antes de publicar.`);