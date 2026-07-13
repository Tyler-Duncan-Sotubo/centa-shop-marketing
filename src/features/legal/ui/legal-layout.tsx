import { IconType } from "react-icons";
import PageHero from "@/shared/ui/page-hero";

export default function LegalLayout({
  icon,
  label,
  title,
  updated,
  children,
}: {
  icon: IconType;
  label: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero icon={icon} label={label} title={title}>
        <p className="text-slate-400 text-lg mt-4">Last updated: {updated}</p>
      </PageHero>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="max-w-5xl prose prose-base md:prose-lg prose-slate dark:prose-invert prose-headings:font-semibold prose-a:text-primary prose-p:my-4 prose-li:my-2 prose-h2:mt-8 prose-h2:text-xl md:prose-h2:text-2xl">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
