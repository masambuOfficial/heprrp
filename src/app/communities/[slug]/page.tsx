import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { COMMUNITIES, getCommunity } from "@/data/communities";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return COMMUNITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommunity(slug);
  return c ? { title: `${c.name} Community of Practice`, description: c.summary } : { title: "Community not found" };
}

export default async function CommunityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCommunity(slug);
  if (!c) notFound();

  const idx = COMMUNITIES.findIndex((x) => x.slug === slug);
  const prev = COMMUNITIES[(idx - 1 + COMMUNITIES.length) % COMMUNITIES.length];
  const next = COMMUNITIES[(idx + 1) % COMMUNITIES.length];

  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Communities of Practice", href: "/communities" }, { label: c.name }]}
        title={c.name}
        intro={c.summary}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2 className="display mb-4 text-2xl text-navy">What it does</h2>
            <p className="mb-10 text-lg leading-relaxed text-muted">{c.purpose}</p>
            <h2 className="display mb-4 text-2xl text-navy">Recent activity</h2>
            <ul className="list-disc space-y-3 pl-5 leading-relaxed text-ink">
              {c.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-lg border border-line bg-surface p-6 lg:col-span-5">
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
              <c.icon size={20} />
            </span>
            <h3 className="mb-2 font-bold text-navy">Learning agenda</h3>
            <p className="text-sm text-muted">
              {c.topic
                ? `This community supports the flagship learning topic: ${c.topic}.`
                : "This community supports the program's wider learning agenda."}
            </p>
            <p className="mt-4 border-t border-line pt-4 text-xs text-muted">
              Progress reported at the 4th Implementation Support Mission, July 2026.
            </p>
          </aside>
        </div>
      </section>

      <nav aria-label="Other communities" className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-7xl justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <Link href={`/communities/${prev.slug}`} className="flex items-center gap-1 font-semibold text-navy hover:text-brand">
            <ChevronLeft size={18} /> {prev.name}
          </Link>
          <Link href={`/communities/${next.slug}`} className="flex items-center gap-1 text-right font-semibold text-navy hover:text-brand">
            {next.name} <ChevronRight size={18} />
          </Link>
        </div>
      </nav>
    </>
  );
}
