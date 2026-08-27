import { notFound } from "next/navigation";
import { getPost } from "@/features/admin-posts/actions/posts.actions";
import { PostEditorForm } from "@/features/admin-posts/ui/post-editor-form";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id).catch(() => null);

  if (!post) notFound();

  return <PostEditorForm post={post} />;
}
