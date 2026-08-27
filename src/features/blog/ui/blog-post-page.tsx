import { cache } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { contentFetch } from "@/shared/api/content-client";
import type { PublishedPost } from "@/shared/api/platform-post.type";

type Post = PublishedPost;
type Category = Post["category"];

const CATEGORY_META: Record<Category, { label: string; badgeClass: string }> = {
  how_to: {
    label: "Guides",
    badgeClass: "bg-primary/10 text-primary",
  },
  feature_update: {
    label: "Feature Update",
    badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  testimonial: {
    label: "Customer Story",
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
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

// Dates arrive as ISO strings from the API rather than Date objects, which
// is what they were when this page queried the database directly.
function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function CategoryBadge({ category }: { category: Category }) {
  const meta = CATEGORY_META[category];
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${meta.badgeClass}`}
    >
      {meta.label}
    </span>
  );
}

function RelatedPostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10 dark:bg-slate-900 dark:ring-white/10"
    >
      {post.coverImageUrl && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={post.coverImageUrl}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
            alt={post.title}
            unoptimized
          />
        </div>
      )}
      <div className="p-5">
        <h6 className="text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
          {post.title}
        </h6>
        {post.publishedAt && (
          <p className="mt-2 text-sm text-slate-400">
            {formatDate(post.publishedAt)}
          </p>
        )}
      </div>
    </Link>
  );
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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {post.coverImageUrl && (
        <div className="mt-16 relative h-72 w-full overflow-hidden md:h-104">
          <Image
            src={post.coverImageUrl}
            fill
            sizes="100vw"
            className="object-cover object-center"
            alt={post.title}
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      )}

      <div className="container relative">
        <div className="mx-auto max-w-3xl py-10 md:py-16">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-primary"
          >
            <ArrowLeft size={14} />
            Back to Learn
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CategoryBadge category={post.category} />
            <span className="text-sm text-slate-400">
              {readingMinutes} min read
            </span>
            {post.publishedAt && (
              <span className="text-sm text-slate-400">
                {formatDate(post.publishedAt)}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div
            className="prose prose-lg prose-neutral mt-10 max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-5xl border-t border-black/5 py-16 dark:border-white/10">
            <h2 className="text-2xl font-semibold">
              More from {CATEGORY_META[post.category].label}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <RelatedPostCard key={related.id} post={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
