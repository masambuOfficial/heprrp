import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  IGAD_AWP,
  IGAD_AWP_TOTAL,
  IGAD_CONTEXT,
  IGAD_CONTEXT_NOTE,
  IGAD_FACTS,
  IGAD_FOCUS,
  IGAD_GOVERNANCE,
  IGAD_PROJECT_DATA,
  IGAD_REPORT_NOTE,
} from "@/data/igad";

export const metadata: Metadata = {
  title: "IGAD",
  description:
    "The Intergovernmental Authority on Development, one of HEPRRP's two regional coordinating institutions, and its regional component of the program.",
};

export default function IgadPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Implementing Partners" }, { label: "IGAD" }]}
        title="Intergovernmental Authority on Development"
        intro="IGAD is a Regional Economic Community of the African Union and one of HEPRRP's two regional coordinating institutions. It leads the program's regional component across Eastern Africa and the Horn of Africa."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="display mb-6 text-2xl text-navy sm:text-3xl">About IGAD</h2>
            <dl className="divide-y divide-line rounded-lg border border-line">
              {IGAD_FACTS.map(([k, v]) => (
                <div key={k} className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-semibold text-navy">{k}</dt>
                  <dd className="text-muted sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-6">
            <h2 className="display mb-6 text-2xl text-navy sm:text-3xl">The region</h2>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line">
              {IGAD_CONTEXT.map((c) => (
                <div key={c.label} className="flex flex-col-reverse bg-surface p-5">
                  <dt className="mt-1 text-sm text-muted">{c.label}</dt>
                  <dd className="text-3xl font-extrabold text-navy">{c.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-muted">{IGAD_CONTEXT_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="display mb-2 text-2xl text-navy sm:text-3xl">Governance</h2>
          <p className="mb-8 max-w-2xl text-muted">
            IGAD&apos;s decisions are made through a layered structure, from heads of state down to technical platforms.
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IGAD_GOVERNANCE.map((g, i) => (
              <li key={g.title} className="rounded-lg border border-line bg-white p-5">
                <span className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-bold text-navy">{g.title}</h3>
                <p className="mt-1 text-sm text-muted">{g.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="display mb-6 text-2xl text-navy sm:text-3xl">IGAD&apos;s regional component</h2>
            <dl className="divide-y divide-line rounded-lg border border-line">
              {IGAD_PROJECT_DATA.map(([k, v]) => (
                <div key={k} className="grid gap-1 p-4 sm:grid-cols-2 sm:gap-4">
                  <dt className="text-sm font-semibold text-navy">{k}</dt>
                  <dd className="text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <h2 className="display mb-2 text-2xl text-navy sm:text-3xl">2026 annual work plan</h2>
            <p className="mb-6 text-muted">{IGAD_AWP_TOTAL} activities, with progress for January to June 2026.</p>
            <ul className="space-y-5">
              {IGAD_AWP.map((a) => (
                <li key={a.status}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-navy">
                      {a.status} <span className="text-muted">({a.count} activities)</span>
                    </span>
                    <span className="font-bold text-navy">{a.percent}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full border border-line bg-white">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${a.percent}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted">{IGAD_REPORT_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="display mb-2 text-2xl text-navy sm:text-3xl">Strategic focus</h2>
          <p className="mb-8 max-w-2xl text-muted">Seven areas guide how IGAD&apos;s regional resources are used.</p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IGAD_FOCUS.map((f) => (
              <li key={f.title} className="rounded-lg border border-line bg-white p-5">
                <h3 className="mb-1 font-bold text-navy">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.desc}</p>
              </li>
            ))}
          </ul>
          <Link href="/about/components" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline">
            See objectives and components <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
