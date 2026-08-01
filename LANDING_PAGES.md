# Sistema de landing pages

## Objetivo

Permitir a criação de páginas segmentadas sem reescrever layout, responsividade, tracking, UTMs ou integração com o formulário.

## Páginas publicadas neste sistema

- `/calculo/`
- `/matematica-vestibular/`
- `/fisica-vestibular/`
- `/bioestatistica/`
- `/python/`
- `/excel/`
- `/dashboards/`
- `/inteligencia-artificial/`

Cada página possui:

- público e proposta próprios;
- configuração em `config.js`;
- ilustração exclusiva em `hero.svg`;
- paleta branca, azul e dourada com variações individuais;
- CTA principal para o mesmo Tally;
- CTA secundário para o Mapa do Gargalo;
- FAQ e orientação de escopo.

## Estrutura compartilhada

- `assets/lp-common.js`: Tally, marca e paleta padrão.
- `assets/lp.css`: componentes visuais e variações por página.
- `assets/lp-runtime.js`: renderização, tracking, Tally e UTMs.
- `modelo-lp/`: estrutura usada para novas páginas.
- `scripts/create-lp.mjs`: cria uma nova pasta a partir do modelo.
- `obrigado/`: conclusão comum aos formulários.
- `privacidade/`: aviso de privacidade.

## Tally único

Todas as LPs usam:

```text
https://tally.so/r/XxdPVg
```

O JavaScript monta o link automaticamente e envia os seguintes campos ocultos:

- `lp`: slug da landing page;
- `servico`: categoria comercial;
- `origem`: posição do CTA, por exemplo `excel-hero` ou `python-final`;
- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`.

Exemplo de URL gerada:

```text
https://tally.so/r/XxdPVg?lp=excel&servico=excel&origem=excel-hero&utm_source=instagram&utm_campaign=excel-agosto
```

Os campos `lp`, `servico` e `origem` devem existir no Tally com os mesmos nomes e letras minúsculas.

O diagnóstico também continua enviando:

- `resultado`;
- `resultado_secundario`;
- `projeto`;
- `etapa`;
- `dificuldade`;
- `base`;
- `ferramenta`;
- `prazo`;
- `urgencia`;
- `origem`;
- UTMs.

Configure o redirecionamento do Tally para:

```text
https://rsucupira.github.io/obrigado/
```

## Criar outra página

```bash
node scripts/create-lp.mjs matematica-financeira "Matemática Financeira"
```

Depois:

1. editar `matematica-financeira/config.js`;
2. substituir `matematica-financeira/hero.svg`;
3. definir `service`, textos e origens dos CTAs;
4. manter uma oferta e um público principal;
5. testar celular e desktop;
6. conferir o link final do Tally;
7. abrir um PR antes da publicação.

## Regra estratégica

Uma LP deve ter:

- um público;
- um problema principal;
- uma promessa específica;
- uma ação principal;
- uma origem identificável.

Não misture cálculo, preparação para vestibular, dashboards e IA na mesma página. A página principal funciona como hub e cada campanha deve apontar para a LP mais específica.