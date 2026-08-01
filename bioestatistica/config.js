window.LP_CONFIG = {
      ...window.LP_COMMON,
      slug: 'bioestatistica', service: 'bioestatistica', style: 'bioestatistica',
      theme: {...window.LP_COMMON.theme, background: '#f8fbff', surfaceAlt: '#edf6fb', blue: '#246aa0', blueLight: '#9acbdc', gold: '#b9984d'},
      meta: {title: 'Bioestatística para TCC e Pesquisa — Dados Aplicados', description: 'Orientação em bioestatística para estudantes e pesquisadores das áreas biológicas, saúde e agrárias.'},
      visual: {src: './hero.svg', alt: 'Ilustração científica com gráfico, amostras e planilha de dados', caption: 'Pergunta, base, análise e interpretação em um mesmo fluxo.'},
      eyebrow: 'Bioestatística aplicada',
      headlineBefore: 'Do dado à ', highlight: 'interpretação', headlineAfter: ' em TCC, artigo e pesquisa.',
      lead: 'Orientação para estudantes e pesquisadores das áreas biológicas, saúde e agrárias que precisam organizar dados e tomar decisões metodológicas responsáveis.',
      chips: ['TCC e artigos', 'Biológicas e saúde', 'Excel, Python ou R'],
      primaryCta: {type: 'tally', label: 'Quero avaliar meu projeto', origin: 'bioestatistica-hero'},
      secondaryCta: {type: 'link', label: 'Fazer mapa gratuito', url: '/diagnostico/?origem=bioestatistica-mapa'},
      audience: {eyebrow: 'Para quem é', title: 'Para projetos com uma pergunta real e dados para compreender.', items: [
        {title: 'Graduação', text: 'TCC, iniciação científica e disciplinas de bioestatística.'},
        {title: 'Pós-graduação', text: 'Dissertações, artigos e projetos com maior exigência metodológica.'},
        {title: 'Áreas aplicadas', text: 'Biologia, biomedicina, saúde, veterinária e ciências agrárias.'}
      ]},
      benefits: {eyebrow: 'O que trabalhamos', title: 'Da pergunta à apresentação dos resultados.', items: [
        {title: 'Pergunta e variáveis', text: 'Objetivo, desfecho, grupos, fatores e estrutura do estudo.'},
        {title: 'Base e análise', text: 'Qualidade, ausências, categorias, resumos, gráficos e métodos compatíveis.'},
        {title: 'Interpretação', text: 'Incerteza, relevância, limitações e conclusão responsável.'}
      ]},
      steps: {eyebrow: 'Como funciona', title: 'Comece sem enviar a base.', items: [
        {title: 'Contexto', text: 'Você informa projeto, etapa, ferramenta e prazo.'},
        {title: 'Aderência', text: 'Verifico escopo, riscos e formato adequado.'},
        {title: 'Plano', text: 'Definimos sessão pontual ou acompanhamento.'}
      ]},
      faq: {title: 'Dúvidas sobre bioestatística', items: [
        {question: 'Preciso enviar a base no primeiro contato?', answer: 'Não. Primeiro avaliamos objetivo, desenho, etapa e dificuldade, sem documentos confidenciais.'},
        {question: 'Você escolhe o teste e faz o trabalho?', answer: 'O serviço é de orientação e apoio técnico. Não substitui o autor nem realiza avaliações acadêmicas em seu nome.'},
        {question: 'Atende projetos de saúde?', answer: 'Sim, quando o escopo metodológico estiver dentro da experiência disponível e os dados forem tratados de forma adequada.'}
      ]},
      finalCta: {type: 'tally', title: 'Nem todo problema de bioestatística começa no teste.', text: 'Descreva o projeto e o prazo. O Tally receberá automaticamente a identificação desta LP.', label: 'Solicitar avaliação de aderência', origin: 'bioestatistica-final'},
      footer: '© 2026 Dados Aplicados — bioestatística com finalidade educacional e metodológica.'
};