"use client";

import { useEffect, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLE_TABS, type Article, type ArticleType } from "@/data/articles";

/** News and Blogs as two tabs. Each article appears under the tab matching its `type`. */
export default function NewsTabs({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState<ArticleType>("news");

  // Open the tab named in the link, e.g. /news#blogs
  useEffect(() => {
    const fromHash = () => {
      const tab = ARTICLE_TABS.find((t) => t.hash === window.location.hash.slice(1));
      if (tab) setActive(tab.type);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const choose = (type: ArticleType, hash: string) => {
    setActive(type);
    window.history.replaceState(null, "", `#${hash}`);
  };

  const shown = articles.filter((a) => a.type === active);
  const tab = ARTICLE_TABS.find((t) => t.type === active)!;

  return (
    <>
      <div role="tablist" aria-label="News and blogs" className="mb-10 inline-flex rounded border border-line bg-white p-1">
        {ARTICLE_TABS.map((t) => {
          const count = articles.filter((a) => a.type === t.type).length;
          return (
            <button
              key={t.type}
              role="tab"
              id={`tab-${t.type}`}
              aria-selected={active === t.type}
              aria-controls="articles-panel"
              onClick={() => choose(t.type, t.hash)}
              className={`whitespace-nowrap rounded px-5 py-2 text-sm font-semibold ${
                active === t.type ? "bg-navy text-white" : "text-muted hover:text-navy"
              }`}
            >
              {t.label} <span className="ml-1 opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div id="articles-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        {shown.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="rounded border border-line bg-white p-8 text-muted">{tab.empty}</p>
        )}
      </div>
    </>
  );
}
