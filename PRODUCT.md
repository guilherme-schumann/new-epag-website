# epag — Product Instructions

> Read this file before implementing any page, section, or copy.
> Technical stack rules are in `AGENTS.md`. This file covers product, copy, and design intent.

---

## 1. Product & Audience

**What epag is:**
- B2B cross-border payment infrastructure for Latin America (Brazil, Mexico, Chile, Colombia, Peru, Ecuador)
- Enables global companies to accept local payments without a local entity
- 100% proprietary technology — no third-party aggregators
- Founded by PagSeguro (NYSE: PAGS) and MercadoPago (NASDAQ: MELI) veterans
- PCI DSS certified — offices in São Paulo, Lisbon, Amsterdam

**Primary audience (who reads this site):**
- CPO / CTO / Head of Growth at a global company entering LatAm
- Industries: SaaS, Gaming, Travel, Streaming, Marketplaces
- Developers evaluating the API

---

## 2. Unique Differentiators

These must be present in every major page. Never omit them in favor of generic copy.

1. **No local entity required** — launch in LatAm without registering a company or opening a local bank account
2. **Direct rails** — connects directly to PIX, SPEI, PSE, domestic acquirers — no aggregator layers
3. **Single integration** — one RESTful API covers all 6 countries
4. **Transparent pricing** — 3.9% + ¢29/transaction, no hidden fees (competitive advantage over EBANX which does not publish pricing)
5. **Local DNA** — founding team built PagSeguro and MercadoPago

---

## 3. Approved Copy

> Do not alter these strings without explicit approval. Use exactly as written.

### Hero (Home)
```
headline:      "Direct Access to Latin America's Payment Infrastructure"
subheadline:   "Accept payments across Latin America through direct connections
                to domestic banking rails and local acquirers — without
                intermediaries or layered aggregation. epag enables global
                companies to operate inside the local financial ecosystem
                with a single integration."
cta_primary:   "Explore our API"
cta_secondary: "Talk to a LATAM Expansion Specialist"
```

### Top News Banner
```
"This place was separated to share new features in our system!"
```

### Top Utility Bar
```
Login Admin | Help Center | 🌐 English ▾
```

### Navigation
```
Payments >
  Solutions & Features:
    Payin | Payout | Server-to-server | Hosted Checkout |
    Redirect Checkout | ID Validation | Subscriptions
  Payment Methods:
    PIX | OXXO | Credit / Debit Card | Boleto | Wallets

Markets >
  Coverage: Brazil | Mexico | Colombia | Peru | Ecuador | Chile

Pricing
Institucional
CTA: "Contact Us"
```

---

## 4. Copy Rules

### Tone of voice
- **Confident and technical** — audience is CTO/CPO, not a layperson
- **Benefit-first** — never list a feature without its associated benefit
- **Specific** — use numbers and facts wherever possible
- **No empty buzzwords** — forbidden without evidence: "seamless", "best-in-class", "cutting-edge", "empowering"

### Headline patterns
```
✅ "Direct connections to Brazil's banking rails, not aggregators"
✅ "Accept PIX in 48 hours. No Brazilian entity required."
✅ "3.9% flat. No setup fee. No hidden costs."
❌ "Empowering global businesses with seamless payment solutions"
❌ "Your trusted partner for cross-border commerce"
❌ Titles in ALL CAPS (not modern UX/copy standard)
```

### CTA hierarchy — one primary per section
```
Primary   (1 per section):  "Explore our API" | "Contact Sales" | "Get Started" | "Build Your Pay-in Infrastructure"
Secondary (optional):       "Talk to a LATAM Expansion Specialist" | "See full pricing"
Tertiary  (text links):     "Read the docs" | "View coverage" | "Learn more about X →"
```

### Forbidden phrases (from old site — eliminate on sight)
```
- "Sneak a peek at our super-simple pricing model"
- "WYSIWYG" without explanation
- "Enabling businesses to boost emerging markets"
- "Learn More" as a primary CTA
```

---

## 5. Design Token Mapping

Maps Figma layer names to the project's Tailwind token classes.
**Always use the Tailwind class column — never hardcode hex values.**

| Figma name       | Hex       | Tailwind class                              | Usage                          |
|------------------|-----------|---------------------------------------------|--------------------------------|
| `epag-navy`      | `#002C45` | `bg-secondary-900` / `text-secondary-900`   | Hero bg, dark sections, navbar |
| `epag-sky-light` | `#EBF7FF` | `bg-secondary-100` / `text-secondary-100`   | Page background, light sections |
| `epag-cyan`      | `#17C3FA` | `bg-primary-500` / `text-primary-500`       | Primary CTA, news banner        |
| `epag-blue`      | `#016197` | `bg-theme-secondary` / `text-theme-secondary` | Menu links, icons, body headings |
| `epag-mid-blue`  | `#019FD1` | `bg-theme-middle-blue` / `text-theme-middle-blue` | Hover states, selected menu |
| `epag-blue-400`  | `#62C6FF` | `bg-theme-dark-blue-400` / `text-theme-dark-blue-400` | Highlights, accents   |
| `epag-blue-500`  | `#30A6E9` | `bg-secondary-500` / `text-secondary-500`   | Secondary blue                 |
| `dark-gray`      | `#333333` | `text-dark-gray`                            | Body text                      |
| `light-gray`     | `#999999` | `text-light-gray`                           | Secondary/caption text         |
| `white`          | `#FFFFFF` | `text-light` / `bg-light`                  | Text on dark backgrounds       |
| `background`     | `#F2F2F2` | `bg-background`                             | Page default background        |

### Typography
```
Font:    "Open Sans" (loaded via next/font/google)
Weights: 400 (Regular) | 600 (SemiBold) | 800 (ExtraBold)
```

### Shape tokens
```
Hero container:  rounded-b-[48px]   (bottom corners only)
Buttons:         rounded-full        (pill shape)
Cards:           rounded-2xl
Card shadow:     shadow-card         → 10px 20px 40px 0px rgba(0,0,0,0.05)
```

---

## 6. Context Pages Index

Product copy for each page/route lives in `context/pages/`.
**Always read the relevant file before implementing a page or section.**

| File                              | Route                      | Status     |
|-----------------------------------|----------------------------|------------|
| `context/pages/payin.md`          | `/solutions/payin`         | ✅ Done     |
| `context/pages/payout.md`         | `/solutions/payout`        | ⬜ Pending  |
| `context/pages/home.md`           | `/`                        | ⬜ Pending  |
| `context/pages/pricing.md`        | `/pricing`                 | ⬜ Pending  |
| `context/pages/about.md`          | `/about`                   | ⬜ Pending  |
| `context/pages/contact.md`        | `/contact`                 | ⬜ Pending  |
| `context/pages/id-validation.md`  | `/solutions/id-validation` | ⬜ Pending  |
| `context/pages/subscriptions.md`  | `/solutions/subscriptions` | ⬜ Pending  |
| `context/pages/coverage.md`       | `/coverage`                | ⬜ Pending  |

> When a new page needs to be implemented, create its `context/pages/<page>.md` first.
> Use `context/guide/epag_content_inventory.md` and `context/guide/epag_implementation_guide.md` as reference.

---

## 7. Pages Roadmap

Figma file key: `GuqQp4uDgvOvqyEBFPvvoQ`

| Priority | Route                  | Figma Frame | Status      |
|----------|------------------------|-------------|-------------|
| 🔴 1     | `/` (Home)             | `79:801`    | ⬜ Pending   |
| 🔴 2     | `/solutions/payin`     | `74:774`    | ✅ Built     |
| 🔴 3     | `/contact`             | `36:727`    | ✅ Built     |
| 🟡 4     | `/pricing`             | —           | ⬜ Pending   |
| 🟡 5     | `/about`               | —           | ⬜ Pending   |
| 🟡 6     | `/coverage`            | —           | ⬜ Pending   |
| 🟢 7     | `/solutions/payout`    | —           | ⬜ Pending   |
| 🟢 8     | `/solutions/id-validation` | —       | ⬜ Pending   |
| 🟢 9     | Industry pages (SaaS, Gaming, Travel, Streaming, Marketplaces) | — | ⬜ Pending |
| 🟢 10    | `/customers`           | —           | ⬜ Pending (requires real client logos) |

### Coverage stats (use on Home and Coverage pages)
```
670M+  adult individuals reachable
470K+  points of sale
140+   payment partners
6      countries: Brazil, Mexico, Chile, Colombia, Peru, Ecuador
```

---

*Source: Figma `Website - Epag` (GuqQp4uDgvOvqyEBFPvvoQ) + epag.com audit + competitive benchmark (EBANX, Stripe, Pagar.me) | March 2026*
*Update this file whenever product copy is approved, a new page is built, or design tokens change.*
