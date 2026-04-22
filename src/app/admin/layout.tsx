import { LanguageProvider } from '@/lib/i18n';

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider forcedLocale="en">
      {children}
    </LanguageProvider>
  );
}
