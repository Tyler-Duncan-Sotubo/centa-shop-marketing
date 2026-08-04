import PageHero from "@/shared/ui/page-hero";
import ContactCta from "@/features/home/ui/contact-cta";
import WebsitesGallery from "@/features/home/ui/websites-gallery";

export default function ShowcasePage() {
  return (
    <>
      <PageHero
        title="Real stores, built on SalesCenta"
        subtext="A look at the storefronts already selling with us — real merchants using WhatsApp checkout, bank transfer, and a branded storefront to run their business. Browse a few of them below to see what's possible when you launch on SalesCenta."
        align="left"
      />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <WebsitesGallery />
        </div>

        <ContactCta className="container relative md:mt-24 mt-16" />
      </section>
    </>
  );
}
