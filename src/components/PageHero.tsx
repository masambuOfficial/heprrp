import Breadcrumb, { type Crumb } from "@/components/Breadcrumb";

export default function PageHero({
  trail,
  title,
  intro,
  children,
}: {
  trail: Crumb[];
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="clear-logo mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <Breadcrumb trail={trail} />
        <h1 className="display mb-5 text-4xl sm:text-5xl">{title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-300">{intro}</p>
        {children}
      </div>
    </section>
  );
}
