import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { COMMUNITIES, LEARNING_TOPICS } from "@/data/communities";

export const metadata: Metadata = {
  title: "Communities of Practice",
  description: "Regional networks where HEPRRP countries share evidence, experience and tools.",
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Communities of Practice" }]}
        title="Communities of Practice"
        intro="Communities of Practice bring experts from participating countries together to learn from one another. They are the main way the program's learning agenda is put into practice."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="sr-only">All communities</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/communities/${c.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 hover:border-brand"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                    <c.icon size={20} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-navy">{c.name}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{c.summary}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2">
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="display mb-3 text-2xl text-navy sm:text-3xl">The learning agenda</h2>
          <p className="mb-6 max-w-3xl text-muted">
            Endorsed by the Regional Advisory Committee in 2025, the learning agenda focuses on four flagship topics. Further
            consultation is under way to strengthen how it is put into practice.
          </p>
          <ul className="flex flex-wrap gap-2">
            {LEARNING_TOPICS.map((t) => (
              <li key={t} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-navy">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
