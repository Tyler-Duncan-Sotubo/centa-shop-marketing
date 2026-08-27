/**
 * Shape returned by the backend's platform channel. Mirrors platform_posts,
 * whose schema is owned by backend/ — keep in sync when that table changes.
 */
export type PlatformPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImageUrl: string | null;
  body: string;
  category: "how_to" | "feature_update" | "testimonial";
  status: "draft" | "published";
  publishedAt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};

/**
 * A published post as served by the public `content` channel. Dates are ISO
 * strings here, not Date objects — they cross an HTTP boundary.
 */
export type PublishedPost = PlatformPost & {
  author?: { id?: string; name: string } | null;
};
