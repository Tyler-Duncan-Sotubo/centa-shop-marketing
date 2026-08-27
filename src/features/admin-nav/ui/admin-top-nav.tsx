"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/announcements", label: "Announcements" },
];

export function AdminTopNav() {
  const { data: session } = useSession();
  const pathname = usePathname();

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

      <nav className="flex items-center gap-1">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm transition-colors",
              pathname?.startsWith(section.href)
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {section.label}
          </Link>
        ))}
      </nav>

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
