"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { METRIC_VIEWS, RESOURCES } from "@/data/program";

export default function Metrics() {
  const [view, setView] = useState("program");
  const data = METRIC_VIEWS[view];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="display mb-3 text-3xl text-navy sm:text-4xl">Key indicators</h2>
            <p className="text-lg text-muted">Progress against end-of-program targets, updated each quarter.</p>
          </div>
          <div className="inline-flex max-w-full self-start overflow-x-auto rounded-md border border-line bg-white p-1" role="tablist" aria-label="Region">
            {Object.entries(METRIC_VIEWS).map(([key, v]) => (
              <button
                key={key}
                role="tab"
                aria-selected={view === key}
                onClick={() => setView(key)}
                className={`whitespace-nowrap rounded px-4 py-2 text-sm font-medium ${view === key ? "bg-navy text-white" : "text-muted hover:text-navy"}`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div key={view} className="panel-enter grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map(({ icon: MIcon, value, unit, label, progress }) => (
            <article key={label} className="flex flex-col rounded-lg border border-line bg-white p-6">
              <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                <MIcon size={20} />
              </span>
              <p className="mb-2 text-sm text-muted">{label}</p>
              <p className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy">{value}</span>
                <span className="text-sm text-muted">{unit}</span>
              </p>
              <div className="mt-auto">
                <div className="mb-1.5 flex justify-between text-xs text-muted">
                  <span>Toward target</span>
                  <span className="font-semibold text-navy">{progress}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Resources */}
        <div id="resources" className="mt-16 grid gap-4 md:grid-cols-3">
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.href} className="group flex items-center gap-4 rounded-lg border border-line bg-white p-5 hover:border-brand">
              <FileText size={22} className="shrink-0 text-navy" />
              <span className="flex-1">
                <span className="block font-medium text-navy">{r.title}</span>
                <span className="block text-sm text-muted">{r.meta}</span>
              </span>
              <Download size={18} className="text-muted group-hover:text-brand" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
