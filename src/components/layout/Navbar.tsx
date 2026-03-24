'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo, Icon, Button } from '@/components/ui';
import NavDropdown, { type DropdownData } from './NavDropdown';

type MenuItem = {
  label: string;
  href?: string;
  dropdown?: DropdownData;
};

const menuItems: MenuItem[] = [
  {
    label: 'Payments',
    dropdown: {
      columns: [
        {
          title: 'Solutions & Features',
          items: [
            // ✅ Live
            { label: 'Payin', href: '/solutions/payin', bold: true },
            // Pending pages — routes reserved for future implementation
            { label: 'Payout', href: '/solutions/payout', bold: true },
            { label: 'Server-to-server', href: '/solutions/server-to-server' },
            { label: 'Hosted Checkout', href: '/solutions/hosted-checkout' },
            { label: 'Redirect Checkout', href: '/solutions/redirect-checkout' },
            { label: 'ID Validation', href: '/solutions/id-validation' },
            { label: 'Subscriptions', href: '/solutions/subscriptions' },
          ],
        },
        {
          title: 'Payment Methods',
          items: [
            { label: 'PIX', href: '/payment-methods/pix' },
            { label: 'OXXO', href: '/payment-methods/oxxo' },
            { label: 'Credit / Debit Card', href: '/payment-methods/cards' },
            { label: 'Boleto', href: '/payment-methods/boleto' },
            { label: 'Wallets', href: '/payment-methods/wallets' },
          ],
        },
      ],
    },
  },
  {
    label: 'Markets',
    dropdown: {
      columns: [
        {
          title: 'Coverage',
          items: [
            { label: 'Brazil', href: '/coverage/brazil', bold: true },
            { label: 'Mexico', href: '/coverage/mexico', bold: true },
            { label: 'Colombia', href: '/coverage/colombia' },
            { label: 'Peru', href: '/coverage/peru' },
            { label: 'Ecuador', href: '/coverage/ecuador' },
            { label: 'Chile', href: '/coverage/chile' },
            { label: 'Costa Rica', href: '/coverage/costa-rica' },
            { label: 'Guatemala', href: '/coverage/guatemala' },
            { label: 'Panama', href: '/coverage/panama' },
            { label: 'Honduras', href: '/coverage/honduras' },
            { label: 'Dominican Republic', href: '/coverage/dominican-republic' },
            { label: 'El Salvador', href: '/coverage/el-salvador' },
          ],
        },
      ],
      feature: {
        title: 'Full Coverage Map',
        description:
          '670M+ individuals reachable across 12 countries with 140+ payment partners.',
        href: '/coverage',
      },
    },
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Institucional',
    dropdown: {
      columns: [
        {
          title: 'Company',
          items: [
            { label: 'About epag', href: '/about' },
            { label: 'Customers', href: '/customers' },
            { label: 'Careers', href: '/careers' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Documentation', href: '/docs' },
            { label: 'Help Center', href: '/help' },
          ],
        },
      ],
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
              {item.href && !item.dropdown ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-base font-semibold leading-6 text-theme-secondary transition-colors hover:text-secondary-500"
                >
                  {item.label}
                </Link>
              ) : (
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
              )}

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
                {item.href && !item.dropdown ? (
                  <Link
                    href={item.href}
                    className="flex w-full items-center justify-between border-b border-secondary-100 px-6 py-4 text-base font-semibold text-theme-secondary transition-colors hover:bg-secondary-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="flex w-full cursor-pointer items-center justify-between border-b border-secondary-100 px-6 py-4 text-base font-semibold text-theme-secondary transition-colors hover:bg-secondary-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && <Icon name="chevron-down" size={20} />}
                  </button>
                )}
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
