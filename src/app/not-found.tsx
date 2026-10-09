import { ButtonLink } from "@/shared/ui/site/button-link";
import { PageHero } from "@/shared/ui/site/page-hero";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="We couldn't find that page."
      sub="It may have moved, or the link may be wrong. Head back home or see what's new."
      actions={
        <>
          <ButtonLink href="/" variant="light" arrow>
            Go to the home page
          </ButtonLink>
          <ButtonLink href="/learn" variant="ghost">
            See what&apos;s new
          </ButtonLink>
        </>
      }
      className="min-h-[70vh]"
    />
  );
}
