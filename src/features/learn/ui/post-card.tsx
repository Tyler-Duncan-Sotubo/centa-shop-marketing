import Link from "next/link";
import Image from "next/image";
import type { PublishedPost } from "@/shared/api/platform-post.type";

export function formatPostDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export function PostCard({
  post,
  excerpt = true,
}: {
  post: PublishedPost;
  excerpt?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-mist">
        {post.coverImageUrl && (
          <Image
            src={post.coverImageUrl}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 720px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            alt=""
            unoptimized
          />
        )}
      </div>
      {post.publishedAt && (
        <p className="mt-5 text-[13px] text-[#6b7280]">
          {formatPostDate(post.publishedAt)}
        </p>
      )}
      <h3 className="mt-2 text-[19px] leading-[1.3] font-bold tracking-[-0.015em] text-ink transition-colors group-hover:text-primary">
        {post.title}
      </h3>
      {excerpt && post.excerpt && (
        <p className="mt-2 text-[15px] leading-[1.6] text-copy">
          {truncate(post.excerpt, 140)}
        </p>
      )}
    </Link>
  );
}
