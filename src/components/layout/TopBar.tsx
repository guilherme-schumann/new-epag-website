'use client';

import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/ui';
import { useLanguage, locales, type Locale } from '@/lib/i18n';

export default function TopBar() {
  const { locale, t, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  function handleSelect(code: Locale) {
    setLocale(code);
    setOpen(false);
  }

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div className="page-x relative z-10 hidden items-center justify-end bg-secondary-900 py-2.5 lg:flex">
      <div className="flex items-center gap-3">
        {/* Login Admin link */}
        <a
          href="https://adm.epag.io/login"
          className="text-sm font-semibold leading-5 text-secondary-100 hover:text-light transition-colors whitespace-nowrap"
        >
          {t.topBar.loginAdmin}
        </a>

        <span className="h-5 w-px bg-secondary-100/30" />

        {/* Language selector */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="flex items-center gap-1.5 text-sm font-semibold leading-5 text-secondary-100 hover:text-light transition-colors cursor-pointer"
          >
            <span className={`fi fi-${currentLocale.flag} text-base`} aria-hidden="true" />
            <span>{currentLocale.label}</span>
            <Icon
              name="chevron-down"
              size={16}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {open && (
            <ul
              role="listbox"
              aria-label="Select language"
              className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-secondary-100/10 bg-secondary-900 shadow-lg ring-1 ring-black/5"
            >
              {locales.map((loc) => (
                <li key={loc.code} role="option" aria-selected={loc.code === locale}>
                  <button
                    onClick={() => handleSelect(loc.code)}
                    className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer
                      ${loc.code === locale
                        ? 'bg-primary-500/10 text-primary-500'
                        : 'text-secondary-100 hover:bg-secondary-100/10 hover:text-light'
                      }`}
                  >
                    <span className={`fi fi-${loc.flag} text-base`} aria-hidden="true" />
                    <span>{loc.label}</span>
                    {loc.code === locale && (
                      <Icon name="check" size={14} className="ml-auto text-primary-500" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
