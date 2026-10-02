import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 clear-logo pb-24 text-center">
        <p className="text-sm font-semibold text-brand mb-3">Page not found</p>
        <h1 className="display text-4xl text-navy mb-4">This page isn&apos;t available yet</h1>
        <p className="text-muted mb-8">It may still be in preparation, or the address may have changed.</p>
        <Link href="/" className="btn-brand inline-flex font-semibold px-6 py-3 rounded-md">Back to the homepage</Link>
      </div>
    </section>
  );
}
