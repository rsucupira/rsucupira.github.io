(() => {
  'use strict';

  const {
    TALLY_URL,
    TOTAL,
    PIPELINE_ORDER,
    utmKeys,
    profiles,
    projectAdvice,
    toolAdvice,
    deadlineAdvice
  } = window.DIAGNOSTIC_CONFIG;
  const incoming = new URLSearchParams(window.location.search);

  const form = document.getElementById('diagnostic-form');
  const questions = [...document.querySelectorAll('.q')];
  const resultSection = document.getElementById('result');
  const progress = document.getElementById('prog');
  const nextButton = document.getElementById('next');
  const backButton = document.getElementById('back');
  const hint = document.getElementById('hint');
  const status = document.getElementById('status');

  let current = 0;
  let resultKey = '';
  let secondaryKey = '';
  let resultLabel = '';
  let secondaryLabel = '';
  let summary = '';
  let started = false;

  function track(event, extra = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...extra });
  }

  function showQuestion() {
    questions.forEach((question, index) => question.classList.toggle('on', index === current));
    const percentage = Math.round(((current + 1) / TOTAL) * 100);
    document.getElementById('step').textContent = `Pergunta ${current + 1} de ${TOTAL}`;
    document.getElementById('pct').textContent = `${percentage}%`;
    document.getElementById('bar').style.width = `${percentage}%`;
    backButton.classList.toggle('hide', current === 0);
    nextButton.textContent = current === TOTAL - 1 ? 'Ver meu resultado' : 'Continuar';
    hint.textContent = '';
  }

  function selected(name) {
    return form.querySelector(`input[name="${name}"]:checked`);
  }

  function calculateResult() {
    const scores = { planning: 0, base: 0, method: 0, interpretation: 0 };
    const stage = selected('stage');
    const difficulty = selected('difficulty');
    const data = selected('data');

    if (stage?.dataset.key) scores[stage.dataset.key] += 2;
    if (difficulty?.dataset.key) scores[difficulty.dataset.key] += 2;
    if (data?.dataset.key) scores[data.dataset.key] += 1;

    const ranking = PIPELINE_ORDER
      .map((key, pipelineIndex) => ({ key, score: scores[key], pipelineIndex }))
      .sort((a, b) => b.score - a.score || a.pipelineIndex - b.pipelineIndex);

    const primary = ranking[0].key;
    const second = ranking[1];
    const secondary = second.score >= 2 && ranking[0].score - second.score <= 1 ? second.key : '';

    return { primary, secondary, scores };
  }

  function buildEvidence(calculation) {
    const stage = selected('stage');
    const difficulty = selected('difficulty');
    const data = selected('data');
    const primary = profiles[calculation.primary].label;
    const secondary = calculation.secondary ? profiles[calculation.secondary].label : '';

    const signals = [
      { label: 'etapa', key: stage?.dataset.key, value: stage?.value },
      { label: 'bloqueio', key: difficulty?.dataset.key, value: difficulty?.value },
      { label: 'base', key: data?.dataset.key, value: data?.value }
    ];

    const primarySignals = signals.filter(signal => signal.key === calculation.primary).map(signal => signal.label);
    const scoreText = `${primary} recebeu ${calculation.scores[calculation.primary]} de 5 pontos possíveis`;

    if (secondary) {
      return `${scoreText}, com sinais vindos de ${primarySignals.join(' e ') || 'suas respostas'}. ${secondary} também apareceu como ponto relevante, por isso foi mantido como gargalo secundário.`;
    }

    return `${scoreText}, com sinais vindos de ${primarySignals.join(' e ') || 'suas respostas'}. Os demais pontos ficaram suficientemente abaixo para não alterar a prioridade recomendada.`;
  }

  function getPayload() {
    const data = new FormData(form);
    const deadline = data.get('deadline') || '';
    const deadlineConfig = deadlineAdvice[deadline] || deadlineAdvice['Sem prazo definido'];

    const payload = {
      resultado: resultLabel,
      resultado_secundario: secondaryLabel,
      projeto: data.get('project') || '',
      etapa: data.get('stage') || '',
      dificuldade: data.get('difficulty') || '',
      base: data.get('data') || '',
      ferramenta: data.get('tool') || '',
      prazo: deadline,
      urgencia: deadlineConfig.urgency,
      origem: incoming.get('origem') || incoming.get('utm_source') || 'diagnostico-site'
    };

    utmKeys.forEach(key => {
      if (incoming.get(key)) payload[key] = incoming.get(key);
    });

    return payload;
  }

  function buildTallyUrl() {
    const url = new URL(TALLY_URL);
    Object.entries(getPayload()).forEach(([key, value]) => url.searchParams.set(key, value));
    return url.toString();
  }

  function finish() {
    const calculation = calculateResult();
    resultKey = calculation.primary;
    secondaryKey = calculation.secondary;

    const profile = profiles[resultKey];
    resultLabel = profile.label;
    secondaryLabel = secondaryKey ? profiles[secondaryKey].label : '';

    const project = selected('project')?.value || '';
    const tool = selected('tool')?.value || '';
    const deadline = selected('deadline')?.value || 'Sem prazo definido';
    const deadlineConfig = deadlineAdvice[deadline] || deadlineAdvice['Sem prazo definido'];

    document.getElementById('tag').textContent = `Gargalo principal: ${profile.label}`;
    const secondaryTag = document.getElementById('secondary-tag');
    secondaryTag.textContent = secondaryLabel ? `Ponto secundário: ${secondaryLabel}` : '';
    secondaryTag.classList.toggle('hide', !secondaryLabel);

    document.getElementById('title').textContent = profile.title;
    document.getElementById('intro').textContent = profile.intro;
    document.getElementById('evidence').textContent = buildEvidence(calculation);
    document.getElementById('context-note').textContent = `${projectAdvice[project] || ''} ${toolAdvice[tool] || ''}`.trim();

    document.getElementById('result-steps').innerHTML = profile.steps.map(item => `<li>${item}</li>`).join('');
    document.getElementById('result-avoid').innerHTML = profile.avoid.map(item => `<li>${item}</li>`).join('');

    document.getElementById('urgency-title').textContent = deadlineConfig.title;
    document.getElementById('urgency-text').textContent = deadlineConfig.text;
    document.getElementById('cta-title').textContent = deadlineConfig.ctaTitle;
    document.getElementById('cta-text').textContent = deadlineConfig.ctaText;
    document.getElementById('continue-tally').textContent = deadlineConfig.button;

    const payload = getPayload();
    summary = [
      'Olá, Rodrigo. Fiz o Mapa do Gargalo da Minha Análise.',
      `Gargalo principal: ${payload.resultado}`,
      payload.resultado_secundario ? `Ponto secundário: ${payload.resultado_secundario}` : '',
      `Projeto: ${payload.projeto}`,
      `Etapa: ${payload.etapa}`,
      `Bloqueio: ${payload.dificuldade}`,
      `Base: ${payload.base}`,
      `Ferramenta: ${payload.ferramenta}`,
      `Prazo: ${payload.prazo}`,
      `Urgência: ${payload.urgencia}`,
      '',
      `Justificativa: ${document.getElementById('evidence').textContent}`,
      `Orientação contextual: ${document.getElementById('context-note').textContent}`,
      '',
      'Gostaria de explicar brevemente meu projeto.'
    ].filter(Boolean).join('\n');

    form.classList.add('hide');
    progress.classList.add('hide');
    resultSection.classList.remove('hide');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    track('diagnostico_concluido', {
      resultado: resultLabel,
      resultado_secundario: secondaryLabel,
      urgencia: deadlineConfig.urgency
    });
  }

  form.addEventListener('change', event => {
    if (!started && event.target.matches('input[type="radio"]')) {
      started = true;
      track('diagnostico_iniciado', {
        origem: incoming.get('utm_source') || incoming.get('origem') || 'direto'
      });
    }
  });

  nextButton.addEventListener('click', () => {
    if (!questions[current].querySelector('input:checked')) {
      hint.textContent = 'Selecione uma alternativa para continuar.';
      return;
    }

    if (current < TOTAL - 1) {
      current += 1;
      showQuestion();
      track('diagnostico_etapa', { etapa: current + 1 });
    } else {
      finish();
    }
  });

  backButton.addEventListener('click', () => {
    if (current > 0) current -= 1;
    showQuestion();
  });

  document.getElementById('continue-tally').addEventListener('click', () => {
    if (!resultLabel) {
      status.textContent = 'Conclua o diagnóstico antes de continuar.';
      status.classList.add('config-error');
      return;
    }

    const url = buildTallyUrl();
    track('tally_aberto', {
      resultado: resultLabel,
      resultado_secundario: secondaryLabel
    });
    window.location.assign(url);
  });

  document.getElementById('copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(summary);
      status.textContent = 'Resultado copiado.';
      status.classList.remove('config-error');
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = summary;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      const copied = document.execCommand('copy');
      area.remove();
      status.textContent = copied ? 'Resultado copiado.' : 'Não foi possível copiar. Selecione o texto manualmente.';
      status.classList.toggle('config-error', !copied);
    }

    track('resultado_copiado', {
      resultado: resultLabel,
      resultado_secundario: secondaryLabel
    });
  });

  document.getElementById('restart').addEventListener('click', () => {
    form.reset();
    current = 0;
    resultKey = '';
    secondaryKey = '';
    resultLabel = '';
    secondaryLabel = '';
    summary = '';
    started = false;
    resultSection.classList.add('hide');
    form.classList.remove('hide');
    progress.classList.remove('hide');
    status.textContent = '';
    showQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    track('diagnostico_reiniciado');
  });

  form.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      nextButton.click();
    }
  });

  showQuestion();
  track('diagnostico_visualizado', {
    origem: incoming.get('utm_source') || incoming.get('origem') || 'direto'
  });
})();