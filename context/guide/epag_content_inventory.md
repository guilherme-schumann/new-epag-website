# epag — Inventário de Conteúdo & Audit Competitivo
> Documento de trabalho para reescrita do website | Versão 1.0 | Março 2026

---

## 1. SITEMAP ATUAL

| # | Página | URL | Status |
|---|--------|-----|--------|
| 1 | Home | `/en/` | ✅ Existe |
| 2 | Solutions & Features | `/coverage/#solutions-features` | ⚠️ Âncora (não é página própria) |
| 3 | Coverage | `/en/coverage/` | ✅ Existe |
| 4 | Local Payment Methods | `/en/local-payment-methods-latam/` | ✅ Existe |
| 5 | Pricing | `/pricing/` | ✅ Existe |
| 6 | About Us | `/about/` | ✅ Existe |
| 7 | Articles (Blog) | `/blog/` | ✅ Existe |
| 8 | Papers | `/en/blog/papers/` | ✅ Existe |
| 9 | Contact Us | `/contact/` | ✅ Existe |
| 10 | FAQs | `/frequently-asked-questions/` | ✅ Existe |
| 11 | Developers / Docs | `developer.epag.com` | ✅ Domínio separado |
| 12 | Terms (Merchants) | `/terms-conditions-for-merchants/` | ✅ Legal |
| 13 | Terms (Users) | `/terms-conditions-for-users/` | ✅ Legal |
| 14 | Privacy Policy | `/en/privacy-policy/` | ✅ Legal |

**Páginas ausentes que concorrentes têm e epag não:**
- ❌ Página de Indústrias/Verticais (SaaS, Gaming, Travel, etc.)
- ❌ Página de Integrações/Parceiros
- ❌ Customer Stories / Cases
- ❌ Status page pública
- ❌ Página de Developers dedicada no site principal

---

## 2. AUDIT DE CONTEÚDO — PÁGINA POR PÁGINA

### 2.1 HOME (`/en/`)

**Hero atual:**
> "Cross-Border Online Payments for Latin America"
> "Our cross border payments platform allows you to accept payments like a local business."

**Problemas identificados:**
- Headline genérica, sem diferenciação clara
- Sub-headline descreve o "o quê", não o "por quê" ou o impacto
- Dois CTAs (Learn More + Contact Sales) competindo — sem hierarquia clara
- "Learn More" aponta para âncora na mesma página (fraco)

**Seções existentes:**
1. Hero
2. Value props (6 bullets: No local entity, Local collection, Accept cards/cash, Express payouts, 3DS/Fraud, Tax ID validation)
3. Products (Payment Processing / Real-time Payouts / ID Validation)
4. Developer section (código curl + "More options for developers")
5. Logos de parceiros (Rede, Frente, Ourinvest, Pagbank)
6. Pricing teaser
7. "Enabling businesses to boost emerging markets" + logos de métodos de pagamento

**Oportunidades:**
- Sem social proof (nenhum cliente, nenhum número de transações, nenhum quote)
- Sem seção de indústrias/verticais
- Sem métricas de impacto (ex: "97% approval rate", "$Xbn processed")
- Logos de parceiros financeiros pouco conhecidos para audiência internacional

---

### 2.2 COVERAGE (`/en/coverage/`)

**Headline atual:**
> "PAYMENT COVERAGE IN LATIN AMERICA — Payment Coverage for International Merchants"

**Stats atuais:**
- 670M+ adult individuals
- 470K+ points of sale
- 140+ payment partners

**Países ativos:** Brasil, México, Chile, Colômbia, Peru, Equador

**Produtos listados na página:**
1. **Payment Processing** — API RESTful, ativa PIX, SPEI, OXXO, PSE, Nequi
2. **Payouts** — PIX, SPEI, wallet disbursement; dashboard tracking; KYC/AML
3. **ID Validation** — CPF/CNPJ validation; multi-database; pay-per-use

**Problemas identificados:**
- Seção de "ID Validation" aparece **duplicada** na página (bug de conteúdo)
- Headline em maiúsculas — não é padrão moderno de UX/copy
- Ausência de tabela comparativa de métodos por país (apenas interativo via clique)
- "Discover the Available Payment Methods by Countries" é uma sub-página não auditada aqui

---

### 2.3 PRICING (`/pricing/`)

**Modelo atual:**
- **Pay as you go:** 3,9% + ¢29 por transação
- **Enterprise:** Volume discounts, custom

**Destaques incluídos:**
- Settlement: Free para remessas internacionais acima de USD 5.000
- Refunds: ¢25 para cartões / ¢85 para cash
- Disputes: USD 15 (reembolsado se ganho)
- Installments: até 12x; Consumer Credit Fee de 2,99%/mês
- Sem setup fee, sem mensalidade, sem entidade local

**Problemas identificados:**
- Não há tabela detalhada de preços — apenas texto descritivo
- Comparação com concorrentes ausente
- Sem calculadora de pricing
- O "full pricing and additional services fee table" é mencionado mas não exibido claramente

---

### 2.4 ABOUT (`/about/`)

**Mensagem central:**
> "We help global companies feel truly Latin"

**Conteúdo atual:**
- Mission: "Helping merchants expand their business in Latin America"
- Vision: "We believe in truly open markets..."
- Team: "10+ nationalities", escritórios em SP, Lisboa e Amsterdã
- Background: veteranos de banking, payments, fintech LatAm
- Fundadores: Ricardo Dortas (CEO), Jan Schnürle, Julian Migura, Rafael Pereira
- Menção a PagSeguro (NYSE: PAGS) e MercadoPago (NASDAQ: MELI) como background

**Problemas identificados:**
- Sem fotos dos fundadores/time
- Sem timeline da empresa
- Sem números (tamanho do time, anos de operação, volume processado)
- "Almost a century of combined experience" — afirmação forte sem suporte

---

### 2.5 DEVELOPER DOCS (`developer.epag.com`)

> *Domínio separado — auditoria completa depende de acesso ao conteúdo. Baseado no site principal:*

**Referências ao produto técnico:**
- API RESTful
- Endpoint documentado: POST com X-Auth-Token
- Campos: amount, reference_id, contract_id, asset, person_firstname, person_surname, person_email, person_taxid, person_birth
- 3DS 2.0 integrado
- Pay-per-use model no ID Validation

---

## 3. BENCHMARK COMPETITIVO

### 3.1 EBANX (`ebanx.com/en/`)

**Posicionamento:**
> "Solving payments for global brands in emerging markets"

**Diferenciais destacados:**
- 500+ global merchants (Microsoft, Canva, Sony, Spotify, Uber, Shopee, AliExpress)
- 20+ countries, 200+ payment methods
- 100+ regional partners
- +10.2pp uplift em approval rates
- 97% conversion no Pix
- 11 anos de track record

**Estrutura de navegação:**
- Soluções por produto (Pay-in, Payout, Recurring, B2B)
- Soluções por indústria (SaaS, Gaming, Streaming, Travel, Digital Ads)
- Why EBANX (página dedicada)
- Blog + Resources

**Padrões de copy a observar:**
- Usa números concretos e métricas de performance
- Social proof pesado com logos tier-1
- Narrativa de "rising markets" (não só LatAm)
- CTAs claros: "Get Started" + "Contact Sales" consistentes

---

### 3.2 Stripe (`stripe.com`)

**Posicionamento:**
> "Financial Infrastructure to Grow Your Revenue"

**Diferenciais destacados:**
- $1.9T em pagamentos em 2025
- 135+ moedas e métodos de pagamento
- 99.999% historical uptime
- 50% das Fortune 100 usam Stripe
- 200M+ active subscriptions

**Padrões de copy a observar:**
- Headline usa substantivo poderoso: "Infrastructure" (não apenas "gateway")
- Métricas de escala e confiabilidade como argumento central
- Customer stories detalhados (Hertz, URBN, Instacart, Le Monde)
- Developer-first: docs, SDKs, sandbox sempre em destaque
- CTAs: "Start now" (self-serve) + "Contact sales" (enterprise)

---

### 3.3 Pagar.me (`pagar.me`)

**Posicionamento:**
> "Pagamentos digitais para todo tipo de negócio"
> "A tecnologia da Stone para quem vende online"

**Diferenciais destacados:**
- Backing da Stone (credibilidade local)
- Soluções prontas + API robusta
- PCI Compliance + antifraude
- Atendimento humano ("fale com um especialista em segundos")
- Checkout, Pix, recorrência, split, links de pagamento

**Padrões de copy a observar:**
- Tom mais próximo e brasileiro
- Benefício imediato nas headlines ("vender mais", "escalar")
- Presença de clientes conhecidos (Leroy Merlin, Casa & Video)
- Seção de features listadas em bullets curtos e diretos
- Integração como proposta de valor (fácil, rápida)

---

## 4. ANÁLISE DE GAPS — epag vs. Mercado

| Elemento | epag atual | EBANX | Stripe | Pagar.me |
|----------|------------|-------|--------|----------|
| Social proof (logos) | ❌ Ausente | ✅ Tier-1 | ✅ Fortune 100 | ✅ Nacionais |
| Métricas de performance | ❌ Ausente | ✅ Forte | ✅ Muito forte | ⚠️ Parcial |
| Páginas por indústria | ❌ Ausente | ✅ 5 verticais | ✅ Múltiplas | ⚠️ Algumas |
| Customer stories | ❌ Ausente | ✅ Vários | ✅ Detalhados | ⚠️ Parcial |
| Developer experience | ⚠️ Subdomínio | ✅ Integrado | ✅ Referência | ✅ Integrado |
| Pricing transparente | ✅ Existe | ❌ Sob consulta | ✅ Detalhado | ✅ Existe |
| Calculadora de pricing | ❌ Ausente | ❌ | ✅ | ❌ |
| Blog/conteúdo | ✅ Existe | ✅ | ✅ | ✅ |
| Status page | ❌ Ausente | ❌ | ✅ | ❌ |

---

## 5. PROPOSTA DE NOVO SITEMAP

```
/
├── index (Home)
├── /solutions
│   ├── /payment-processing
│   ├── /payouts
│   └── /id-validation
├── /industries
│   ├── /saas
│   ├── /gaming
│   ├── /travel-airlines
│   ├── /streaming
│   └── /marketplaces
├── /coverage
│   └── /payment-methods  (por país)
├── /pricing
├── /developers           (link para docs ou seção dedicada)
├── /customers            (cases/stories — NOVO)
├── /about
├── /blog
│   └── /papers
└── /contact
```

---

## 6. PRIORIDADE DE REESCRITA

| Prioridade | Página | Justificativa |
|------------|--------|---------------|
| 🔴 1 | Home | Maior impacto, primeira impressão |
| 🔴 2 | Solutions/Features | Coração do produto, SEO |
| 🔴 3 | Pricing | Alta intenção de compra |
| 🟡 4 | About | Credibilidade e confiança |
| 🟡 5 | Coverage | Técnico mas decisivo para conversão |
| 🟡 6 | Industries (novo) | Gap estratégico vs concorrentes |
| 🟢 7 | Customers/Cases (novo) | Social proof — requer conteúdo externo |
| 🟢 8 | Contact | Simples, mas o CTA final importa |

---

## 7. DIRETRIZES DE COPY PARA REESCRITA

### Tom de voz (baseado no benchmark)
- **Confiante** sem ser arrogante — como Stripe
- **Local sem ser provinciano** — como EBANX
- **Direto ao benefício** — como Pagar.me
- Audiência primária: **CPO / CTO / Head of Growth** de empresa global querendo entrar no LatAm

### Padrões a adotar
1. Headlines orientadas a **resultado** (ex: "Accept LatAm payments like you were born here")
2. Números concretos **sempre que disponíveis** (países, métodos, parceiros, uptime)
3. CTAs em **hierarquia clara**: primário (Contact Sales) + secundário (Explore Docs)
4. Seções de social proof — **mínimo 3 logos de clientes** antes de publicar
5. Nenhuma feature sem um **benefício associado**

### Frases a evitar (tom atual fraco)
- "Learn More" como CTA principal
- "Sneak a peek at our super-simple pricing model" (coloquial demais, pouco confiável)
- "WYSIWYG" sem explicar
- Títulos genéricos como "Enabling businesses to boost emerging markets"

### Mensagens-chave a preservar e amplificar
- **Tecnologia 100% proprietária** (grande diferencial vs. dependência de terceiros)
- **Sem entidade local necessária** (remove a maior fricção para entrada no LatAm)
- **Pricing transparente e pay-as-you-go** (diferencial vs. EBANX que não publica preço)
- **Time com DNA local** (PagSeguro, MercadoPago — credibilidade enorme)
- **Multi-país em uma integração** (Brasil + México + Chile + Colômbia + Peru + Equador)

---

## 8. PRÓXIMOS PASSOS

- [ ] Compartilhar este inventário com o time e validar gaps
- [ ] Levantar logos de clientes reais para social proof
- [ ] Definir métricas reais (TPV, approval rate, uptime, etc.)
- [ ] Iniciar reescrita pela **Home** (página 1 da fila)
- [ ] Alinhar com Figma sobre quais seções existem no novo layout
- [ ] Estabelecer língua padrão do novo site (EN / PT / ambos?)

---

*Documento gerado com base em: epag.com/en, epag.com/pricing, epag.com/about, epag.com/en/coverage + benchmark EBANX, Stripe e Pagar.me | Março 2026*
