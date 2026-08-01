# Sistema de landing pages

## Objetivo

Permitir a criação de novas LPs sem copiar toda a estrutura visual ou reescrever tracking, UTMs e responsividade.

## Estrutura

- `assets/lp.css`: componentes visuais compartilhados.
- `assets/lp-runtime.js`: renderização, tracking e preservação de parâmetros.
- `modelo-lp/index.html`: estrutura padrão.
- `modelo-lp/config.js`: conteúdo editável de uma LP.
- `scripts/create-lp.mjs`: cria uma nova pasta a partir do modelo.
- `obrigado/`: página de conclusão comum aos formulários.
- `privacidade/`: aviso comum de privacidade.

## Criar uma página

```bash
node scripts/create-lp.mjs bioestatistica "Bioestatística para projetos acadêmicos"
```

Depois:

1. editar `bioestatistica/config.js`;
2. definir uma única oferta e um público específico;
3. ajustar `origem` nos CTAs;
4. testar celular e desktop;
5. validar Tally e página de agradecimento;
6. abrir um PR antes da publicação.

## Convenções

### URL

Use slugs curtos:

- `/bioestatistica/`
- `/excel-para-pesquisa/`
- `/matematica-financeira/`

### Origem

Todo CTA para o diagnóstico deve usar:

```text
/diagnostico/?origem=<slug>-<posicao>
```

Exemplos:

- `bioestatistica-hero`
- `bioestatistica-final`
- `excel-pesquisa-anuncio-01`

### UTMs

Os scripts preservam:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `origem`

### Resultado e Tally

O formulário atual pode receber:

- `resultado`
- `resultado_secundario`
- `projeto`
- `etapa`
- `dificuldade`
- `base`
- `ferramenta`
- `prazo`
- `urgencia`
- `origem`
- UTMs

Configure o redirecionamento do Tally para:

```text
https://rsucupira.github.io/obrigado/
```

Quando possível, inclua parâmetros relevantes no redirecionamento.

## Regra estratégica

Uma LP deve ter:

- um público;
- um problema principal;
- uma promessa específica;
- uma ação principal;
- uma origem identificável.

Não misture, na mesma LP, aulas de cálculo, consultoria em trading, Excel empresarial e acompanhamento acadêmico. Crie páginas separadas e use a página principal como hub.