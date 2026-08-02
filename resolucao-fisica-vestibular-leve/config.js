window.LP_CONFIG = {
  ...window.LP_COMMON,
  slug: 'resolucao-fisica-vestibular-leve',
  service: 'fisica-vestibular',
  style: 'fisica-vestibular-leve',
  theme: {
    ...window.LP_COMMON.theme,
    background: '#f4efe5',
    surface: '#fffdf8',
    surfaceAlt: '#dceefa',
    text: '#082d4c',
    muted: '#47647a',
    navy: '#082d4c',
    blue: '#df6109',
    blueLight: '#a8d7ef',
    gold: '#f3c20d'
  },
  meta: {
    title: 'Física para Vestibular e ENEM — Rodrigo de Carvalho',
    description: 'Resolução orientada de questões de Física para vestibulares e ENEM, com foco em enunciado, escolha de relações, unidades, cálculo e revisão de erros.'
  },
  eyebrow: 'Resolução de questões para vestibulares e ENEM',
  headlineBefore: 'Antes de culpar a gravidade, descubra ',
  highlight: 'onde a questão te derruba',
  headlineAfter: '.',
  lead: 'Nem sempre o problema é toda a Física. Às vezes, o raciocínio trava em um ponto específico do enunciado, da fórmula, das unidades ou da conta. Vamos localizar esse ponto e trabalhar com questões reais de prova.',
  chips: ['Enunciado', 'Fórmula', 'Unidades', 'Conta'],
  primaryCta: {
    type: 'link',
    label: 'Explicar minha dificuldade',
    url: '/resolucao-fisica-vestibular-leve/#contato',
    origin: 'fisica-leve-hero'
  },
  secondaryCta: {
    type: 'link',
    label: 'Ver como funciona',
    url: '/resolucao-fisica-vestibular-leve/#como-funciona',
    origin: 'fisica-leve-como-funciona'
  },
  audience: {
    eyebrow: 'Descubra o ponto da queda',
    title: 'Onde o raciocínio costuma travar?',
    lead: 'Separar o tipo de dificuldade evita revisar toda a matéria sem direção.',
    items: [
      {title: 'Enunciado confuso', text: 'Traduzimos o texto para uma situação física, identificando dados, incógnitas e condições.'},
      {title: 'Fórmula sem contexto', text: 'Você aprende por que uma relação serve para aquela situação — e por que outras não servem.'},
      {title: 'Unidade ou conta', text: 'Revisamos sinais, conversões, álgebra e ordem de grandeza sem esconder o raciocínio.'},
      {title: 'Pressa de prova', text: 'Treinamos leitura, decisão e conferência para reduzir erros evitáveis no vestibular.'}
    ]
  },
  benefits: {
    eyebrow: 'O que você desenvolve',
    title: 'Mais estratégia. Menos caça aleatória à fórmula.',
    lead: 'Cada questão vira um treino de interpretação, escolha, execução e revisão.',
    items: [
      {title: 'Entenda o enunciado', text: 'Aprenda a identificar o que a questão realmente pede.'},
      {title: 'Descubra qual relação usar', text: 'Escolha o caminho certo sem depender de adivinhação.'},
      {title: 'Revise seus erros', text: 'Transforme erros recorrentes em aprendizado de verdade.'},
      {title: 'Treine com foco em vestibular', text: 'Use questões selecionadas do ENEM e de provas específicas.'}
    ]
  },
  steps: {
    eyebrow: 'Como funciona',
    title: 'Sem tentar decorar o universo em uma tarde.',
    lead: 'O atendimento é ao vivo, online e organizado a partir da sua prova e das suas dificuldades.',
    items: [
      {title: 'Você explica a situação', text: 'Conte a prova-alvo, o prazo e os tipos de questão em que costuma travar.'},
      {title: 'Selecionamos questões', text: 'Escolhemos exercícios por assunto, nível e perfil do vestibular.'},
      {title: 'Resolvemos e revisamos', text: 'Discutimos cada decisão, os erros e formas de conferir o resultado.'}
    ]
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'Antes da primeira questão.',
    lead: 'Clareza sobre o formato do atendimento e o que você pode esperar.',
    items: [
      {question: 'Preciso saber todas as fórmulas?', answer: 'Não. É mais importante compreender quando uma relação se aplica, como interpretar as grandezas e como reconstruir o raciocínio.'},
      {question: 'Minha matemática atrapalha a Física?', answer: 'Podemos identificar e retomar exatamente a parte matemática necessária para as questões, sem transformar o atendimento em uma revisão genérica.'},
      {question: 'Posso trazer listas, simulados e provas anteriores?', answer: 'Sim. Materiais da escola, do cursinho, do ENEM e de vestibulares específicos podem orientar os encontros.'},
      {question: 'Você resolve prova ou trabalho por mim?', answer: 'Não. O serviço é educacional: ensino, orientação e revisão do raciocínio. Não realizo avaliações ou trabalhos acadêmicos em nome do aluno.'}
    ]
  },
  finalCta: {
    type: 'link',
    title: 'Talvez a Física não esteja contra você.',
    text: 'Preencha o formulário ao lado ou fale diretamente pelo WhatsApp. Conte qual vestibular pretende fazer e em que tipo de questão costuma travar.',
    label: 'Ir para o formulário',
    url: '/resolucao-fisica-vestibular-leve/#formulario-contato',
    origin: 'fisica-leve-final'
  },
  footer: '© 2026 Rodrigo de Carvalho — atendimento educacional ao vivo e online.'
};

(() => {
  'use strict';

  const FORM_ID = 'XxdPVg';
  const WHATSAPP_NUMBER = '5511934352448';
  const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  function buildTallyEmbedUrl() {
    const url = new URL(`https://tally.so/embed/${FORM_ID}`);
    url.searchParams.set('alignLeft', '1');
    url.searchParams.set('hideTitle', '1');
    url.searchParams.set('transparentBackground', '1');
    url.searchParams.set('dynamicHeight', '1');
    url.searchParams.set('lp', window.LP_CONFIG.slug);
    url.searchParams.set('servico', window.LP_CONFIG.service);
    url.searchParams.set('origem', 'fisica-leve-embed');

    const incoming = new URLSearchParams(window.location.search);
    campaignKeys.forEach(key => {
      const value = incoming.get(key);
      if (value) url.searchParams.set(key, value);
    });

    return url.toString();
  }

  function loadTallyEmbed() {
    const widgetUrl = 'https://tally.so/widgets/embed.js';
    const fallback = () => {
      document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(iframe => {
        iframe.src = iframe.dataset.tallySrc;
      });
    };
    const activate = () => {
      if (typeof window.Tally !== 'undefined') window.Tally.loadEmbeds();
      else fallback();
    };

    if (typeof window.Tally !== 'undefined') {
      activate();
      return;
    }

    const existing = document.querySelector(`script[src="${widgetUrl}"]`);
    if (existing) {
      existing.addEventListener('load', activate, {once: true});
      fallback();
      return;
    }

    const script = document.createElement('script');
    script.src = widgetUrl;
    script.onload = activate;
    script.onerror = fallback;
    document.body.appendChild(script);
  }

  function injectContactOptions() {
    if (document.getElementById('formulario-contato')) return;

    const contactCard = document.querySelector('.contact-section .lp-cta');
    if (!contactCard) return;

    contactCard.classList.add('contact-with-form');

    const actions = contactCard.querySelector('.lp-actions');
    if (actions) {
      actions.innerHTML = '';

      const whatsappMessage = 'Olá, Rodrigo. Vim pela página de Física para Vestibular e ENEM e gostaria de explicar minha dificuldade.';
      const whatsapp = document.createElement('a');
      whatsapp.className = 'lp-btn whatsapp-direct';
      whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
      whatsapp.target = '_blank';
      whatsapp.rel = 'noopener noreferrer';
      whatsapp.textContent = 'Falar diretamente pelo WhatsApp';
      whatsapp.dataset.ctaType = 'whatsapp';
      whatsapp.dataset.ctaOrigin = 'fisica-leve-whatsapp';
      whatsapp.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'whatsapp_aberto',
          pagina: window.LP_CONFIG.slug,
          servico: window.LP_CONFIG.service,
          origem: 'fisica-leve-whatsapp'
        });
      });
      actions.appendChild(whatsapp);
    }

    const form = document.createElement('div');
    form.className = 'embedded-contact-form';
    form.id = 'formulario-contato';
    form.innerHTML = `
      <div class="embedded-form-heading">
        <span>Prefere escrever primeiro?</span>
        <strong>Explique sua dificuldade sem sair da página.</strong>
      </div>
      <div class="tally-frame-shell">
        <iframe
          data-tally-src="${buildTallyEmbedUrl()}"
          loading="lazy"
          width="100%"
          height="640"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Formulário de contato — Física para Vestibular e ENEM"
        ></iframe>
      </div>
      <small>As respostas ficam registradas no Tally para que eu possa entender o contexto antes do contato.</small>
    `;
    contactCard.appendChild(form);

    const style = document.createElement('style');
    style.textContent = `
      .contact-section .contact-with-form{
        grid-template-columns:minmax(250px,.78fr) minmax(420px,1.22fr);
        gap:46px;
        align-items:start;
        padding:52px;
        clip-path:none;
        border-radius:10px;
        overflow:visible;
      }
      .contact-section .contact-with-form>div:nth-of-type(2){grid-column:1;grid-row:1}
      .contact-section .contact-with-form>.lp-actions{grid-column:1;grid-row:2;margin-top:4px}
      .contact-section .contact-with-form .cta-hand{display:none}
      .embedded-contact-form{
        grid-column:2;
        grid-row:1 / span 3;
        min-width:0;
        padding:26px 24px 18px;
        background:#fffdf8;
        color:#082d4c;
        border:2px solid #082d4c;
        border-radius:8px;
        box-shadow:10px 12px 0 rgba(8,45,76,.2);
        position:relative;
        z-index:4;
        scroll-margin-top:100px;
      }
      .embedded-form-heading{margin:0 4px 18px}
      .embedded-form-heading span{
        display:block;
        color:#df6109;
        font-size:.74rem;
        font-weight:900;
        letter-spacing:.13em;
        text-transform:uppercase;
      }
      .embedded-form-heading strong{
        display:block;
        margin-top:5px;
        font:700 clamp(1.55rem,2.4vw,2.25rem)/1.05 Oswald,Impact,sans-serif;
        text-transform:uppercase;
      }
      .tally-frame-shell{min-height:420px;overflow:hidden;border-radius:5px;background:#fff}
      .tally-frame-shell iframe{display:block;min-height:420px}
      .embedded-contact-form small{display:block;margin:14px 4px 0;color:#47647a;line-height:1.45}
      .whatsapp-direct{
        width:100%;
        min-height:58px;
        padding-inline:18px;
        background:#148a49;
        color:#fff;
        border:2px solid #082d4c;
        box-shadow:7px 8px 0 rgba(8,45,76,.22);
        text-align:center;
      }
      .whatsapp-direct:before{content:'●';margin-right:9px;color:#d8ffe7;font-size:.78rem}
      .whatsapp-direct:hover{background:#0e713b}
      @media (max-width:900px){
        .contact-section .contact-with-form{grid-template-columns:1fr;padding:36px 28px;gap:28px}
        .contact-section .contact-with-form>div:nth-of-type(2),
        .contact-section .contact-with-form>.lp-actions,
        .embedded-contact-form{grid-column:1;grid-row:auto}
        .embedded-contact-form{padding:22px 14px 14px;box-shadow:7px 8px 0 rgba(8,45,76,.2)}
      }
      @media (max-width:560px){
        .contact-section .contact-with-form{padding:30px 18px}
        .embedded-contact-form{padding-inline:9px}
        .embedded-form-heading{margin-inline:10px}
        .whatsapp-direct{font-size:.92rem}
      }
    `;
    document.head.appendChild(style);

    loadTallyEmbed();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectContactOptions, {once: true});
  } else {
    injectContactOptions();
  }
})();
