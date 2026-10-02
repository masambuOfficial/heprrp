import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";
import SlideArt from "@/components/SlideArt";
import { ALL_ARTICLES, ARTICLES, NEWS_PAGE, formatDate, getArticle, listHref } from "@/data/articles";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article not found" };
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: { type: "article", title: a.title, description: a.excerpt, publishedTime: a.date, ...(a.image ? { images: [a.image] } : {}) },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const backHref = listHref(a);
  const more = ALL_ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="clear-logo mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: NEWS_PAGE.label, href: backHref }, { label: a.category }]} />
          <p className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="bg-brand px-2.5 py-1 font-semibold text-white">{a.category}</span>
            <time dateTime={a.date} className="text-gray-300">{formatDate(a.date)}</time>
            {a.author && <span className="text-gray-300">· {a.author}</span>}
          </p>
          <h1 className="display text-3xl leading-tight sm:text-5xl">{a.title}</h1>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href={backHref} className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline">
          <ChevronLeft size={16} /> Back to {NEWS_PAGE.label}
        </Link>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden bg-navy">
            {a.image ? (
              <Image src={a.image} alt={a.imageAlt ?? ""} fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
            ) : (
              <div className="absolute inset-0" aria-hidden="true">
                <SlideArt variant={a.art} />
              </div>
            )}
          </div>
          {a.imageCredit && <figcaption className="mt-2 text-xs text-muted">{a.imageCredit}</figcaption>}
        </figure>

        <p className="mb-8 text-xl font-medium leading-relaxed text-navy">{a.excerpt}</p>
        <div className="space-y-5 text-lg leading-relaxed text-ink">
          {a.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {a.source && (
          <p className="mt-10 text-sm text-muted">
            Originally published by{" "}
            <a href={a.source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-dark underline underline-offset-4">
              {a.source.name}
            </a>
            .
          </p>
        )}

        <div className="mt-12 border-t border-line pt-8">
          <Link href={backHref} className="btn-brand inline-flex items-center gap-1 px-5 py-3 font-semibold">
            <ChevronLeft size={18} /> Back to {NEWS_PAGE.label}
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="display mb-8 text-2xl text-navy">More from {NEWS_PAGE.label}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((x) => (
                <ArticleCard key={x.slug} article={x} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
