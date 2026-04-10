export const homeContent = {
  'pt-BR': {
    hero: {
      badge: 'PCI DSS · 6 Países · 1 Integração',
      headline: 'Acesso Direto à Infraestrutura de Pagamentos da América Latina',
      headlineHighlight: 'Infraestrutura de Pagamentos',
      subheadline:
        'Aceite pagamentos em toda a América Latina por meio de conexões diretas com os trilhos bancários domésticos e adquirentes locais — sem intermediários ou agregação em camadas. A epag permite que empresas globais operem dentro do ecossistema financeiro local com uma única integração.',
      cta: {
        primary: 'Explorar nossa API',
        secondary: 'Falar com um Especialista em Expansão LATAM',
      },
    },
    stats: {
      items: [
        { suffix: 'M+', label: 'indivíduos adultos alcançáveis' },
        { suffix: 'K+', label: 'pontos de venda' },
        { suffix: '+', label: 'parceiros de pagamento' },
        { suffix: '', label: 'países ativos' },
      ],
    },
    differentiators: {
      eyebrow: 'Por que epag',
      headline: 'Construído de forma diferente desde o início',
      subheadline:
        'Cada decisão arquitetural — das conexões diretas com os trilhos à tecnologia proprietária — foi tomada para dar ao seu negócio uma vantagem real na América Latina.',
      items: [
        {
          title: 'Sem necessidade de entidade local',
          description:
            'Lance operações na LatAm sem registrar empresa, abrir conta bancária ou contratar localmente. Do contrato assinado às transações ao vivo em dias.',
        },
        {
          title: 'Trilhos diretos, zero agregadores',
          description:
            'Conexão direta com PIX, SPEI, PSE e adquirentes domésticos. Remover camadas de agregadores significa maiores taxas de aprovação, liquidações mais rápidas e menor custo por transação.',
        },
        {
          title: 'Uma API, seis países',
          description:
            'Uma única integração RESTful cobre Brasil, México, Colômbia, Peru, Chile e Equador. Um contrato, um onboarding, uma equipe técnica — em toda a LatAm.',
        },
        {
          title: 'Preços transparentes',
          description:
            '3,9% + ¢29 por transação. Publicado, fixo e final. Sem spreads de câmbio embutidos na liquidação, sem mínimos de volume, sem taxas ocultas.',
        },
        {
          title: 'DNA local, padrões globais',
          description:
            'Fundada por veteranos que construíram o PagSeguro (NYSE: PAGS) e o MercadoPago (NASDAQ: MELI). A equipe que escalou as maiores plataformas de pagamento da LatAm agora dá às empresas globais o mesmo acesso.',
        },
        {
          title: 'Certificado PCI DSS',
          description:
            'Conformidade total com PCI DSS, autenticação 3DS 2.0 e pontuação adaptativa de fraude integrada em cada transação. Segurança de nível enterprise sem overhead de integração enterprise.',
        },
      ],
    },
    products: {
      eyebrow: 'Nossos Produtos',
      headline: 'Tudo que sua expansão na LatAm precisa',
      subheadline:
        'Pay-in, payouts e compliance — tudo por uma integração, um contrato e uma equipe técnica.',
      learnMore: 'Saiba mais',
      items: [
        {
          tag: 'Pay-in',
          title: 'Processamento de Pagamentos',
          description:
            'Aceite cartões de crédito e débito locais, vouchers em dinheiro, transferências bancárias e pagamentos instantâneos via uma única API. Entre em operação com PIX, SPEI, OXXO, PSE, Nequi e Boleto — sem entidade local ou contratos por mercado.',
          methods: ['PIX', 'SPEI', 'OXXO', 'PSE', 'Boleto', 'Cartões'],
        },
        {
          tag: 'Pay-out',
          title: 'Pagamentos em Tempo Real',
          description:
            'Realize pagamentos totalmente automatizados para usuários, prestadores e parceiros em tempo real. Desembolsos via PIX, SPEI e carteiras digitais — com rastreamento detalhado e reconciliação sem esforço.',
          methods: ['PIX', 'SPEI', 'Carteiras'],
        },
        {
          tag: 'Compliance',
          title: 'Validação de ID',
          description:
            'Verificação de CPF e CNPJ em tempo real conectada a múltiplos bancos de dados governamentais. Necessária para processamento de pagamentos, verificação de idade e conformidade regulatória no Brasil. Modelo pay-per-use.',
          methods: ['CPF', 'CNPJ', 'Multi-banco'],
        },
      ],
    },
    industries: {
      eyebrow: 'Indústrias',
      headline: 'Pagamentos para cada vertical que entra na LatAm',
      subheadline:
        'De SaaS por assinatura a compras in-game — a epag cuida da complexidade de pagamentos para você focar no seu produto.',
      items: [
        { label: 'SaaS & Software' },
        { label: 'Gaming' },
        { label: 'Viagens & Companhias Aéreas' },
        { label: 'Streaming' },
        { label: 'Marketplaces' },
      ],
    },
    coverage: {
      eyebrow: 'Cobertura',
      headline: 'Seis países. Uma integração.',
      subheadline:
        'Acesse 670M+ indivíduos adultos no Brasil, México, Colômbia, Peru, Chile e Equador — por meio de conexões diretas com os trilhos bancários locais.',
      viewAll: 'Ver mapa completo de cobertura',
      countries: [
        { name: 'Brasil', flagCode: 'br', methods: 'PIX · Boleto · Cartão de Crédito · Carteiras' },
        { name: 'México', flagCode: 'mx', methods: 'OXXO · SPEI · Cartão de Crédito' },
        { name: 'Colômbia', flagCode: 'co', methods: 'PSE · Nequi · Cartão de Crédito' },
        { name: 'Peru', flagCode: 'pe', methods: 'Cartão de Crédito · Voucher em Dinheiro' },
        { name: 'Chile', flagCode: 'cl', methods: 'Cartão de Crédito · Transferência Bancária' },
        { name: 'Equador', flagCode: 'ec', methods: 'Cartão de Crédito · Dinheiro' },
      ],
    },
    developer: {
      eyebrow: 'Experiência do Desenvolvedor',
      headline: 'Construído para equipes de engenharia que se movem rápido',
      body: '100% tecnologia proprietária — sem sistemas legados, sem dependências de terceiros. Uma API RESTful limpa cobre todos os seis países. Lance sua integração LatAm em dias, não meses.',
      cta: 'Explorar a documentação',
      badges: ['API RESTful', 'JSON / OAuth', '3DS 2.0', 'Sandbox desde o dia 1'],
    },
    pricingTeaser: {
      eyebrow: 'Preços',
      headline: 'Preços simples e transparentes.',
      headlineHighlight: 'Sem surpresas.',
      subheadline:
        'Uma taxa única cobre todos os 12 países e todos os métodos de pagamento. Sem spreads de câmbio, sem mínimos mensais, sem taxas ocultas de liquidação.',
      viewAll: 'Ver detalhes completos de preços, tabela de taxas e informações de liquidação',
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
    footerCTA: {
      headline: 'Pronto para aceitar pagamentos na América Latina?',
      subheadline:
        'Entre em operação em dias — sem entidade local, sem taxas ocultas, sem agregadores. Acesso direto aos trilhos financeiros que movimentam 670M+ adultos em seis países.',
      cta: {
        primary: 'Falar com Vendas',
        secondary: 'Explorar a documentação',
      },
    },
  },

  en: {
    hero: {
      badge: 'PCI DSS · 6 Countries · 1 Integration',
      headline: "Direct Access to Latin America's Payment Infrastructure",
      headlineHighlight: 'Payment Infrastructure',
      subheadline:
        'Accept payments across Latin America through direct connections to domestic banking rails and local acquirers — without intermediaries or layered aggregation. epag enables global companies to operate inside the local financial ecosystem with a single integration.',
      cta: {
        primary: 'Explore our API',
        secondary: 'Talk to a LATAM Expansion Specialist',
      },
    },
    stats: {
      items: [
        { suffix: 'M+', label: 'adult individuals reachable' },
        { suffix: 'K+', label: 'points of sale' },
        { suffix: '+', label: 'payment partners' },
        { suffix: '', label: 'countries active' },
      ],
    },
    differentiators: {
      eyebrow: 'Why epag',
      headline: 'Built differently from the start',
      subheadline:
        'Every architectural decision — from direct rail connections to proprietary technology — was made to give your business a real advantage in Latin America.',
      items: [
        {
          title: 'No local entity required',
          description:
            'Launch operations in LatAm without registering a company, opening a bank account, or hiring locally. Go from signed contract to live transactions in days.',
        },
        {
          title: 'Direct rails, zero aggregators',
          description:
            'Connect directly to PIX, SPEI, PSE, and domestic acquirers. Removing aggregator layers means higher approval rates, faster settlements, and lower per-transaction cost.',
        },
        {
          title: 'One API, six countries',
          description:
            'A single RESTful integration covers Brazil, Mexico, Colombia, Peru, Chile, and Ecuador. One contract, one onboarding, one technical team to deal with — across all of LatAm.',
        },
        {
          title: 'Transparent pricing',
          description:
            '3.9% + ¢29 per transaction. Published, fixed, and final. No FX spreads tucked into settlement, no volume minimums, no hidden fees.',
        },
        {
          title: 'Local DNA, global standards',
          description:
            "Founded by veterans who built PagSeguro (NYSE: PAGS) and MercadoPago (NASDAQ: MELI). The team that scaled LatAm's largest payment platforms is now giving global companies the same access.",
        },
        {
          title: 'PCI DSS certified',
          description:
            'Full PCI DSS compliance, 3DS 2.0 authentication, and adaptive fraud scoring built into every transaction. Enterprise-grade security without enterprise-level integration overhead.',
        },
      ],
    },
    products: {
      eyebrow: 'Our Products',
      headline: 'Everything your LatAm expansion needs',
      subheadline:
        'Pay-in, payouts, and compliance — all through one integration, one contract, and one technical team.',
      learnMore: 'Learn more',
      items: [
        {
          tag: 'Pay-in',
          title: 'Payment Processing',
          description:
            'Accept local credit & debit cards, cash vouchers, bank transfers, and instant payments via a single API. Go live with PIX, SPEI, OXXO, PSE, Nequi, and Boleto — without a local entity or per-market contracts.',
          methods: ['PIX', 'SPEI', 'OXXO', 'PSE', 'Boleto', 'Cards'],
        },
        {
          tag: 'Pay-out',
          title: 'Real-time Payouts',
          description:
            'Disburse fully automated payouts to users, contractors, and partners in real time. PIX, SPEI, and digital wallet disbursements — with detailed tracking and effortless reconciliation.',
          methods: ['PIX', 'SPEI', 'Wallets'],
        },
        {
          tag: 'Compliance',
          title: 'ID Validation',
          description:
            'Real-time CPF and CNPJ verification connected to multiple government databases. Required for payment processing, age verification, and regulatory compliance in Brazil. Pay-per-use model.',
          methods: ['CPF', 'CNPJ', 'Multi-database'],
        },
      ],
    },
    industries: {
      eyebrow: 'Industries',
      headline: 'Payments for every vertical entering LatAm',
      subheadline:
        'From subscription SaaS to in-game purchases — epag handles the payment complexity so you can focus on your product.',
      items: [
        { label: 'SaaS & Software' },
        { label: 'Gaming' },
        { label: 'Travel & Airlines' },
        { label: 'Streaming' },
        { label: 'Marketplaces' },
      ],
    },
    coverage: {
      eyebrow: 'Coverage',
      headline: 'Six countries. One integration.',
      subheadline:
        'Access 670M+ adult individuals across Brazil, Mexico, Colombia, Peru, Chile, and Ecuador — through direct connections to local banking rails.',
      viewAll: 'View full coverage map',
      countries: [
        { name: 'Brazil', flagCode: 'br', methods: 'PIX · Boleto · Credit Card · Wallets' },
        { name: 'Mexico', flagCode: 'mx', methods: 'OXXO · SPEI · Credit Card' },
        { name: 'Colombia', flagCode: 'co', methods: 'PSE · Nequi · Credit Card' },
        { name: 'Peru', flagCode: 'pe', methods: 'Credit Card · Cash Voucher' },
        { name: 'Chile', flagCode: 'cl', methods: 'Credit Card · Bank Transfer' },
        { name: 'Ecuador', flagCode: 'ec', methods: 'Credit Card · Cash' },
      ],
    },
    developer: {
      eyebrow: 'Developer Experience',
      headline: 'Built for engineering teams that move fast',
      body: '100% proprietary technology — no legacy systems, no third-party dependencies. One clean RESTful API covers all six countries. Ship your LatAm integration in days, not months.',
      cta: 'Explore the docs',
      badges: ['RESTful API', 'JSON / OAuth', '3DS 2.0', 'Sandbox from day 1'],
    },
    pricingTeaser: {
      eyebrow: 'Pricing',
      headline: 'Simple, transparent pricing.',
      headlineHighlight: 'No surprises.',
      subheadline:
        'One flat rate covers all 12 countries and every payment method. No FX spreads, no monthly minimums, no hidden settlement fees.',
      viewAll: 'See full pricing details, fee table and settlement info',
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
    footerCTA: {
      headline: 'Ready to accept payments in Latin America?',
      subheadline:
        'Go live in days — no local entity, no hidden fees, no aggregators. Direct access to the financial rails that power 670M+ adults across six countries.',
      cta: {
        primary: 'Contact Sales',
        secondary: 'Explore the docs',
      },
    },
  },

  es: {
    hero: {
      badge: 'PCI DSS · 6 Países · 1 Integración',
      headline: 'Acceso Directo a la Infraestructura de Pagos de América Latina',
      headlineHighlight: 'Infraestructura de Pagos',
      subheadline:
        'Acepta pagos en toda América Latina a través de conexiones directas con los rieles bancarios domésticos y adquirentes locales — sin intermediarios ni agregación por capas. epag permite a las empresas globales operar dentro del ecosistema financiero local con una sola integración.',
      cta: {
        primary: 'Explorar nuestra API',
        secondary: 'Hablar con un Especialista en Expansión LATAM',
      },
    },
    stats: {
      items: [
        { suffix: 'M+', label: 'individuos adultos alcanzables' },
        { suffix: 'K+', label: 'puntos de venta' },
        { suffix: '+', label: 'socios de pago' },
        { suffix: '', label: 'países activos' },
      ],
    },
    differentiators: {
      eyebrow: 'Por qué epag',
      headline: 'Construido de manera diferente desde el principio',
      subheadline:
        'Cada decisión arquitectónica — desde las conexiones directas con los rieles hasta la tecnología propietaria — fue tomada para dar a tu negocio una ventaja real en América Latina.',
      items: [
        {
          title: 'Sin entidad local requerida',
          description:
            'Lanza operaciones en LatAm sin registrar una empresa, abrir una cuenta bancaria o contratar localmente. Del contrato firmado a las transacciones en vivo en días.',
        },
        {
          title: 'Rieles directos, cero agregadores',
          description:
            'Conéctate directamente a PIX, SPEI, PSE y adquirentes domésticos. Eliminar capas de agregadores significa mayores tasas de aprobación, liquidaciones más rápidas y menor costo por transacción.',
        },
        {
          title: 'Una API, seis países',
          description:
            'Una sola integración RESTful cubre Brasil, México, Colombia, Perú, Chile y Ecuador. Un contrato, un onboarding, un equipo técnico — en toda LatAm.',
        },
        {
          title: 'Precios transparentes',
          description:
            '3,9% + ¢29 por transacción. Publicado, fijo y final. Sin spreads de FX en la liquidación, sin mínimos de volumen, sin tarifas ocultas.',
        },
        {
          title: 'ADN local, estándares globales',
          description:
            'Fundada por veteranos que construyeron PagSeguro (NYSE: PAGS) y MercadoPago (NASDAQ: MELI). El equipo que escaló las mayores plataformas de pago de LatAm ahora da a las empresas globales el mismo acceso.',
        },
        {
          title: 'Certificado PCI DSS',
          description:
            'Cumplimiento total con PCI DSS, autenticación 3DS 2.0 y puntuación adaptativa de fraude integrada en cada transacción. Seguridad de nivel enterprise sin la complejidad de integración enterprise.',
        },
      ],
    },
    products: {
      eyebrow: 'Nuestros Productos',
      headline: 'Todo lo que necesita tu expansión en LatAm',
      subheadline:
        'Pay-in, pagos y cumplimiento — todo a través de una integración, un contrato y un equipo técnico.',
      learnMore: 'Saber más',
      items: [
        {
          tag: 'Pay-in',
          title: 'Procesamiento de Pagos',
          description:
            'Acepta tarjetas de crédito y débito locales, vouchers en efectivo, transferencias bancarias y pagos instantáneos a través de una sola API. Entra en operación con PIX, SPEI, OXXO, PSE, Nequi y Boleto — sin entidad local ni contratos por mercado.',
          methods: ['PIX', 'SPEI', 'OXXO', 'PSE', 'Boleto', 'Tarjetas'],
        },
        {
          tag: 'Pay-out',
          title: 'Pagos en Tiempo Real',
          description:
            'Realiza pagos totalmente automatizados a usuarios, contratistas y socios en tiempo real. Desembolsos vía PIX, SPEI y billeteras digitales — con seguimiento detallado y reconciliación sin esfuerzo.',
          methods: ['PIX', 'SPEI', 'Billeteras'],
        },
        {
          tag: 'Compliance',
          title: 'Validación de ID',
          description:
            'Verificación de CPF y CNPJ en tiempo real conectada a múltiples bases de datos gubernamentales. Requerida para procesamiento de pagos, verificación de edad y cumplimiento regulatorio en Brasil. Modelo pay-per-use.',
          methods: ['CPF', 'CNPJ', 'Multi-base'],
        },
      ],
    },
    industries: {
      eyebrow: 'Industrias',
      headline: 'Pagos para cada vertical que entra en LatAm',
      subheadline:
        'Desde SaaS por suscripción hasta compras in-game — epag maneja la complejidad de pagos para que puedas enfocarte en tu producto.',
      items: [
        { label: 'SaaS & Software' },
        { label: 'Gaming' },
        { label: 'Viajes & Aerolíneas' },
        { label: 'Streaming' },
        { label: 'Marketplaces' },
      ],
    },
    coverage: {
      eyebrow: 'Cobertura',
      headline: 'Seis países. Una integración.',
      subheadline:
        'Accede a 670M+ individuos adultos en Brasil, México, Colombia, Perú, Chile y Ecuador — a través de conexiones directas con los rieles bancarios locales.',
      viewAll: 'Ver mapa completo de cobertura',
      countries: [
        { name: 'Brasil', flagCode: 'br', methods: 'PIX · Boleto · Tarjeta de Crédito · Billeteras' },
        { name: 'México', flagCode: 'mx', methods: 'OXXO · SPEI · Tarjeta de Crédito' },
        { name: 'Colombia', flagCode: 'co', methods: 'PSE · Nequi · Tarjeta de Crédito' },
        { name: 'Perú', flagCode: 'pe', methods: 'Tarjeta de Crédito · Voucher en Efectivo' },
        { name: 'Chile', flagCode: 'cl', methods: 'Tarjeta de Crédito · Transferencia Bancaria' },
        { name: 'Ecuador', flagCode: 'ec', methods: 'Tarjeta de Crédito · Efectivo' },
      ],
    },
    developer: {
      eyebrow: 'Experiencia del Desarrollador',
      headline: 'Construido para equipos de ingeniería que se mueven rápido',
      body: '100% tecnología propietaria — sin sistemas heredados, sin dependencias de terceros. Una API RESTful limpia cubre los seis países. Lanza tu integración LatAm en días, no meses.',
      cta: 'Explorar la documentación',
      badges: ['API RESTful', 'JSON / OAuth', '3DS 2.0', 'Sandbox desde el día 1'],
    },
    pricingTeaser: {
      eyebrow: 'Precios',
      headline: 'Precios simples y transparentes.',
      headlineHighlight: 'Sin sorpresas.',
      subheadline:
        'Una tarifa única cubre los 12 países y todos los métodos de pago. Sin spreads de FX, sin mínimos mensuales, sin tarifas ocultas de liquidación.',
      viewAll: 'Ver detalles completos de precios, tabla de tarifas e información de liquidación',
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
    footerCTA: {
      headline: '¿Listo para aceptar pagos en América Latina?',
      subheadline:
        'Entra en operación en días — sin entidad local, sin tarifas ocultas, sin agregadores. Acceso directo a los rieles financieros que mueven a 670M+ adultos en seis países.',
      cta: {
        primary: 'Contactar Ventas',
        secondary: 'Explorar la documentación',
      },
    },
  },
} as const;

export type HomeContent = typeof homeContent['en'];
