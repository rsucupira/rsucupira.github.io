(() => {
  const plans = {
    start: {title:'Start',desc:'Para quando a ideia ainda precisa ganhar forma antes de virar um projeto maior.',investment:'R$99',scope:'direção inicial',service:'start'},
    launch: {title:'Launch',desc:'Para colocar uma oferta, campanha, profissional ou ideia no ar com uma landing page completa.',investment:'a partir de R$490',scope:'landing page',service:'launch'},
    site: {title:'Site',desc:'Para uma presença digital mais completa, com mais conteúdo, estrutura e páginas quando necessário.',investment:'a partir de R$1.200',scope:'website',service:'site'},
    tool: {title:'Tool',desc:'Para quando a ideia precisa calcular, simular, coletar, organizar ou responder — e não apenas mostrar conteúdo.',investment:'a partir de R$900',scope:'experiência interativa',service:'tool'},
    care: {title:'Care',desc:'Para manter, ajustar e evoluir algo que já está publicado.',investment:'a partir de R$99/mês',scope:'manutenção',service:'care'}
  };

  const optionButtons = [...document.querySelectorAll('[data-plan]')];
  const flowSteps = [...document.querySelectorAll('[data-step]')];
  const progressSteps = [...document.querySelectorAll('[data-go-step]')];
  const title = document.querySelector('[data-summary-title]');
  const desc = document.querySelector('[data-summary-desc]');
  const investment = document.querySelector('[data-summary-investment]');
  const scope = document.querySelector('[data-summary-scope]');
  const continueButton = document.querySelector('[data-continue]');
  const briefForm = document.querySelector('[data-brief-form]');
  const briefOutput = document.querySelector('[data-brief-output]');
  const readyPlan = document.querySelector('[data-ready-plan]');
  const readyPrice = document.querySelector('[data-ready-price]');
  const copyButton = document.querySelector('[data-copy-brief]');
  const contactButton = document.querySelector('[data-contact]');
  const copyNote = document.querySelector('[data-copy-note]');
  const referenceLabel = document.querySelector('[data-reference-label]');
  const referenceInput = document.querySelector('#reference');
  let selected = null;
  let completedBrief = false;
  let currentStep = 1;

  function setStep(step) {
    if (step === 2 && !selected) return;
    if (step === 3 && !completedBrief) return;
    currentStep = step;
    flowSteps.forEach(el => el.classList.toggle('active', Number(el.dataset.step) === step));
    progressSteps.forEach(el => {
      const n = Number(el.dataset.goStep);
      el.classList.toggle('active', n === step);
      el.classList.toggle('complete', n < step);
    });
    document.querySelector('.builder').scrollIntoView({behavior:'smooth', block:'start'});
  }

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
    if (planKey === 'care') {
      referenceLabel.innerHTML = 'Link atual <span>recommended</span>';
      referenceInput.placeholder = 'URL do site, página ou projeto que já está no ar';
    } else {
      referenceLabel.innerHTML = 'Link ou referência <span>optional</span>';
      referenceInput.placeholder = 'Site, Instagram, referência visual ou projeto parecido';
    }
    const url = new URL(window.location.href);
    url.searchParams.set('plan', planKey);
    history.replaceState(null, '', url);
  }

  function values() {
    const data = new FormData(briefForm);
    return Object.fromEntries(data.entries());
  }

  function buildBrief() {
    const plan = plans[selected];
    const v = values();
    const date = new Intl.DateTimeFormat('pt-BR').format(new Date());
    return [
      'UEBEY / PROJECT BRIEF',
      `Date: ${date}`,
      `Path: ${plan.title}`,
      `Investment reference: ${plan.investment}`,
      '',
      'IDEA',
      v.idea.trim(),
      '',
      'MAIN GOAL',
      v.goal,
      '',
      'AUDIENCE',
      v.audience.trim(),
      '',
      'CONTENT STATUS',
      v.content,
      '',
      'DESIRED DEADLINE',
      v.deadline,
      '',
      'REFERENCE / CURRENT URL',
      v.reference.trim() || 'Not provided',
      '',
      `Recommended first format: ${plan.scope}`
    ].join('\n');
  }

  function buildTallyUrl() {
    const plan = plans[selected];
    const v = values();
    const tally = new URL('https://tally.so/r/XxdPVg');
    tally.searchParams.set('lp', 'uebey');
    tally.searchParams.set('servico', plan.service);
    tally.searchParams.set('origem', `uebey-start-${selected}`);
    tally.searchParams.set('brief_goal', v.goal);
    tally.searchParams.set('brief_deadline', v.deadline);
    tally.searchParams.set('brief_content', v.content);
    tally.searchParams.set('briefing', buildBrief().slice(0, 1400));
    const current = new URLSearchParams(window.location.search);
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(key => {
      if (current.get(key)) tally.searchParams.set(key, current.get(key));
    });
    return tally.toString();
  }

  async function copyBrief() {
    const text = buildBrief();
    try {
      await navigator.clipboard.writeText(text);
      copyButton.querySelector('span:first-child').textContent = 'Copied';
      copyNote.textContent = 'Briefing copiado. Você pode colá-lo no formulário ou em uma mensagem.';
      setTimeout(() => copyButton.querySelector('span:first-child').textContent = 'Copy brief', 1800);
      return true;
    } catch (_) {
      const helper = document.createElement('textarea');
      helper.value = text;
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      const ok = document.execCommand('copy');
      helper.remove();
      if (ok) copyNote.textContent = 'Briefing copiado. Você pode colá-lo no formulário ou em uma mensagem.';
      return ok;
    }
  }

  optionButtons.forEach(btn => btn.addEventListener('click', () => choose(btn.dataset.plan)));
  progressSteps.forEach(btn => btn.addEventListener('click', () => setStep(Number(btn.dataset.goStep))));

  continueButton.addEventListener('click', () => {
    if (!selected) return;
    setStep(2);
  });

  document.querySelector('[data-unsure]').addEventListener('click', () => {
    choose('start');
    setStep(2);
  });

  document.querySelector('[data-back-plan]').addEventListener('click', () => setStep(1));

  briefForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!briefForm.reportValidity() || !selected) return;
    completedBrief = true;
    briefOutput.textContent = buildBrief();
    readyPlan.textContent = plans[selected].title;
    readyPrice.textContent = plans[selected].investment;
    setStep(3);
  });

  document.querySelector('[data-edit-brief]').addEventListener('click', () => setStep(2));
  copyButton.addEventListener('click', copyBrief);
  contactButton.addEventListener('click', async () => {
    await copyBrief();
    const target = buildTallyUrl();
    const opened = window.open(target, '_blank', 'noopener');
    if (!opened) window.location.href = target;
  });

  const preset = new URLSearchParams(window.location.search).get('plan');
  if (plans[preset]) choose(preset);
})();