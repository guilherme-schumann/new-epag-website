'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo, Icon, Button } from '@/components/ui';
import NavDropdown, { type DropdownData, type DropdownItem } from './NavDropdown';
import { useLanguage, type Translations } from '@/lib/i18n';

type MenuItem = {
  label: string;
  href?: string;
  dropdown?: DropdownData;
};

function MobileExpandableItem({
  item,
  onNavigate,
}: {
  item: DropdownItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 text-sm leading-7 text-dark-gray transition-colors hover:text-theme-secondary ${
          item.bold ? 'font-semibold' : 'font-normal'
        }`}
      >
        <span>{item.label}</span>
        <Icon
          name="chevron-down"
          size={16}
          className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul className="mt-1 flex flex-col gap-1 border-l-2 border-theme-middle-blue/30 pl-3">
          {item.children?.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href ?? '#'}
                className="text-sm font-semibold leading-7 text-dark-gray transition-colors hover:text-theme-secondary"
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function buildMenuItems(nav: Translations['nav']): MenuItem[] {
  return [
    {
      label: nav.payments,
      dropdown: {
        columns: [
          {
            title: nav.solutionsAndFeatures,
            items: [
              { label: nav.payin, href: '/solutions/payin', bold: true },
              {
                label: nav.checkout,
                bold: true,
                children: [
                  { label: nav.hostedCheckout, href: '/solutions/checkout/hosted' },
                  { label: nav.redirectCheckout, href: '/solutions/checkout/redirect' },
                  { label: nav.embedCheckout, href: '/solutions/checkout/embed' },
                ],
              },
              { label: nav.recurrency, bold: true, children: [
                  { label: nav.pixAutomatico, href: '/solutions/recurrency/pix-automatico' },
                  { label: nav.cards, href: '/solutions/recurrency/cards' },
                ],
              },
              { label: nav.serverToServer, href: '/solutions/server-to-server', bold: true },
              { label: nav.idValidation, href: '/solutions/id-validation', bold: true },
            ],
          },
          {
            title: nav.paymentCategories,
            items: [
              { label: nav.cardPayments, href: '/coverage', bold: true },
              { label: nav.instantPayments, href: '/coverage', bold: true },
              { label: nav.bankTransfer, href: '/coverage', bold: true },
              { label: nav.cashVoucher, href: '/coverage', bold: true },
              { label: nav.digitalWallets, href: '/coverage', bold: true },
            ],
          },
          {
            title: nav.paymentMethods,
            items: [
              {
                label: 'Brazil',
                bold: true,
                children: [
                  { label: 'Boleto', href: '/coverage' },
                  { label: 'PIX', href: '/coverage' },
                  { label: 'Credit Card', href: '/coverage' },
                  { label: 'PicPay', href: '/coverage' },
                  { label: 'Debit Card', href: '/coverage' },
                ],
              },
              {
                label: 'Mexico',
                bold: true,
                children: [
                  { label: 'SPEI', href: '/coverage' },
                  { label: 'Paycash', href: '/coverage' },
                  { label: 'Credit Card', href: '/coverage' },
                  { label: 'Debit Card', href: '/coverage' },
                  { label: 'Paynet', href: '/coverage' },
                  { label: 'Tiendas Y Farmacias', href: '/coverage' },
                  { label: 'OXXO', href: '/coverage' },
                ],
              },
              {
                label: 'Colombia',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                  { label: 'Credit Card', href: '/coverage' },
                  { label: 'Debit Card', href: '/coverage' },
                  { label: 'Bank Transfer', href: '/coverage' },
                  { label: 'Nequi', href: '/coverage' },
                ],
              },
              {
                label: 'Ecuador',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                  { label: 'Credit Card', href: '/coverage' },
                  { label: 'Bank Transfer', href: '/coverage' },
                  { label: 'Deuna', href: '/coverage' },
                ],
              },
              {
                label: 'Peru',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                  { label: 'Credit Card', href: '/coverage' },
                  { label: 'Debit Card', href: '/coverage' },
                  { label: 'Bank Transfer', href: '/coverage' },
                  { label: 'Pago Efectivo', href: '/coverage' },
                ],
              },
              {
                label: 'Chile',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                  { label: 'Mach', href: '/coverage' },
                  { label: 'Credit Card', href: '/coverage' },
                  { label: 'Debit Card', href: '/coverage' },
                  { label: 'Bank Transfer', href: '/coverage' },
                ],
              },
              {
                label: 'Honduras',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                ],
              },
              {
                label: 'Dominican Republic',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                ],
              },
              {
                label: 'El Salvador',
                bold: true,
                children: [
                  { label: 'Bank Transfer', href: '/coverage' },
                ],
              },
              {
                label: 'Guatemala',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                  { label: 'Bank Transfer', href: '/coverage' },
                ],
              },
              {
                label: 'Panama',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                ],
              },
              {
                label: 'Costa Rica',
                bold: true,
                children: [
                  { label: 'Paycash', href: '/coverage' },
                  { label: 'Credit Card', href: '/coverage' },
                ],
              },
            ],
          },
        ],
        footer: {
          title: nav.whyEpag,
          description: nav.whyEpagDescription,
        },
      },
    },
    {
      label: nav.markets,
      dropdown: {
        columns: [
          {
            title: nav.marketCoverage,
            items: [
              { label: 'Coverage', href: '/coverage', bold: true },
            ],
          },
        ],
        footer: {
          title: nav.coverageHighlight,
          description: nav.coverageDescription,
        },
      },
    },
    {
      label: nav.industries,
      dropdown: {
        columns: [
          {
            title: nav.allIndustries,
            items: [
              {
                label: nav.niches,
                bold: true,
                children: [
                  { label: nav.ecommerce, href: '/industries/ecommerce' },
                  { label: nav.saas, href: '/industries/saas' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      label: nav.pricing,
      href: '/pricing',
    },
    {
      label: nav.institutional,
      dropdown: {
        columns: [
          {
            title: nav.company,
            items: [
              { label: nav.aboutEpag, href: '/about', bold: true },
            ],
          },
          {
            title: nav.legal,
            items: [
              { label: nav.legal, href: '/legal', bold: true },
              {
                label: nav.prohibited,
                bold: true,
                children: [
                  { label: nav.prohibitedList, href: '/legal/prohibited' },
                ],
              },
              {
                label: 'Terms',
                bold: true,
                children: [
                  { label: nav.termsForUsers, href: '/legal/terms-users' },
                  { label: nav.termsForMerchants, href: '/legal/terms-merchants' },
                ],
              },
              { label: nav.imprint, href: '/legal/imprint', bold: true },
            ],
          },
        ],
        footer: {
          title: 'Disclaimer',
          description: nav.institutionalDisclaimer,
        },
      },
    },
  ];
}

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number>(0);
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const menuItems = buildMenuItems(t.nav);

  function handleMenuEnter(label: string) {
    const btn = buttonRefs.current[label];
    const nav = navRef.current;
    if (btn && nav) {
      const btnRect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      // center of button relative to nav left edge
      setDropdownLeft(btnRect.left - navRect.left + btnRect.width / 2);
    }
    setActiveMenu(label);
  }

  // Close desktop dropdown on click outside
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

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setActiveMobileMenu(null);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleMobileMenu(label: string) {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  }

  return (
    <>
      <nav
        ref={navRef}
        className="page-x relative z-50 flex items-center justify-between bg-light py-4 shadow-navbar"
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
                  ref={(el) => { buttonRefs.current[item.label] = el; }}
                  className="flex cursor-pointer items-center gap-1 text-base font-semibold leading-6 text-theme-secondary transition-colors hover:text-secondary-500"
                  onMouseEnter={() => item.dropdown && handleMenuEnter(item.label)}
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
            </li>
          ))}
        </ul>

        {/* Dropdown — anchored to nav bottom, centered on active button */}
        {activeMenu && (
          <div
            className="absolute top-full z-50 pt-2 left-1/2 -translate-x-1/2"
          >
            {menuItems.map((item) =>
              item.label === activeMenu && item.dropdown ? (
                <NavDropdown key={item.label} data={item.dropdown} />
              ) : null
            )}
          </div>
        )}

        <div className="hidden lg:block">
          <Link href="/contact">
            <Button variant="primary" size="md">
              {t.nav.contactUs}
            </Button>
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="flex cursor-pointer items-center justify-center text-secondary-900 lg:hidden"
          onClick={() => { setIsOpen(!isOpen); setActiveMobileMenu(null); }}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? 'x' : 'menu'} size={28} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 max-h-[calc(100vh-120px)] overflow-y-auto bg-light shadow-lg lg:hidden">
          {/* TopBar links on mobile */}
          <div className="flex items-center gap-4 border-b border-secondary-100 bg-secondary-900 px-6 py-3">
            <a
              href="https://adm.epag.io/login"
              className="text-sm font-semibold text-secondary-100 transition-colors hover:text-light"
              onClick={() => setIsOpen(false)}
            >
              {t.topBar.loginAdmin}
            </a>
          </div>

          {/* Nav items */}
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.href && !item.dropdown ? (
                  <Link
                    href={item.href}
                    className="flex w-full items-center justify-between border-b border-secondary-100 px-6 py-4 text-base font-semibold text-theme-secondary transition-colors hover:bg-secondary-100/40"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="flex w-full cursor-pointer items-center justify-between border-b border-secondary-100 px-6 py-4 text-base font-semibold text-theme-secondary transition-colors hover:bg-secondary-100/40"
                      onClick={() => toggleMobileMenu(item.label)}
                      aria-expanded={activeMobileMenu === item.label}
                    >
                      <span>{item.label}</span>
                      {item.dropdown && (
                        <Icon
                          name="chevron-down"
                          size={20}
                          className={`transition-transform duration-200 ${
                            activeMobileMenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Inline accordion dropdown */}
                    {activeMobileMenu === item.label && item.dropdown && (
                      <div className="border-b border-secondary-100 bg-secondary-100/30 px-6 py-4">
                        <div className="flex flex-col gap-5">
                          {item.dropdown.columns.map((col) => (
                            <div key={col.title}>
                              <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-theme-secondary">
                                <span className="inline-block h-3 w-3 rounded bg-theme-secondary/10 ring-1 ring-theme-secondary/20" />
                                {col.title}
                              </p>
                              <ul className="flex flex-col gap-1 pl-5">
                                {col.items.map((colItem) => (
                                  <li key={colItem.label}>
                                    {colItem.children?.length ? (
                                      <MobileExpandableItem
                                        item={colItem}
                                        onNavigate={() => setIsOpen(false)}
                                      />
                                    ) : (
                                      <Link
                                        href={colItem.href ?? '#'}
                                        className={`text-sm leading-7 text-dark-gray transition-colors hover:text-theme-secondary ${
                                          colItem.bold ? 'font-semibold' : 'font-normal'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {colItem.label}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {item.dropdown.feature && (
                            <div className="border-t border-secondary-100 pt-3">
                              <Link
                                href={item.dropdown.feature.href}
                                className="flex flex-col gap-0.5"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="text-sm font-bold text-theme-secondary">
                                  {item.dropdown.feature.title}
                                </span>
                                <span className="text-sm text-dark-gray">
                                  {item.dropdown.feature.description}
                                </span>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="px-6 py-5">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" size="md" className="w-full justify-center">
                {t.nav.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
