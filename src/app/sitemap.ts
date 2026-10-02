import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import { COMMUNITIES } from "@/data/communities";
import { COUNTRIES } from "@/data/countries";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/participating-countries` },
    { url: `${SITE_URL}/about/igad` },
    { url: `${SITE_URL}/about/components` },
    { url: `${SITE_URL}/communities` },
    ...COMMUNITIES.map((c) => ({ url: `${SITE_URL}/communities/${c.slug}` })),
    { url: `${SITE_URL}/news` },
    ...ARTICLES.map((a) => ({ url: `${SITE_URL}/news/${a.slug}`, lastModified: a.date })),
    ...COUNTRIES.map((c) => ({ url: `${SITE_URL}/participating-countries/${c.slug}` })),
  ];
}
