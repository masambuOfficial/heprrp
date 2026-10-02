"use client";

import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { PHASES } from "@/data/program";

export default function Phases() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];
  const Icon = phase.icon;

  return (
    <section id="phases" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="display mb-4 text-3xl text-navy sm:text-4xl">How the program unfolds</h2>
          <p className="text-lg leading-relaxed text-muted">
            Under the Multiphase Programmatic Approach, each phase opens once the previous one meets agreed results, and new
            countries can join as the program grows. Select a phase to see what it delivers.
          </p>
        </div>

        {/* Stepper: horizontal track on desktop, stacked on mobile */}
        <ol className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0" role="tablist" aria-label="Program phases">
          {PHASES.map((p, i) => {
            const PIcon = p.icon;
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={p.id} className="relative">
                {i < PHASES.length - 1 && (
                  <span aria-hidden className={`absolute left-14 right-0 top-7 hidden h-0.5 md:block ${i < active ? "bg-brand" : "bg-gray-200"}`} />
                )}
                <button
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`relative flex w-full items-center gap-4 rounded-md border p-4 text-left md:flex-col md:items-start md:gap-3 md:rounded-none md:border-0 md:p-0 md:pr-6 ${
                    isActive ? "border-brand bg-brand-soft md:bg-transparent" : "border-line"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 ${
                      isDone ? "border-brand bg-brand text-white" : isActive ? "border-brand bg-white text-brand" : "border-gray-300 bg-white text-gray-400"
                    }`}
                  >
                    {isDone ? <CheckCircle2 size={24} /> : <PIcon size={24} />}
                  </span>
                  <span>
                    <span className="block text-sm text-muted">
                      Phase {p.id} <span className="mx-1">/</span> {p.window}
                    </span>
                    <span className={`block text-lg font-semibold ${isActive ? "text-navy" : "text-gray-600"}`}>{p.name}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Detail panel */}
        <div key={phase.id} role="tabpanel" className="panel-enter grid overflow-hidden rounded-lg bg-surface lg:grid-cols-3">
          <div className="p-6 sm:p-10 lg:col-span-2">
            <div className="mb-4 flex items-center gap-3 text-brand">
              <Icon size={22} />
              <span className="font-semibold">
                Phase {phase.id}: {phase.name}
              </span>
            </div>
            <p className="display mb-8 text-2xl leading-snug text-navy sm:text-3xl" style={{ fontWeight: 700 }}>
              {phase.summary}
            </p>
            <h3 className="mb-4 font-semibold text-navy">Expected results</h3>
            <ul className="space-y-3">
              {phase.outcomes.map((o) => (
                <li key={o} className="flex gap-3 leading-relaxed text-gray-700">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" /> {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-8 bg-navy p-6 text-white sm:p-10">
            <dl className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              <div>
                <dt className="mb-1 text-sm text-gray-400">Indicative financing</dt>
                <dd className="text-3xl font-bold">{phase.budget}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm text-gray-400">Participating countries</dt>
                <dd className="text-3xl font-bold">{phase.countries}</dd>
              </div>
            </dl>
            <div className="flex gap-2">
              <button
                onClick={() => setActive(Math.max(0, active - 1))}
                disabled={active === 0}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-white border-opacity-30 py-2.5 text-sm font-medium hover:bg-white hover:bg-opacity-10 disabled:opacity-30"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={() => setActive(Math.min(PHASES.length - 1, active + 1))}
                disabled={active === PHASES.length - 1}
                className="btn-brand inline-flex flex-1 items-center justify-center gap-1 rounded-md py-2.5 text-sm font-medium disabled:opacity-30"
              >
                Next phase <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
