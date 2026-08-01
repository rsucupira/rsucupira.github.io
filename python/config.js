window.LP_CONFIG = {
  ...window.LP_COMMON,
  slug: 'python', service: 'programacao-python', style: 'python',
  theme: {...window.LP_COMMON.theme, navy: '#132f4c', blue: '#2467a6', blueLight: '#9ac6e8', gold: '#d0a13b'},
  meta: {title: 'Programação em Python — Dados Aplicados', description: 'Aulas e orientação em Python para iniciantes, análise de dados e automação.'},
  visual: {src: './hero.svg', alt: 'Ilustração de editor de código Python, terminal e gráfico', caption: 'Código compreensível, aplicado a problemas reais.'},
  eyebrow: 'Programação aplicada',
  headlineBefore: 'Python para ', highlight: 'resolver problemas', headlineAfter: ', analisar e automatizar.',
  lead: 'Aprenda programação com projetos e exemplos próximos do seu objetivo, em vez de copiar código sem entender.',
  chips: ['Iniciantes', 'Dados e automação', 'Projetos práticos'],
  primaryCta: {type: 'tally', label: 'Quero aprender Python', origin: 'python-hero'},
  secondaryCta: {type: 'link', label: 'Fazer mapa gratuito', url: '/diagnostico/?origem=python-mapa'},
  audience: {eyebrow: 'Para quem é', title: 'Para quem quer usar Python com finalidade concreta.', items: [
    {title: 'Iniciantes', text: 'Primeiros passos em lógica, variáveis, estruturas, funções e organização.'},
    {title: 'Estudantes e pesquisadores', text: 'Manipulação de dados, gráficos, automação e pequenos projetos.'},
    {title: 'Profissionais', text: 'Rotinas repetitivas, arquivos, relatórios e integração de dados.'}
  ]},
  benefits: {eyebrow: 'O que desenvolvemos', title: 'Autonomia para ler, escrever e corrigir código.', items: [
    {title: 'Fundamentos', text: 'Lógica, tipos, decisões, repetições, funções e módulos.'},
    {title: 'Aplicações', text: 'Planilhas, dados, visualizações, arquivos e automação.'},
    {title: 'Depuração', text: 'Entender mensagens de erro e testar hipóteses de correção.'}
  ]},
  steps: {eyebrow: 'Como funciona', title: 'Aprendizado orientado ao seu projeto.', items: [
    {title: 'Objetivo', text: 'Definimos o que você quer construir ou compreender.'},
    {title: 'Trilha', text: 'Selecionamos conceitos e exercícios necessários.'},
    {title: 'Construção', text: 'Programamos, testamos e documentamos juntos.'}
  ]},
  faq: {title: 'Dúvidas sobre Python', items: [
    {question: 'Serve para quem nunca programou?', answer: 'Sim. O conteúdo começa no nível atual do aluno.'},
    {question: 'O foco é análise de dados?', answer: 'Pode ser, mas também atendemos fundamentos, automação e pequenos projetos.'},
    {question: 'Você entrega um programa pronto?', answer: 'O foco é ensinar e construir em conjunto. Projetos profissionais completos precisam de escopo específico.'}
  ]},
  finalCta: {type: 'tally', title: 'Python fica mais claro quando existe um problema real para resolver.', text: 'Informe seu nível e objetivo. O Tally registra automaticamente que o interesse veio da LP de Python.', label: 'Avaliar meu objetivo com Python', origin: 'python-final'},
  footer: '© 2026 Dados Aplicados — ensino e orientação em programação Python.'
};