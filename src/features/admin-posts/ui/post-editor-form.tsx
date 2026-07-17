"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TiptapEditor } from "@/components/ui/tiptap-editor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createPost, updatePost } from "../actions/posts.actions";
import { DeletePostButton } from "./delete-post-button";
import { CoverImageField } from "./cover-image-field";
import { uploadImage } from "../lib/upload-image";

type Category = "how_to" | "feature_update" | "testimonial";
type Status = "draft" | "published";

type PostEditorFormProps = {
  post?: {
    id: string;
    title: string;
    excerpt: string | null;
    coverImageUrl: string | null;
    body: string;
    category: Category;
    status: Status;
    seoTitle: string | null;
    seoDescription: string | null;
  };
};

const CATEGORY_OPTIONS: { value: Category; label: string }[] = [
  { value: "how_to", label: "How-to" },
  { value: "feature_update", label: "Feature update" },
  { value: "testimonial", label: "Testimonial" },
];

const STATUS_OPTIONS: { value: Status; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-semibold">{children}</h2>;
}

export function PostEditorForm({ post }: PostEditorFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<Category>(post?.category ?? "how_to");
  const [status, setStatus] = useState<Status>(post?.status ?? "draft");
  const [body, setBody] = useState(post?.body ?? "");

  const handleSubmit = (formData: FormData) => {
    formData.set("category", category);
    formData.set("status", status);
    formData.set("body", body);
    setError(null);

    startTransition(async () => {
      try {
        if (post) {
          await updatePost(post.id, formData);
          router.push("/admin/posts");
        } else {
          await createPost(formData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    });
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-5 px-6 py-8">
      <Link
        href="/admin/posts"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} />
        All posts
      </Link>

      <h1 className="text-xl font-semibold">
        {post ? "Edit post" : "New post"}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* LEFT */}
        <div className="flex flex-col gap-6 lg:col-span-8">
          <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
            <SectionHeading>Basic information</SectionHeading>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={post?.title} required />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Body</Label>
            <TiptapEditor
              value={body}
              onChange={setBody}
              placeholder="Write the post…"
              onUploadImage={uploadImage}
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
            <SectionHeading>Publishing</SectionHeading>

            <div className="flex flex-col gap-1.5">
              <Label>Category</Label>
              <Select
                items={CATEGORY_OPTIONS}
                value={category}
                onValueChange={(v) => setCategory(v as Category)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORY_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Status</Label>
              <Select
                items={STATUS_OPTIONS}
                value={status}
                onValueChange={(v) => setStatus(v as Status)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              defaultValue={post?.excerpt ?? ""}
              rows={4}
            />
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
            <SectionHeading>Cover image</SectionHeading>
            <CoverImageField defaultValue={post?.coverImageUrl} />
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
            <SectionHeading>SEO</SectionHeading>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="seoTitle">SEO title</Label>
              <Input
                id="seoTitle"
                name="seoTitle"
                defaultValue={post?.seoTitle ?? ""}
                maxLength={70}
                placeholder="Defaults to the post title"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="seoDescription">SEO description</Label>
              <Textarea
                id="seoDescription"
                name="seoDescription"
                defaultValue={post?.seoDescription ?? ""}
                maxLength={160}
                rows={3}
                placeholder="Defaults to the excerpt"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving…" : post ? "Save changes" : "Create post"}
        </Button>
        {post && <DeletePostButton id={post.id} />}
      </div>
    </form>
  );
}
