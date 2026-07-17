import type { LucideIcon } from "lucide-react";
import { FileText } from "lucide-react";

export type NavItem = {
  title: string;
  link: string;
  icon: LucideIcon;
  exact?: boolean;
};

// Small and flat by design — admin's own sidebar (admin/src/features/admin-nav)
// is config-driven with collapsible sections, badges, and plan/permission
// locking, none of which apply to this single-purpose internal tool. Add
// new items here as this content admin grows; reach for that richer
// pattern only if this ever needs real sections or per-item gating.
export const adminNavItems: NavItem[] = [
  { title: "Posts", link: "/admin/posts", icon: FileText },
];
