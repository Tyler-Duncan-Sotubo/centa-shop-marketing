import { cache } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { contentFetch } from "@/shared/api/content-client";
import type { PublishedPost } from "@/shared/api/platform-post.type";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { Glow, GridTexture } from "@/shared/ui/site/glow";
import { label, wrap } from "@/shared/ui/site/styles";
import { formatPostDate, PostCard } from "@/features/learn/ui/post-card";

type Post = PublishedPost;
type Category = Post["category"];

const CATEGORY_LABEL: Record<Category, string> = {
  how_to: "Guide",
  feature_update: "Feature update",
  testimonial: "Merchant story",
};

const SITE_URL = "https://salescenta.com";

// Wrapped in React's cache() so generateMetadata and the page body
// share one query per request instead of hitting the DB twice.
export const getPublishedPostBySlug = cache(async (slug: string) => {
  // The backend only ever serves published posts here, so the published
  // filtering that used to live in this file is gone rather than duplicated.
  return contentFetch<Post | null>(`content/platform-posts/${slug}`).catch(
    () => null,
  );
});

function estimateReadingMinutes(html: string) {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function BlogPostPage({ slug }: { slug: string }) {
  const post = await getPublishedPostBySlug(slug);

  if (!post) notFound();

  // The public list endpoint can filter by category but not exclude the post
  // being viewed, so ask for one extra and drop it here.
  const related = await contentFetch<{ items: Post[] }>(
    `content/platform-posts?category=${post.category}&limit=4`,
  ).catch(() => ({ items: [] as Post[] }));
  const relatedPosts = related.items
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  const readingMinutes = estimateReadingMinutes(post.body);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt || undefined,
    image: post.coverImageUrl || undefined,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? post.publishedAt ?? undefined,
    author: {
      "@type": "Person",
      name: post.author?.name ?? "SalesCenta",
    },
    publisher: {
      "@type": "Organization",
      name: "SalesCenta",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/salescenta-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="relative overflow-hidden bg-navy text-white">
        <Glow />
        <GridTexture />
        {post.coverImageUrl && (
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-white md:h-56" />
        )}
        <div className={`${wrap} relative pt-32 md:pt-40 ${post.coverImageUrl ? "" : "pb-20 md:pb-28"}`}>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 text-[14px] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              Learn
            </Link>
            <p className={`${label} mt-8 text-sky`}>{CATEGORY_LABEL[post.category]}</p>
            <h1 className="mt-4 text-balance text-[34px] leading-[1.1] font-bold tracking-[-0.035em] md:text-[52px]">
              {post.title}
            </h1>
            <p className="mt-6 text-[14px] text-white/55">
              {post.publishedAt && <>{formatPostDate(post.publishedAt)} · </>}
              {readingMinutes} min read
            </p>
          </div>
          {post.coverImageUrl && (
            <div className="relative mx-auto mt-12 aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl ring-1 ring-white/10 md:mt-16">
              <Image
                src={post.coverImageUrl}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                alt=""
                unoptimized
                priority
              />
            </div>
          )}
        </div>
      </header>

      <div className={`${wrap} py-16 md:py-20`}>
        <div
          className="prose prose-lg mx-auto max-w-3xl prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink prose-p:text-copy prose-li:text-copy prose-a:text-primary prose-strong:text-ink prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>

      {relatedPosts.length > 0 && (
        <section className="border-t border-line">
          <div className={`${wrap} py-20 md:py-24`}>
            <p className={`${label} text-primary`}>
              More {CATEGORY_LABEL[post.category].toLowerCase()}s
            </p>
            <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
              {relatedPosts.map((p) => (
                <PostCard key={p.id} post={p} excerpt={false} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCta />
    </article>
  );
}
