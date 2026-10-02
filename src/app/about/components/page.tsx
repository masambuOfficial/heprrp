import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { COMPONENTS, COMPONENT_NOTE } from "@/data/components";

export const metadata: Metadata = {
  title: "Objectives & Components",
  description: "The three components of IGAD's regional work under HEPRRP, and the progress made so far.",
};

export default function ComponentsPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "About HEPRRP" }, { label: "Objectives & Components" }]}
        title="Objectives & Components"
        intro="IGAD's regional work is organised into three components, each with its own sub-components. Here is what each aims to do and what has been achieved so far."
      >
        <nav aria-label="Components" className="mt-8 flex flex-wrap gap-2">
          {COMPONENTS.map((c) => (
            <a
              key={c.id}
              href={`#component-${c.id}`}
              className="rounded border border-white border-opacity-30 px-4 py-2 text-sm font-semibold hover:bg-white hover:bg-opacity-10"
            >
              Component {c.id}
            </a>
          ))}
        </nav>
      </PageHero>

      {COMPONENTS.map((c, i) => (
        <section key={c.id} id={`component-${c.id}`} className={`scroll-mt-20 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <p className="mb-2 text-sm font-semibold text-brand">Component {c.id}</p>
            <h2 className="display mb-3 text-2xl text-navy sm:text-3xl">{c.title}</h2>
            <p className="mb-10 max-w-3xl text-lg text-muted">{c.summary}</p>
            <div className="grid gap-6 lg:grid-cols-2">
              {c.subs.map((s) => (
                <article key={s.title} className="rounded-lg border border-line bg-white p-6">
                  <p className="mb-1 text-sm font-semibold text-brand">
                    {s.id.includes(".") ? `Sub-component ${s.id}` : "Across the component"}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mb-4 text-sm text-muted">{s.summary}</p>
                  {s.highlights.length > 0 ? (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
                      {s.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm italic text-muted">Progress details will be added here.</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm text-gray-300">{COMPONENT_NOTE}</p>
          <Link href="/communities" className="btn-brand inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold">
            Explore the Communities of Practice
          </Link>
        </div>
      </section>
    </>
  );
}
