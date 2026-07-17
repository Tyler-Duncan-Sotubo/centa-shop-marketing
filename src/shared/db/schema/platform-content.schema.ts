import {
  pgTable,
  pgEnum,
  uuid,
  varchar,
  text,
  timestamp,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

/**
 * Mirrors backend/src/infrastructure/drizzle/schema/platform-content/platform-content.schema.ts
 * — the backend owns migrations for these tables (run via its Drizzle
 * config); this copy exists only so landing-app's Drizzle client can
 * build typed queries against the same DB. Keep both files in sync by
 * hand if the columns ever change.
 */

export const platformPostStatusEnum = pgEnum("platform_post_status", [
  "draft",
  "published",
]);

export const platformPostCategoryEnum = pgEnum("platform_post_category", [
  "how_to",
  "feature_update",
  "testimonial",
]);

export const adminUsers = pgTable(
  "admin_users",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    email: varchar("email", { length: 255 }).notNull(),
    passwordHash: varchar("password_hash", { length: 255 }).notNull(),
    name: varchar("name", { length: 160 }).notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [uniqueIndex("admin_users_email_uq").on(t.email)],
);

export const platformPosts = pgTable(
  "platform_posts",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    title: varchar("title", { length: 220 }).notNull(),
    slug: varchar("slug", { length: 240 }).notNull(),

    excerpt: varchar("excerpt", { length: 400 }),
    coverImageUrl: text("cover_image_url"),

    body: text("body").notNull(),

    category: platformPostCategoryEnum("category").notNull(),
    status: platformPostStatusEnum("status").notNull().default("draft"),
    publishedAt: timestamp("published_at", { withTimezone: true }),

    seoTitle: varchar("seo_title", { length: 70 }),
    seoDescription: varchar("seo_description", { length: 160 }),

    authorId: uuid("author_id")
      .notNull()
      .references(() => adminUsers.id, { onDelete: "restrict" }),

    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    uniqueIndex("platform_posts_slug_uq").on(t.slug),
    index("platform_posts_status_published_idx").on(t.status, t.publishedAt),
    index("platform_posts_category_idx").on(t.category, t.publishedAt),
    index("platform_posts_author_idx").on(t.authorId),
  ],
);

export const adminUsersRelations = relations(adminUsers, ({ many }) => ({
  posts: many(platformPosts),
}));

export const platformPostsRelations = relations(platformPosts, ({ one }) => ({
  author: one(adminUsers, {
    fields: [platformPosts.authorId],
    references: [adminUsers.id],
  }),
}));
