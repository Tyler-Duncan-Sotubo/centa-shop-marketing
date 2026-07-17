import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/shared/db/client";
import { platformPosts } from "@/shared/db/schema";
import { PostEditorForm } from "@/features/admin-posts/ui/post-editor-form";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await db.query.platformPosts.findFirst({
    where: eq(platformPosts.id, id),
  });

  if (!post) notFound();

  return <PostEditorForm post={post} />;
}
