import {
  BookOpen,
  Code,
  Info,
  Mail,
  Newspaper,
  Rocket,
  Store,
  type LucideIcon,
} from "lucide-react";
import { HELP_URL } from "./site";

export interface MenuLink {
  name: string;
  blurb: string;
  href: string;
  icon: LucideIcon;
}

export const resourcesMenu: MenuLink[] = [
  { name: "Help centre", blurb: "Step-by-step guides for every screen", href: HELP_URL, icon: BookOpen },
  { name: "Getting started", blurb: "Set up your store, start to finish", href: `${HELP_URL}getting-started`, icon: Rocket },
  { name: "Learn", blurb: "Feature updates and merchant stories", href: "/learn", icon: Newspaper },
  { name: "Developers", blurb: "Build on the Partner API", href: "/developer", icon: Code },
];

export const companyMenu: MenuLink[] = [
  { name: "About", blurb: "Why we built SalesCenta", href: "/page-aboutus", icon: Info },
  { name: "Showcase", blurb: "Stores selling on SalesCenta", href: "/showcase", icon: Store },
  { name: "Contact", blurb: "Talk to the team", href: "/contact-one", icon: Mail },
];
