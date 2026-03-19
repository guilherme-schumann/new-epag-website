'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo, Icon, Button } from '@/components/ui';
import NavDropdown, { type DropdownData } from './NavDropdown';

type MenuItem = {
  label: string;
  dropdown?: DropdownData;
};

const menuItems: MenuItem[] = [
  {
    label: 'Solutions & Features',
    dropdown: {
      columns: [
        {
          title: 'Pay-in Solutions',
          items: [
            { label: 'Pay-in & Payout', href: '/solutions/pay-in-payout', bold: true },
            { label: 'PIX', href: '/solutions/pix' },
            { label: 'Boleto', href: '/solutions/boleto' },
            { label: 'OXXO', href: '/solutions/oxxo' },
            { label: 'SPEI', href: '/solutions/spei' },
            { label: 'Credit & Debit Cards', href: '/solutions/cards' },
          ],
        },
        {
          title: 'Payout & B2B',
          items: [
            { label: 'Mass Payouts', href: '/solutions/mass-payouts', bold: true },
            { label: 'B2B Payments', href: '/solutions/b2b', bold: true },
            { label: 'Recurrence', href: '/solutions/recurrence' },
            { label: 'High Order Value', href: '/solutions/high-order-value' },
            { label: 'Single Transaction', href: '/solutions/single-transaction' },
          ],
        },
        {
          title: 'Value-Added Services',
          items: [
            { label: 'Fraud & Risk Management', href: '/solutions/fraud-risk', bold: true },
            { label: 'Invoice Management', href: '/solutions/invoice' },
            { label: 'Performance Optimization', href: '/solutions/performance' },
            { label: 'Anti Fraud', href: '/solutions/anti-fraud' },
          ],
        },
      ],
      feature: {
        title: 'Why EPAG',
        description:
          'Understand how EPAG connects global brands to payment solutions across Latin America.',
        href: '/why-epag',
      },
    },
  },
  {
    label: 'Coverage',
    dropdown: {
      columns: [
        {
          title: 'Countries',
          items: [
            { label: 'Brazil', href: '/coverage/brazil', bold: true },
            { label: 'Mexico', href: '/coverage/mexico', bold: true },
            { label: 'Colombia', href: '/coverage/colombia' },
            { label: 'Chile', href: '/coverage/chile' },
            { label: 'Argentina', href: '/coverage/argentina' },
            { label: 'Peru', href: '/coverage/peru' },
          ],
        },
        {
          title: 'Payment Methods',
          items: [
            { label: 'Local Credit Cards', href: '/coverage/local-cards' },
            { label: 'Digital Wallets', href: '/coverage/wallets' },
            { label: 'Bank Transfers', href: '/coverage/bank-transfer' },
            { label: 'Cash Vouchers', href: '/coverage/cash' },
            { label: 'Instant Payments', href: '/coverage/instant' },
          ],
        },
      ],
      feature: {
        title: 'Full Coverage Map',
        description: 'Explore all supported countries, currencies, and payment methods at a glance.',
        href: '/coverage',
      },
    },
  },
  {
    label: 'Pricing',
    dropdown: {
      columns: [
        {
          title: 'Plans',
          items: [
            { label: 'Starter', href: '/pricing/starter' },
            { label: 'Growth', href: '/pricing/growth' },
            { label: 'Enterprise', href: '/pricing/enterprise' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Fee Calculator', href: '/pricing/calculator' },
            { label: 'Compare Plans', href: '/pricing/compare' },
            { label: 'Custom Quote', href: '/contact' },
          ],
        },
      ],
    },
  },
  {
    label: 'Institucional',
    dropdown: {
      columns: [
        {
          title: 'Company',
          items: [
            { label: 'About EPAG', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press & Media', href: '/press' },
            { label: 'Partners', href: '/partners' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Blog', href: '/blog' },
            { label: 'Documentation', href: '/docs' },
            { label: 'Help Center', href: '/help' },
            { label: 'Status', href: '/status' },
          ],
        },
      ],
      feature: {
        title: 'EPAG Developer Hub',
        description:
          'Integrate our APIs quickly with full documentation, SDKs and sandbox environment.',
        href: '/docs',
      },
    },
  },
];

const topLinks = [
  { label: 'Login Admin', href: '/admin' },
  { label: 'Help Center', href: '/help' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    if (!activeMenu) return;

    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  return (
    <>
      <nav
        ref={navRef}
        className="page-x relative flex items-center justify-between bg-light py-4 shadow-navbar"
      >
        <Logo variant="dark" width={92} height={40} />

        {/* Desktop menu */}
        <ul className="hidden items-center gap-9 lg:flex">
          {menuItems.map((item) => (
            <li key={item.label} className="relative">
              <button
                className="flex cursor-pointer items-center gap-1 text-base font-semibold leading-6 text-theme-secondary transition-colors hover:text-secondary-500"
                onMouseEnter={() => item.dropdown && setActiveMenu(item.label)}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <Icon
                    name="chevron-down"
                    size={24}
                    className={`transition-transform duration-200 ${
                      activeMenu === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Dropdown card — anchored to this <li> */}
              {activeMenu === item.label && item.dropdown && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                  <NavDropdown data={item.dropdown} />
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact">
            <Button variant="primary" size="md">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="flex cursor-pointer items-center justify-center text-secondary-900 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? 'x' : 'menu'} size={28} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 bg-light shadow-lg lg:hidden">
          {/* TopBar links on mobile */}
          <div className="flex items-center gap-4 border-b border-secondary-100 bg-secondary-900 px-6 py-3">
            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-secondary-100 transition-colors hover:text-light"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Nav items */}
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  className="flex w-full cursor-pointer items-center justify-between border-b border-secondary-100 px-6 py-4 text-base font-semibold text-theme-secondary transition-colors hover:bg-secondary-50"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <Icon name="chevron-down" size={20} />}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="px-6 py-5">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" size="md" className="w-full justify-center">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
