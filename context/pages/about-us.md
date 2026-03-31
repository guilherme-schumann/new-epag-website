## Prompt para o Claude Code

```
Leia PRODUCT.md, AGENTS.md e CLAUDE.md antes de qualquer coisa.

## Tarefa: Criar a página `/about`

Implemente a página `/about` completa, refatorando o conteúdo atual de `epag.com/en/about/`.

---

### 1. Crie o arquivo de conteúdo primeiro

Crie `context/pages/about.md` com o seguinte conteúdo:

---
title: "The Team That Built LatAm's Payment Infrastructure"
description: "epag was founded by payment veterans who helped build PagSeguro (NYSE: PAGS) and MercadoPago (NASDAQ: MELI). We built epag to give international companies the same direct access."
---

## Hero
headline: "We didn't just study Latin America. We built its payment infrastructure."
subheadline: "epag's founding team helped scale PagSeguro (NYSE: PAGS) and MercadoPago (NASDAQ: MELI) — two of the region's defining payment platforms. We built epag to give international companies the same direct access to LatAm's financial rails."
cta_primary: "Contact Sales"
cta_secondary: "Explore our API"

## Mission & Vision

### Mission
Helping international companies expand and operate across Latin America — without friction, without a local entity, and without compromise.

### Vision
We believe in truly open markets. Any company, anywhere in the world, should be able to sell to any person in Latin America with the same ease as selling locally.

## The Story (narrative section)

### The idea behind epag
After over a decade building payment leaders in Latin America, we kept seeing the same problem: international companies with great products couldn't reach LatAm customers because the financial infrastructure was fragmented, opaque, and built only for local players.

Most cross-border solutions added another aggregation layer on top of the local rails — compounding fees, reducing approval rates, and creating dependency on third parties. We knew there was a better path.

epag connects directly to the domestic banking infrastructure — PIX, SPEI, PSE, local card acquirers — the same rails that power how 670M+ adults in Latin America actually pay. No aggregators. No intermediaries. One integration.

Quote (Ricardo Dortas Schönhofen, Co-founder & CEO):
"We look forward to welcoming you as our partners on this journey."

## Team Stats (use as visual highlights)
- 10+ nationalities on the team
- Offices in São Paulo (Brazil), Lisbon (Portugal), Amsterdam (Netherlands)
- Almost a century of combined experience in banking, payments, and fintech across LatAm

## Founding Directors
- Ricardo Dortas Schönhofen — Co-founder & CEO
- Jan Schnürle — Director
- Julian Migura — Director
- Rafael Pereira — Director

Note: No photos available yet — use placeholder avatars with initials. Do NOT fabricate titles beyond what is listed above.

## Technology Section
headline: "100% proprietary technology. No third-party dependencies."
body: "All payment infrastructure is built 100% in-house. No legacy systems. No aggregator layers. This gives us full flexibility to adapt to each partner's specific needs — and means our partners never inherit someone else's limitations."
cta: "Read the docs →" (links to https://docs.epag.io/)

## Offices Section
headline: "Global team. Local expertise."
subheadline: "With over 10 nationalities, we understand the particularities of each LatAm market and bridge cultural and regulatory gaps that slow down international expansion."

Offices:
- São Paulo, Brazil — LatAm HQ
- Lisbon, Portugal — European hub
- Amsterdam, Netherlands — Global operations

## Bottom CTA
headline: "Ready to expand to Latin America?"
subheadline: "Talk to an expansion specialist. We'll scope your integration in 48 hours."
cta_primary: "Contact Sales"
cta_secondary: "Explore our API"
---

---

### 2. Scaffold da página

```
/new-page /about
```

---

### 3. Implemente as seguintes seções (nesta ordem)

Crie os arquivos em `src/components/sections/about/` com barrel export em `index.ts`.

#### `AboutHero`
- Background `bg-secondary-900` (navy), `rounded-b-[48px]`
- Headline Open Sans ExtraBold `text-secondary-100`, máximo 2 linhas
- Subheadline Open Sans Regular `text-secondary-100 text-opacity-80`
- Dois CTAs: primário `bg-primary-500 text-secondary-900 rounded-full`, secundário `border border-secondary-100 text-secondary-100 rounded-full`
- Mencionar PagSeguro (NYSE: PAGS) e MercadoPago (NASDAQ: MELI) na subheadline — são credenciais críticas

#### `AboutMissionVision`
- Dois cards lado a lado (ou split layout) — Mission à esquerda, Vision à direita
- Cards com `shadow-card rounded-2xl bg-white`
- Label "Mission" / "Vision" em `text-primary-500 font-semibold text-sm uppercase tracking-wider`
- Texto em `text-dark-gray`
- Fundo da seção: `bg-secondary-100`

#### `AboutStory`
- Seção narrativa em texto longo — layout de artigo com max-width ~720px centralizado
- Headline `text-theme-secondary font-extrabold`
- Body `text-dark-gray` com parágrafos bem espaçados
- Quote do Ricardo ao final: estilizado como blockquote com borda esquerda `border-l-4 border-primary-500`, texto em itálico, atribuição abaixo
- Fundo: `bg-white`

#### `AboutTeamStats`
- Três destaques visuais em linha: "10+ nationalities", "3 offices", "~100 years combined experience"
- Números em ExtraBold `text-theme-secondary text-5xl`, labels em `text-dark-gray`
- Separadores verticais entre os stats
- Fundo `bg-secondary-100`

#### `AboutFounders`
- Grid 2x2 com os 4 diretores: Ricardo Dortas Schönhofen, Jan Schnürle, Julian Migura, Rafael Pereira
- **Sem fotos disponíveis** — use avatar placeholder com as iniciais do nome (ex: "RD", "JS", "JM", "RP")
- Avatar: círculo `bg-secondary-900 text-secondary-100`, iniciais em SemiBold
- Nome em `text-dark-gray font-semibold`, cargo em `text-light-gray text-sm`
- Cards com `shadow-card rounded-2xl bg-white`

#### `AboutTechnology`
- Layout split: texto à esquerda, bloco de código ou visual técnico à direita (placeholder OK)
- Headline `text-theme-secondary font-extrabold`
- Body `text-dark-gray`
- CTA terciário: "Read the docs →" aponta para `https://docs.epag.io/`
- Fundo `bg-white`

#### `AboutOffices`
- Três cards de escritório: São Paulo, Lisbon, Amsterdam
- Cada card: nome da cidade em SemiBold, país em `text-light-gray`, role/label (ex: "LatAm HQ") em `text-primary-500 text-sm`
- Ícone de localização ou flag emoji — sem imagens externas
- Cards com `shadow-card rounded-2xl`
- Fundo `bg-secondary-100`

#### `AboutBottomCTA`
- Fundo `bg-secondary-900 rounded-[48px]`
- Headline ExtraBold `text-secondary-100`
- Subheadline Regular `text-secondary-100`
- Dois CTAs: primário `bg-primary-500`, secundário outline `border border-secondary-100 text-secondary-100`

---

### 4. Regras obrigatórias

- **Nenhum hex hardcoded** — somente classes Tailwind dos tokens de PRODUCT.md Section 5
- **Nenhum `<img>` raw** — use `next/image` com `alt` obrigatório; para placeholders de founder, use `<div>` com iniciais
- **`page-section` + `page-container`** em todas as seções
- **Server Components** em todas as seções — nenhuma delas precisa de estado do cliente
- **Atualizar** `src/components/sections/about/index.ts` com todos os exports
- **Metadata** exportada no `page.tsx` com title e description de `context/pages/about.md`
- **Não inventar** cargos, fotos, métricas ou histórico dos founders além do que está em `context/pages/about.md`

---

### 5. Copy proibida (do site atual — não reutilizar)

- "We help global companies feel truly Latin" — genérico, substituído pela nova headline
- "We share a common background" — seção vaga, sem informação acionável
- "We combine decades of expertise" — sem evidência; substituir por stat concreto
- "state-of-the-art technology" — buzzword proibida
- "first-class financial technology platform" — vago
- "Learn More" como CTA principal — substituir por CTA específico
- "Familiarize yourself with our technology" — tom passivo e fraco

---

### 6. O que preservar e amplificar do site atual

- A história de PagSeguro e MercadoPago — é a prova de credibilidade mais forte da empresa, deve aparecer no hero e na seção de story
- A quote do Ricardo no final da narrativa — preservar exatamente como está, apenas reestilizar
- Os 3 escritórios (SP, Lisboa, Amsterdã) — preservar na seção de offices
- A menção a "truly open markets" na Vision — preservar como está, é copy aprovada

---

### 7. Verificação final antes de commitar

- [ ] `context/pages/about.md` criado
- [ ] `src/app/(marketing)/about/page.tsx` com metadata exportada
- [ ] 8 seções criadas em `src/components/sections/about/` com barrel export
- [ ] Zero hex hardcoded
- [ ] Zero `<img>` raw
- [ ] Nenhuma seção marcada `'use client'` (não há estado necessário)
- [ ] PagSeguro (NYSE: PAGS) e MercadoPago (NASDAQ: MELI) mencionados no hero e na story
- [ ] Founders listados com placeholder de iniciais, sem fotos fabricadas
- [ ] CTAs seguem hierarquia de PRODUCT.md Section 4
- [ ] Nenhuma das frases proibidas presente no código gerado
```