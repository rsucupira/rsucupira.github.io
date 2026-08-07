# Uebey

**A place for ideas on the web.**  
**One domain. Infinite ideas.**

Uebey is an independent digital studio and growing web ecosystem for launching focused landing pages, lean websites, interactive tools and experiments.

## Positioning

Uebey does not compete as a low-cost DIY website builder. The first business model is service-led: understand the objective, choose the simplest useful digital format, design it, build it and publish it.

Repeated needs can later become templates, automation, products or platform features.

## Commercial ladder

- **Start — R$99**: briefing, visual direction, recommended structure and first page concept. It is not a complete website.
- **Launch — from R$490**: focused landing page with design, implementation, CTA/form and publication.
- **Site — from R$1,200**: lean multi-section or multi-page web presence.
- **Tool — from R$900**: calculators, simulators, lightweight dashboards, forms and interactive flows.
- **Care — from R$99/month**: optional small updates, maintenance and technical continuity.

Prices are initial commercial references and may evolve with scope and market validation.

## Current architecture

The root `index.html` is the Uebey brand, commercial hub and portfolio. Existing project folders remain independent and continue to work as focused landing pages and product experiments.

Important shared files:

- `index.html` — Uebey home + commercial portfolio
- `assets/uebey.css` — Uebey visual system and portfolio styles
- `assets/uebey-mark.svg` — Uebey mark / favicon
- `assets/lp-common.js` — shared LP configuration
- `assets/lp.css` — shared LP styles
- `assets/lp-runtime.js` — LP rendering, tracking, Tally and UTMs
- `modelo-lp/` — base for new landing pages
- `scripts/create-lp.mjs` — LP generator
- `scripts/validate-lps.mjs` — LP validation

## Portfolio structure

The homepage portfolio is intentionally split into two layers.

### Client work

These are real websites or landing pages built for businesses and professionals:

- **Plasticauto** — automotive website and searchable catalog  
  https://rsucupira.github.io/lp-plasticauto/
- **Doçura da Sarah** — food catalog + WhatsApp conversion  
  https://docura.uebey.com/
- **Carlos Batista** — audiovisual professional landing page for a magician  
  https://rsucupira.github.io/lp-magico/
- **BiotecBrazil** — institutional website for biotechnology education and scientific advisory  
  https://rsucupira.github.io/lp-biotecbrazil/
- **Mateus Ciantra** — professional personal website  
  https://rsucupira.github.io/lp-mateus/

### Uebey Lab

Products and experiments built inside this repository include:

- Matemática Leve — `/resolucao-matematica-vestibular-leve/`
- Física Leve — `/resolucao-fisica-vestibular-leve/`
- Química Leve — `/resolucao-quimica-vestibular-leve/`
- Python para Finanças — `/python-financas/`
- Dashboards — `/dashboards/`
- Systematic Investments — `/systematic-investments/`

The strategic rule remains: each individual LP should have one audience, one main problem, one promise and one primary action. Uebey's root page is the umbrella brand; individual pages stay focused.

## Lead capture

The current Uebey CTAs use the existing `/start/` flow and identify service through query parameters. Individual LPs can keep their own Tally, WhatsApp or direct-conversion flows independently.

## Domain

The repository is published through GitHub Pages and is used as the source for the Uebey web presence. Custom domains and subdomains should be aligned with Cloudflare DNS before adding or changing GitHub Pages domain configuration.

## Brand direction

- ultraminimal
- white / near-white canvas
- black typography
- electric indigo accent
- portal / nested-U visual motif
- large editorial typography
- restrained motion and decoration
- product-like rather than agency-like presentation
