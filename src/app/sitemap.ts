import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import { COUNTRIES } from "@/data/countries";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/participating-countries` },
    { url: `${SITE_URL}/news` },
    ...ARTICLES.map((a) => ({ url: `${SITE_URL}/news/${a.slug}`, lastModified: a.date })),
    ...COUNTRIES.map((c) => ({ url: `${SITE_URL}/participating-countries/${c.slug}` })),
  ];
}
