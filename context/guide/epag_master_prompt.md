# epag — Master Prompt para Claude/AI Agent no Projeto
> Cole este prompt no início de qualquer sessão de trabalho no `new-epag-website`
> Substitua os blocos `[COLE AQUI...]` com o conteúdo real dos seus arquivos

---

## INSTRUÇÕES PARA O AGENTE

Você está trabalhando no projeto **`new-epag-website`** — um redesign completo do website da **epag**, uma plataforma de cross-border payments para a América Latina (Brasil, México, Chile, Colômbia, Peru, Equador).

Antes de qualquer tarefa, leia e respeite:
1. As instruções de arquitetura e padrões em `CLAUDE.md`
2. As regras de agente em `AGENTS.md`
3. Os comandos disponíveis definidos no projeto

---

## CONTEXTO DO PRODUTO

**O que é a epag:**
- Gateway de pagamentos cross-border focado em LatAm
- Permite que empresas globais aceitem pagamentos locais (PIX, OXXO, SPEI, Boleto, cartões locais) sem precisar de entidade local
- Tecnologia 100% proprietária, sem intermediários
- Fundada por ex-construtores de PagSeguro (NYSE: PAGS) e MercadoPago (NASDAQ: MELI)
- Escritórios em São Paulo, Lisboa e Amsterdã
- Certificação PCI DSS

**Público-alvo do site:**
- CPO / CTO / Head of Growth de empresa global querendo entrar no LatAm
- Empresas de SaaS, Gaming, Travel, Streaming, Marketplaces
- Developers que avaliam a API técnica

**Posicionamento atual (copy já aprovada no Figma):**
> "Direct Access to Latin America's Payment Infrastructure"

**Diferenciais únicos a sempre destacar:**
1. Sem entidade local necessária
2. Conexão direta com rails bancários domésticos (sem agregadores)
3. Uma única integração RESTful para todos os países
4. Pricing 100% transparente: 3,9% + ¢29/transação, sem taxas ocultas
5. Time com DNA local (PagSeguro, MercadoPago)

---

## DESIGN SYSTEM (Figma: `GuqQp4uDgvOvqyEBFPvvoQ`)

### Tokens de cor
```
epag-navy:       #002c45   // Fundo do hero, top utility bar
epag-sky-light:  #ebf7ff   // Background geral, textos sobre escuro
epag-cyan:       #17c3fa   // CTA principal, news banner
epag-blue:       #016197   // Links de menu, ícones, secondary theme
epag-mid-blue:   #019FD1   // Hover states, selected menu item
epag-blue-400:   #62C6FF   // Highlight/accent
epag-blue-500:   #30a6e9   // Secondary blue
dark-gray:       #333333   // Textos principais
light-gray:      #999999   // Textos secundários
white:           #FFFFFF
```

### Tipografia
```
Font: "Open Sans"
Pesos: 400 (Regular), 600 (SemiBold), 800 (ExtraBold)
```

### Componentes visuais chave
```
Botão primário:    bg-epag-cyan, text-epag-navy, rounded-[50px], px-6 py-3
Botão outline:     border-epag-sky-light, text-epag-sky-light, rounded-[50px]
Hero container:    bg-epag-navy, rounded-b-[48px], h-[680px]
Card shadow:       box-shadow: 10px 20px 40px 0px rgba(0,0,0,0.05)
```

### Frames disponíveis no Figma (node IDs)
```
Home (principal):  79:801
Home (rascunho):   28:808
Payin:             74:774
Contact Page:      36:727
Modal menu:        28:967 (Payments dropdown)
Modal menu:        72:701 (Markets/Coverage dropdown)
```

---

## COPY APROVADA (não alterar sem aprovação)

### Hero da Home
```
headline:     "Direct Access to Latin America's Payment Infrastructure"
subheadline:  "Accept payments across Latin America through direct connections 
               to domestic banking rails and local acquirers — without 
               intermediaries or layered aggregation. epag enables global 
               companies to operate inside the local financial ecosystem with 
               a single integration."
cta_primary:   "Explore our API"
cta_secondary: "Talk to a LATAM Expansion Specialist"
```

### Menu Navigation
```
Payments >
  Solutions & Features: Payin | Payout | Server-to-server | Hosted Checkout | 
                        Redirect Checkout | ID Validation | Subscriptions
  Payment Methods: PIX | OXXO | Credit / Debit Card | Boleto | Wallets

Markets >
  Coverage: Brazil | Mexico | Colombia | Peru | Ecuador | Chile

Pricing
Institucional
CTA: "Contact Us"
```

### Top utility bar
```
Login Admin | Help Center | 🌐 English ▾
```

### News banner (top, cyan)
```
"This place was separated to share new features in our system!"
```

---

## ESTRUTURA DE ARQUIVOS DO PROJETO

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
│   │   ├── TopNewsBanner.tsx
│   │   ├── TopUtilityBar.tsx
│   │   ├── MainNav.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── DeveloperSection.tsx
│   │   ├── CoverageMap.tsx
│   │   └── PricingTeaser.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── CountryCard.tsx
│       └── PaymentMethodBadge.tsx
├── content/                            ← Todos os .md ficam aqui
│   ├── home.md
│   ├── pricing.md
│   ├── about.md
│   └── solutions/
│       ├── payin.md
│       ├── payout.md
│       └── id-validation.md
└── lib/
    └── content.ts
```

---

## INVENTÁRIO DE CONTEÚDO DO SITE ATUAL

### Páginas existentes em `epag.com/en/`
| Página | URL | Problema principal |
|--------|-----|-------------------|
| Home | `/en/` | Zero social proof, hero fraco, sem métricas |
| Coverage | `/en/coverage/` | ID Validation duplicada, sem tabela de métodos |
| Pricing | `/pricing/` | Sem tabela detalhada, sem calculadora |
| About | `/about/` | Sem fotos, sem timeline, sem números do negócio |
| Docs | `developer.epag.com` | Domínio separado, sem integração visual |

### Páginas que precisam ser criadas (gap vs. concorrentes)
- `/solutions/payin` — Produto Pay-in detalhado
- `/solutions/payout` — Produto Payout detalhado
- `/solutions/id-validation` — Produto ID Validation
- `/solutions/hosted-checkout` — Checkout hospedado
- `/solutions/subscriptions` — Recorrência
- `/industries/*` — Verticais (SaaS, Gaming, Travel, Streaming)
- `/customers` — Cases e social proof

---

## BENCHMARK COMPETITIVO (não copiar, usar como referência de padrão)

| Concorrente | Posicionamento | Padrão de copy |
|-------------|---------------|----------------|
| EBANX | "Solving payments for global brands in emerging markets" | Métricas pesadas, logos tier-1, foco em approval rate |
| Stripe | "Financial infrastructure to grow your revenue" | Substantivos poderosos, escala, developer-first |
| Pagar.me | "Pagamentos digitais para todo tipo de negócio" | Direto ao benefício, tom próximo, fácil integração |

**Vantagem competitiva única da epag sobre os três:**
- EBANX não publica pricing — epag sim
- Stripe não tem profundidade LatAm local — epag sim
- Pagar.me é só Brasil — epag tem 6 países

---

## REGRAS DE COPY PARA ESTE PROJETO

### Tom de voz
- **Confiante e técnico** — fala com CTO/CPO, não com leigo
- **Direto ao benefício** — nunca feature sem benefício associado
- **Específico** — números e fatos sempre que possível
- **Sem buzzwords vazios** — proibido: "seamless", "best-in-class", "cutting-edge" sem evidência

### Headlines: padrão a seguir
```
✅ "Direct connections to Brazil's banking rails, not aggregators"
✅ "Accept PIX in 48 hours. No Brazilian entity required."
✅ "3.9% flat. No setup fee. No hidden costs."
❌ "Empowering global businesses with seamless payment solutions"
❌ "Your trusted partner for cross-border commerce"
```

### CTAs: hierarquia obrigatória
```
Primário (1 por seção):  "Explore our API" / "Contact Sales" / "Get Started"
Secundário (opcional):   "Talk to a LATAM Expansion Specialist" / "See full pricing"
Terciário (links):       "Read the docs" / "View coverage" / "Learn more"
```

### Frases proibidas (do site atual que devem ser eliminadas)
```
- "Sneak a peek at our super-simple pricing model"
- "WYSIWYG" sem explicação
- "Enabling businesses to boost emerging markets" (genérico demais)
- "Learn More" como CTA principal
- Títulos em MAIÚSCULAS
```

---

## PRIORIDADE DE IMPLEMENTAÇÃO

```
🔴 SEMANA 1 — Base
  [ ] Configurar design tokens (tailwind.config.ts)
  [ ] Configurar Open Sans (app/layout.tsx)
  [ ] TopNewsBanner + TopUtilityBar + MainNav + Footer
  [ ] HeroSection com copy nova do Figma
  [ ] content/home.md

🔴 SEMANA 2 — Home completa
  [ ] StatsBar (670M+, 470K+, 140+, 6 countries)
  [ ] ProductsSection (Pay-in, Payouts, ID Validation)
  [ ] DeveloperSection (code snippet + CTA docs)
  [ ] CoverageMap (6 países interativo)
  [ ] PricingTeaser

🟡 SEMANA 3 — Páginas secundárias
  [ ] /pricing com content/pricing.md
  [ ] /about com content/about.md
  [ ] /solutions/payin (Figma frame 74:774 disponível)
  [ ] /contact (Figma frame 36:727 disponível)

🟢 SEMANA 4 — Conteúdo pendente (depende de aprovação externa)
  [ ] Social proof / logos de clientes reais
  [ ] Métricas reais (approval rate, uptime, TPV)
  [ ] Páginas de indústrias
  [ ] Customer Stories
```

---

## COMO USAR ESTE PROMPT

### Para iniciar uma sessão de trabalho nova:
Cole este documento + o conteúdo atual do `CLAUDE.md` e `AGENTS.md` no início da conversa, depois descreva a tarefa específica.

### Para tarefas de componente:
```
"Usando as regras deste projeto, implemente o componente [X] 
seguindo o design do Figma (frame [ID]) e a copy de content/[arquivo].md"
```

### Para tarefas de copy:
```
"Escreva o conteúdo de content/[página].md para a página [X] 
seguindo o tom de voz, as regras de headline e o inventário deste documento"
```

### Para tarefas de revisão:
```
"Revise o arquivo [X] e verifique se: 
(a) os design tokens estão corretos, 
(b) a copy segue as regras deste projeto, 
(c) a estrutura de componentes está alinhada ao sitemap definido"
```

---

## ARQUIVOS DE REFERÊNCIA (gerar e salvar no projeto)

Os dois documentos de referência gerados na sessão de briefing estão em:

```
/content/docs/epag_content_inventory.md    ← Audit do site atual + benchmark
/content/docs/epag_implementation_guide.md ← Guia técnico completo com código
```

Sempre consulte esses arquivos antes de criar conteúdo ou componentes novos.

---

*Master prompt gerado com base em: audit do epag.com, Figma `Website - Epag` (GuqQp4uDgvOvqyEBFPvvoQ), benchmark EBANX/Stripe/Pagar.me | Março 2026*
*Versão: 1.0 — Atualize este documento sempre que houver mudanças de produto, copy aprovada ou novos componentes implementados*
