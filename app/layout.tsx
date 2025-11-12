import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Trigger Market Documentation',
    template: '%s | Trigger Market',
  },
  description: 'The first consensus market platform - fully onchain, oracle-free prediction markets for subjective debates',
  keywords: ['prediction markets', 'consensus markets', 'blockchain', 'DeFi', 'Base', 'oracle-free'],
  authors: [{ name: 'Trigger Market Team' }],
  openGraph: {
    title: 'Trigger Market Documentation',
    description: 'The first consensus market platform - fully onchain, oracle-free',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
