# Sistema de landing pages

## Objetivo

Permitir a criação de páginas segmentadas sem reescrever layout, responsividade, tracking, UTMs ou integração com o formulário.

## Páginas em português

- `/calculo/`
- `/matematica-vestibular/`
- `/fisica-vestibular/`
- `/bioestatistica/`
- `/python/`
- `/python-financas/`
- `/excel/`
- `/dashboards/`
- `/inteligencia-artificial/`

## Página em inglês

- `/systematic-investments/`

A página em inglês não aparece no hub da página principal. Ela deve ser distribuída por URL direta, contato profissional ou campanha específica.

## Modalidade obrigatória

Todas as LPs destacam:

- atendimento ao vivo e online;
- interação em tempo real;
- formato de aula, consultoria ou orientação;
- ausência de curso ou conteúdo gravado.

A versão em inglês recebe o texto equivalente em inglês.

## Estrutura de cada página

Cada página possui:

- público e proposta próprios;
- configuração em `config.js`;
- ilustração exclusiva em `hero.svg`;
- paleta branca, azul e dourada com variações individuais;
- CTA principal e final para o mesmo Tally;
- CTA secundário contextual;
- FAQ e orientação de escopo.

## Estrutura compartilhada

- `assets/lp-common.js`: Tally, marca e paleta padrão.
- `assets/lp.css`: componentes, destaque ao vivo e variações por página.
- `assets/lp-runtime.js`: renderização, tracking, Tally e UTMs.
- `modelo-lp/`: estrutura usada para novas páginas.
- `scripts/create-lp.mjs`: cria uma nova pasta a partir do modelo.
- `scripts/validate-lps.mjs`: valida páginas, links e campos hidden.
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
- `origem`: posição do CTA, por exemplo `python-financas-hero` ou `systematic-investments-final`;
- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`.

Exemplo:

```text
https://tally.so/r/XxdPVg?lp=python-financas&servico=python-financas&origem=python-financas-hero&utm_source=linkedin
```

Os campos `lp`, `servico` e `origem` devem existir no Tally com os mesmos nomes e letras minúsculas.

A LP em inglês usa temporariamente o mesmo Tally. Quando houver um formulário em inglês, basta alterar `tallyUrl` na configuração da página ou na infraestrutura definida para ela.

O redirecionamento após envio deve apontar para:

```text
https://rsucupira.github.io/obrigado/
```

## Criar outra página

```bash
node scripts/create-lp.mjs matematica-financeira "Matemática Financeira"
```

Depois:

1. editar o `config.js`;
2. substituir o `hero.svg`;
3. definir `service`, textos e origens dos CTAs;
4. manter uma oferta e um público principal;
5. testar celular e desktop;
6. conferir o link final do Tally;
7. executar `node scripts/validate-lps.mjs`;
8. abrir um PR antes da publicação.

## Regra estratégica

Uma LP deve ter:

- um público;
- um problema principal;
- uma promessa específica;
- uma ação principal;
- uma origem identificável.

Não misture cálculo, preparação para vestibular, dashboards, IA e systematic investments na mesma página. A página principal funciona como hub apenas das ofertas em português selecionadas.