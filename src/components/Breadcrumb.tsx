import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((t, i) => (
          <li key={t.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} className="text-gray-500" />}
            {t.href ? (
              <Link href={t.href} className="underline-offset-4 hover:text-white hover:underline">{t.label}</Link>
            ) : (
              <span className="text-white" aria-current="page">{t.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
