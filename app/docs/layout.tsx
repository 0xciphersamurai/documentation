import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layout';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'Trigger Market',
        url: '/docs',
      }}
      links={[
        {
          text: 'Launch App',
          url: 'https://triggermarket.io',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
