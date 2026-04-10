'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui';
import { useLanguage } from '@/lib/i18n';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.51 8.796v1.547a3.691 3.691 0 0 1 3.288-1.796c3.655 0 4.201 2.412 4.201 5.444v6.009h-3.028v-5.32c0-1.265-.25-2.906-2.065-2.906-1.875 0-2.153 1.39-2.153 2.806v5.42h-3.029V8.796h2.786ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"/>
        <path d="M7.2 8.809H4.172V20h3.028V8.809Z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const { sections, links } = t.footer;

  const footerLinks = [
    {
      heading: sections.payments,
      items: [
        { label: links.payin,          href: '/solutions/payin' },
        { label: links.payout,         href: '/solutions/payout' },
        { label: links.hostedCheckout, href: '/solutions/hosted-checkout' },
        { label: links.subscriptions,  href: '/solutions/subscriptions' },
        { label: links.idValidation,   href: '/solutions/id-validation' },
      ],
    },
    {
      heading: sections.markets,
      items: [
        { label: links.brazil,          href: '/coverage/brazil' },
        { label: links.mexico,          href: '/coverage/mexico' },
        { label: links.colombia,        href: '/coverage/colombia' },
        { label: links.peru,            href: '/coverage/peru' },
        { label: links.viewAllCoverage, href: '/coverage' },
      ],
    },
    {
      heading: sections.company,
      items: [
        { label: links.aboutEpag,  href: '/about' },
        { label: links.pricing,    href: '/pricing' },
        { label: links.customers,  href: '/customers' },
        { label: links.careers,    href: '/careers' },
        { label: links.helpCenter, href: '/help' },
      ],
    },
    {
      heading: sections.legal,
      items: [
        { label: links.privacyPolicy,      href: '/legal/privacy' },
        { label: links.termsAndConditions, href: '/legal/terms' },
        { label: links.cookiePolicy,       href: '/legal/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-900">
      <div className="page-section page-container">
        {/* Top: logo + link columns */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="shrink-0">
            <Logo variant="light" width={92} height={40} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-100/70">
              {t.footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-light/50">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-secondary-100/80 transition-colors hover:text-primary-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-secondary-100/40">
          {t.footer.disclaimer}
        </p>

        {/* Divider */}
        <hr className="my-8 border-light/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <span className="text-sm text-secondary-100/50">
            © {new Date().getFullYear()} epag. {t.footer.allRightsReserved}
          </span>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-secondary-100/50 transition-colors hover:text-primary-500"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
