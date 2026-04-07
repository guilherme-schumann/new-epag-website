export const payinContent = {
  'pt-BR': {
    hero: {
      eyebrow: 'Soluções de Pagamento',
      headline: 'Acesso Direto à Infraestrutura de Pagamentos da América Latina',
      subheadline:
        'Aceite pagamentos em toda a América Latina por meio de conexões diretas com os trilhos bancários domésticos e adquirentes locais — sem intermediários ou agregação em camadas. A epag permite que empresas globais operem dentro do ecossistema financeiro local com uma única integração.',
      cta: {
        primary: 'Explorar nossa API',
        secondary: 'Falar com um Especialista em Expansão LATAM →',
      },
    },
    merchants: {
      label: 'Alguns merchants globais que se beneficiam da nossa solução Pay-in:',
      learnPayin: 'Saiba mais sobre Pay-in →',
      learnPayout: 'Saiba mais sobre Payout →',
      cta: 'Começar',
    },
    rails: {
      eyebrow: 'Infraestrutura',
      headline: 'Construído em Trilhos Diretos.',
      headlineHighlight: 'Não em Camadas.',
      body: 'A maioria dos provedores cross-border depende de processadores terceirizados e estruturas de roteamento em múltiplas camadas. A epag se conecta diretamente aos trilhos de pagamento locais como PIX, SPEI e PSE, bem como adquirentes de cartões domésticos. Este modelo de infraestrutura direta oferece:',
      benefits: [
        'Maior controle sobre a lógica de aprovação',
        'Implementação mais rápida de novos métodos de pagamento',
        'Menor dependência de camadas de processamento externas',
        'Maior transparência operacional',
        'Melhor consistência de desempenho',
      ],
      footer: {
        line1: 'Não alugamos infraestrutura.',
        line2: 'Nós a construímos e operamos.',
      },
    },
    markets: {
      eyebrow: 'Mercados',
      headline: 'Acesso Direto a',
      headlineHighlight: 'Cada Ecossistema Local',
      accessLabel: 'Através da epag, os merchants acessam:',
      items: [
        {
          number: '02',
          country: 'Brasil',
          headline: 'Economia em Tempo Real, Estruturada para Conversão',
          body: 'O Brasil é um ecossistema de pagamentos em tempo real e multi-método que requer arquitetura localizada.',
          methods: [
            'PIX (pagamentos instantâneos, disponível 24/7)',
            'PIX Automático (infraestrutura de pagamento recorrente)',
            'Adquirência doméstica de cartões',
            'Pagamentos parcelados ("parcelamento")',
            'Roteamento inteligente de transações',
          ],
          footnote:
            'No Brasil, uma transação de cartão recusada muitas vezes não é uma rejeição — é uma lógica local ausente. Nossa infraestrutura fornece essa lógica.',
        },
        {
          number: '03',
          country: 'México',
          headline: 'Banco Doméstico, Estratégia Global',
          body: 'O México opera sob sua própria dinâmica bancária e comportamento de pagamento do consumidor.',
          methods: [
            'Transferências bancárias em tempo real SPEI',
            'Redes de cartões locais',
            'Soluções alternativas baseadas em dinheiro (quando aplicável)',
          ],
          footnote:
            'Os fluxos de pagamento são estruturados de acordo com o comportamento do consumidor doméstico, garantindo maior desempenho de conversão e alinhamento regulatório.',
        },
        {
          number: '04',
          country: 'Colômbia e Outros Mercados LATAM',
          headline: 'Lógica de Integração País a País',
          body: 'Cada país da América Latina opera sob estruturas regulatórias, padrões bancários e preferências de pagamento distintos.',
          methods: [
            'Conformidade regulatória',
            'Priorização otimizada de métodos locais',
            'Estratégias inteligentes de aprovação',
            'Liquidação cross-border sem fricção',
          ],
          footnote:
            'A América Latina não é um único mercado. É uma coleção de sistemas financeiros independentes. Nossa infraestrutura conecta você adequadamente a cada um.',
        },
      ],
    },
    conversion: {
      eyebrow: 'Performance',
      headline: 'Conversão É',
      headlineHighlight: 'Arquitetura',
      body: 'Altas taxas de aprovação na América Latina são engenhadas — não assumidas.',
      footer: 'Na América Latina, o desempenho de aprovação é uma função do design da infraestrutura.',
      capabilities: [
        { label: 'Roteamento Inteligente', description: 'Roteamento inteligente para adquirentes domésticos de alto desempenho' },
        { label: 'Otimização de Parcelamento', description: 'Otimização de parcelamento localizada' },
        { label: 'Lógica de Retry Adaptativa', description: 'Lógica de retry adaptativa' },
        { label: 'Monitoramento em Tempo Real', description: 'Monitoramento de transações em tempo real' },
        { label: 'Prevenção de Fraude', description: 'Prevenção de fraude calibrada por comportamento' },
      ],
    },
    businessModels: {
      eyebrow: 'Modelos de Negócio',
      headline: 'Projetado para o Seu',
      headlineHighlight: 'Modelo de Negócio',
      body: 'A epag não implanta fluxos de pagamento genéricos. Nossa arquitetura Pay-in se adapta à sua estrutura de receita e complexidade operacional.',
      items: [
        {
          number: '6.1',
          title: 'Plataformas SaaS & Assinatura',
          description: 'Lógica de cobrança recorrente localizada e estratégias de redução de churn adaptadas ao comportamento regional de cartões.',
        },
        {
          number: '6.2',
          title: 'Gaming & Transações de Alta Frequência',
          description: 'Fluxos de confirmação instantânea e lógica de aprovação otimizada para ambientes orientados a performance.',
        },
        {
          number: '6.3',
          title: 'Varejo Global & E-commerce',
          description: 'Habilitação de parcelamento e otimização do Valor Médio do Pedido por meio de estruturação de pagamentos localizada.',
        },
        {
          number: '6.4',
          title: 'Marketplaces & Plataformas Digitais',
          description: 'Lógica de liquidação estruturada e arquitetura de split-payment configurável.',
        },
      ],
    },
    developer: {
      eyebrow: 'Desenvolvedor',
      headline: 'API-First.',
      headlineHighlight: 'Orientado ao Desenvolvedor.',
      body: 'A infraestrutura Pay-in da epag é totalmente baseada em API e construída para escalabilidade.',
      footer: {
        line1: 'A documentação não é um recurso auxiliar.',
        line2: 'É um componente central da arquitetura do produto.',
      },
      cta: 'Acessar Documentação do Desenvolvedor',
      capabilities: [
        'Endpoints RESTful',
        'Webhooks em tempo real',
        'Ambiente sandbox espelhando produção',
        'Documentação clara e versionada',
        'Ciclos de implementação acelerados',
      ],
    },
    cta: {
      eyebrow: 'Começar',
      headline: 'Aceite Pagamentos Como um Local.',
      headlineHighlight: 'Opere Como uma Empresa Global.',
      body: 'A epag substitui integrações fragmentadas e incerteza de aprovação por infraestrutura de pagamento direta e estruturada. Do zero ao vivo na LATAM — mais rápido, totalmente em conformidade e alinhado com os sistemas financeiros locais.',
      cta: 'Construir Sua Infraestrutura Pay-in',
    },
    features: {
      headline: 'UMA OPERAÇÃO DE PAGAMENTOS',
      headlineLine2: 'COMPLETA ADAPTADA PARA',
      headlineHighlight: 'MERCADOS EMERGENTES',
      body: 'Desbloqueie oportunidades de crescimento em mercados emergentes por meio de infraestrutura de pagamento direta — ampliando seu alcance e elevando as operações B2B e B2C em toda a América Latina.',
      payin: {
        title: 'Pay-in',
        learnMore: 'Saiba mais sobre Pay-in →',
        getStarted: 'Começar',
        items: [
          { label: 'Construído em Trilhos Diretos', description: 'Conexões diretas com PIX, SPEI, PSE e adquirentes domésticos de cartões — sem processadores terceirizados, sem roteamento em múltiplas camadas.' },
          { label: 'Maior Controle de Aprovação', description: 'Roteamento inteligente para adquirentes domésticos de alto desempenho com lógica de retry adaptativa e otimização de parcelamento localizada.' },
          { label: 'Pagamentos Recorrentes', description: 'Lógica de cobrança recorrente localizada e estratégias de redução de churn adaptadas ao comportamento regional de cartões.' },
          { label: 'Monitoramento de Transações em Tempo Real', description: 'Total transparência operacional com monitoramento em tempo real e prevenção de fraude calibrada por comportamento.' },
          { label: 'Integração Sem Fricção', description: 'Endpoints RESTful, webhooks em tempo real, sandbox espelhando produção e documentação clara e versionada.' },
          { label: 'Liquidação Multi-Moeda', description: 'Venda localmente enquanto recebe fundos em USD — estruturado para liquidação cross-border com alinhamento regulatório.' },
        ],
      },
      payout: {
        title: 'Payout',
        learnMore: 'Saiba mais sobre Payout →',
        getStarted: 'Começar',
        items: [
          { label: 'Solicitações de Pagamento Flexíveis', description: 'Aceite solicitações de payout em USD ou moeda local. Adicione saldo facilmente via transferência bancária ou valores processados.' },
          { label: 'Pagamentos em Massa', description: 'Pague um grande número de destinatários de forma rápida e simultânea. Métodos de pagamento locais também disponíveis.' },
          { label: 'Payouts Simplificados', description: 'Solicite payouts individuais e em massa em 3 etapas simples.' },
          { label: 'Micropagamentos', description: 'Realize transações sem valor mínimo de payout.' },
          { label: 'Verificador de Conta', description: 'Pré-valide a conta do destinatário automaticamente antes de disbursamentos.' },
          { label: 'Gestão Sem Fricção', description: 'Reconciliação personalizável, relatórios detalhados e arquitetura de split-payment configurável.' },
        ],
      },
    },
  },

  en: {
    hero: {
      eyebrow: 'Payment Solutions',
      headline: "Direct Access to Latin America's Payment Infrastructure",
      subheadline:
        'Accept payments across Latin America through direct connections to domestic banking rails and local acquirers — without intermediaries or layered aggregation. epag enables global companies to operate inside the local financial ecosystem with a single integration.',
      cta: {
        primary: 'Explore Our API',
        secondary: 'Talk to a LATAM Expansion Specialist →',
      },
    },
    merchants: {
      label: 'Some global merchants benefiting from our Pay-in solution:',
      learnPayin: 'Learn more about Pay-in →',
      learnPayout: 'Learn more about Payout →',
      cta: 'Get Started',
    },
    rails: {
      eyebrow: 'Infrastructure',
      headline: 'Built on Direct Rails.',
      headlineHighlight: 'Not on Layers.',
      body: 'Most cross-border providers rely on third-party processors and multi-layer routing structures. epag connects directly to local payment rails such as PIX, SPEI, and PSE, as well as domestic card acquirers. This direct infrastructure model provides:',
      benefits: [
        'Greater control over approval logic',
        'Faster implementation of new payment methods',
        'Reduced dependency on external processing layers',
        'Higher operational transparency',
        'Improved performance consistency',
      ],
      footer: {
        line1: 'We do not rent infrastructure.',
        line2: 'We build and operate it.',
      },
    },
    markets: {
      eyebrow: 'Markets',
      headline: 'Direct Access to',
      headlineHighlight: 'Every Local Ecosystem',
      accessLabel: 'Through epag, merchants access:',
      items: [
        {
          number: '02',
          country: 'Brazil',
          headline: 'Real-Time Economy, Structured for Conversion',
          body: 'Brazil is a real-time, multi-method payment ecosystem that requires localized architecture.',
          methods: [
            'PIX (instant payments, available 24/7)',
            'PIX Automatic (recurring payment infrastructure)',
            'Domestic card acquiring',
            'Installment payments ("parcelamento")',
            'Intelligent transaction routing',
          ],
          footnote:
            'In Brazil, a declined card transaction is often not a rejection — it is a missing local logic. Our infrastructure provides that logic.',
        },
        {
          number: '03',
          country: 'Mexico',
          headline: 'Domestic Banking, Global Strategy',
          body: 'Mexico operates under its own banking dynamics and consumer payment behavior.',
          methods: [
            'SPEI real-time bank transfers',
            'Local card networks',
            'Alternative cash-based solutions (when applicable)',
          ],
          footnote:
            'Payment flows are structured according to domestic consumer behavior, ensuring higher conversion performance and regulatory alignment.',
        },
        {
          number: '04',
          country: 'Colombia & Additional LATAM Markets',
          headline: 'Country-by-Country Integration Logic',
          body: 'Each Latin American country operates under distinct regulatory frameworks, banking standards, and payment preferences.',
          methods: [
            'Regulatory compliance',
            'Optimized local method prioritization',
            'Intelligent approval strategies',
            'Seamless cross-border settlement',
          ],
          footnote:
            'Latin America is not a single market. It is a collection of independent financial systems. Our infrastructure connects you properly to each one.',
        },
      ],
    },
    conversion: {
      eyebrow: 'Performance',
      headline: 'Conversion Is',
      headlineHighlight: 'Architecture',
      body: 'High approval rates in Latin America are engineered — not assumed.',
      footer: 'In Latin America, approval performance is a function of infrastructure design.',
      capabilities: [
        { label: 'Smart Routing', description: 'Smart routing to top-performing domestic acquirers' },
        { label: 'Installment Optimization', description: 'Localized installment optimization' },
        { label: 'Adaptive Retry Logic', description: 'Adaptive retry logic' },
        { label: 'Real-Time Monitoring', description: 'Real-time transaction monitoring' },
        { label: 'Fraud Prevention', description: 'Behavior-calibrated fraud prevention' },
      ],
    },
    businessModels: {
      eyebrow: 'Business Models',
      headline: 'Designed for Your',
      headlineHighlight: 'Business Model',
      body: 'epag does not deploy generic payment flows. Our Pay-in architecture adapts to your revenue structure and operational complexity.',
      items: [
        {
          number: '6.1',
          title: 'SaaS & Subscription Platforms',
          description: 'Localized recurring billing logic and churn-reduction strategies tailored to regional card behavior.',
        },
        {
          number: '6.2',
          title: 'Gaming & High-Frequency Transactions',
          description: 'Instant confirmation flows and optimized approval logic for performance-driven environments.',
        },
        {
          number: '6.3',
          title: 'Global Retail & E-commerce',
          description: 'Installment enablement and Average Order Value optimization through localized payment structuring.',
        },
        {
          number: '6.4',
          title: 'Marketplaces & Digital Platforms',
          description: 'Structured settlement logic and configurable split-payment architecture.',
        },
      ],
    },
    developer: {
      eyebrow: 'Developer',
      headline: 'API-First.',
      headlineHighlight: 'Developer-Driven.',
      body: "epag's Pay-in infrastructure is fully API-based and built for scalability.",
      footer: {
        line1: 'Documentation is not an auxiliary resource.',
        line2: 'It is a core component of the product architecture.',
      },
      cta: 'Access Developer Documentation',
      capabilities: [
        'RESTful endpoints',
        'Real-time webhooks',
        'Production-mirroring sandbox environment',
        'Clear, versioned documentation',
        'Accelerated implementation cycles',
      ],
    },
    cta: {
      eyebrow: 'Get Started',
      headline: 'Accept Payments Like a Local.',
      headlineHighlight: 'Operate Like a Global Company.',
      body: 'epag replaces fragmented integrations and approval uncertainty with direct, structured payment infrastructure. From zero to live in LATAM — faster, fully compliant, and aligned with local financial systems.',
      cta: 'Build Your Pay-in Infrastructure',
    },
    features: {
      headline: 'A FULL-CIRCLE',
      headlineLine2: 'PAYMENTS OPERATION',
      headlineHighlight: 'TAILORED FOR RISING MARKETS',
      body: 'Unlock growth opportunities in emerging markets through direct payment infrastructure — extending your reach and elevating B2B and B2C operations across Latin America.',
      payin: {
        title: 'Pay-in',
        learnMore: 'Learn more about Pay-in →',
        getStarted: 'Get Started',
        items: [
          { label: 'Built on Direct Rails', description: 'Direct connections to PIX, SPEI, PSE and domestic card acquirers — no third-party processors, no multi-layer routing.' },
          { label: 'Greater Approval Control', description: 'Smart routing to top-performing domestic acquirers with adaptive retry logic and localized installment optimization.' },
          { label: 'Recurring Payments', description: 'Localized recurring billing logic and churn-reduction strategies tailored to regional card behavior.' },
          { label: 'Real-Time Transaction Monitoring', description: 'Full operational transparency with real-time monitoring and behavior-calibrated fraud prevention.' },
          { label: 'Seamless Integration', description: 'RESTful endpoints, real-time webhooks, production-mirroring sandbox, and clear versioned documentation.' },
          { label: 'Multi-Currency Settlement', description: 'Sell locally while receiving funds in USD — structured for cross-border settlement with regulatory alignment.' },
        ],
      },
      payout: {
        title: 'Payout',
        learnMore: 'Learn more about Payout →',
        getStarted: 'Get Started',
        items: [
          { label: 'Flexible Payment Requests', description: 'Accept payout requests in USD or local currency. Easily add balance through wire transfer or processed amounts.' },
          { label: 'Mass Payouts', description: 'Pay a large number of recipients quickly and simultaneously. Local payment methods are also available.' },
          { label: 'Streamlined Payouts', description: 'Request single and mass payouts in 3 easy steps.' },
          { label: 'Micropayments', description: 'Perform transactions with no minimum payout amount.' },
          { label: 'Account Verifier', description: "Pre-validate the receiver's account automatically before disbursing funds." },
          { label: 'Seamless Management', description: 'Customizable reconciliation, detailed reports, and configurable split-payment architecture.' },
        ],
      },
    },
  },

  es: {
    hero: {
      eyebrow: 'Soluciones de Pago',
      headline: 'Acceso Directo a la Infraestructura de Pagos de América Latina',
      subheadline:
        'Acepta pagos en toda América Latina a través de conexiones directas con los rieles bancarios domésticos y adquirentes locales — sin intermediarios ni agregación por capas. epag permite a las empresas globales operar dentro del ecosistema financiero local con una sola integración.',
      cta: {
        primary: 'Explorar nuestra API',
        secondary: 'Hablar con un Especialista en Expansión LATAM →',
      },
    },
    merchants: {
      label: 'Algunos merchants globales que se benefician de nuestra solución Pay-in:',
      learnPayin: 'Saber más sobre Pay-in →',
      learnPayout: 'Saber más sobre Payout →',
      cta: 'Comenzar',
    },
    rails: {
      eyebrow: 'Infraestructura',
      headline: 'Construido sobre Rieles Directos.',
      headlineHighlight: 'No sobre Capas.',
      body: 'La mayoría de los proveedores cross-border dependen de procesadores de terceros y estructuras de enrutamiento de múltiples capas. epag se conecta directamente a los rieles de pago locales como PIX, SPEI y PSE, así como a adquirentes de tarjetas domésticos. Este modelo de infraestructura directa proporciona:',
      benefits: [
        'Mayor control sobre la lógica de aprobación',
        'Implementación más rápida de nuevos métodos de pago',
        'Menor dependencia de capas de procesamiento externas',
        'Mayor transparencia operacional',
        'Mejor consistencia de rendimiento',
      ],
      footer: {
        line1: 'No alquilamos infraestructura.',
        line2: 'La construimos y operamos.',
      },
    },
    markets: {
      eyebrow: 'Mercados',
      headline: 'Acceso Directo a',
      headlineHighlight: 'Cada Ecosistema Local',
      accessLabel: 'A través de epag, los merchants acceden a:',
      items: [
        {
          number: '02',
          country: 'Brasil',
          headline: 'Economía en Tiempo Real, Estructurada para la Conversión',
          body: 'Brasil es un ecosistema de pagos en tiempo real y multi-método que requiere arquitectura localizada.',
          methods: [
            'PIX (pagos instantáneos, disponible 24/7)',
            'PIX Automático (infraestructura de pago recurrente)',
            'Adquirencia doméstica de tarjetas',
            'Pagos en cuotas ("parcelamento")',
            'Enrutamiento inteligente de transacciones',
          ],
          footnote:
            'En Brasil, una transacción de tarjeta rechazada a menudo no es un rechazo — es una lógica local faltante. Nuestra infraestructura proporciona esa lógica.',
        },
        {
          number: '03',
          country: 'México',
          headline: 'Banca Doméstica, Estrategia Global',
          body: 'México opera bajo su propia dinámica bancaria y comportamiento de pago del consumidor.',
          methods: [
            'Transferencias bancarias en tiempo real SPEI',
            'Redes de tarjetas locales',
            'Soluciones alternativas basadas en efectivo (cuando aplica)',
          ],
          footnote:
            'Los flujos de pago están estructurados según el comportamiento del consumidor doméstico, garantizando mayor rendimiento de conversión y alineación regulatoria.',
        },
        {
          number: '04',
          country: 'Colombia y Otros Mercados LATAM',
          headline: 'Lógica de Integración País por País',
          body: 'Cada país de América Latina opera bajo marcos regulatorios, estándares bancarios y preferencias de pago distintos.',
          methods: [
            'Cumplimiento regulatorio',
            'Priorización optimizada de métodos locales',
            'Estrategias inteligentes de aprobación',
            'Liquidación cross-border sin fricciones',
          ],
          footnote:
            'América Latina no es un solo mercado. Es una colección de sistemas financieros independientes. Nuestra infraestructura te conecta correctamente a cada uno.',
        },
      ],
    },
    conversion: {
      eyebrow: 'Rendimiento',
      headline: 'La Conversión Es',
      headlineHighlight: 'Arquitectura',
      body: 'Las altas tasas de aprobación en América Latina son diseñadas — no asumidas.',
      footer: 'En América Latina, el rendimiento de aprobación es una función del diseño de la infraestructura.',
      capabilities: [
        { label: 'Enrutamiento Inteligente', description: 'Enrutamiento inteligente a adquirentes domésticos de alto rendimiento' },
        { label: 'Optimización de Cuotas', description: 'Optimización de cuotas localizada' },
        { label: 'Lógica de Reintento Adaptativa', description: 'Lógica de reintento adaptativa' },
        { label: 'Monitoreo en Tiempo Real', description: 'Monitoreo de transacciones en tiempo real' },
        { label: 'Prevención de Fraude', description: 'Prevención de fraude calibrada por comportamiento' },
      ],
    },
    businessModels: {
      eyebrow: 'Modelos de Negocio',
      headline: 'Diseñado para Tu',
      headlineHighlight: 'Modelo de Negocio',
      body: 'epag no despliega flujos de pago genéricos. Nuestra arquitectura Pay-in se adapta a tu estructura de ingresos y complejidad operacional.',
      items: [
        {
          number: '6.1',
          title: 'Plataformas SaaS & Suscripción',
          description: 'Lógica de facturación recurrente localizada y estrategias de reducción de churn adaptadas al comportamiento regional de tarjetas.',
        },
        {
          number: '6.2',
          title: 'Gaming & Transacciones de Alta Frecuencia',
          description: 'Flujos de confirmación instantánea y lógica de aprobación optimizada para entornos orientados al rendimiento.',
        },
        {
          number: '6.3',
          title: 'Retail Global & E-commerce',
          description: 'Habilitación de cuotas y optimización del Valor Promedio del Pedido a través de estructuración de pagos localizada.',
        },
        {
          number: '6.4',
          title: 'Marketplaces & Plataformas Digitales',
          description: 'Lógica de liquidación estructurada y arquitectura de split-payment configurable.',
        },
      ],
    },
    developer: {
      eyebrow: 'Desarrollador',
      headline: 'API-First.',
      headlineHighlight: 'Orientado al Desarrollador.',
      body: 'La infraestructura Pay-in de epag es completamente basada en API y construida para escalabilidad.',
      footer: {
        line1: 'La documentación no es un recurso auxiliar.',
        line2: 'Es un componente central de la arquitectura del producto.',
      },
      cta: 'Acceder a la Documentación del Desarrollador',
      capabilities: [
        'Endpoints RESTful',
        'Webhooks en tiempo real',
        'Entorno sandbox espejando producción',
        'Documentación clara y versionada',
        'Ciclos de implementación acelerados',
      ],
    },
    cta: {
      eyebrow: 'Comenzar',
      headline: 'Acepta Pagos Como un Local.',
      headlineHighlight: 'Opera Como una Empresa Global.',
      body: 'epag reemplaza integraciones fragmentadas e incertidumbre de aprobación con infraestructura de pago directa y estructurada. De cero a en vivo en LATAM — más rápido, totalmente en cumplimiento y alineado con los sistemas financieros locales.',
      cta: 'Construir Tu Infraestructura Pay-in',
    },
    features: {
      headline: 'UNA OPERACIÓN DE PAGOS',
      headlineLine2: 'COMPLETA ADAPTADA PARA',
      headlineHighlight: 'MERCADOS EMERGENTES',
      body: 'Desbloquea oportunidades de crecimiento en mercados emergentes a través de infraestructura de pago directa — ampliando tu alcance y elevando las operaciones B2B y B2C en toda América Latina.',
      payin: {
        title: 'Pay-in',
        learnMore: 'Saber más sobre Pay-in →',
        getStarted: 'Comenzar',
        items: [
          { label: 'Construido sobre Rieles Directos', description: 'Conexiones directas con PIX, SPEI, PSE y adquirentes domésticos de tarjetas — sin procesadores de terceros, sin enrutamiento de múltiples capas.' },
          { label: 'Mayor Control de Aprobación', description: 'Enrutamiento inteligente a adquirentes domésticos de alto rendimiento con lógica de reintento adaptativa y optimización de cuotas localizada.' },
          { label: 'Pagos Recurrentes', description: 'Lógica de facturación recurrente localizada y estrategias de reducción de churn adaptadas al comportamiento regional de tarjetas.' },
          { label: 'Monitoreo de Transacciones en Tiempo Real', description: 'Total transparencia operacional con monitoreo en tiempo real y prevención de fraude calibrada por comportamiento.' },
          { label: 'Integración Sin Fricciones', description: 'Endpoints RESTful, webhooks en tiempo real, sandbox espejando producción y documentación clara y versionada.' },
          { label: 'Liquidación Multi-Moneda', description: 'Vende localmente mientras recibes fondos en USD — estructurado para liquidación cross-border con alineación regulatoria.' },
        ],
      },
      payout: {
        title: 'Payout',
        learnMore: 'Saber más sobre Payout →',
        getStarted: 'Comenzar',
        items: [
          { label: 'Solicitudes de Pago Flexibles', description: 'Acepta solicitudes de payout en USD o moneda local. Agrega saldo fácilmente mediante transferencia bancaria o montos procesados.' },
          { label: 'Pagos Masivos', description: 'Paga a un gran número de destinatarios de forma rápida y simultánea. Los métodos de pago locales también están disponibles.' },
          { label: 'Payouts Simplificados', description: 'Solicita payouts individuales y masivos en 3 pasos sencillos.' },
          { label: 'Micropagos', description: 'Realiza transacciones sin monto mínimo de payout.' },
          { label: 'Verificador de Cuenta', description: 'Pre-valida la cuenta del destinatario automáticamente antes de desembolsar fondos.' },
          { label: 'Gestión Sin Fricciones', description: 'Reconciliación personalizable, informes detallados y arquitectura de split-payment configurable.' },
        ],
      },
    },
  },
} as const;

export type PayinContent = typeof payinContent['en'];
