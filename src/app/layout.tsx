import type { Metadata } from 'next';
import './globals.css';
import 'flag-icons/css/flag-icons.min.css';

export const metadata: Metadata = {
  title: 'EPAG — Cross-Border Online Payments for Latin America',
  description:
    'Accept payments like a local business across Latin America. Local Credit and Debit Cards, PIX, OXXO, SPEI, and much more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
