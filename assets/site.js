(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.getElementById('theme');
  const savedTheme = localStorage.getItem('theme');
  const params = new URLSearchParams(window.location.search);

  if (savedTheme) root.dataset.theme = savedTheme;

  function refreshThemeIcon() {
    if (themeButton) themeButton.textContent = root.dataset.theme === 'dark' ? '☀' : '☾';
  }

  refreshThemeIcon();

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
      refreshThemeIcon();
    });
  }

  const campaignKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  document.querySelectorAll('[data-preserve-query]').forEach(link => {
    const target = new URL(link.href, window.location.origin);
    campaignKeys.forEach(key => {
      if (params.get(key)) target.searchParams.set(key, params.get(key));
    });
    link.href = target.toString();
  });

  const copyButton = document.getElementById('copy');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const text = document.getElementById('msg')?.innerText || '';
      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        const area = document.createElement('textarea');
        area.value = text;
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      const toast = document.getElementById('toast');
      toast?.classList.add('show');
      setTimeout(() => toast?.classList.remove('show'), 2200);
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({event:'landing_visualizada', pagina:'principal'});
  document.querySelectorAll('[data-track]').forEach(link => {
    link.addEventListener('click', () => {
      window.dataLayer.push({event:'cta_clicado', cta:link.dataset.track});
    });
  });
})();