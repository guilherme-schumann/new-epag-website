## Prompt para o Claude Code

```
Leia PRODUCT.md, AGENTS.md e CLAUDE.md antes de qualquer coisa.

## Tarefa: Criar a página `/pricing`

Implemente a página `/pricing` completa, refatorando o conteúdo atual de `epag.com/en/pricing/`.

---

### 1. Crie o arquivo de conteúdo primeiro

Crie `context/pages/pricing.md` com o seguinte conteúdo:

---
title: "Simple, Transparent Pricing"
description: "3.9% + ¢29 per transaction. No setup fees. No monthly fees. No local entity required. Pay as you go across all 6 LatAm countries."
---

## Hero
headline: "3.9% + ¢29. That's it."
subheadline: "No setup fees. No monthly fees. No hidden costs. One flat rate covers all 6 countries, all payment methods, and the full epag infrastructure — from PIX to OXXO to local card acquiring."
cta_primary: "Contact Sales"
cta_secondary: "Read the docs"

## Plans

### Pay as you go
price: "3.9% + ¢29"
price_label: "per transaction"
highlights:
  - No setup fee
  - No monthly fee
  - No local entity required
  - Covers all 6 countries
  - All payment methods included
cta: "Get Started"

### Enterprise
price: "Custom"
price_label: "talk to our team"
highlights:
  - Volume discounts
  - Custom business models
  - Charity & non-profit rates
  - Enterprise-scale infrastructure
  - Dedicated account manager
cta: "Contact Sales"

## Fee Details Table

### Settlement
description: "Funds remitted to your bank account abroad in your preferred currency. No local entity or local bank account required."
fee: "Free for settlements above USD 5,000"
note: "Fast, predictable transfers"

### Refunds
description: "Manage refunds directly via epag's API."
fee_cards: "¢25 per refund (cards)"
fee_cash: "¢85 per refund (cash)"

### Disputes
description: "Dispute resolution handled through epag."
fee: "USD 15 per dispute"
note: "Fully refunded if resolved in your favor"

### Installments
description: "Offer up to 12 monthly installments to your customers — a fully local payment experience."
fee: "2.99% per month (Consumer Credit Fee)"
note: "Interest-free to your business; consumer pays the installment cost"

## Why Transparent Pricing Matters (differentiator section)
headline: "Most providers hide fees. We publish ours."
points:
  - label: "No FX spread games"
    body: "We don't pad margins into the exchange rate. Settlement happens at the published rate."
  - label: "No volume minimums"
    body: "Pay as you go from transaction one. Scale without renegotiating contracts."
  - label: "No setup surprises"
    body: "Zero onboarding fees. Zero monthly platform fees. You pay when you process."
  - label: "No local entity costs"
    body: "Operating in LatAm through epag means no company registration, no local bank account, no local compliance overhead."

## Platform Highlights (8 bullets — use as icon grid)
  - Free setup and sign-up
  - No monthly or hidden fees
  - No local entity required
  - Singular RESTful API
  - Mobile-optimized Boletos
  - 100% Central Bank compliant
  - Easy subscription management
  - Top-notch live reporting

## Bottom CTA
headline: "Volume pricing available for enterprise scale."
subheadline: "Processing more than $50K/month? Talk to our sales team about custom rates, dedicated support, and SLA guarantees."
cta_primary: "Contact Sales"
cta_secondary: "Read the docs"
---

---

### 2. Scaffold da página

```
/new-page /pricing
```

---

### 3. Implemente as seguintes seções (nesta ordem)

Crie os arquivos em `src/components/sections/pricing/` com barrel export em `index.ts`.

#### `PricingHero`
- Background `bg-secondary-900`, `rounded-b-[48px]`
- Headline "3.9% + ¢29. That's it." — Open Sans ExtraBold, `text-secondary-100`
- O "3.9% + ¢29" deve ter destaque visual — tamanho maior ou `text-primary-500`
- Subheadline Regular `text-secondary-100`
- Dois CTAs: primário `bg-primary-500 text-secondary-900 rounded-full`, secundário `border border-secondary-100 text-secondary-100 rounded-full`

#### `PricingPlans`
- Dois cards lado a lado: "Pay as you go" e "Enterprise"
- Card "Pay as you go": borda `border-2 border-primary-500`, label "Most popular" em `bg-primary-500 text-secondary-900 text-xs font-semibold rounded-full px-3 py-1`
- Card "Enterprise": borda `border border-gray-200`
- Preço em ExtraBold `text-theme-secondary text-5xl`
- Lista de highlights com ícone de check `text-primary-500`
- CTA no rodapé de cada card: primário cyan no "Pay as you go", outline no "Enterprise"
- Cards com `shadow-card rounded-2xl bg-white`
- Fundo da seção: `bg-secondary-100`

#### `PricingFeeTable`
- Tabela estruturada com 4 linhas: Settlement, Refunds, Disputes, Installments
- Layout: cada linha tem coluna de serviço (label + descrição), coluna de fee (valor destacado), coluna de nota
- Fee values em `font-extrabold text-theme-secondary`
- A nota "Fully refunded if resolved in your favor" deve ter destaque — `text-primary-500 font-semibold`
- Fundo alternado nas linhas: `bg-white` e `bg-secondary-100`
- **Não usar `<table>` HTML semântico é aceitável** — pode ser grid de divs se ficar mais responsivo
- Fundo da seção: `bg-white`

#### `PricingDifferentiators`
- Headline "Most providers hide fees. We publish ours."
- 4 cards ou lista com label em negrito + body — layout 2x2 ou lista vertical
- Label `text-theme-secondary font-semibold`, body `text-dark-gray`
- Ícone simples antes de cada label (pode ser emoji ou SVG inline básico: ✓, →, etc.)
- Fundo `bg-secondary-100`
- Esta seção é o argumento competitivo direto vs. EBANX — o tom deve ser confiante, não apologético

#### `PricingPlatformHighlights`
- Grid 4x2 com os 8 bullets de plataforma
- Cada item: ícone placeholder (círculo `bg-primary-500` com checkmark branco) + texto `text-dark-gray font-semibold text-sm`
- Cards compactos com `shadow-card rounded-2xl bg-white`
- Fundo `bg-white`

#### `PricingBottomCTA`
- Fundo `bg-secondary-900 rounded-[48px]`
- Headline ExtraBold `text-secondary-100`
- Subheadline Regular `text-secondary-100`
- Dois CTAs: primário `bg-primary-500`, secundário `border border-secondary-100 text-secondary-100 rounded-full`

---

### 4. Regras obrigatórias

- **Nenhum hex hardcoded** — somente classes Tailwind dos tokens de PRODUCT.md Section 5
- **Nenhum `<img>` raw** — esta página não usa imagens; logos de métodos de pagamento da página atual **não devem ser replicados** (são imagens externas do WordPress — ignorar)
- **`page-section` + `page-container`** em todas as seções
- **Server Components** em todas as seções — nenhuma delas precisa de estado do cliente
- **Atualizar** `src/components/sections/pricing/index.ts` com todos os exports
- **Metadata** exportada no `page.tsx` com title e description de `context/pages/pricing.md`
- **Todos os valores numéricos** devem vir do `context/pages/pricing.md` — não inventar fees adicionais

---

### 5. Copy proibida (do site atual — não reutilizar)

- "What You See Is What You Get" / "WYSIWYG" — substituído por copy direta
- "Enabling businesses to boost emerging markets" — genérico, proibido pelo PRODUCT.md
- "Many innovative, global companies trust epag" — sem evidência (sem logos reais nesta versão)
- "Read Me" como CTA — substituir por "Read the docs"
- "Start Now" como CTA — substituir por "Get Started" ou "Contact Sales"
- "Have a look at our full pricing and additional services fee table" — passivo; a tabela deve estar inline na página
- "ENTERPRISE-SCALE PRICING" em all caps — usar sentence case

---

### 6. O que preservar do site atual

Todos os valores numéricos abaixo estão confirmados na página atual e devem ser preservados exatamente:
- Taxa base: **3.9% + ¢29** por transação
- Settlement grátis acima de **USD 5,000**
- Refund cards: **¢25** / cash: **¢85**
- Disputa: **USD 15** — reembolsado se ganho
- Parcelamento: até **12x**, Consumer Credit Fee de **2.99%/mês**
- Sem setup fee, sem mensalidade, sem entidade local

---

### 7. Verificação final antes de commitar

- [ ] `context/pages/pricing.md` criado
- [ ] `src/app/(marketing)/pricing/page.tsx` com metadata exportada
- [ ] 6 seções criadas em `src/components/sections/pricing/` com barrel export
- [ ] Zero hex hardcoded
- [ ] Zero `<img>` raw
- [ ] Nenhuma seção marcada `'use client'`
- [ ] Todos os valores de fee preservados exatamente (3.9%, ¢29, USD 5.000, ¢25, ¢85, USD 15, 2.99%)
- [ ] Tabela de fees inline na página (não "clique aqui para ver")
- [ ] CTAs seguem hierarquia de PRODUCT.md Section 4
- [ ] Nenhuma das frases proibidas presente no código gerado
```