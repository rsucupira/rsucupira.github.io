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

  const specialties = [
    {slug:'calculo', icon:'∫', title:'Cálculo', text:'Limites, derivadas, integrais e aplicações.'},
    {slug:'matematica-vestibular', icon:'Σ', title:'Matemática para vestibular', text:'Base, estratégia e prática para ENEM e vestibulares.'},
    {slug:'fisica-vestibular', icon:'→', title:'Física para vestibular', text:'Conceito, diagramas e resolução de questões.'},
    {slug:'bioestatistica', icon:'◉', title:'Bioestatística', text:'Pergunta, base, análise e interpretação científica.'},
    {slug:'python', icon:'</>', title:'Programação em Python', text:'Fundamentos, dados, automação e projetos.'},
    {slug:'python-financas', icon:'Py$', title:'Python para Finanças', text:'Dados financeiros, risco, portfólios e automação.'},
    {slug:'excel', icon:'▦', title:'Excel', text:'Planilhas, fórmulas, tabelas e análises.'},
    {slug:'dashboards', icon:'▥', title:'Dashboards', text:'KPIs, visualizações e painéis para decisão.'},
    {slug:'inteligencia-artificial', icon:'✦', title:'Inteligência Artificial', text:'Stack, integrações, automações e uso responsável de IA.'}
  ];

  const servicesSection = document.getElementById('servicos');
  if (servicesSection) {
    const hub = document.createElement('section');
    hub.className = 'section';
    hub.id = 'especialidades';
    hub.innerHTML = `
      <div class="container">
        <div class="heading">
          <div class="eyebrow">Páginas especializadas</div>
          <h2>Escolha o problema que mais se aproxima do seu objetivo.</h2>
          <p>Cada página apresenta uma proposta, um público e um caminho de atendimento próprios.</p>
        </div>
        <div class="grid3">
          ${specialties.map(item => `
            <a class="card" href="/${item.slug}/" data-preserve-query data-track="especialidade-${item.slug}">
              <div class="icon" aria-hidden="true">${item.icon}</div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </a>`).join('')}
        </div>
      </div>`;
    servicesSection.insertAdjacentElement('afterend', hub);
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