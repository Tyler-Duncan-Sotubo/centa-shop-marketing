"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { deletePost } from "../actions/posts.actions";

export function DeletePostButton({ id }: { id: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <Button variant="destructive" onClick={() => setConfirming(true)}>
        Delete
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Are you sure?</span>
      <Button
        variant="destructive"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await deletePost(id);
            router.push("/admin/posts");
          })
        }
      >
        {isPending ? "Deleting…" : "Confirm delete"}
      </Button>
      <Button variant="ghost" onClick={() => setConfirming(false)}>
        Cancel
      </Button>
    </div>
  );
}
