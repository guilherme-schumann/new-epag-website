export type BlogContent = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
  };
  list: {
    readMore: string;
    noPosts: string;
    publishedOn: string;
    allCategories: string;
  };
  post: {
    backLabel: string;
    contents: string;
    followUs: string;
    topArticles: string;
  };
};

export const blogContent = {
  en: {
    hero: {
      eyebrow: 'Blog',
      headline: 'Insights on',
      headlineHighlight: 'Latin America Payments',
      subheadline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stay up to date with the latest news, guides and updates from epag.',
    },
    list: {
      readMore: 'Read more',
      noPosts: 'No posts published yet.',
      publishedOn: 'Published on',
      allCategories: 'All',
    },
    post: {
      backLabel: 'Blog',
      contents: 'Contents',
      followUs: 'Follow us',
      topArticles: 'Top Articles',
    },
  },
  'pt-BR': {
    hero: {
      eyebrow: 'Blog',
      headline: 'Insights sobre',
      headlineHighlight: 'Pagamentos na América Latina',
      subheadline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fique por dentro das últimas novidades, guias e atualizações da epag.',
    },
    list: {
      readMore: 'Ler mais',
      noPosts: 'Nenhum post publicado ainda.',
      publishedOn: 'Publicado em',
      allCategories: 'Todos',
    },
    post: {
      backLabel: 'Blog',
      contents: 'Conteúdo',
      followUs: 'Siga-nos',
      topArticles: 'Artigos em Destaque',
    },
  },
  'es': {
    hero: {
      eyebrow: 'Blog',
      headline: 'Insights sobre',
      headlineHighlight: 'Pagos en América Latina',
      subheadline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mantente al día con las últimas noticias, guías y actualizaciones de epag.',
    },
    list: {
      readMore: 'Leer más',
      noPosts: 'No hay publicaciones aún.',
      publishedOn: 'Publicado el',
      allCategories: 'Todos',
    },
    post: {
      backLabel: 'Blog',
      contents: 'Contenido',
      followUs: 'Síguenos',
      topArticles: 'Artículos Destacados',
    },
  },
};
