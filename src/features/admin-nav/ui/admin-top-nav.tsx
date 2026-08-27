"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function AdminTopNav() {
  const { data: session } = useSession();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between gap-3 border-b border-border bg-card px-4 sm:px-6">
      <Link
        href="/admin/posts"
        className="flex items-center gap-2 font-semibold"
      >
        <Image
          src="/salescenta-logo.png"
          alt="SalesCenta"
          width={178}
          height={34}
          priority
        />
      </Link>

      <div className="flex items-center gap-3">
        {session?.user?.name && (
          <span className="text-sm text-muted-foreground">
            {session.user.name}
          </span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}
