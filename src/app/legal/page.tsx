import type { Metadata } from 'next';
import { LegalHero, LegalLayout, LegalOverview, LegalHoverProvider } from '@/components/sections/legal';

export const metadata: Metadata = {
  title: 'Legal & Compliance — epag',
  description:
    'Documentos legais, termos de uso, política de privacidade e compliance da epag — infraestrutura de pagamentos para a América Latina.',
};

export default function LegalPage() {
  return (
    <main className="flex-1 bg-background">
      <LegalHero />
      <LegalHoverProvider>
        <LegalLayout>
          <LegalOverview />
        </LegalLayout>
      </LegalHoverProvider>
    </main>
  );
}
