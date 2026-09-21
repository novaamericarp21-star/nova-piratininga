# Fazenda Nova Piratininga — site institucional

React + TypeScript + Vite + Tailwind CSS. Animações com Motion; ícones com Lucide (apenas redes sociais e setas).

## Rodar

```bash
npm install
npm run dev          # desenvolvimento
npm run typecheck    # checagem de tipos
npm run build        # gera /dist
npm run preview      # testa o build
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, endereço, telefones, redes, e-mail do formulário | `src/data/company.ts` |
| **Todas as imagens** (trocar foto = trocar uma linha) | `src/data/images.ts` |
| Números oficiais (rebanho, soja, infraestrutura) | `src/data/stats.ts` |
| Marcos da história | `src/data/timeline.ts` |
| Textos das seções e páginas | `src/data/content.ts` |
| Menu | `src/data/navigation.ts` |
| Cores, fontes, curvas de animação | `tailwind.config.js`, `src/styles/index.css`, `src/lib/motion.ts` |

## Imagens

As fotos atuais são do site antigo (hotlink) e valem só como temporárias.

1. `npm run images:download` baixa todas para `public/img`.
2. Defina `VITE_LOCAL_IMAGES=true` (ver `.env.example`).
3. Para as fotos profissionais: aponte cada slot de `images.ts` para o novo arquivo e ajuste o `alt`.

A galeria oculta automaticamente categorias sem foto (hoje, "Tecnologia").

## Formulário de contato

Defina `VITE_CONTACT_ENDPOINT` com uma URL que receba POST em JSON (Formspree, função serverless, API própria).
Sem endpoint, o formulário abre o app de e-mail do visitante com a mensagem pronta, e a tela avisa isso.

## Conferir antes de publicar

- **Logo:** o slot `images.logo` usa `logo-footer.png` do site antigo, pensado para fundo escuro. Confirme como aparece.
- **E-mail do formulário:** `contato@novapiratininga.com` veio de um texto de briefing na página de contato atual.
- **Telefone 2:** no site antigo o link do segundo número aponta para o primeiro; aqui o link segue o número exibido.
- **Números:** vêm do site institucional atual (conteúdo de 2021). O rodapé dos indicadores diz isso; atualize se houver dado novo.
- **Sustentabilidade:** sem números ambientais, porque o site atual não publica nenhum. Quando houver dado oficial, coloque em `sustainabilityStats` e o bloco aparece.
- **Galeria:** as fotos "sobre-a-fazenda-XX" foram distribuídas em Estrutura e Natureza sem legenda original. Revise.
- **Mapa:** é ilustrativo (curvas de nível abstratas), sem coordenadas ou fronteiras reais.

## SEO

Metadados por página via `useSEO`. Por ser SPA, rastreadores que não executam JavaScript veem só o `index.html`
(que já traz título, descrição, Open Graph e JSON-LD da organização). Para máximo SEO, publique com pré-renderização
(por exemplo `vite-react-ssg` ou o pré-render da hospedagem). `public/_redirects` e `vercel.json` já tratam o fallback de SPA
e o redirecionamento de `/sobre-a-fazenda`.

## Movimento e acessibilidade

- Nenhuma animação linear; entradas usam ease-out `cubic-bezier(0.22, 1, 0.36, 1)`. UI em 200–300 ms; só revelações de imagem chegam a 700 ms.
- `prefers-reduced-motion`: sem parallax, sem deriva do hero, sem revelações; a linha do tempo vira lista vertical.
- Foco visível, link "Ir para o conteúdo", menu e lightbox com Esc, foco preso e retorno de foco.
- Linha do tempo horizontal só em telas ≥ 1024 px; abaixo disso, vertical.
