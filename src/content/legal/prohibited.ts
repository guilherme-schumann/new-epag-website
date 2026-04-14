export type ProhibitedContent = {
  title: string;
  sections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
};

export const prohibitedContent = {
  en: {
    title: 'Prohibited Products and Services',
    sections: [
      {
        id: 'overview',
        title: '1. Overview',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 'illegal-activities',
        title: '2. Illegal Activities',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      },
      {
        id: 'restricted-products',
        title: '3. Restricted Products',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      },
      {
        id: 'restricted-services',
        title: '4. Restricted Services',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        id: 'high-risk-businesses',
        title: '5. High-Risk Businesses',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      },
      {
        id: 'enforcement',
        title: '6. Enforcement and Penalties',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      },
    ],
  },
  'pt-BR': {
    title: 'Produtos e Serviços Proibidos',
    sections: [
      {
        id: 'overview',
        title: '1. Visão Geral',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 'illegal-activities',
        title: '2. Atividades Ilegais',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      },
      {
        id: 'restricted-products',
        title: '3. Produtos Restritos',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      },
      {
        id: 'restricted-services',
        title: '4. Serviços Restritos',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        id: 'high-risk-businesses',
        title: '5. Negócios de Alto Risco',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      },
      {
        id: 'enforcement',
        title: '6. Aplicação e Penalidades',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      },
    ],
  },
  'es': {
    title: 'Productos y Servicios Prohibidos',
    sections: [
      {
        id: 'overview',
        title: '1. Resumen',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 'illegal-activities',
        title: '2. Actividades Ilegales',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      },
      {
        id: 'restricted-products',
        title: '3. Productos Restringidos',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      },
      {
        id: 'restricted-services',
        title: '4. Servicios Restringidos',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        id: 'high-risk-businesses',
        title: '5. Negocios de Alto Riesgo',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      },
      {
        id: 'enforcement',
        title: '6. Aplicación y Sanciones',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      },
    ],
  },
};

