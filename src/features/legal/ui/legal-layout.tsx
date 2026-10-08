import { PageHero } from "@/shared/ui/site/page-hero";
import { wrap } from "@/shared/ui/site/styles";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} sub={`Last updated ${updated}`} />

      <section className={`${wrap} py-16 md:py-24`}>
        <div className="prose prose-base mx-auto max-w-3xl md:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink prose-h2:mt-12 prose-h2:text-[22px] md:prose-h2:text-[26px] prose-p:text-copy prose-li:text-copy prose-a:text-primary prose-strong:text-ink">
          {children}
        </div>
      </section>
    </>
  );
}
