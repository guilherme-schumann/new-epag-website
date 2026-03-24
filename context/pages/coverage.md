## Prompt para o Claude Code

```
Leia PRODUCT.md, AGENTS.md e CLAUDE.md antes de qualquer coisa.

## Tarefa: Criar a página `/coverage`

Implemente a página `/coverage` completa, refatorando o conteúdo atual de `epag.com/en/coverage/`.

---

### 1. Crie o arquivo de conteúdo primeiro

Crie `context/pages/coverage.md` com o seguinte conteúdo:

---
title: "Payment Coverage Across Latin America"
description: "Accept local payments in Brazil, Mexico, Colombia, Peru, Ecuador and Chile through direct connections to domestic banking rails — no local entity required."
---

## Hero
headline: "6 Countries. One Integration. Direct Access."
subheadline: "Accept local payments across Latin America through direct connections to domestic banking rails and local acquirers — without intermediaries, without a local entity."
cta_primary: "Contact Sales"
cta_secondary: "Explore the docs"

## Stats Bar
- 670M+ adult individuals reachable
- 470K+ points of sale
- 140+ payment partners
- 6 countries

## Countries & Payment Methods

### Brazil
- PIX (instant bank transfer)
- Boleto Bancário
- Credit Card (local acquiring)
- Debit Card
- PicPay (digital wallet)

### Mexico
- SPEI (bank transfer)
- OXXO (cash voucher)
- Paycash (cash voucher)
- Tiendas Y Farmacias (cash voucher)
- Credit Card
- Debit Card

### Colombia
- Bank Transfer
- Paycash (cash voucher)
- Nequi (digital wallet)
- Credit Card
- Debit Card

### Costa Rica
- Paycash (cash voucher)
- Credit Card

### Ecuador
- Bank Transfer
- Paycash (cash voucher)
- Deuna (digital wallet)
- Credit Card

### Guatemala
- Bank Transfer
- Paycash (cash voucher)

### Panama
- Paycash (cash voucher)

### Peru
- Bank Transfer
- Pago Efectivo (cash)
- Paycash (cash voucher)
- Credit Card
- Debit Card

### Chile
- Bank Transfer
- Paycash (cash voucher)
- Mach (digital wallet)
- Credit Card
- Debit Card

### Honduras
- Paycash (cash voucher)

### Dominican Republic
- Paycash (cash voucher)

### El Salvador
- Bank Transfer

## Products Section

### Payment Processing
Accept local credit & debit cards, cash, bank transfers, and instant payments through a single RESTful API. Go live with PIX, SPEI, OXXO, PSE, Nequi, and more in days, not months.
cta: "Explore our API"

### Real-time Payouts
Disburse funds to local bank accounts, wallets, and partners in real-time via PIX and SPEI — with detailed tracking and effortless reconciliation via dashboard. KYC/AML compliant.
cta: "Learn more about Payouts"

### ID Validation
Real-time CPF and CNPJ verification connected to multiple government databases. Essential for payment processing, age verification, and regulatory compliance in Brazil. Pay-per-use model.
cta: "Learn more about ID Validation"

## Bottom CTA
headline: "Ready to go live in LatAm?"
subheadline: "Talk to a LATAM expansion specialist and get your integration scoped in 48 hours."
cta_primary: "Contact Sales"
cta_secondary: "Read the docs"
---

---

### 2. Scaffold da página

```
/new-page /coverage
```

---

### 3. Implemente as seguintes seções (nesta ordem)

Crie os arquivos em `src/components/sections/coverage/` com barrel export em `index.ts`.

#### `CoverageHero`
- Background `bg-secondary-900` (navy), `rounded-b-[48px]`
- Headline: Open Sans ExtraBold, `text-secondary-100`
- Sub-headline: Open Sans Regular, `text-secondary-100`
- Dois CTAs: primário `bg-primary-500 text-secondary-900 rounded-full`, secundário `border border-secondary-100 text-secondary-100 rounded-full`
- **Sem** headline em ALL CAPS — use sentence case

#### `CoverageStatsBar`
- Faixa horizontal com os 4 stats: 670M+, 470K+, 140+, 6 countries
- Fundo `bg-secondary-100`, separadores visuais entre stats
- Números em ExtraBold `text-theme-secondary`, labels em Regular `text-dark-gray`

#### `CoverageCountrySelector`
- Grid ou tabs com os 6 países: Brazil, Mexico, Colombia, Peru, Ecuador, Chile
- Ao selecionar um país, exibe os métodos de pagamento disponíveis (use `useState` — marcar como `'use client'`)
- Cada método de pagamento renderizado com `PaymentMethodBadge` do `src/components/ui`
- Estado selecionado: `bg-theme-middle-blue text-light` / padrão: `bg-secondary-100 text-dark-gray`
- **Não** usar imagens de bandeiras externas — use emoji de bandeira ou placeholder SVG

#### `CoverageProductsSection`
- Três cards: Payment Processing, Real-time Payouts, ID Validation
- Layout alternado (texto + imagem placeholder) ou grid 3 colunas
- Cards com `shadow-card rounded-2xl`
- CTA terciário em cada card: "Learn more about X →"
- **Eliminar** a duplicação de ID Validation que existe na página atual

#### `CoverageBottomCTA`
- Fundo `bg-secondary-900`, `rounded-[48px]`
- Headline ExtraBold `text-secondary-100`
- Dois CTAs: primário cyan, secundário outline

---

### 4. Regras obrigatórias

- **Nenhum hex hardcoded** — somente classes Tailwind dos tokens definidos em `PRODUCT.md` Section 5
- **Nenhum `<img>` raw** — use `next/image` com `alt` obrigatório
- **`page-section` + `page-container`** em todas as seções externas/internas
- **`'use client'`** somente no `CoverageCountrySelector` (precisa de estado)
- **Atualizar** `src/components/sections/coverage/index.ts` com todos os exports
- **Metadata** exportada no `page.tsx`: title e description de `context/pages/coverage.md`
- **Eliminar** os problemas da página atual:
  - Headline em ALL CAPS → corrigir para sentence case
  - ID Validation duplicada → manter apenas uma instância
  - CTAs "Learn More" genéricos → substituir pelos CTAs da hierarquia aprovada
  - Copy fraca ("seamlessly manage", "convenient, secure, efficient") → usar copy direta e técnica

---

### 5. Copy proibida (do site atual — não reutilizar)

- "PAYMENT COVERAGE IN LATIN AMERICA" (all caps)
- "Sneak a peek" (em qualquer contexto)
- "Convenient, secure, efficient, and transparent"
- "Streamline your payment process and grow your business"
- "Learn More" como CTA principal
- "geteways" (typo existente — não repetir)

---

### 6. Verificação final antes de commitar

- [ ] `context/pages/coverage.md` criado
- [ ] `src/app/(marketing)/coverage/page.tsx` com metadata exportada
- [ ] Seções em `src/components/sections/coverage/` com barrel export
- [ ] Zero hex hardcoded no código
- [ ] Zero duplicação de seção ID Validation
- [ ] Zero `<img>` raw
- [ ] `'use client'` apenas onde necessário (CoverageCountrySelector)
- [ ] Todos os CTAs seguem hierarquia de PRODUCT.md Section 4
```