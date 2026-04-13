'use client';

import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/ui';
import { useLanguage, locales, type Locale } from '@/lib/i18n';

export default function TopBar() {
  const { locale, t, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });

  function updatePosition() {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    // Use the TopBar div's bottom so the dropdown clears the full TopBar row
    const topBarEl = buttonRef.current.closest('[data-topbar]') as HTMLElement | null;
    const topBarBottom = topBarEl ? topBarEl.getBoundingClientRect().bottom : rect.bottom;
    setDropdownPos({
      top: topBarBottom + 8,
      right: window.innerWidth - rect.right,
    });
  }

  function handleOpen() {
    updatePosition();
    setOpen((v) => !v);
  }

  // Recalculate position on scroll while open
  useEffect(() => {
    if (!open) return;
    window.addEventListener('scroll', updatePosition, { passive: true });
    return () => window.removeEventListener('scroll', updatePosition);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
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
    <div data-topbar className="page-x hidden bg-secondary-900 py-2.5 lg:flex">
      <div className="page-container flex w-full items-center justify-end">
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
        <button
          ref={buttonRef}
          onClick={handleOpen}
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
        </div>
      </div>

      {/* Dropdown rendered via fixed positioning to escape sticky header stacking context */}
      {open && (
        <ul
          ref={dropdownRef}
          role="listbox"
          aria-label="Select language"
          className="fixed w-44 rounded-xl border border-secondary-100/10 bg-secondary-900 shadow-lg"
          style={{ top: dropdownPos.top, right: dropdownPos.right, zIndex: 9999 }}
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
  );
}
