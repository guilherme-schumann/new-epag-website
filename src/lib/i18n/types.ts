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
    pixAutomatico: string;
    cards: string;
    serverToServer: string;
    idValidation: string;
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
    termsForUsers: string;
    termsForMerchants: string;
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
      payout: string;
      hostedCheckout: string;
      subscriptions: string;
      idValidation: string;
      brazil: string;
      mexico: string;
      colombia: string;
      peru: string;
      viewAllCoverage: string;
      aboutEpag: string;
      pricing: string;
      customers: string;
      careers: string;
      helpCenter: string;
      privacyPolicy: string;
      termsAndConditions: string;
      cookiePolicy: string;
    };
    allRightsReserved: string;
    disclaimer: string;
  };
}
