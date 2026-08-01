window.LP_CONFIG = {
  ...window.LP_COMMON,
  slug: 'excel', service: 'excel', style: 'excel',
  theme: {...window.LP_COMMON.theme, background: '#f8fbfd', surfaceAlt: '#eef6f5', navy: '#173a4c', blue: '#25708f', blueLight: '#a5d5df', gold: '#c69b43'},
  meta: {title: 'Excel para Estudos e Trabalho — Dados Aplicados', description: 'Aulas e orientação em Excel para organização, fórmulas e análise de dados.'},
  visual: {src: './hero.svg', alt: 'Ilustração de planilha Excel com fórmulas, tabela e gráfico', caption: 'Planilhas mais claras, confiáveis e úteis.'},
  eyebrow: 'Organização e análise prática',
  headlineBefore: 'Excel para ', highlight: 'organizar e analisar', headlineAfter: ' com mais segurança.',
  lead: 'Aprenda a estruturar planilhas, usar fórmulas e transformar dados do dia a dia em informações úteis.',
  chips: ['Fórmulas e funções', 'Tabelas e gráficos', 'Uso acadêmico e profissional'],
  primaryCta: {type: 'tally', label: 'Quero melhorar no Excel', origin: 'excel-hero'},
  secondaryCta: {type: 'link', label: 'Fazer mapa gratuito', url: '/diagnostico/?origem=excel-mapa'},
  audience: {eyebrow: 'Para quem é', title: 'Para quem usa planilhas e quer reduzir erros e retrabalho.', items: [
    {title: 'Estudantes', text: 'Trabalhos, pesquisas, organização de dados e cálculos.'},
    {title: 'Profissionais', text: 'Rotinas administrativas, controles, relatórios e análises.'},
    {title: 'Pequenos negócios', text: 'Acompanhamento simples de operações, vendas e indicadores.'}
  ]},
  benefits: {eyebrow: 'O que trabalhamos', title: 'Da planilha confusa a uma estrutura utilizável.', items: [
    {title: 'Organização', text: 'Linhas, colunas, tabelas, validações e padrões de preenchimento.'},
    {title: 'Fórmulas', text: 'Funções lógicas, buscas, datas, textos, agregações e referências.'},
    {title: 'Análise', text: 'Filtros, tabelas dinâmicas, gráficos e resumos gerenciais.'}
  ]},
  steps: {eyebrow: 'Como funciona', title: 'Aprender usando situações próximas da sua rotina.', items: [
    {title: 'Necessidade', text: 'Você descreve a planilha, tarefa ou dificuldade.'},
    {title: 'Estrutura', text: 'Identificamos a melhor organização e as fórmulas necessárias.'},
    {title: 'Aplicação', text: 'Construímos e revisamos o processo em conjunto.'}
  ]},
  faq: {title: 'Dúvidas sobre Excel', items: [
    {question: 'Atende iniciantes?', answer: 'Sim. As aulas podem começar pelos fundamentos de planilhas e referências.'},
    {question: 'Posso usar uma planilha do meu trabalho?', answer: 'Sim, desde que você tenha autorização e remova dados pessoais, sigilosos ou confidenciais.'},
    {question: 'Você cria dashboards no Excel?', answer: 'Sim, dentro de um escopo definido; projetos de dashboard também possuem uma LP específica.'}
  ]},
  finalCta: {type: 'tally', title: 'Uma planilha bem estruturada economiza tempo todos os dias.', text: 'Descreva seu objetivo no formulário único. A identificação Excel será enviada de forma oculta.', label: 'Conversar sobre Excel', origin: 'excel-final'},
  footer: '© 2026 Dados Aplicados — ensino e orientação em Excel.'
};