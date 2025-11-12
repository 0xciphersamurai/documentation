import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Trigger Market
        </h1>
        <p className="text-2xl text-muted-foreground mb-4">
          The First Consensus Market Platform
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Fully onchain, oracle-free prediction markets for subjective debates.
          Trade on opinions, create markets, and earn from consensus formation.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Read the Docs
          </Link>
          <a
            href="https://triggermarket.io"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Launch App
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Oracle-Free</h3>
            <p className="text-sm text-muted-foreground">
              Markets settle based on price stability, not external oracles
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Dynamic Opinions</h3>
            <p className="text-sm text-muted-foreground">
              Markets evolve as new perspectives compete for inclusion
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2">Earn Fees</h3>
            <p className="text-sm text-muted-foreground">
              Create markets and opinions to earn a share of all trading fees
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
