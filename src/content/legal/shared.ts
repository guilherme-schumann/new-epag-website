export type LegalSharedContent = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
  };
  nav: {
    title: string;
    overview: string;
    termsUsers: string;
    termsMerchants: string;
    privacy: string;
    imprint: string;
    prohibited: string;
    backToOverview: string;
  };
  overview: {
    title: string;
    description: string;
    documents: Array<{
      id: string;
      title: string;
      description: string;
      tag: string;
      href: string;
    }>;
  };
};

export const legalSharedContent = {
  en: {
    hero: {
      eyebrow: 'epag',
      headline: 'Legal &',
      headlineHighlight: 'Compliance',
      subheadline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    nav: {
      title: 'Legal Documents',
      overview: 'Overview',
      termsUsers: 'Terms of Use for Users',
      termsMerchants: 'Terms of Use for Merchants',
      privacy: 'Privacy Policy',
      imprint: 'Imprint',
      prohibited: 'Prohibited Products and Services',
      backToOverview: 'Back to overview',
    },
    overview: {
      title: 'Legal Documents',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      documents: [
        {
          id: 'terms-users',
          title: 'Terms of Use for Users',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. General terms and conditions for using the epag platform as an end user.',
          tag: 'Terms',
          href: '/legal/terms-for-users',
        },
        {
          id: 'terms-merchants',
          title: 'Terms of Use for Merchants',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Specific conditions for companies and merchants using epag payment infrastructure.',
          tag: 'Terms',
          href: '/legal/terms-for-merchants',
        },
        {
          id: 'privacy',
          title: 'Privacy Policy',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. How we collect, use, and protect your personal data in compliance with LGPD and GDPR.',
          tag: 'Privacy',
          href: '/legal/privacy-policy',
        },
        {
          id: 'imprint',
          title: 'Imprint',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Legal information about the company, registration, and those responsible for operations.',
          tag: 'Company',
          href: '/legal/imprint',
        },
        {
          id: 'prohibited',
          title: 'Prohibited Products and Services',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. List of products, services, and activities that are not permitted on the epag platform.',
          tag: 'Compliance',
          href: '/legal/prohibited-products-and-services',
        },
      ],
    },
  },
  'pt-BR': {
    hero: {
      eyebrow: 'epag',
      headline: 'Legal &',
      headlineHighlight: 'Compliance',
      subheadline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    nav: {
      title: 'Documentos Legais',
      overview: 'Visão Geral',
      termsUsers: 'Termos de Uso para Usuários',
      termsMerchants: 'Termos de Uso para Merchants',
      privacy: 'Política de Privacidade',
      imprint: 'Imprint',
      prohibited: 'Produtos e Serviços Proibidos',
      backToOverview: 'Voltar para visão geral',
    },
    overview: {
      title: 'Documentos Legais',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      documents: [
        {
          id: 'terms-users',
          title: 'Termos de Uso para Usuários',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condições gerais de uso da plataforma epag para usuários finais.',
          tag: 'Termos',
          href: '/legal/terms-for-users',
        },
        {
          id: 'terms-merchants',
          title: 'Termos de Uso para Merchants',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condições específicas para empresas e merchants que utilizam a infraestrutura de pagamentos da epag.',
          tag: 'Termos',
          href: '/legal/terms-for-merchants',
        },
        {
          id: 'privacy',
          title: 'Política de Privacidade',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD e GDPR.',
          tag: 'Privacidade',
          href: '/legal/privacy-policy',
        },
        {
          id: 'imprint',
          title: 'Imprint',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Informações legais sobre a empresa, registro e responsáveis pela operação.',
          tag: 'Empresa',
          href: '/legal/imprint',
        },
        {
          id: 'prohibited',
          title: 'Produtos e Serviços Proibidos',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lista de produtos, serviços e atividades que não são permitidos na plataforma epag.',
          tag: 'Compliance',
          href: '/legal/prohibited-products-and-services',
        },
      ],
    },
  },
  'es': {
    hero: {
      eyebrow: 'epag',
      headline: 'Legal y',
      headlineHighlight: 'Cumplimiento',
      subheadline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    nav: {
      title: 'Documentos Legales',
      overview: 'Resumen',
      termsUsers: 'Términos de Uso para Usuarios',
      termsMerchants: 'Términos de Uso para Comerciantes',
      privacy: 'Política de Privacidad',
      imprint: 'Imprint',
      prohibited: 'Productos y Servicios Prohibidos',
      backToOverview: 'Volver al resumen',
    },
    overview: {
      title: 'Documentos Legales',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      documents: [
        {
          id: 'terms-users',
          title: 'Términos de Uso para Usuarios',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condiciones generales de uso de la plataforma epag para usuarios finales.',
          tag: 'Términos',
          href: '/legal/terms-for-users',
        },
        {
          id: 'terms-merchants',
          title: 'Términos de Uso para Comerciantes',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condiciones específicas para empresas y comerciantes que utilizan la infraestructura de pagos de epag.',
          tag: 'Términos',
          href: '/legal/terms-for-merchants',
        },
        {
          id: 'privacy',
          title: 'Política de Privacidad',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cómo recopilamos, usamos y protegemos sus datos personales en cumplimiento con LGPD y GDPR.',
          tag: 'Privacidad',
          href: '/legal/privacy-policy',
        },
        {
          id: 'imprint',
          title: 'Imprint',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Información legal sobre la empresa, registro y responsables de las operaciones.',
          tag: 'Empresa',
          href: '/legal/imprint',
        },
        {
          id: 'prohibited',
          title: 'Productos y Servicios Prohibidos',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lista de productos, servicios y actividades que no están permitidos en la plataforma epag.',
          tag: 'Cumplimiento',
          href: '/legal/prohibited-products-and-services',
        },
      ],
    },
  },
};

