'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import type { Locale, Translations } from './types';
import { locales } from './types';
import en    from './translations/en';
import ptBR  from './translations/pt-BR';
import es    from './translations/es';

// ─── Translation dictionary ───────────────────────────────────────────────────

const dictionaries: Record<Locale, Translations> = { en, 'pt-BR': ptBR, es };

// ─── Context ──────────────────────────────────────────────────────────────────

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'epag-locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && stored in dictionaries) return stored;

  const browser = navigator.language;
  if (browser.startsWith('pt')) return 'pt-BR';
  if (browser.startsWith('es')) return 'es';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Hydrate from localStorage / browser language after mount
  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  // Sync <html lang> and persist preference
  useEffect(() => {
    const config = locales.find((l) => l.code === locale);
    if (config) document.documentElement.lang = config.htmlLang;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  return (
    <LanguageContext value={{ locale, t: dictionaries[locale], setLocale }}>
      {children}
    </LanguageContext>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}

// ─── Re-exports ───────────────────────────────────────────────────────────────

export { locales };
export type { Locale, Translations };
