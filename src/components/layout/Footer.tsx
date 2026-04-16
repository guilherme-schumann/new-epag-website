'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo, Icon } from '@/components/ui';
import { useLanguage } from '@/lib/i18n';

type FooterSubItem = { label: string; href: string };
type FooterItem = { label: string; href?: string; children?: FooterSubItem[] };
type FooterColumn = { title: string; items: FooterItem[] };

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.51 8.796v1.547a3.691 3.691 0 0 1 3.288-1.796c3.655 0 4.201 2.412 4.201 5.444v6.009h-3.028v-5.32c0-1.265-.25-2.906-2.065-2.906-1.875 0-2.153 1.39-2.153 2.806v5.42h-3.029V8.796h2.786ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"/>
      <path d="M7.2 8.809H4.172V20h3.028V8.809Z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
    </svg>
  );
}

const socialLinks = [
  { label: 'LinkedIn',    href: '#', IconComponent: LinkedInIcon },
  { label: 'X (Twitter)', href: '#', IconComponent: XIcon },
  { label: 'GitHub',      href: '#', IconComponent: GitHubIcon },
];

function FooterExpandable({ item }: { item: FooterItem }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-2 text-sm text-secondary-100/80 transition-colors hover:text-primary-500"
      >
        <span className="text-left">{item.label}</span>
        <Icon name="chevron-down" size={14} className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="mt-2 space-y-2 border-l border-light/10 pl-3">
          {item.children?.map((child) => (
            <li key={child.label}>
              <Link href={child.href} className="text-sm text-secondary-100/80 transition-colors hover:text-primary-500">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const { nav } = t;

  const columns: FooterColumn[] = [
    {
      title: nav.solutionsAndFeatures,
      items: [
        { label: nav.payin, href: '/solutions/payin' },
        { label: nav.checkout, children: [
          { label: nav.hostedCheckout, href: '/contact' },
          { label: nav.redirectCheckout, href: '/contact' },
          { label: nav.embedCheckout, href: '/contact' },
        ]},
        { label: nav.recurrency, children: [
          { label: nav.pixAutomatico, href: '/contact' },
          { label: nav.cards, href: '/contact' },
        ]},
        { label: nav.serverToServer, href: '/contact' },
        { label: nav.idValidation, href: '/contact' },
      ],
    },
    {
      title: nav.paymentCategories,
      items: [
        { label: nav.cardPayments, href: '/coverage' },
        { label: nav.instantPayments, href: '/coverage' },
        { label: nav.bankTransfer, href: '/coverage' },
        { label: nav.cashVoucher, href: '/coverage' },
        { label: nav.digitalWallets, href: '/coverage' },
      ],
    },
    {
      title: nav.paymentMethods,
      items: [
        { label: 'Brazil', children: [
          { label: 'PIX', href: '/coverage' },
          { label: 'Boleto', href: '/coverage' },
          { label: 'Credit Card', href: '/coverage' },
          { label: 'Debit Card', href: '/coverage' },
          { label: 'PicPay', href: '/coverage' },
        ]},
        { label: 'Mexico', children: [
          { label: 'SPEI', href: '/coverage' },
          { label: 'OXXO', href: '/coverage' },
          { label: 'Paycash', href: '/coverage' },
          { label: 'Credit Card', href: '/coverage' },
          { label: 'Debit Card', href: '/coverage' },
        ]},
        { label: 'Colombia', children: [
          { label: 'Bank Transfer', href: '/coverage' },
          { label: 'Nequi', href: '/coverage' },
          { label: 'Paycash', href: '/coverage' },
          { label: 'Credit Card', href: '/coverage' },
          { label: 'Debit Card', href: '/coverage' },
        ]},
        { label: nav.fullCoverageMap, href: '/coverage' },
      ],
    },
    {
      title: nav.markets,
      items: [
        { label: 'Coverage', href: '/coverage' },
      ],
    },
    {
      title: nav.industries,
      items: [
        { label: nav.niches, children: [
          { label: nav.ecommerce, href: '/contact' },
          { label: nav.saas, href: '/contact' },
        ]},
      ],
    },
    {
      title: nav.company,
      items: [
        { label: nav.aboutEpag, href: '/about' },
        { label: nav.pricing, href: '/pricing' },
        { label: nav.contactUs, href: '/contact' },
      ],
    },
    {
      title: nav.legal,
      items: [
        { label: nav.legal, href: '/legal' },
        { label: nav.terms, children: [
          { label: nav.termsForUsers, href: '/legal/terms-for-users' },
          { label: nav.termsForMerchants, href: '/legal/terms-for-merchants' },
        ]},
        { label: nav.privacyPolicy, href: '/legal/privacy-policy' },
        { label: nav.imprint, href: '/legal/imprint' },
        { label: nav.prohibitedList, href: '/legal/prohibited-products-and-services' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-900">
      <div className="page-section">
        <div className="page-container">
        {/* Logo + tagline centered */}
        <div className="mb-10 flex flex-col items-center text-center">
          <Logo variant="light" width={92} height={40} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary-100/70">
            {t.footer.tagline}
          </p>
          {/* Banking certifications placeholders */}
          <div className="mt-6 flex items-center gap-4">
            {[
              'PCI DSS',
              'ISO 27001',
              'SOC 2',
              'LGPD',
            ].map((cert) => (
              <div
                key={cert}
                className="flex h-10 w-20 items-center justify-center rounded-lg border border-light/10 bg-light/5 text-xs font-semibold text-light/40"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-light/50">
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.items.map((item) =>
                  item.children ? (
                    <FooterExpandable key={item.label} item={item} />
                  ) : (
                    <li key={item.label}>
                      <Link href={item.href ?? '#'} className="text-sm text-secondary-100/80 transition-colors hover:text-primary-500">
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-light/10" />

        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <span className="text-sm text-secondary-100/50">
            © {new Date().getFullYear()} epag. {t.footer.allRightsReserved}
          </span>
          <span className="text-xs text-secondary-100/40">
            {t.footer.disclaimer}
          </span>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, IconComponent }) => (
              <a key={label} href={href} className="text-secondary-100/50 transition-colors hover:text-primary-500" aria-label={label}>
                <IconComponent />
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
