import { SessionProvider } from "@/shared/auth/session-provider";
import { AdminChrome } from "@/features/admin-nav/ui/admin-chrome";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AdminChrome>{children}</AdminChrome>
    </SessionProvider>
  );
}
