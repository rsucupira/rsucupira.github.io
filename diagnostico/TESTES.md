# Validação da nova lógica

## Verificações executadas

- Sintaxe de `config.js` validada com `node --check`.
- Sintaxe de `app.js` validada com `node --check`.
- Todos os IDs usados pelo JavaScript existem no HTML.
- Não há IDs duplicados.
- As seis perguntas possuem quatro alternativas cada.
- O HTML carrega `styles.css`, `config.js` e `app.js` na ordem correta.

## Cenários de pontuação

| Etapa | Bloqueio | Base | Principal | Secundário |
|---|---|---|---|---|
| Planejamento | Planejamento | Sem dados | Planejamento | — |
| Planejamento | Interpretação | Sem dados | Planejamento | Interpretação |
| Método | Método | Base organizada | Método | — |
| Interpretação | Interpretação | Base organizada | Interpretação | — |
| Base | Método | Base organizada | Método | Base |
| Interpretação | Planejamento | Base dispersa | Planejamento | Interpretação |

## Regras validadas

- Etapa recebe peso 2.
- Bloqueio recebe peso 2.
- Situação da base recebe peso 1.
- Em empate, o gargalo mais anterior no fluxo analítico tem prioridade.
- Um segundo resultado aparece quando sua pontuação é pelo menos 2 e está a no máximo 1 ponto do principal.
- Prazo altera mensagem, urgência e CTA.
- Projeto e ferramenta alteram a orientação contextual.
- O Tally recebe `resultado_secundario`, `urgencia`, origem e UTMs.
- `diagnostico_iniciado` ocorre somente após a primeira resposta.
