"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavItems } from "../config/admin-nav.config";
import { cn } from "@/lib/utils";

const TOPBAR_HEIGHT = "3.5rem";

function isActive(pathname: string, link: string) {
  return pathname === link || pathname.startsWith(link + "/");
}

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed left-0 z-40 hidden w-[210px] flex-col overflow-y-auto border-r border-border bg-card p-2 md:flex"
      style={{
        top: TOPBAR_HEIGHT,
        height: `calc(100dvh - ${TOPBAR_HEIGHT})`,
      }}
    >
      <nav className="mt-2 flex-1 space-y-1">
        {adminNavItems.map((item) => {
          const active = isActive(pathname, item.link);
          const Icon = item.icon;

          return (
            <Link
              key={item.link}
              href={item.link}
              className={cn(
                "flex items-center gap-2 rounded px-2 py-[8px] text-[14px] font-semibold transition-colors",
                active
                  ? "text-primary font-extrabold"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              <Icon size={16} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
