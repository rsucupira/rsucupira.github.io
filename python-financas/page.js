(() => {
  'use strict';

  const iframe = document.querySelector('[data-tally-embed]');
  if (!iframe) return;

  const incoming = new URLSearchParams(window.location.search);
  const tallyUrl = new URL('https://tally.so/embed/XxdPVg');

  const params = {
    alignLeft: '1',
    hideTitle: '1',
    transparentBackground: '1',
    dynamicHeight: '1',
    lp: 'python-financas',
    servico: 'python-financas',
    origem: 'python-financas-embed'
  };

  Object.entries(params).forEach(([key, value]) => tallyUrl.searchParams.set(key, value));
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(key => {
    const value = incoming.get(key);
    if (value) tallyUrl.searchParams.set(key, value);
  });

  iframe.dataset.tallySrc = tallyUrl.toString();

  const loadEmbeds = () => {
    if (window.Tally) window.Tally.loadEmbeds();
  };

  const scriptUrl = 'https://tally.so/widgets/embed.js';
  const existing = document.querySelector(`script[src="${scriptUrl}"]`);

  if (existing) {
    loadEmbeds();
  } else {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.onload = loadEmbeds;
    document.body.appendChild(script);
  }

  document.querySelectorAll('a[href="#contato"]').forEach(link => {
    link.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cta_contato_clicado',
        pagina: 'python-financas',
        servico: 'python-financas',
        cta: link.textContent.trim()
      });
    });
  });
})();
