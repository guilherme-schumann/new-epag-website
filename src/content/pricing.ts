export const pricingContent = {
  'pt-BR': {
    hero: {
      eyebrow: 'Preços',
      headline: '3,9% + ¢29.',
      headlineSuffix: 'Só isso.',
      subheadline:
        'Sem taxas de setup. Sem taxas mensais. Sem custos ocultos. Uma taxa única cobre todos os 12 países, todos os métodos de pagamento e toda a infraestrutura epag — do PIX ao OXXO até a adquirência local de cartões.',
      cta: { primary: 'Falar com Vendas', secondary: 'Ler a documentação →' },
    },
    plans: {
      headline: 'Planos simples. Sem surpresas.',
      paygo: {
        badge: 'Mais popular',
        name: 'Pay as you go',
        price: '3,9%',
        priceSuffix: '+ ¢29',
        period: 'por transação',
        cta: 'Começar',
        highlights: [
          'Sem taxa de setup',
          'Sem taxa mensal',
          'Sem necessidade de entidade local',
          'Cobre todos os 12 países',
          'Todos os métodos de pagamento incluídos',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Personalizado',
        period: 'fale com nossa equipe',
        cta: 'Falar com Vendas',
        highlights: [
          'Descontos por volume',
          'Modelos de negócio personalizados',
          'Tarifas para ONGs e sem fins lucrativos',
          'Infraestrutura de escala enterprise',
          'Gerente de conta dedicado',
        ],
      },
    },
    feeTable: {
      eyebrow: 'Detalhes das taxas',
      headline: 'Cada taxa, publicada antecipadamente.',
      rows: [
        {
          service: 'Liquidação',
          description:
            'Fundos remetidos para sua conta bancária no exterior na sua moeda preferida. Sem necessidade de entidade local ou conta bancária local.',
          fee: 'Grátis acima de USD 5.000',
          note: 'Transferências rápidas e previsíveis',
          noteHighlight: false,
        },
        {
          service: 'Reembolsos',
          description: 'Gerencie reembolsos diretamente via API da epag.',
          fee: '¢25 (cartões) / ¢85 (dinheiro)',
          note: null,
          noteHighlight: false,
        },
        {
          service: 'Disputas',
          description: 'Resolução de disputas gerenciada pela epag.',
          fee: 'USD 15 por disputa',
          note: 'Totalmente reembolsado se resolvido a seu favor',
          noteHighlight: true,
        },
        {
          service: 'Parcelamentos',
          description:
            'Ofereça até 12 parcelas mensais aos seus clientes — uma experiência de pagamento totalmente local.',
          fee: '2,99% / mês (Taxa de Crédito ao Consumidor)',
          note: 'Sem juros para o seu negócio; o consumidor paga o custo do parcelamento',
          noteHighlight: false,
        },
      ],
    },
    differentiators: {
      eyebrow: 'Transparência',
      headline: 'A maioria dos provedores esconde taxas.',
      headlineHighlight: 'Nós publicamos as nossas.',
      points: [
        {
          label: 'Sem jogos de spread de câmbio',
          body: 'Não embutimos margens na taxa de câmbio. A liquidação acontece na taxa publicada.',
        },
        {
          label: 'Sem mínimos de volume',
          body: 'Pay as you go desde a primeira transação. Escale sem renegociar contratos.',
        },
        {
          label: 'Sem surpresas de setup',
          body: 'Zero taxas de onboarding. Zero taxas mensais de plataforma. Você paga quando processa.',
        },
        {
          label: 'Sem custos de entidade local',
          body: 'Operar na LatAm pela epag significa sem registro de empresa, sem conta bancária local, sem overhead de compliance local.',
        },
      ],
    },
    platformHighlights: {
      eyebrow: 'Plataforma',
      headline: 'Tudo incluído. Sem add-ons.',
      items: [
        'Setup e cadastro gratuitos',
        'Sem taxas mensais ou ocultas',
        'Sem necessidade de entidade local',
        'API RESTful singular',
        'Boletos otimizados para mobile',
        '100% em conformidade com o Banco Central',
        'Gestão fácil de assinaturas',
        'Relatórios ao vivo de alto nível',
      ],
    },
    bottomCTA: {
      eyebrow: 'Enterprise',
      headline: 'Preços por volume disponíveis para escala enterprise.',
      subheadline:
        'Processando mais de $50K/mês? Fale com nossa equipe de vendas sobre tarifas personalizadas, suporte dedicado e garantias de SLA.',
      cta: { primary: 'Falar com Vendas', secondary: 'Ler a documentação →' },
    },
  },

  en: {
    hero: {
      eyebrow: 'Pricing',
      headline: '3.9% + ¢29.',
      headlineSuffix: "That's it.",
      subheadline:
        'No setup fees. No monthly fees. No hidden costs. One flat rate covers all 12 countries, all payment methods, and the full epag infrastructure — from PIX to OXXO to local card acquiring.',
      cta: { primary: 'Contact Sales', secondary: 'Read the docs →' },
    },
    plans: {
      headline: 'Simple plans. No surprises.',
      paygo: {
        badge: 'Most popular',
        name: 'Pay as you go',
        price: '3.9%',
        priceSuffix: '+ ¢29',
        period: 'per transaction',
        cta: 'Get Started',
        highlights: [
          'No setup fee',
          'No monthly fee',
          'No local entity required',
          'Covers all 12 countries',
          'All payment methods included',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        period: 'talk to our team',
        cta: 'Contact Sales',
        highlights: [
          'Volume discounts',
          'Custom business models',
          'Charity & non-profit rates',
          'Enterprise-scale infrastructure',
          'Dedicated account manager',
        ],
      },
    },
    feeTable: {
      eyebrow: 'Fee details',
      headline: 'Every fee, published upfront.',
      rows: [
        {
          service: 'Settlement',
          description:
            'Funds remitted to your bank account abroad in your preferred currency. No local entity or local bank account required.',
          fee: 'Free above USD 5,000',
          note: 'Fast, predictable transfers',
          noteHighlight: false,
        },
        {
          service: 'Refunds',
          description: 'Manage refunds directly via the epag API.',
          fee: '¢25 (cards) / ¢85 (cash)',
          note: null,
          noteHighlight: false,
        },
        {
          service: 'Disputes',
          description: 'Dispute resolution handled through epag.',
          fee: 'USD 15 per dispute',
          note: 'Fully refunded if resolved in your favor',
          noteHighlight: true,
        },
        {
          service: 'Installments',
          description:
            'Offer up to 12 monthly installments to your customers — a fully local payment experience.',
          fee: '2.99% / month (Consumer Credit Fee)',
          note: 'Interest-free to your business; consumer pays the installment cost',
          noteHighlight: false,
        },
      ],
    },
    differentiators: {
      eyebrow: 'Transparency',
      headline: 'Most providers hide fees.',
      headlineHighlight: 'We publish ours.',
      points: [
        {
          label: 'No FX spread games',
          body: "We don't pad margins into the exchange rate. Settlement happens at the published rate.",
        },
        {
          label: 'No volume minimums',
          body: 'Pay as you go from transaction one. Scale without renegotiating contracts.',
        },
        {
          label: 'No setup surprises',
          body: 'Zero onboarding fees. Zero monthly platform fees. You pay when you process.',
        },
        {
          label: 'No local entity costs',
          body: 'Operating in LatAm through epag means no company registration, no local bank account, no local compliance overhead.',
        },
      ],
    },
    platformHighlights: {
      eyebrow: 'Platform',
      headline: 'Everything included. No add-ons.',
      items: [
        'Free setup and sign-up',
        'No monthly or hidden fees',
        'No local entity required',
        'Singular RESTful API',
        'Mobile-optimized Boletos',
        '100% Central Bank compliant',
        'Easy subscription management',
        'Top-notch live reporting',
      ],
    },
    bottomCTA: {
      eyebrow: 'Enterprise',
      headline: 'Volume pricing available for enterprise scale.',
      subheadline:
        "Processing more than $50K/month? Talk to our sales team about custom rates, dedicated support, and SLA guarantees.",
      cta: { primary: 'Contact Sales', secondary: 'Read the docs →' },
    },
  },

  es: {
    hero: {
      eyebrow: 'Precios',
      headline: '3,9% + ¢29.',
      headlineSuffix: 'Eso es todo.',
      subheadline:
        'Sin tarifas de setup. Sin tarifas mensuales. Sin costos ocultos. Una tarifa única cubre los 12 países, todos los métodos de pago y toda la infraestructura epag — desde PIX hasta OXXO y la adquirencia local de tarjetas.',
      cta: { primary: 'Contactar Ventas', secondary: 'Leer la documentación →' },
    },
    plans: {
      headline: 'Planes simples. Sin sorpresas.',
      paygo: {
        badge: 'Más popular',
        name: 'Pay as you go',
        price: '3,9%',
        priceSuffix: '+ ¢29',
        period: 'por transacción',
        cta: 'Comenzar',
        highlights: [
          'Sin tarifa de setup',
          'Sin tarifa mensual',
          'Sin entidad local requerida',
          'Cubre los 12 países',
          'Todos los métodos de pago incluidos',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Personalizado',
        period: 'habla con nuestro equipo',
        cta: 'Contactar Ventas',
        highlights: [
          'Descuentos por volumen',
          'Modelos de negocio personalizados',
          'Tarifas para ONGs y sin fines de lucro',
          'Infraestructura de escala enterprise',
          'Gerente de cuenta dedicado',
        ],
      },
    },
    feeTable: {
      eyebrow: 'Detalles de tarifas',
      headline: 'Cada tarifa, publicada por adelantado.',
      rows: [
        {
          service: 'Liquidación',
          description:
            'Fondos remitidos a tu cuenta bancaria en el exterior en tu moneda preferida. Sin entidad local ni cuenta bancaria local requerida.',
          fee: 'Gratis por encima de USD 5.000',
          note: 'Transferencias rápidas y predecibles',
          noteHighlight: false,
        },
        {
          service: 'Reembolsos',
          description: 'Gestiona reembolsos directamente a través de la API de epag.',
          fee: '¢25 (tarjetas) / ¢85 (efectivo)',
          note: null,
          noteHighlight: false,
        },
        {
          service: 'Disputas',
          description: 'Resolución de disputas gestionada a través de epag.',
          fee: 'USD 15 por disputa',
          note: 'Totalmente reembolsado si se resuelve a tu favor',
          noteHighlight: true,
        },
        {
          service: 'Cuotas',
          description:
            'Ofrece hasta 12 cuotas mensuales a tus clientes — una experiencia de pago totalmente local.',
          fee: '2,99% / mes (Tarifa de Crédito al Consumidor)',
          note: 'Sin intereses para tu negocio; el consumidor paga el costo de las cuotas',
          noteHighlight: false,
        },
      ],
    },
    differentiators: {
      eyebrow: 'Transparencia',
      headline: 'La mayoría de los proveedores ocultan tarifas.',
      headlineHighlight: 'Nosotros publicamos las nuestras.',
      points: [
        {
          label: 'Sin juegos de spread de FX',
          body: 'No añadimos márgenes a la tasa de cambio. La liquidación ocurre a la tasa publicada.',
        },
        {
          label: 'Sin mínimos de volumen',
          body: 'Pay as you go desde la primera transacción. Escala sin renegociar contratos.',
        },
        {
          label: 'Sin sorpresas de setup',
          body: 'Cero tarifas de onboarding. Cero tarifas mensuales de plataforma. Pagas cuando procesas.',
        },
        {
          label: 'Sin costos de entidad local',
          body: 'Operar en LatAm a través de epag significa sin registro de empresa, sin cuenta bancaria local, sin overhead de cumplimiento local.',
        },
      ],
    },
    platformHighlights: {
      eyebrow: 'Plataforma',
      headline: 'Todo incluido. Sin add-ons.',
      items: [
        'Setup y registro gratuitos',
        'Sin tarifas mensuales ni ocultas',
        'Sin entidad local requerida',
        'API RESTful singular',
        'Boletos optimizados para móvil',
        '100% en cumplimiento con el Banco Central',
        'Gestión fácil de suscripciones',
        'Reportes en vivo de primer nivel',
      ],
    },
    bottomCTA: {
      eyebrow: 'Enterprise',
      headline: 'Precios por volumen disponibles para escala enterprise.',
      subheadline:
        '¿Procesando más de $50K/mes? Habla con nuestro equipo de ventas sobre tarifas personalizadas, soporte dedicado y garantías de SLA.',
      cta: { primary: 'Contactar Ventas', secondary: 'Leer la documentación →' },
    },
  },
} as const;

export type PricingContent = typeof pricingContent['en'];
