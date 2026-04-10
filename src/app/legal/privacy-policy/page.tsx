import type { Metadata } from 'next';
import { LegalHero, LegalDocumentLayout, LegalHoverProvider } from '@/components/sections/legal';
import { legalSharedContent, privacyContent } from '@/content';

export const metadata: Metadata = {
  title: 'Privacy Policy — epag',
  description:
    'How we collect, use, and protect your personal data in compliance with LGPD and GDPR.',
};

export default function PrivacyPolicyPage() {
  const content = privacyContent.en;
  const nav = legalSharedContent.en.nav;

  return (
    <main className="flex-1 bg-background">
      <LegalHero />
      <LegalHoverProvider>
        <LegalDocumentLayout
          title={content.title}
          sections={content.sections}
          backLabel={nav.backToOverview}
        />
      </LegalHoverProvider>
    </main>
  );
}
