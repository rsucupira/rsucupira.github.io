window.LP_CONFIG = {
  ...window.LP_COMMON,
  slug: 'python-financas',
  service: 'python-financas',
  style: 'python-financas',
  theme: {
    ...window.LP_COMMON.theme,
    background: '#f6f9fd',
    surfaceAlt: '#eaf3fa',
    navy: '#0a2945',
    blue: '#176da5',
    blueLight: '#9bc7e7',
    gold: '#c99a35'
  },
  meta: {
    title: 'Python para Finanças — Aulas e Consultoria ao Vivo',
    description: 'Transforme dados financeiros em análises claras, reproduzíveis e automatizadas com Python. Aulas e consultoria online ao vivo.'
  },
  visual: {
    src: './hero.svg',
    alt: 'Tela de Python com série financeira, métricas de risco e estrutura de dados',
    caption: 'Um exemplo visual de código aplicado a retornos, risco e análise de portfólios.'
  },
  eyebrow: 'Python aplicado a finanças',
  headlineBefore: 'Transforme dados financeiros em ',
  highlight: 'análises claras e reproduzíveis',
  headlineAfter: '.',
  lead: 'Aulas e consultoria ao vivo para desenvolver projetos em Python com dados de mercado, carteiras, risco, séries temporais e automação — a partir do seu nível e de um problema real.',
  chips: ['Dados de mercado', 'Risco e portfólios', 'APIs e automação'],
  primaryCta: {
    type: 'link',
    label: 'Quero conversar sobre meu projeto',
    url: '/python-financas/#contato',
    origin: 'python-financas-hero'
  },
  secondaryCta: {
    type: 'link',
    label: 'Ver exemplos de aplicações',
    url: '/python-financas/#exemplos',
    origin: 'python-financas-exemplos'
  },
  audience: {
    eyebrow: 'Para quem faz sentido',
    title: 'Orientação ajustada ao seu ponto de partida.',
    lead: 'Você não precisa se encaixar em um curso fechado. O trabalho começa pelo seu nível, pela sua ferramenta e pelo resultado que deseja alcançar.',
    items: [
      {
        title: 'Estou começando em Python',
        text: 'Aprenda os fundamentos enquanto constrói uma aplicação financeira concreta, sem ficar preso apenas a exercícios genéricos.'
      },
      {
        title: 'Já uso planilhas ou código',
        text: 'Organize uma rotina manual, revise uma análise existente ou transforme uma planilha em um processo reproduzível.'
      },
      {
        title: 'Tenho um projeto real',
        text: 'Estruture um estudo acadêmico ou profissional envolvendo dados, risco, portfólios, automação ou pesquisa quantitativa.'
      }
    ]
  },
  benefits: {
    eyebrow: 'Exemplos de aplicações',
    title: 'Do dado bruto à análise que você consegue explicar e repetir.',
    lead: 'O escopo é definido de acordo com seu objetivo. Estes são alguns exemplos de problemas que podemos desenvolver juntos.',
    items: [
      {
        title: 'Análise de carteira',
        text: 'Retornos, volatilidade, correlação, drawdown, comparação com benchmark e visualizações.'
      },
      {
        title: 'Automação de relatórios',
        text: 'Importação de dados, atualização de indicadores, geração de gráficos e exportação de resultados.'
      },
      {
        title: 'Tratamento de dados de mercado',
        text: 'Limpeza, alinhamento de datas, ajustes, retornos, eventos e organização de séries temporais.'
      },
      {
        title: 'Pesquisa quantitativa',
        text: 'Notebooks reproduzíveis, testes, documentação, comparação de hipóteses e organização de experimentos.'
      },
      {
        title: 'Migração de Excel para Python',
        text: 'Transformação de uma rotina manual em código mais consistente, verificável e reutilizável.'
      },
      {
        title: 'Projeto acadêmico ou profissional',
        text: 'TCC, pesquisa, estudos de risco, análise de ativos, protótipos e rotinas internas.'
      }
    ]
  },
  steps: {
    eyebrow: 'Como funciona',
    title: 'Um processo simples, orientado a um problema real.',
    lead: 'A ideia é avançar com clareza, evitando tanto conteúdo genérico quanto a execução de uma solução que você não consiga compreender depois.',
    items: [
      {
        title: 'Entendimento do caso',
        text: 'Você descreve seu nível, dados, ferramenta, objetivo e prazo.'
      },
      {
        title: 'Estrutura técnica',
        text: 'Organizamos ambiente, bibliotecas, etapas, premissas e critérios de validação.'
      },
      {
        title: 'Implementação ao vivo',
        text: 'Codificamos, revisamos e documentamos juntos, com foco em compreensão e autonomia.'
      }
    ]
  },
  faq: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Antes de começar',
    lead: 'Algumas respostas para entender melhor o formato do atendimento.',
    items: [
      {
        question: 'Preciso saber Python?',
        answer: 'Não necessariamente. O trabalho pode começar pelos fundamentos, desde que o objetivo e o escopo sejam compatíveis com o seu nível.'
      },
      {
        question: 'É aula, mentoria ou consultoria?',
        answer: 'O formato depende do objetivo. Pode ser uma aula aplicada para aprender, uma orientação para revisar decisões ou uma consultoria técnica para estruturar uma análise.'
      },
      {
        question: 'Posso trazer minha planilha, código ou base de dados?',
        answer: 'Sim. Podemos partir de uma planilha, notebook, script, base autorizada ou descrição do problema. Dados sensíveis devem ser previamente anonimizados.'
      },
      {
        question: 'Pode envolver dados de mercado e APIs?',
        answer: 'Sim. Podemos trabalhar com APIs e bases autorizadas, respeitando licenças, limites, disponibilidade e regras de uso dos provedores.'
      },
      {
        question: 'Você fornece recomendações de investimento?',
        answer: 'Não. O trabalho é educacional e técnico, voltado a programação, pesquisa, dados, risco e modelagem. Não constitui recomendação de investimento.'
      },
      {
        question: 'Você faz o projeto inteiro por mim?',
        answer: 'A proposta é construção orientada e ao vivo, com participação ativa do cliente. O objetivo é que você compreenda, valide e consiga continuar o trabalho depois.'
      }
    ]
  },
  finalCta: {
    type: 'link',
    title: 'Conte o que você precisa desenvolver.',
    text: 'Explique brevemente seu objetivo, seu nível atual e as ferramentas que já utiliza. Com essas informações, consigo avaliar se e como posso ajudar.',
    label: 'Explicar meu projeto',
    url: '/python-financas/#contato',
    origin: 'python-financas-final'
  },
  footer: '© 2026 Dados Aplicados — aulas e consultoria ao vivo em Python para Finanças. Não constitui recomendação de investimento.'
};
