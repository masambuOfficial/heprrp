import { BookOpen, Globe2 } from "lucide-react";
import { PHASE_PROGRESS } from "@/data/program";
import { SITE } from "@/data/site";

export default function AboutIntro() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-4 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
            <Globe2 size={16} /> A multi-regional program financed by the World Bank
          </p>
          <h2 className="display mb-5 text-3xl leading-tight text-navy sm:text-4xl">Stopping health emergencies before they cross borders</h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
            HEPRRP helps participating countries detect, contain and recover from outbreaks as one region. Using a phased
            financing model, it builds shared surveillance, laboratories and response capacity that outlast any single emergency.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#phases" className="btn-brand inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold">
              Explore the three phases
            </a>
            <a
              href={SITE.knowledgePortalUrl}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-6 py-3 font-semibold text-navy hover:border-brand"
            >
              <BookOpen size={18} /> Visit the Knowledge Portal
            </a>
          </div>
        </div>
        <aside className="rounded-lg border border-line bg-surface p-6 sm:p-8 lg:col-span-5">
          <h3 className="mb-1 font-bold text-navy">Program status</h3>
          <p className="mb-6 text-sm text-muted">Overall progress per phase, September 2026</p>
          <ul className="space-y-5">
            {PHASE_PROGRESS.map((p, i) => (
              <li key={p.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-navy">
                    <span className="mr-2 font-semibold text-brand">Phase {i + 1}</span>
                    {p.name}
                  </span>
                  <span className="font-bold text-navy">{p.percent}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full border border-line bg-white">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${p.percent}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-xs text-muted">Figures on this page are illustrative placeholders pending official reporting.</p>
        </aside>
      </div>
    </section>
  );
}
