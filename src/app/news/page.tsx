import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import NewsTabs from "@/components/NewsTabs";
import { ALL_ARTICLES, NEWS_PAGE } from "@/data/articles";

export const metadata: Metadata = {
  title: NEWS_PAGE.label,
  description: "Program announcements, stories and perspectives from HEPRRP and its partners.",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="clear-logo mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: NEWS_PAGE.label }]} />
          <h1 className="display mb-5 text-4xl sm:text-5xl">{NEWS_PAGE.label}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
            Program announcements, stories from the countries and perspectives from partners and experts.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <NewsTabs articles={ALL_ARTICLES} />
        </div>
      </section>
    </>
  );
}
