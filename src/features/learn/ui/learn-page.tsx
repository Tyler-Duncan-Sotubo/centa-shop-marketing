import Link from "next/link";
import Image from "next/image";
import { and, desc, eq, sql } from "drizzle-orm";
import { HiOutlineBookOpen } from "react-icons/hi";
import PageHero from "@/shared/ui/page-hero";
import ContactCta from "@/features/home/ui/contact-cta";
import { db } from "@/shared/db/client";
import { platformPosts, platformPostCategoryEnum } from "@/shared/db/schema";

type Post = typeof platformPosts.$inferSelect;
type Category = (typeof platformPostCategoryEnum.enumValues)[number];

const PUBLISHED_WHERE = and(
  eq(platformPosts.status, "published"),
  sql`${platformPosts.publishedAt} IS NOT NULL`,
  sql`${platformPosts.publishedAt} <= now()`,
);

const SECTIONS: { category: Category; title: string; subtitle: string }[] = [
  {
    category: "how_to",
    title: "Guides",
    subtitle: "Practical how-tos for selling, payments, and running your store.",
  },
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
            {post.publishedAt.toLocaleDateString("en-GB", {
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
  const posts = await db
    .select()
    .from(platformPosts)
    .where(PUBLISHED_WHERE)
    .orderBy(desc(platformPosts.publishedAt));

  const byCategory = SECTIONS.map((section) => ({
    ...section,
    posts: posts.filter((p) => p.category === section.category),
  })).filter((section) => section.posts.length > 0);

  return (
    <>
      <PageHero
        icon={HiOutlineBookOpen}
        label="Learn"
        title="Guides for growing your store"
        subtext="Practical advice on selling, payments, and running your business online — plus the latest feature updates and real stories from merchants using SalesCenta."
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
