window.LP_CONFIG = {
  ...window.LP_COMMON,
  slug: 'nova-lp',
  service: 'nova-oferta',
  style: 'default',
  meta: {
    title: 'Título da landing page — Dados Aplicados',
    description: 'Descrição curta para mecanismos de busca e compartilhamento.'
  },
  visual: {
    src: './hero.svg',
    alt: 'Descrição objetiva da ilustração da página',
    caption: 'Explique o que a imagem representa.'
  },
  eyebrow: 'Categoria da oferta',
  headlineBefore: 'Resolva ',
  highlight: 'um problema específico',
  headlineAfter: ' com um caminho claro.',
  lead: 'Explique em uma ou duas frases o problema, o público e o resultado que a página promete.',
  chips: ['Benefício imediato', 'Baixa fricção', 'Próximo passo claro'],
  primaryCta: {
    type: 'tally',
    label: 'Quero avançar',
    origin: 'nova-lp-hero'
  },
  secondaryCta: {
    type: 'link',
    label: 'Fazer mapa gratuito',
    url: '/diagnostico/?origem=nova-lp-mapa'
  },
  audience: {
    eyebrow: 'Para quem é',
    title: 'Defina públicos concretos.',
    lead: 'Evite uma página para todo mundo.',
    items: [
      {title: 'Público 1', text: 'Situação e necessidade específica.'},
      {title: 'Público 2', text: 'Situação e necessidade específica.'},
      {title: 'Público 3', text: 'Situação e necessidade específica.'}
    ]
  },
  benefits: {
    eyebrow: 'O que muda',
    title: 'Mostre resultados e não apenas funcionalidades.',
    lead: 'Cada bloco deve responder por que vale a pena continuar.',
    items: [
      {title: 'Clareza', text: 'A pessoa entende o problema e o próximo passo.'},
      {title: 'Aplicação', text: 'O conteúdo é conectado a uma tarefa real.'},
      {title: 'Segurança', text: 'Limites e responsabilidades ficam explícitos.'}
    ]
  },
  steps: {
    eyebrow: 'Como funciona',
    title: 'Um fluxo curto e previsível.',
    lead: 'Use de três a cinco passos.',
    items: [
      {title: 'Primeiro passo', text: 'Ação inicial de baixa fricção.'},
      {title: 'Avaliação', text: 'O caso é analisado antes de qualquer compromisso.'},
      {title: 'Execução', text: 'A solução adequada é definida.'}
    ]
  },
  faq: {
    title: 'Dúvidas antes de começar',
    items: [
      {question: 'Para quem é este serviço?', answer: 'Responda de forma específica.'},
      {question: 'O que acontece depois do formulário?', answer: 'Explique o processo sem promessas excessivas.'},
      {question: 'Quais são os limites do atendimento?', answer: 'Informe escopo e responsabilidades.'}
    ]
  },
  finalCta: {
    type: 'tally',
    title: 'Feche com uma única ação.',
    text: 'Repita a promessa e reduza a dúvida sobre o que acontece depois.',
    label: 'Começar agora',
    origin: 'nova-lp-final'
  },
  footer: '© 2026 Dados Aplicados — página de campanha.'
};