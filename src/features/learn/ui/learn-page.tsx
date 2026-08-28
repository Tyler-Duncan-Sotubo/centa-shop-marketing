import Link from "next/link";
import Image from "next/image";
import PageHero from "@/shared/ui/page-hero";
import ContactCta from "@/features/home/ui/contact-cta";
import { contentFetch } from "@/shared/api/content-client";
import type { PublishedPost } from "@/shared/api/platform-post.type";

type Post = PublishedPost;
type Category = Post["category"];

// No "how_to" section: those are product documentation and are served by the
// help centre, so the backend's default list does not return them.
const SECTIONS: { category: Category; title: string; subtitle: string }[] = [
  {
    category: "feature_update",
    title: "Feature Updates",
    subtitle: "What's new on the platform.",
  },
  {
    category: "testimonial",
    title: "Customer Stories",
    subtitle: "How other merchants are using SalesCenta.",
  },
];

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg overflow-hidden shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900"
    >
      {post.coverImageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImageUrl}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 ease-in-out group-hover:scale-110"
            alt={post.title}
            unoptimized
          />
        </div>
      )}
      <div className="p-6">
        <h5 className="text-lg font-medium group-hover:text-primary transition duration-500 ease-in-out">
          {post.title}
        </h5>
        {post.excerpt && (
          <p className="text-slate-400 mt-3">{truncate(post.excerpt, 120)}</p>
        )}
        {post.publishedAt && (
          <p className="text-slate-400 text-sm mt-3">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}
      </div>
    </Link>
  );
}

export default async function LearnPage() {
  // The backend serves only published posts, already ordered by publish date.
  //
  // No category param: the endpoint returns feature updates and testimonials.
  // How-tos are deliberately absent — they are product documentation and live
  // in the help centre, not on the marketing site.
  const { items: posts } = await contentFetch<{ items: Post[] }>(
    "content/platform-posts?limit=50",
  ).catch(() => ({ items: [] as Post[] }));

  const byCategory = SECTIONS.map((section) => ({
    ...section,
    posts: posts.filter((p) => p.category === section.category),
  })).filter((section) => section.posts.length > 0);

  return (
    <>
      <PageHero
        title="News from SalesCenta"
        subtext="The latest feature updates and real stories from merchants using SalesCenta. Looking for step-by-step help? Visit the help centre."
      />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          {byCategory.length === 0 ? (
            <p className="text-center text-slate-400">
              No posts published yet — check back soon.
            </p>
          ) : (
            <div className="flex flex-col gap-16">
              {byCategory.map((section) => (
                <div key={section.category}>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <p className="text-slate-400 mt-2">{section.subtitle}</p>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 mt-8">
                    {section.posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <ContactCta className="container relative md:mt-24 mt-16" />
      </section>
    </>
  );
}
