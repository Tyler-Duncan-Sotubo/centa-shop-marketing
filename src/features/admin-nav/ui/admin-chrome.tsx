"use client";

import { usePathname } from "next/navigation";
import { AdminTopNav } from "./admin-top-nav";
import { AdminSidebar } from "./admin-sidebar";

const TOPBAR_HEIGHT = "3.5rem";

export function AdminChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <div className="min-h-screen bg-muted/30">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminTopNav />
      <AdminSidebar />
      <main className="md:pl-[210px]" style={{ paddingTop: TOPBAR_HEIGHT }}>
        {children}
      </main>
    </div>
  );
}
