import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import AfricaMap from "@/components/AfricaMap";
import Breadcrumb from "@/components/Breadcrumb";
import FlagStrip from "@/components/FlagStrip";
import { COHORT_LABEL, COUNTRIES, getCountry, partnerLabel } from "@/data/countries";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return COUNTRIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);
  return country
    ? { title: country.name, description: `How ${country.name} takes part in HEPRRP.` }
    : { title: "Country not found" };
}

export default async function CountryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) notFound();

  const idx = COUNTRIES.findIndex((x) => x.slug === slug);
  const prev = COUNTRIES[(idx - 1 + COUNTRIES.length) % COUNTRIES.length];
  const next = COUNTRIES[(idx + 1) % COUNTRIES.length];

  const facts: [string, string][] = [
    ["Capital", c.capital],
    ["Coordinated through", partnerLabel(c)],
    ["Joined the program", COHORT_LABEL[c.cohort]],
    ["National implementing agency", "Ministry of Health (to confirm)"],
  ];
  // Outline of the content each country page will carry once the national team supplies it
  const sections: [string, string][] = [
    ["Program objectives", `How HEPRRP supports ${c.name}'s national health emergency priorities.`],
    ["Key activities and milestones", "Surveillance, laboratory, workforce and response work delivered so far."],
    ["Implementing agency and contacts", "The national team, focal points and how to get in touch."],
    ["Reports and resources", "Country reports, assessments and publications for download."],
  ];

  return (
    <>
      <section className="bg-navy text-white">
        <div className="clear-logo mx-auto grid max-w-7xl items-center gap-8 px-4 pb-12 sm:px-6 md:grid-cols-12 lg:px-8">
          <div className="md:col-span-8">
            <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Participating Countries", href: "/participating-countries" }, { label: c.name }]} />
            <p className="mb-3 text-sm text-brand-mist">Participating country · {COHORT_LABEL[c.cohort]}</p>
            <FlagStrip colors={c.flag} className="mb-4 h-2 w-16" />
            <h1 className="display mb-5 text-4xl sm:text-5xl">{c.name}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
              {c.name} takes part in HEPRRP to strengthen how it prepares for, detects and responds to health emergencies,
              working with neighbouring countries through {c.partner ?? "the program's regional coordinating institutions"}.
            </p>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <div className="rounded-lg border border-white border-opacity-10 bg-navy-light p-5">
              <AfricaMap compact highlight={c.slug} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <dl className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([k, v]) => (
              <div key={k} className="rounded-lg border border-line bg-white p-5">
                <dt className="mb-1 text-sm text-muted">{k}</dt>
                <dd className="font-bold text-navy">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-6 lg:grid-cols-12">
            <article className="rounded-lg border border-line bg-white p-6 sm:p-10 lg:col-span-8">
              <h2 className="display mb-4 text-2xl text-navy sm:text-3xl" style={{ fontWeight: 700 }}>
                About {c.name}&apos;s participation
              </h2>
              <p className="mb-8 leading-relaxed text-gray-700">
                Content for this page is being prepared with the national program team. Once published, it will cover the
                following areas.
              </p>
              <ul className="space-y-4">
                {sections.map(([t, d]) => (
                  <li key={t} className="flex gap-4 rounded-lg bg-surface p-4">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
                    <span>
                      <span className="block font-semibold text-navy">{t}</span>
                      <span className="mt-0.5 block text-sm text-muted">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <aside className="space-y-4 self-start lg:col-span-4">
              <Link
                href="/participating-countries"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-white py-3 font-semibold text-navy hover:border-brand"
              >
                <ChevronLeft size={18} /> Back to the map
              </Link>
              <div className="rounded-lg border border-line bg-white p-2">
                <p className="px-3 pb-1 pt-2 text-sm text-muted">Other countries</p>
                {([["Previous", prev], ["Next", next]] as const).map(([label, x]) => (
                  <Link
                    key={label}
                    href={`/participating-countries/${x.slug}`}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left hover:bg-gray-50"
                  >
                    <span>
                      <span className="block text-xs text-muted">{label}</span>
                      <span className="block font-semibold text-navy">{x.name}</span>
                    </span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
