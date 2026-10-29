import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 md:px-8">
      <p className="font-mono text-label text-accent">404</p>
      <h1 className="mt-2 text-display font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-6 max-w-[50ch] text-lead text-muted">
        This page doesn&apos;t exist. Everything on this site is on the home page.
      </p>
      <p className="mt-8">
        <Link href="/" className="link">
          Back to the portfolio
        </Link>
      </p>
    </main>
  );
}
