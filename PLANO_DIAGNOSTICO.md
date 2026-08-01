# Plano de evolução do diagnóstico

## Objetivo

Transformar o diagnóstico atual em um funil confiável que:

1. identifique o gargalo principal sem apenas repetir uma resposta;
2. mostre um ponto secundário quando houver sinais mistos;
3. personalize a orientação por projeto, ferramenta e prazo;
4. qualifique o lead antes do Tally;
5. permita medir o funil até o envio efetivo do cadastro.

## Fase 1 — Correção da lógica e do resultado

### Escopo

- Reescrever as perguntas de etapa e dificuldade para reduzir redundância.
- Pontuar etapa com peso 2, dificuldade com peso 2 e situação da base com peso 1.
- Calcular gargalo principal e secundário.
- Exibir a justificativa do resultado.
- Adaptar recomendações ao tipo de projeto, ferramenta e prazo.
- Adaptar o CTA conforme a urgência.
- Renomear o gratuito para “Mapa do Gargalo da Sua Análise”.
- Preservar respostas, origem e parâmetros UTM enviados ao Tally.

### Critérios de aceitação

- Alterar a resposta de dificuldade não determina sozinha todos os resultados.
- Combinações contraditórias geram um ponto secundário.
- O resultado informa por que foi atribuído.
- Prazo inferior a sete dias apresenta CTA de verificação de atendimento prioritário.
- Excel, Python, R/SPSS e “ainda não sei” geram orientações diferentes.
- O Tally continua recebendo os campos existentes e recebe `resultado_secundario`.
- O evento `diagnostico_iniciado` ocorre apenas após a primeira resposta.

### Matriz mínima de testes

1. Planejamento + planejamento + sem dados → Planejamento, sem secundário relevante.
2. Planejamento + interpretação + sem dados → Planejamento ou empate resolvido com indicação secundária.
3. Método + método + base organizada → Método.
4. Resultados prontos + interpretação + base organizada → Interpretação, método secundário.
5. Qualquer combinação com prazo menor que sete dias → CTA urgente.
6. Recomeçar o diagnóstico → limpar respostas, resultados e estado interno.
7. Copiar resultado → incluir gargalo principal, secundário e respostas.
8. Abrir Tally → preservar UTMs e origem.

## Fase 2 — Integração comercial

- Diferenciar claramente o produto gratuito do diagnóstico pago.
- Renomear o serviço pago para “Sessão de Diagnóstico e Plano de Ação”.
- Direcionar os principais CTAs da landing page para `/diagnostico/`.
- Criar origens específicas, por exemplo `hero`, `precos` e `contato`.
- Revisar os campos ocultos do Tally e confirmar correspondência exata dos nomes.
- Reduzir o Tally a contato, descrição breve e consentimentos necessários.

## Fase 3 — Conclusão e mensuração

- Criar `/obrigado/`.
- Configurar o Tally para redirecionar após o envio.
- Registrar `lead_enviado` na página de agradecimento.
- Instalar uma solução de analytics e validar os eventos.
- Medir visualização, início, conclusão, abertura do cadastro e envio.

## Fase 4 — Privacidade e confiança

- Criar aviso curto de privacidade.
- Separar solicitação de avaliação de consentimento para conteúdo recorrente.
- Informar finalidade, retenção, uso do Tally e canal para exclusão.

## Fase 5 — Otimização após dados reais

- Avaliar abandono por pergunta.
- Comparar conclusão por origem de tráfego.
- Medir conversão por resultado e prazo.
- Testar versões do título e do CTA.
- Ajustar pesos somente após observar respostas e conversões reais.

## Ordem recomendada de execução

1. Implementar e testar a Fase 1 na branch.
2. Revisar visualmente em desktop e celular.
3. Conferir campos ocultos no Tally.
4. Fazer merge da Fase 1.
5. Implementar página de agradecimento e analytics.
6. Atualizar CTAs da landing page.
7. Publicar aviso de privacidade.
8. Coletar dados antes de novos ajustes na pontuação.
