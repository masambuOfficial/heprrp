import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CountriesExplorer from "@/components/CountriesExplorer";
import { COUNTRIES } from "@/data/countries";

export const metadata: Metadata = {
  title: "Participating Countries",
  description: "The eleven countries across Eastern, Central and Southern Africa taking part in HEPRRP.",
};

export default function ParticipatingCountriesPage() {
  const firstCount = COUNTRIES.filter((c) => c.cohort === "first").length;
  const stats: [number, string][] = [
    [COUNTRIES.length, "Participating countries"],
    [2, "Regional coordinating institutions"],
    [firstCount, "Joined in the first phase"],
    [COUNTRIES.length - firstCount, "Newly engaged countries"],
  ];

  return (
    <>
      <section className="bg-navy text-white">
        <div className="clear-logo mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Participating Countries" }]} />
          <h1 className="display mb-5 text-4xl sm:text-5xl">Participating Countries</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
            Eleven countries across Eastern, Central and Southern Africa take part in HEPRRP, supported by two regional
            coordinating institutions, IGAD and ECSA-HC. Select a country on the map to read about its participation.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white bg-opacity-10 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse bg-navy-light p-5">
                <dt className="mt-1 text-sm text-gray-400">{label}</dt>
                <dd className="text-3xl font-extrabold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <CountriesExplorer />
        </div>
      </section>
    </>
  );
}
