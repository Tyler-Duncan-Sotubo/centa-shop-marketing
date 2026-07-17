"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/shared/db/client";
import { platformPosts } from "@/shared/db/schema";
import { getServerAuthSession } from "@/shared/auth/auth-options";

type Category = "how_to" | "feature_update" | "testimonial";
type Status = "draft" | "published";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function requireSession() {
  const session = await getServerAuthSession();
  if (!session?.user?.id) throw new Error("Unauthorized");
  return session;
}

export async function createPost(formData: FormData) {
  const session = await requireSession();

  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim() || null;
  const coverImageUrl = String(formData.get("coverImageUrl") ?? "").trim() || null;
  const body = String(formData.get("body") ?? "").trim();
  const category = String(formData.get("category")) as Category;
  const status = String(formData.get("status")) as Status;
  const seoTitle = String(formData.get("seoTitle") ?? "").trim() || null;
  const seoDescription =
    String(formData.get("seoDescription") ?? "").trim() || null;

  if (!title || !body) throw new Error("Title and body are required");

  await db.insert(platformPosts).values({
    title,
    slug: `${slugify(title)}-${Date.now().toString(36)}`,
    excerpt,
    coverImageUrl,
    body,
    category,
    status,
    seoTitle,
    seoDescription,
    publishedAt: status === "published" ? new Date() : null,
    authorId: session.user.id,
  });

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export async function updatePost(id: string, formData: FormData) {
  await requireSession();

  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim() || null;
  const coverImageUrl = String(formData.get("coverImageUrl") ?? "").trim() || null;
  const body = String(formData.get("body") ?? "").trim();
  const category = String(formData.get("category")) as Category;
  const status = String(formData.get("status")) as Status;
  const seoTitle = String(formData.get("seoTitle") ?? "").trim() || null;
  const seoDescription =
    String(formData.get("seoDescription") ?? "").trim() || null;

  if (!title || !body) throw new Error("Title and body are required");

  const existing = await db.query.platformPosts.findFirst({
    where: eq(platformPosts.id, id),
  });
  if (!existing) throw new Error("Post not found");

  const nowPublishing = status === "published" && existing.status !== "published";

  await db
    .update(platformPosts)
    .set({
      title,
      excerpt,
      coverImageUrl,
      body,
      category,
      status,
      seoTitle,
      seoDescription,
      publishedAt: nowPublishing ? new Date() : existing.publishedAt,
      updatedAt: new Date(),
    })
    .where(eq(platformPosts.id, id));

  revalidatePath("/admin/posts");
  revalidatePath(`/admin/posts/${id}`);
}

export async function deletePost(id: string) {
  await requireSession();

  await db.delete(platformPosts).where(eq(platformPosts.id, id));

  revalidatePath("/admin/posts");
}
