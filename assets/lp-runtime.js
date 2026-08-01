(() => {
  'use strict';
  const config = window.LP_CONFIG;
  if (!config) throw new Error('LP_CONFIG não foi definido.');

  const qs = selector => document.querySelector(selector);
  const setText = (selector, value) => {
    const el = qs(selector);
    if (el && value !== undefined) el.textContent = value;
  };
  const setHtml = (selector, value) => {
    const el = qs(selector);
    if (el && value !== undefined) el.innerHTML = value;
  };

  document.title = config.meta?.title || config.title || 'Landing page';
  const description = config.meta?.description || config.lead || '';
  qs('meta[name="description"]')?.setAttribute('content', description);
  qs('meta[property="og:title"]')?.setAttribute('content', config.meta?.title || config.title || '');
  qs('meta[property="og:description"]')?.setAttribute('content', description);

  setText('[data-bind="brand"]', config.brand?.name || 'Dados Aplicados');
  setText('[data-bind="brand-subtitle"]', config.brand?.subtitle || 'Rodrigo Sucupira');
  setText('[data-bind="eyebrow"]', config.eyebrow);
  setHtml('[data-bind="title"]', `${config.headlineBefore || ''}<em>${config.highlight || ''}</em>${config.headlineAfter || ''}`);
  setText('[data-bind="lead"]', config.lead);
  setText('[data-bind="panel-title"]', config.panel?.title);
  setText('[data-bind="panel-text"]', config.panel?.text);

  const primary = qs('[data-bind="primary-cta"]');
  if (primary) {
    primary.textContent = config.primaryCta?.label || 'Continuar';
    primary.href = config.primaryCta?.url || '#';
  }
  const secondary = qs('[data-bind="secondary-cta"]');
  if (secondary) {
    if (config.secondaryCta) {
      secondary.textContent = config.secondaryCta.label;
      secondary.href = config.secondaryCta.url;
    } else {
      secondary.remove();
    }
  }

  const chips = qs('[data-list="chips"]');
  (config.chips || []).forEach(item => {
    const span = document.createElement('span');
    span.className = 'lp-chip';
    span.textContent = item;
    chips?.appendChild(span);
  });

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
      article.innerHTML = `<h3>${item.title}</h3><p>${item.text || ''}</p>${item.points ? `<ul>${item.points.map(point => `<li>${point}</li>`).join('')}</ul>` : ''}`;
      container.appendChild(article);
    });
  }

  renderCards('audience', '[data-list="audience"]');
  renderCards('benefits', '[data-list="benefits"]');
  renderCards('steps', '[data-list="steps"]');

  setText('[data-bind="final-title"]', config.finalCta?.title);
  setText('[data-bind="final-text"]', config.finalCta?.text);
  const finalLink = qs('[data-bind="final-link"]');
  if (finalLink) {
    finalLink.textContent = config.finalCta?.label || config.primaryCta?.label || 'Continuar';
    finalLink.href = config.finalCta?.url || config.primaryCta?.url || '#';
  }

  setText('[data-bind="footer"]', config.footer || '© 2026 Dados Aplicados');

  const incoming = new URLSearchParams(window.location.search);
  const preserve = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','origem'];
  document.querySelectorAll('[data-preserve-query]').forEach(link => {
    const url = new URL(link.href, window.location.origin);
    preserve.forEach(key => {
      if (incoming.get(key)) url.searchParams.set(key, incoming.get(key));
    });
    link.href = url.toString();
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({event:'landing_visualizada', pagina:config.slug || location.pathname});
  document.querySelectorAll('.lp-btn').forEach(link => {
    link.addEventListener('click', () => {
      window.dataLayer.push({event:'cta_clicado', pagina:config.slug || location.pathname, cta:link.textContent.trim()});
    });
  });
})();