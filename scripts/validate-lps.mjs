#!/usr/bin/env node
import {readFile, access} from 'node:fs/promises';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  'calculo',
  'matematica-vestibular',
  'fisica-vestibular',
  'bioestatistica',
  'python',
  'python-financas',
  'excel',
  'dashboards',
  'inteligencia-artificial',
  'systematic-investments'
];

const errors = [];

for (const slug of pages) {
  const dir = resolve(root, slug);
  const paths = {
    html: resolve(dir, 'index.html'),
    config: resolve(dir, 'config.js'),
    image: resolve(dir, 'hero.svg')
  };

  for (const [type, path] of Object.entries(paths)) {
    try {
      await access(path);
    } catch {
      errors.push(`${slug}: arquivo ausente (${type})`);
    }
  }

  try {
    const [html, config, image] = await Promise.all([
      readFile(paths.html, 'utf8'),
      readFile(paths.config, 'utf8'),
      readFile(paths.image, 'utf8')
    ]);

    const htmlChecks = [
      ['/assets/lp-common.js', 'configuração comum'],
      ['config.js', 'configuração local'],
      ['/assets/lp-runtime.js', 'runtime'],
      ['data-bind="hero-image"', 'imagem principal'],
      ['data-list="faq"', 'FAQ']
    ];
    htmlChecks.forEach(([pattern, label]) => {
      if (!html.includes(pattern)) errors.push(`${slug}: ${label} não encontrado no HTML`);
    });

    if (!config.includes(`slug: '${slug}'`)) errors.push(`${slug}: slug incorreto no config.js`);
    if (!config.includes("type: 'tally'")) errors.push(`${slug}: CTA do Tally ausente`);
    if (!config.includes(`${slug}-hero`)) errors.push(`${slug}: origem do hero ausente`);
    if (!config.includes(`${slug}-final`)) errors.push(`${slug}: origem final ausente`);
    if (!image.trimStart().startsWith('<svg')) errors.push(`${slug}: hero.svg inválido`);
  } catch (error) {
    errors.push(`${slug}: falha de leitura — ${error.message}`);
  }
}

const [runtime, styles, site] = await Promise.all([
  readFile(resolve(root, 'assets/lp-runtime.js'), 'utf8'),
  readFile(resolve(root, 'assets/lp.css'), 'utf8'),
  readFile(resolve(root, 'assets/site.js'), 'utf8')
]);

['lp', 'servico', 'origem'].forEach(field => {
  if (!runtime.includes(`searchParams.set('${field}'`)) errors.push(`runtime: campo hidden ${field} ausente`);
});

if (!styles.includes('AO VIVO · ONLINE · INTERATIVO')) errors.push('styles: destaque de atendimento ao vivo ausente');
if (!styles.includes('LIVE · ONLINE · INTERACTIVE')) errors.push('styles: destaque em inglês ausente');
if (!site.includes("slug:'python-financas'")) errors.push('site: Python para Finanças não aparece no hub principal');
if (site.includes("slug:'systematic-investments'")) errors.push('site: LP em inglês não deve aparecer no hub principal');

if (errors.length) {
  console.error('Falhas encontradas:');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Validação concluída: ${pages.length} landing pages, atendimento ao vivo, hub e integração Tally verificados.`);