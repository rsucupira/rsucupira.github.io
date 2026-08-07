(() => {
  const plans = {
    start: {
      title: 'Start',
      desc: 'Para quando a ideia ainda precisa ganhar forma antes de virar um projeto maior.',
      investment: 'R$99',
      scope: 'direção inicial',
      service: 'start'
    },
    launch: {
      title: 'Launch',
      desc: 'Para colocar uma oferta, campanha, profissional ou ideia no ar com uma landing page completa.',
      investment: 'a partir de R$490',
      scope: 'landing page',
      service: 'launch'
    },
    site: {
      title: 'Site',
      desc: 'Para uma presença digital mais completa, com mais conteúdo, estrutura e páginas quando necessário.',
      investment: 'a partir de R$1.200',
      scope: 'website',
      service: 'site'
    },
    tool: {
      title: 'Tool',
      desc: 'Para quando a ideia precisa calcular, simular, coletar, organizar ou responder — e não apenas mostrar conteúdo.',
      investment: 'a partir de R$900',
      scope: 'experiência interativa',
      service: 'tool'
    },
    care: {
      title: 'Care',
      desc: 'Para manter, ajustar e evoluir algo que já está publicado.',
      investment: 'a partir de R$99/mês',
      scope: 'manutenção',
      service: 'care'
    }
  };

  const optionButtons = [...document.querySelectorAll('[data-plan]')];
  const title = document.querySelector('[data-summary-title]');
  const desc = document.querySelector('[data-summary-desc]');
  const investment = document.querySelector('[data-summary-investment]');
  const scope = document.querySelector('[data-summary-scope]');
  const continueButton = document.querySelector('[data-continue]');
  let selected = null;

  function choose(planKey) {
    const plan = plans[planKey];
    if (!plan) return;
    selected = planKey;
    optionButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.plan === planKey));
    title.textContent = plan.title;
    desc.textContent = plan.desc;
    investment.textContent = plan.investment;
    scope.textContent = plan.scope;
    continueButton.disabled = false;
    continueButton.querySelector('span:first-child').textContent = `Continue with ${plan.title}`;
    const url = new URL(window.location.href);
    url.searchParams.set('plan', planKey);
    history.replaceState(null, '', url);
  }

  function buildTallyUrl() {
    const plan = plans[selected];
    const tally = new URL('https://tally.so/r/XxdPVg');
    tally.searchParams.set('lp', 'uebey');
    tally.searchParams.set('servico', plan.service);
    tally.searchParams.set('origem', `uebey-start-${selected}`);
    const current = new URLSearchParams(window.location.search);
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(key => {
      if (current.get(key)) tally.searchParams.set(key, current.get(key));
    });
    return tally.toString();
  }

  optionButtons.forEach(btn => btn.addEventListener('click', () => choose(btn.dataset.plan)));
  continueButton.addEventListener('click', () => {
    if (!selected) return;
    window.location.href = buildTallyUrl();
  });

  const preset = new URLSearchParams(window.location.search).get('plan');
  if (plans[preset]) choose(preset);
})();