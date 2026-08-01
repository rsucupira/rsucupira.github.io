(() => {
  'use strict';

  const TALLY_URL = 'https://tally.so/r/XxdPVg';
  const TOTAL = 6;
  const PIPELINE_ORDER = ['planning', 'base', 'method', 'interpretation'];
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  const profiles = {
    planning: {
      label: 'Planejamento',
      title: 'Defina melhor o problema antes de analisar.',
      intro: 'Seu projeto precisa de maior clareza sobre pergunta, objetivo e dados necessários.',
      steps: [
        'Escreva a pergunta principal em uma frase.',
        'Defina se deseja descrever, comparar, relacionar ou prever.',
        'Liste as variáveis necessárias.',
        'Verifique se os dados disponíveis respondem ao objetivo.'
      ],
      avoid: [
        'Escolher um teste por semelhança com outro trabalho.',
        'Coletar variáveis sem saber como serão usadas.',
        'Pedir à IA um método sem explicar o desenho.'
      ]
    },
    base: {
      label: 'Organização da base',
      title: 'Torne os dados confiáveis e utilizáveis.',
      intro: 'A estrutura ou a qualidade da base pode gerar inconsistências e retrabalho.',
      steps: [
        'Preserve uma cópia da base original.',
        'Defina o que cada linha e coluna representam.',
        'Verifique ausências, duplicidades e formatos.',
        'Crie um dicionário de variáveis.'
      ],
      avoid: [
        'Corrigir células sem documentar.',
        'Misturar dados brutos e resultados.',
        'Começar a modelar antes de verificar a base.'
      ]
    },
    method: {
      label: 'Método e execução',
      title: 'Transforme a pergunta em um plano de análise.',
      intro: 'Sua pergunta e sua base parecem mais avançadas; agora é preciso selecionar e executar uma abordagem compatível.',
      steps: [
        'Classifique as variáveis.',
        'Defina o objetivo analítico.',
        'Revise desenho, amostra e pressupostos.',
        'Documente decisões e transformações.'
      ],
      avoid: [
        'Escolher o método somente pelo nome das variáveis.',
        'Confiar em código de IA sem validação.',
        'Testar alternativas até encontrar o resultado desejado.'
      ]
    },
    interpretation: {
      label: 'Interpretação',
      title: 'Converta resultados em uma conclusão responsável.',
      intro: 'O próximo passo é relacionar os resultados à pergunta, à magnitude, à incerteza e aos limites do estudo.',
      steps: [
        'Retome a pergunta original.',
        'Separe resultado numérico de interpretação.',
        'Avalie magnitude, incerteza e relevância.',
        'Comunique os limites claramente.'
      ],
      avoid: [
        'Resumir tudo à significância estatística.',
        'Confundir associação com causalidade.',
        'Copiar uma interpretação de IA sem verificá-la.'
      ]
    }
  };

  const projectAdvice = {
    'TCC ou trabalho de graduação': 'Em um TCC ou trabalho de graduação, priorize um escopo que possa ser explicado e defendido com clareza.',
    'Dissertação, tese ou artigo': 'Em uma dissertação, tese ou artigo, registre as decisões para garantir coerência metodológica e reprodutibilidade.',
    'Iniciação científica ou pesquisa': 'Em uma pesquisa, alinhe cada decisão analítica à pergunta e ao desenho do estudo.',
    'Relatório ou projeto profissional': 'Em um projeto profissional, conecte a análise à decisão concreta que deverá ser tomada.'
  };

  const toolAdvice = {
    Excel: 'No Excel, comece por uma estrutura tabular consistente, validações simples e uma aba separada para resultados.',
    Python: 'No Python, preserve os dados brutos, automatize as transformações e registre as versões do código.',
    'R, SPSS ou equivalente': 'Na ferramenta estatística escolhida, documente opções, pressupostos e transformações antes de interpretar a saída.',
    'Ainda não sei': 'Escolha a ferramenta somente depois de esclarecer o problema, a estrutura dos dados e o método necessário.'
  };

  const deadlineAdvice = {
    'Menos de 7 dias': {
      title: 'Prazo crítico',
      text: 'Reduza o escopo ao essencial e valide imediatamente se o projeto é executável com os dados e o tempo disponíveis.',
      ctaTitle: 'Verifique rapidamente a possibilidade de atendimento',
      ctaText: 'Envie o resultado e uma descrição breve. A prioridade será avaliar escopo, viabilidade e disponibilidade, sem promessa de conclusão no prazo.',
      button: 'Verificar atendimento urgente',
      urgency: 'alta'
    },
    'Entre 1 e 4 semanas': {
      title: 'Prazo de execução',
      text: 'Ainda há espaço para organizar um plano, mas as decisões de escopo e método devem ser tomadas antes de começar a executar.',
      ctaTitle: 'Transforme o mapa em um plano para o seu projeto',
      ctaText: 'Envie o resultado e uma descrição breve. Eu verificarei se o problema está dentro do meu escopo e indicarei o formato de atendimento mais adequado.',
      button: 'Solicitar avaliação do projeto',
      urgency: 'media'
    },
    'Mais de 1 mês': {
      title: 'Prazo favorável ao planejamento',
      text: 'Use o tempo disponível para definir a pergunta, estruturar a base e registrar decisões antes que o projeto fique urgente.',
      ctaTitle: 'Organize o projeto antes da urgência',
      ctaText: 'Envie o resultado e uma descrição breve para avaliar o melhor ponto de partida e evitar retrabalho.',
      button: 'Montar meu próximo passo',
      urgency: 'baixa'
    },
    'Sem prazo definido': {
      title: 'Sem prazo definido',
      text: 'Defina um primeiro marco concreto para evitar que o projeto permaneça indefinidamente no planejamento.',
      ctaTitle: 'Defina um próximo passo concreto',
      ctaText: 'Envie o resultado e uma descrição breve para avaliar o escopo e identificar uma primeira entrega viável.',
      button: 'Solicitar avaliação de aderência',
      urgency: 'indefinida'
    }
  };

  window.DIAGNOSTIC_CONFIG = {
    TALLY_URL,
    TOTAL,
    PIPELINE_ORDER,
    utmKeys,
    profiles,
    projectAdvice,
    toolAdvice,
    deadlineAdvice
  };
})();
