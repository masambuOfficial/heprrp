"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import AfricaMap from "@/components/AfricaMap";
import FlagStrip from "@/components/FlagStrip";
import { COHORT_LABEL, COUNTRIES, partnerLabel } from "@/data/countries";

/** The map and the country list, sharing one highlighted country. */
export default function CountriesExplorer() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const open = (slug: string) => router.push(`/participating-countries/${slug}`);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="rounded-lg border border-line bg-white p-4 sm:p-8 lg:col-span-8">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            <span className="hidden sm:inline">Hover over a highlighted country for a summary, then click to open its page.</span>
            <span className="sm:hidden">Tap a highlighted country for a summary.</span>
          </p>
          <p className="shrink-0 text-xs text-muted">Colours are taken from each country&apos;s national flag.</p>
        </div>
        <AfricaMap active={active} setActive={setActive} onOpen={open} />
        <p className="mt-4 text-xs leading-relaxed text-muted">
          The boundaries, names and designations on this map do not imply any judgment on the legal status of any territory or
          the endorsement or acceptance of such boundaries.
        </p>
      </div>

      <aside className="self-start rounded-lg border border-line bg-white p-4 sm:p-6 lg:col-span-4">
        <h2 className="mb-1 font-bold text-navy">All countries</h2>
        <p className="mb-4 text-sm text-muted">Select a country to open its page.</p>
        <ul className="divide-y divide-gray-100">
          {COUNTRIES.map((c) => (
            <li key={c.slug}>
              <button
                onClick={() => open(c.slug)}
                onMouseEnter={() => setActive(c.slug)}
                onMouseLeave={() => setActive(null)}
                className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-3 text-left ${active === c.slug ? "bg-brand-soft" : "hover:bg-gray-50"}`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <FlagStrip colors={c.flag} className="h-4 w-6 shrink-0" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-navy">{c.name}</span>
                    <span className="block text-xs text-muted">
                      {partnerLabel(c)} · {COHORT_LABEL[c.cohort]}
                    </span>
                  </span>
                </span>
                <ChevronRight size={16} className={active === c.slug ? "text-brand" : "text-gray-300"} />
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
