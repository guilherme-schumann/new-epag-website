export type Locale = 'en' | 'pt-BR' | 'es';

export interface LocaleConfig {
  code: Locale;
  /** Label in its own language */
  label: string;
  /** flag-icons suffix, e.g. 'us' → fi-us */
  flag: string;
  /** Value for <html lang="…"> */
  htmlLang: string;
}

export const locales: LocaleConfig[] = [
  { code: 'en',    label: 'English',    flag: 'us', htmlLang: 'en'    },
  { code: 'pt-BR', label: 'Português',  flag: 'br', htmlLang: 'pt-BR' },
  { code: 'es',    label: 'Español',    flag: 'es', htmlLang: 'es'    },
];

export interface Translations {
  topBar: {
    loginAdmin: string;
  };
  newsBanner: {
    message: string;
  };
  nav: {
    payments: string;
    solutionsAndFeatures: string;
    payin: string;
    checkout: string;
    hostedCheckout: string;
    redirectCheckout: string;
    embedCheckout: string;
    markets: string;
    fullCoverageMap: string;
    coverageHighlight: string;
    coverageDescription: string;
    pricing: string;
    institutional: string;
    company: string;
    aboutEpag: string;
    resources: string;
    documentation: string;
    contactUs: string;
    openMenu: string;
    closeMenu: string;
    whyEpag: string;
    whyEpagDescription: string;
    recurrency: string;
    recurrencyShort: string;
    pixAutomatico: string;
    cards: string;
    serverToServer: string;
    idValidation: string;
    paymentMethods: string;
    paymentCategories: string;
    cardPayments: string;
    instantPayments: string;
    bankTransfer: string;
    cashVoucher: string;
    digitalWallets: string;
    marketCoverage: string;
    industries: string;
    allIndustries: string;
    niches: string;
    ecommerce: string;
    saas: string;
    about: string;
    legal: string;
    prohibited: string;
    terms: string;
    termsForUsers: string;
    termsForMerchants: string;
    privacyPolicy: string;
    imprint: string;
    prohibitedList: string;
    institutionalDisclaimer: string;
  };
  footer: {
    tagline: string;
    sections: {
      payments: string;
      markets: string;
      company: string;
      legal: string;
    };
    links: {
      payin: string;
      checkout: string;
      recurrency: string;
      serverToServer: string;
      idValidation: string;
      brazil: string;
      mexico: string;
      colombia: string;
      peru: string;
      viewAllCoverage: string;
      aboutEpag: string;
      pricing: string;
      contactUs: string;
      legal: string;
      terms: string;
      imprint: string;
      prohibitedList: string;
    };
    allRightsReserved: string;
    disclaimer: string;
  };
  admin: {
    nav: {
      dashboard: string;
      blog: string;
      categories: string;
      tags: string;
      settings: string;
    };
    signOut: string;
    dashboard: {
      title: string;
      totalPosts: string;
      published: string;
      drafts: string;
    };
    blog: {
      title: string;
      newPost: string;
      editPost: string;
      noPostsYet: string;
      createFirst: string;
      colTitle: string;
      colStatus: string;
      colUpdated: string;
      colLang: string;
    };
    login: {
      email: string;
      password: string;
      signIn: string;
      signingIn: string;
      invalidCredentials: string;
    };
    post: {
      slugPlaceholder: string;
      slug: string;
      status: string;
      category: string;
      noCategory: string;
      tags: string;
      noTags: string;
      coverImage: string;
      featuredImage: string;
      featuredImageHint: string;
      uploading: string;
      uploadImage: string;
      remove: string;
      multiLangHint: string;
      multiLangLabel: string;
      localeEn: string;
      localePt: string;
      localeEs: string;
      title: string;
      excerpt: string;
      content: string;
      cancel: string;
      save: string;
      create: string;
      saving: string;
      deletePost: string;
      confirmDelete: string;
    };
    taxonomy: {
      categoriesTitle: string;
      tagsTitle: string;
      newCategory: string;
      newTag: string;
      slugLabel: string;
      labelEn: string;
      labelPt: string;
      labelEs: string;
      slugPlaceholder: string;
      add: string;
      adding: string;
      edit: string;
      delete: string;
      deleteConfirm: string;
      slugDuplicate: string;
    };
    status: {
      draft: string;
      published: string;
      archived: string;
    };
  };
}
