window.LP_CONFIG = {
  ...window.LP_COMMON,
  slug: 'dashboards', service: 'dashboards', style: 'dashboards',
  theme: {...window.LP_COMMON.theme, background: '#f5f8fc', surfaceAlt: '#eaf0f7', navy: '#102d4e', blue: '#285f9d', blueLight: '#9dbfe4', gold: '#c8952d'},
  meta: {title: 'Dashboards e Indicadores — Dados Aplicados', description: 'Orientação para estruturar indicadores, visualizações e dashboards claros.'},
  visual: {src: './hero.svg', alt: 'Ilustração de dashboard com indicadores, gráficos e cartões KPI', caption: 'Indicadores úteis, hierarquia visual e leitura rápida.'},
  eyebrow: 'Visualização e decisão',
  headlineBefore: 'Dashboards para transformar ', highlight: 'dados em decisão', headlineAfter: '.',
  lead: 'Estruture indicadores, gráficos e painéis que ajudem a acompanhar o que realmente importa — sem excesso de informação.',
  chips: ['KPIs e métricas', 'Excel ou Python', 'Painéis gerenciais'],
  primaryCta: {type: 'tally', label: 'Quero estruturar um dashboard', origin: 'dashboards-hero'},
  secondaryCta: {type: 'link', label: 'Fazer mapa gratuito', url: '/diagnostico/?origem=dashboards-mapa'},
  audience: {eyebrow: 'Para quem é', title: 'Para quem tem dados, mas ainda não tem uma visão útil.', items: [
    {title: 'Gestores', text: 'Acompanhamento de resultados, metas, riscos e prioridades.'},
    {title: 'Analistas', text: 'Organização de métricas e visualizações para relatórios recorrentes.'},
    {title: 'Pequenos negócios', text: 'Painéis simples para vendas, operação, caixa ou atendimento.'}
  ]},
  benefits: {eyebrow: 'O que trabalhamos', title: 'Clareza antes da ferramenta.', items: [
    {title: 'Definição de KPIs', text: 'Métricas alinhadas à decisão, com fórmula e periodicidade claras.'},
    {title: 'Arquitetura visual', text: 'Hierarquia, comparação, contexto e redução de ruído.'},
    {title: 'Implementação', text: 'Painéis em Excel, Python ou outra solução adequada ao caso.'}
  ]},
  steps: {eyebrow: 'Como funciona', title: 'Do objetivo ao painel utilizável.', items: [
    {title: 'Decisões', text: 'Definimos quais perguntas o dashboard deve responder.'},
    {title: 'Dados e métricas', text: 'Verificamos disponibilidade, qualidade e cálculos.'},
    {title: 'Protótipo', text: 'Construímos, testamos e refinamos a visualização.'}
  ]},
  faq: {title: 'Dúvidas sobre dashboards', items: [
    {question: 'Você trabalha apenas com Power BI?', answer: 'Não. A ferramenta depende do contexto; Excel e Python também podem ser usados.'},
    {question: 'Serve para empresas pequenas?', answer: 'Sim. Um painel simples e bem escolhido pode ser mais útil do que uma solução complexa.'},
    {question: 'Você organiza os indicadores?', answer: 'Sim. A definição de métricas e regras de cálculo faz parte da avaliação.'}
  ]},
  finalCta: {type: 'tally', title: 'Um bom dashboard começa pelas decisões, não pelos gráficos.', text: 'Conte o que precisa acompanhar. A origem Dashboards será registrada automaticamente.', label: 'Avaliar meu dashboard', origin: 'dashboards-final'},
  footer: '© 2026 Dados Aplicados — estruturação de indicadores e dashboards.'
};