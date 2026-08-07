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

The root `index.html` is the Uebey brand and commercial hub. Existing project folders remain independent and continue to work as focused landing pages and portfolio examples.

Important shared files:

- `index.html` — Uebey home
- `assets/uebey.css` — Uebey visual system
- `assets/uebey-mark.svg` — Uebey mark / favicon
- `assets/lp-common.js` — shared LP configuration
- `assets/lp.css` — shared LP styles
- `assets/lp-runtime.js` — LP rendering, tracking, Tally and UTMs
- `modelo-lp/` — base for new landing pages
- `scripts/create-lp.mjs` — LP generator
- `scripts/validate-lps.mjs` — LP validation

## Existing ideas / portfolio

Examples already hosted in the repository include:

- Matemática Leve
- Python para Finanças
- Dashboards
- Inteligência Artificial
- Bioestatística
- Cálculo
- Física para vestibular
- Systematic Investments

The strategic rule remains: each individual LP should have one audience, one main problem, one promise and one primary action. Uebey's root page is the umbrella brand; the individual pages stay focused.

## Lead capture

The current Uebey CTAs use the existing Tally infrastructure and identify origin and service through query parameters. A dedicated Uebey intake form can replace the shared form later without changing the visual architecture.

## Domain

The repository is currently published through GitHub Pages. The custom domain `uebey.com` should only be activated after Cloudflare DNS and GitHub Pages custom-domain settings are aligned. Until then, do not add a `CNAME` file blindly, because it can redirect the current GitHub Pages site before DNS is ready.

## Brand direction

- ultraminimal
- white / near-white canvas
- black typography
- electric indigo accent
- portal / nested-U visual motif
- large editorial typography
- restrained motion and decoration
- product-like rather than agency-like presentation
