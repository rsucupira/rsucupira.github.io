(() => {
  'use strict';

  const config = window.LP_CONFIG;
  if (!config) throw new Error('LP_CONFIG não foi definido.');

  const TALLY_URL = config.tallyUrl || 'https://tally.so/r/XxdPVg';
  const incoming = new URLSearchParams(window.location.search);
  const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const qs = selector => document.querySelector(selector);

  function setText(selector, value) {
    const element = qs(selector);
    if (element && value !== undefined) element.textContent = value;
  }

  function setHtml(selector, value) {
    const element = qs(selector);
    if (element && value !== undefined) element.innerHTML = value;
  }

  function applyTheme() {
    document.body.dataset.style = config.style || config.slug || 'default';
    const variables = {
      '--lp-bg': config.theme?.background,
      '--lp-surface': config.theme?.surface,
      '--lp-surface2': config.theme?.surfaceAlt,
      '--lp-text': config.theme?.text,
      '--lp-muted': config.theme?.muted,
      '--lp-navy': config.theme?.navy,
      '--lp-accent': config.theme?.blue,
      '--lp-accent2': config.theme?.blueLight,
      '--lp-gold': config.theme?.gold,
      '--lp-gold-soft': config.theme?.goldSoft
    };
    Object.entries(variables).forEach(([name, value]) => {
      if (value) document.documentElement.style.setProperty(name, value);
    });
  }

  function addCampaignParams(url) {
    campaignKeys.forEach(key => {
      const value = incoming.get(key);
      if (value) url.searchParams.set(key, value);
    });
    return url;
  }

  function buildTallyUrl(origin) {
    const url = new URL(TALLY_URL);
    url.searchParams.set('lp', config.slug);
    url.searchParams.set('servico', config.service || config.slug);
    url.searchParams.set('origem', origin || `${config.slug}-cta`);
    return addCampaignParams(url).toString();
  }

  function buildInternalUrl(rawUrl) {
    const url = new URL(rawUrl || '/', window.location.origin);
    campaignKeys.forEach(key => {
      const value = incoming.get(key);
      if (value) url.searchParams.set(key, value);
    });
    return url.toString();
  }

  function configureCta(element, cta, fallbackOrigin) {
    if (!element || !cta) {
      element?.remove();
      return;
    }
    element.textContent = cta.label || 'Continuar';
    element.dataset.ctaType = cta.type || 'link';
    element.dataset.ctaOrigin = cta.origin || fallbackOrigin;
    element.href = cta.type === 'tally'
      ? buildTallyUrl(cta.origin || fallbackOrigin)
      : buildInternalUrl(cta.url || '/');
  }

  function renderCards(sectionKey, listSelector) {
    const section = config[sectionKey];
    const container = qs(listSelector);
    if (!section || !container) {
      container?.closest('.lp-section')?.remove();
      return;
    }
    setText(`[data-bind="${sectionKey}-eyebrow"]`, section.eyebrow);
    setText(`[data-bind="${sectionKey}-title"]`, section.title);
    setText(`[data-bind="${sectionKey}-lead"]`, section.lead);
    section.items.forEach(item => {
      const article = document.createElement('article');
      article.className = sectionKey === 'steps' ? 'lp-card lp-step' : 'lp-card';
      const points = item.points?.length
        ? `<ul>${item.points.map(point => `<li>${point}</li>`).join('')}</ul>`
        : '';
      article.innerHTML = `<h3>${item.title}</h3><p>${item.text || ''}</p>${points}`;
      container.appendChild(article);
    });
  }

  function renderFaq() {
    const section = config.faq;
    const container = qs('[data-list="faq"]');
    if (!section || !container) {
      container?.closest('.lp-section')?.remove();
      return;
    }
    setText('[data-bind="faq-eyebrow"]', section.eyebrow || 'Dúvidas frequentes');
    setText('[data-bind="faq-title"]', section.title || 'Antes de começar');
    setText('[data-bind="faq-lead"]', section.lead || '');
    section.items.forEach((item, index) => {
      const details = document.createElement('details');
      if (index === 0) details.open = true;
      details.innerHTML = `<summary>${item.question}</summary><p>${item.answer}</p>`;
      container.appendChild(details);
    });
  }

  applyTheme();
  document.title = config.meta?.title || config.title || 'Landing page';
  const description = config.meta?.description || config.lead || '';
  qs('meta[name="description"]')?.setAttribute('content', description);
  qs('meta[property="og:title"]')?.setAttribute('content', config.meta?.title || config.title || '');
  qs('meta[property="og:description"]')?.setAttribute('content', description);

  setText('[data-bind="brand"]', config.brand?.name || 'Dados Aplicados');
  setText('[data-bind="brand-subtitle"]', config.brand?.subtitle || 'Rodrigo de Carvalho');
  setText('[data-bind="eyebrow"]', config.eyebrow);
  setHtml('[data-bind="title"]', `${config.headlineBefore || ''}<em>${config.highlight || ''}</em>${config.headlineAfter || ''}`);
  setText('[data-bind="lead"]', config.lead);

  const image = qs('[data-bind="hero-image"]');
  if (image && config.visual?.src) {
    image.src = config.visual.src;
    image.alt = config.visual.alt || '';
  }
  setText('[data-bind="hero-caption"]', config.visual?.caption || '');

  configureCta(qs('[data-bind="primary-cta"]'), config.primaryCta, `${config.slug}-hero`);
  configureCta(qs('[data-bind="secondary-cta"]'), config.secondaryCta, `${config.slug}-secondary`);

  const chips = qs('[data-list="chips"]');
  (config.chips || []).forEach(item => {
    const span = document.createElement('span');
    span.className = 'lp-chip';
    span.textContent = item;
    chips?.appendChild(span);
  });

  renderCards('audience', '[data-list="audience"]');
  renderCards('benefits', '[data-list="benefits"]');
  renderCards('steps', '[data-list="steps"]');
  renderFaq();

  setText('[data-bind="final-title"]', config.finalCta?.title);
  setText('[data-bind="final-text"]', config.finalCta?.text);
  configureCta(qs('[data-bind="final-link"]'), config.finalCta, `${config.slug}-final`);
  setText('[data-bind="footer"]', config.footer || '© 2026 Dados Aplicados');

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'landing_visualizada',
    pagina: config.slug || location.pathname,
    servico: config.service || config.slug
  });

  document.querySelectorAll('.lp-btn').forEach(link => {
    link.addEventListener('click', () => {
      const event = link.dataset.ctaType === 'tally' ? 'tally_aberto' : 'cta_clicado';
      window.dataLayer.push({
        event,
        pagina: config.slug || location.pathname,
        servico: config.service || config.slug,
        origem: link.dataset.ctaOrigin,
        cta: link.textContent.trim()
      });
    });
  });
})();