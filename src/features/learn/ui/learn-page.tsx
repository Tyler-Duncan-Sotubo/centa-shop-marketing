import { HELP_URL } from "@/shared/config/site";
import { contentFetch } from "@/shared/api/content-client";
import type { PublishedPost } from "@/shared/api/platform-post.type";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { PageHero } from "@/shared/ui/site/page-hero";
import { body, label, section, wrap } from "@/shared/ui/site/styles";
import { PostCard } from "./post-card";

type Post = PublishedPost;
type Category = Post["category"];

// No "how_to" section: those are product documentation and are served by the
// help centre, so the backend's default list does not return them.
const SECTIONS: { category: Category; title: string }[] = [
  { category: "feature_update", title: "Feature updates" },
  { category: "testimonial", title: "Merchant stories" },
];

export default async function LearnPage() {
  // The backend serves only published posts, already ordered by publish date.
  //
  // No category param: the endpoint returns feature updates and testimonials.
  // How-tos are deliberately absent — they are product documentation and live
  // in the help centre, not on the marketing site.
  const { items: posts } = await contentFetch<{ items: Post[] }>(
    "content/platform-posts?limit=50",
  ).catch(() => ({ items: [] as Post[] }));

  const byCategory = SECTIONS.map((s) => ({
    ...s,
    posts: posts.filter((p) => p.category === s.category),
  })).filter((s) => s.posts.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="News from SalesCenta."
        sub="The latest feature updates and stories from merchants selling with SalesCenta. Looking for step-by-step help? The help centre has a guide for every screen."
        actions={
          <ButtonLink href={HELP_URL} variant="ghost" arrow>
            Visit the help centre
          </ButtonLink>
        }
      />

      <section className={`${wrap} ${section}`}>
        {byCategory.length === 0 ? (
          <p className={`${body} text-center`}>
            No posts published yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-20">
            {byCategory.map((s) => (
              <div key={s.category}>
                <p className={`${label} border-b border-line pb-4 text-primary`}>
                  {s.title}
                </p>
                <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                  {s.posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <ClosingCta />
    </>
  );
}
