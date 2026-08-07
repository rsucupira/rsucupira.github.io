# Uebey — ativação do domínio `uebey.com`

## Estado atual

- GitHub Pages: publicado pela branch `main`, pasta `/`.
- Endereço atual: `https://rsucupira.github.io/`.
- Custom domain do GitHub Pages: ainda não ativado.
- Não adicionar `CNAME` ao repositório antes de os registros abaixo estarem prontos para serem configurados no Cloudflare.

## Arquitetura escolhida

`uebey.com` será o domínio canônico.

`www.uebey.com` será configurado também e deverá redirecionar para o domínio canônico pelo comportamento do GitHub Pages.

As LPs existentes permanecem em caminhos do mesmo site, por exemplo:

- `/start/`
- `/python-financas/`
- `/dashboards/`
- `/inteligencia-artificial/`

## Cloudflare DNS

No Cloudflare > DNS > Records, remover registros conflitantes para `@` e `www` e adicionar:

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | rsucupira.github.io |

Não usar wildcard `*` para apontar todo subdomínio ao GitHub Pages.

## Ordem de ativação

1. GitHub > `rsucupira/rsucupira.github.io` > Settings > Pages.
2. Em **Custom domain**, informar `uebey.com` e salvar.
3. Confirmar que o GitHub criou/aceitou o arquivo `CNAME` com somente `uebey.com`.
4. No Cloudflare, criar os quatro registros A do apex e o CNAME `www` descritos acima.
5. Aguardar a validação DNS do GitHub Pages.
6. Ativar **Enforce HTTPS** assim que a opção estiver disponível.
7. Testar:
   - `https://uebey.com/`
   - `https://www.uebey.com/`
   - `https://uebey.com/start/`
   - uma LP existente.
8. Depois da ativação, atualizar `sitemap.xml`, `robots.txt` e URLs canônicas para `https://uebey.com`.

## Antes de ativar

Não trocar o domínio no GitHub Pages sem poder configurar o Cloudflare na mesma sessão. Quando um custom domain é ativado, o endereço `rsucupira.github.io` pode passar a redirecionar para ele.

## Pós-ativação

Depois que `uebey.com` estiver respondendo por HTTPS:

- sitemap deve usar `https://uebey.com/`;
- robots deve apontar para `https://uebey.com/sitemap.xml`;
- Open Graph e canonical devem usar `uebey.com`;
- validar todos os CTAs de `/start/`;
- testar parâmetros UTM até o Tally;
- manter `www` configurado para cobertura HTTPS e redirecionamento.
