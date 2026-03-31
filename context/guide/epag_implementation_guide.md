# epag New Website — Guia de Implementação
> Para o projeto: `C:\Users\B2ml\Desktop\b2ml\epag\new-epag-website`  
> Stack: Next.js + TypeScript + Tailwind CSS  
> Versão: 1.0 | Março 2026

---

## O QUE JÁ EXISTE NO DESIGN (Figma)

Com base na leitura do Figma `Website - Epag`, o novo design já tem:

### Páginas desenhadas
| Frame Figma | Página | Status |
|-------------|--------|--------|
| `Home` (28:808) | Home — versão antiga/rascunho | WIP |
| `Home` (79:801) | Home — versão nova com hero atualizado | ✅ Mais completo |
| `Payin` (74:774) | Página de produto Pay-in | Desenhada |
| `Contact Page` (36:727) | Página de contato / Contact Sales | Desenhada |

### Design Tokens extraídos do Figma

```ts
// Adicione em tailwind.config.ts ou globals.css

// Cores
--secondary-900: #002c45   // Dark Navy (fundo hero, navbar top)
--secondary-100: #ebf7ff   // Light Blue (bg geral, textos claros)
--secondary-500: #30a6e9   // Mid Blue
--primary-500:   #17c3fa   // Cyan (CTA principal, banner de news)
--dark-blue:     #016197   // Dark Blue (links do menu, ícones)
--middle-blue:   #019FD1   // Medium Blue (hover estados)
--dark-blue-400: #62C6FF   // Light Blue (highlights)
--light-gray:    #999999   // Textos secundários
--dark-gray:     #333333   // Textos principais
--white:         #FFFFFF

// Menu states
--menu-bg:       #016197
--menu-hover:    #6acdf6
--menu-selected: #019fd1
--menu-default:  #ffffff

// Tipografia
Font: "Open Sans"
Weights usados: 400 (Regular), 600 (SemiBold), 800 (ExtraBold)

// Sombra de card
box-shadow: 10px 20px 40px 0px rgba(0,0,0,0.05)
border-radius padrão de hero container: 48px (bottom corners)
border-radius de botões: 50px (pill)
```

---

## COPY NOVA — JÁ APROVADA NO FIGMA

O Figma já tem copy nova e melhorada. Estas são as strings que **devem substituir** o conteúdo atual:

### Hero (Home)
```
Headline:
"Direct Access to Latin America's Payment Infrastructure"

Subheadline:
"Accept payments across Latin America through direct connections to domestic 
banking rails and local acquirers — without intermediaries or layered 
aggregation. epag enables global companies to operate inside the local 
financial ecosystem with a single integration."

CTA Primário:   "Explore our API"
CTA Secundário: "Talk to a LATAM Expansion Specialist"
```

### Menu Navigation
```
- Solutions & Features  (dropdown)
  └─ Solutions & Features
     ├─ Payin
     ├─ Payout
     ├─ Server-to-server
     ├─ Hosted Checkout
     ├─ Redirect Checkout
     ├─ ID Validation
     └─ Subscriptions
  └─ Payment Methods
     ├─ PIX
     ├─ OXXO
     ├─ Credit / Debit Card
     ├─ Boleto
     └─ Wallets

- Coverage (dropdown)
  └─ Brasil, Mexico, Colombia, Peru, Ecuador, Chile

- Pricing
- Institucional
CTA: "Contact Us"
```

### Banner de notícias (top bar)
```
"This place was separated to share new features in our system!"
```

### Top utility bar (dark navy)
```
Login Admin | Help Center | 🌐 English ▾
```

---

## ESTRUTURA DE ARQUIVOS RECOMENDADA

```
new-epag-website/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    ← Home
│   │   ├── solutions/
│   │   │   ├── payin/page.tsx
│   │   │   ├── payout/page.tsx
│   │   │   ├── id-validation/page.tsx
│   │   │   ├── hosted-checkout/page.tsx
│   │   │   ├── redirect-checkout/page.tsx
│   │   │   └── subscriptions/page.tsx
│   │   ├── coverage/
│   │   │   ├── page.tsx
│   │   │   └── [country]/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── TopNewsBanner.tsx           ← Banner ciano do topo
│   │   ├── TopUtilityBar.tsx           ← Barra dark navy (Login/Help/Lang)
│   │   ├── MainNav.tsx                 ← Nav principal com dropdowns
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx             ← Hero dark navy com headline
│   │   ├── StatsBar.tsx                ← (a criar) 670M+, 470K+, 140+
│   │   ├── ProductsSection.tsx         ← Pay-in, Payouts, ID Validation
│   │   ├── DeveloperSection.tsx        ← Snippet de código + docs CTA
│   │   ├── CoverageMap.tsx             ← Mapa LatAm interativo
│   │   └── PricingTeaser.tsx           ← Preview do pricing
│   ├── ui/
│   │   ├── Button.tsx                  ← Variantes: primary, outline, ghost
│   │   ├── CountryCard.tsx             ← Card de país no coverage
│   │   └── PaymentMethodBadge.tsx      ← Badge PIX, OXXO, etc.
│   └── shared/
│       ├── SectionContainer.tsx        ← Wrapper de seção com padding padrão
│       └── AnimatedCounter.tsx         ← Para stats (670M+, etc.)
├── content/                            ← TODOS OS .md ficam aqui
│   ├── home.md
│   ├── solutions/
│   │   ├── payin.md
│   │   ├── payout.md
│   │   └── id-validation.md
│   ├── coverage.md
│   ├── pricing.md
│   └── about.md
├── lib/
│   └── content.ts                      ← Utilitário para ler os .md
└── tailwind.config.ts
```

---

## FASE 1 — SETUP (Fazer primeiro)

### 1.1 Configurar design tokens no Tailwind

Abra `tailwind.config.ts` e adicione:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        epag: {
          navy:      '#002c45',   // secondary/900
          'sky-light': '#ebf7ff', // secondary/100
          cyan:      '#17c3fa',   // primary/500
          blue:      '#016197',   // dark-blue / theme-secondary
          'mid-blue': '#019FD1',  // middle-blue
          'blue-400': '#62C6FF',  // dark-blue/400
          'blue-500': '#30a6e9',  // secondary/500
        },
        gray: {
          light: '#999999',
          dark:  '#333333',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      fontWeight: {
        normal:    '400',
        semibold:  '600',
        extrabold: '800',
      },
      borderRadius: {
        hero:   '48px',
        pill:   '50px',
        card:   '16px',
      },
      boxShadow: {
        card: '10px 20px 40px 0px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}

export default config
```

### 1.2 Importar fonte no layout

```tsx
// app/layout.tsx
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-open-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans bg-epag-sky-light">{children}</body>
    </html>
  )
}
```

---

## FASE 2 — COMPONENTES DE LAYOUT (ordem de implementação)

### 2.1 TopNewsBanner.tsx

```tsx
// components/layout/TopNewsBanner.tsx
export function TopNewsBanner({ message }: { message: string }) {
  return (
    <div className="bg-epag-cyan flex items-center justify-center gap-2 py-3 px-4 relative">
      <p className="text-sm font-semibold text-epag-navy">{message}</p>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-epag-navy">
        ✕
      </button>
    </div>
  )
}
```

### 2.2 TopUtilityBar.tsx

```tsx
// components/layout/TopUtilityBar.tsx
export function TopUtilityBar() {
  return (
    <div className="bg-epag-navy flex items-center justify-end gap-3 px-12 py-2.5">
      <a href="/admin" className="text-xs font-semibold text-epag-sky-light">Login Admin</a>
      <span className="text-epag-sky-light opacity-40">|</span>
      <a href="/help" className="text-xs font-semibold text-epag-sky-light">Help Center</a>
      <span className="text-epag-sky-light opacity-40">|</span>
      <LanguageSelector />
    </div>
  )
}
```

### 2.3 MainNav.tsx

Estrutura do menu já definida no Figma:
- Logo epag (esquerda)
- Menu items com dropdown (centro)
- Botão "Contact Us" cyan pill (direita)

```tsx
// components/layout/MainNav.tsx
// Nav items vêm do content/navigation.ts (centralizado)
const navItems = [
  {
    label: 'Solutions & Features',
    sections: [
      {
        title: 'Solutions & Features',
        links: ['Payin','Payout','Server-to-server','Hosted Checkout','Redirect Checkout','ID Validation','Subscriptions']
      },
      {
        title: 'Payment Methods',
        links: ['PIX','OXXO','Credit / Debit Card','Boleto','Wallets']
      }
    ]
  },
  {
    label: 'Coverage',
    countries: ['Brazil','Mexico','Colombia','Peru','Ecuador','Chile']
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Institucional', href: '/about' },
]
```

---

## FASE 3 — HOME PAGE (maior prioridade de copy)

### 3.1 HeroSection.tsx

```tsx
// components/home/HeroSection.tsx
// Design: fundo #002c45, border-radius bottom 48px, altura 680px

export function HeroSection() {
  return (
    <section className="bg-epag-navy rounded-b-hero overflow-hidden h-[680px] relative w-full">
      <div className="absolute top-1/2 -translate-y-1/2 left-[120px] w-[1680px] flex flex-col gap-6">
        
        {/* Headline — Open Sans ExtraBold 72px */}
        <h1 className="text-[72px] font-extrabold leading-[90px] text-epag-sky-light text-center w-full">
          Direct Access to{' '}
          <span className="text-[#6acdf6]">Latin America's</span>
          {' '}Payment Infrastructure
        </h1>

        {/* Sub-headline — Open Sans Regular 24px */}
        <p className="text-2xl font-normal text-epag-sky-light text-center w-full leading-normal">
          Accept payments across Latin America through direct connections to domestic 
          banking rails and local acquirers — without intermediaries or layered 
          aggregation. epag enables global companies to operate inside the local 
          financial ecosystem with a single integration.
        </p>

        {/* CTAs */}
        <div className="flex gap-6 items-center justify-center w-full">
          <a href="/developers" className="bg-epag-cyan text-epag-sky-light font-semibold text-sm px-6 py-3 rounded-pill flex items-center gap-2">
            Explore our API →
          </a>
          <a href="/contact" className="border border-epag-sky-light text-epag-sky-light font-semibold text-sm px-6 py-3 rounded-pill flex items-center gap-2">
            Talk to a LATAM Expansion Specialist →
          </a>
        </div>

      </div>
    </section>
  )
}
```

---

## FASE 4 — ARQUIVOS .md DE CONTEÚDO

> Estes são os arquivos que você vai criar em `/content/` e consumir nas páginas Next.js

### 4.1 content/home.md

```md
---
title: "Direct Access to Latin America's Payment Infrastructure"
description: "Accept payments across Latin America through direct connections to domestic banking rails and local acquirers — without intermediaries."
---

## Hero

**headline:** Direct Access to Latin America's Payment Infrastructure

**subheadline:** Accept payments across Latin America through direct connections to domestic banking rails and local acquirers — without intermediaries or layered aggregation. epag enables global companies to operate inside the local financial ecosystem with a single integration.

**cta_primary:** Explore our API
**cta_secondary:** Talk to a LATAM Expansion Specialist

---

## Value Props (6 bullets abaixo do hero)

- **No local entity required** — Launch operations in LatAm without registering a company, opening a bank account, or hiring locally.
- **Direct domestic rails** — Connect straight to local acquirers, banking networks, and instant payment systems. No aggregators in between.
- **All local payment methods** — PIX, OXXO, SPEI, Boleto, local credit & debit cards, digital wallets, cash vouchers.
- **Real-time payouts** — Disburse funds to local bank accounts, wallets, and partners in seconds via PIX and SPEI.
- **3DS 2.0 & Fraud Protection** — Built-in 3D Secure and adaptive fraud scoring reduce chargebacks and disputes.
- **Tax ID Validation** — Automated CPF/CNPJ verification keeps you compliant with Brazilian and regional regulations.

---

## Products Section

### Payment Processing
Accept local credit & debit cards, cash, bank transfers, and instant payments through a single RESTful API integration. Go live with PIX, SPEI, OXXO, PSE, Nequi, and more in days, not months.

### Real-time Payouts
Disburse fully automated payouts to users, contractors, and partners in real-time. Support for PIX, SPEI, and digital wallet disbursements — with detailed tracking and effortless reconciliation via dashboard.

### ID Validation
Real-time CPF and CNPJ verification connected to multiple government databases. Essential for payment processing, age verification, and regulatory compliance in Brazil. Pay-per-use model — you only pay when you validate.

---

## Developer Section

### Built for engineering teams that move fast

All payment technology is proprietary and built 100% in-house. No legacy systems. No third-party dependencies. One clean RESTful API to rule them all.

**CTA:** Explore the docs →

---

## Coverage Stats

- **670M+** adult individuals reachable
- **470K+** points of sale
- **140+** payment partners
- **6** countries: Brazil, Mexico, Chile, Colombia, Peru, Ecuador

---

## Pricing Teaser

**Simple, transparent pricing. No surprises.**

3.9% + ¢29 per transaction. No setup fees. No monthly fees. No local entity required.

**CTA:** See full pricing →

---

## Footer CTA

Ready to accept payments like a local business?

**CTA:** Contact Sales →
```

### 4.2 content/pricing.md

```md
---
title: "Simple, Transparent Pricing"
description: "Pay as you go. No setup fees, no monthly fees, no hidden costs."
---

## Headline
Simple, Transparent Pricing

## Subheadline
All pricing is 100% WYSIWYG — What You See Is What You Get. No setup fees, no monthly fees, no hidden costs. Pay as you go and scale risk-free.

---

## Plans

### Pay as you go
**3.9% + ¢29** per transaction

- No setup fee
- No monthly fee
- No local entity required
- Free unlimited international settlements above USD 5,000

### Enterprise
Custom pricing for:
- Volume discounts
- Different business models
- Charities and non-profits
- Enterprise scale

**CTA:** Talk to Sales →

---

## Fee Details

### Settlement
Funds remitted to your bank account abroad in your preferred currency.
- Free for settlements above USD 5,000
- No local bank account or entity required

### Refunds & Disputes
- Refund fee: ¢25 for cards / ¢85 for cash
- Dispute fee: USD 15 — **fully refunded** if resolved in your favor

### Installments
Offer up to 12 monthly installments.
- Consumer Credit Fee: 2.99% per month (interest-free to your business)
- Fully local payment experience for end users

---

## Why Transparent Pricing Matters

Most cross-border payment providers hide fees in FX spreads, settlement delays, and volume minimums. epag publishes everything. What you read is what you pay.
```

### 4.3 content/about.md

```md
---
title: "The Team That Built LatAm's Payment Ecosystem"
description: "epag was founded by payment veterans who helped build PagSeguro and MercadoPago."
---

## Hero
**headline:** We didn't just study Latin America. We built its payment infrastructure.

**subheadline:** epag's founding team helped scale PagSeguro (NYSE: PAGS) and MercadoPago (NASDAQ: MELI) — two of the region's largest payment companies. We built epag to give international companies the same access.

---

## Mission
Helping international merchants expand and operate in Latin America — without friction, without a local entity, and without compromise.

## Vision
We believe in truly open markets. Any company, anywhere in the world, should be able to sell to any person in Latin America with the same ease as selling locally.

---

## The Team

**10+ nationalities.** Offices in São Paulo (Brazil), Lisbon (Portugal), and Amsterdam (Netherlands).

Our team brings almost a century of combined experience in banking, payments, e-commerce, and financial technology across Latin America.

### Founding Directors
- **Ricardo Dortas Schönhofen** — Co-founder & CEO
- **Jan Schnürle** — Director
- **Julian Migura** — Director
- **Rafael Pereira** — Director

---

## Our Technology

All payment infrastructure is proprietary and built 100% in-house. No legacy systems. No third-party aggregators. This means:

- **Full flexibility** to adapt to each partner's specific needs
- **Modular architecture** — use only what you need
- **Zero intermediary dependencies** — direct connections to local financial rails
- **Faster onboarding** — go live in days, not months

---

## Why We Built epag

After a decade building market leaders in LatAm payments, we saw a persistent problem: international companies with great products couldn't reach LatAm customers because the financial infrastructure was fragmented, opaque, and designed for local players only.

epag is the bridge. One integration. Six countries. Direct access to the financial rails that power how 670M+ adults in Latin America actually pay.
```

---

## FASE 5 — INTEGRAÇÃO DOS .md NAS PÁGINAS

### Como ler os arquivos .md nas páginas Next.js

```ts
// lib/content.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'  // npm install gray-matter

export function getPageContent(slug: string) {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: data, content }
}
```

```tsx
// app/page.tsx (Home)
import { getPageContent } from '@/lib/content'

export default function HomePage() {
  const { meta, content } = getPageContent('home')
  // use meta.title, meta.description etc
}
```

---

## CHECKLIST DE IMPLEMENTAÇÃO

### Semana 1 — Base
- [ ] Configurar tokens de design no `tailwind.config.ts`
- [ ] Configurar fonte Open Sans no `app/layout.tsx`
- [ ] Criar `TopNewsBanner`, `TopUtilityBar`, `MainNav`, `Footer`
- [ ] Criar arquivo `content/home.md` com copy nova
- [ ] Implementar `HeroSection` com copy nova do Figma

### Semana 2 — Home completa
- [ ] `StatsBar` (670M+, 470K+, 140+, 6 countries)
- [ ] `ProductsSection` (Pay-in, Payouts, ID Validation)
- [ ] `DeveloperSection` (code snippet + CTA para docs)
- [ ] `CoverageMap` com 6 países
- [ ] `PricingTeaser`

### Semana 3 — Páginas secundárias
- [ ] `/pricing` com `content/pricing.md`
- [ ] `/about` com `content/about.md`
- [ ] `/solutions/payin` (Figma do frame `Payin` já existe)
- [ ] `/contact` (Figma do frame `Contact Page` já existe)

### Semana 4 — Conteúdo pendente (depende de aprovação)
- [ ] Social proof / logos de clientes
- [ ] Métricas reais de performance (approval rate, uptime, TPV)
- [ ] Páginas de indústrias (SaaS, Gaming, Travel — gap vs. EBANX)
- [ ] Customer Stories

---

## PRÓXIMAS PÁGINAS .md PARA CRIAR

Quando quiser continuar, me peça qualquer um destes:

| Arquivo | Conteúdo |
|---------|----------|
| `content/solutions/payin.md` | Página Pay-in detalhada |
| `content/solutions/payout.md` | Página Payout detalhada |
| `content/solutions/id-validation.md` | Página ID Validation |
| `content/coverage.md` | Página de Coverage / países |
| `content/contact.md` | Página Contact Sales |
| `content/solutions/hosted-checkout.md` | Hosted Checkout |
| `content/solutions/subscriptions.md` | Subscriptions |

---

*Documento gerado com base em: Figma `Website - Epag` (node 79:801, 28:808, 74:774, 36:727) + audit do epag.com + benchmark competitivo | Março 2026*
