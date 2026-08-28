/**
 * Shape returned by the backend's platform channel. Mirrors platform_posts,
 * whose schema is owned by backend/ — keep in sync when that table changes.
 */
export type PlatformPostHelpSection =
  | "getting_started"
  | "account"
  | "store_setup"
  | "products_inventory"
  | "orders_sales"
  | "payments_payouts"
  | "bookings"
  | "marketing_discounts"
  | "analytics_reports"
  | "team_permissions"
  | "settings_integrations";

export type PlatformPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImageUrl: string | null;
  body: string;
  category: "how_to" | "feature_update" | "testimonial";
  /** Help-centre placement; null for anything not filed under /help. */
  helpSection: PlatformPostHelpSection | null;
  helpOrder: number;
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

/**
 * A row of the /help index. The backend omits `body` here — the index only
 * lists articles, and shipping every article's HTML to render a list of links
 * would dominate the payload.
 */
export type HelpArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  helpSection: PlatformPostHelpSection;
  helpOrder: number;
  publishedAt: string | null;
  updatedAt: string;
};
