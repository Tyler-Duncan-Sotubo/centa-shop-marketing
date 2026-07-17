import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/shared/db/client";
import { platformPosts } from "@/shared/db/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export async function PostsList() {
  const posts = await db
    .select()
    .from(platformPosts)
    .orderBy(desc(platformPosts.createdAt));

  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Platform posts</h1>
        <Button nativeButton={false} render={<Link href="/admin/posts/new" />}>
          New post
        </Button>
      </div>

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">No posts yet.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="font-medium hover:underline"
                  >
                    {post.title}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {post.category.replace("_", " ")}
                </TableCell>
                <TableCell>
                  <Badge variant={post.status === "published" ? "default" : "secondary"}>
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {post.updatedAt.toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
