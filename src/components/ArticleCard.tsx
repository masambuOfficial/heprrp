import Image from "next/image";
import Link from "next/link";
import SlideArt from "@/components/SlideArt";
import { articleHref, formatDate, type Article } from "@/data/articles";

/** A story card: image (or placeholder art), category, date, title and excerpt. */
export default function ArticleCard({ article: a }: { article: Article }) {
  return (
    <article className="group flex flex-col border border-line bg-white">
      <Link href={articleHref(a)} className="relative block aspect-[16/9] overflow-hidden bg-navy" tabIndex={-1} aria-hidden="true">
        {a.image ? (
          <Image src={a.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0">
            <SlideArt variant={a.art} />
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-3 flex flex-wrap items-center gap-3 text-xs">
          <span className="bg-brand-soft px-2 py-1 font-semibold text-brand-dark">{a.category}</span>
          <time dateTime={a.date} className="text-muted">{formatDate(a.date)}</time>
        </p>
        <h3 className="mb-3 text-lg font-bold leading-snug text-navy">
          <Link href={articleHref(a)} className="hover:text-brand-dark">{a.title}</Link>
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-muted">{a.excerpt}</p>
        <Link href={articleHref(a)} className="mt-auto text-sm font-semibold text-brand-dark hover:underline">
          Read more<span className="sr-only">: {a.title}</span> →
        </Link>
      </div>
    </article>
  );
}
