import type { FeatureSlug } from "../catalog";
import type { FeatureContent } from "../ui/feature-page";
import { bookings, onlineStore, pos, sellAbroad } from "./sell";
import { invoices, orders, payments } from "./get-paid";
import { inventory, marketing, mobileApp, reports } from "./run";

export const featureContent: Record<FeatureSlug, FeatureContent> = {
  "online-store": onlineStore,
  pos,
  bookings,
  "sell-abroad": sellAbroad,
  payments,
  invoices,
  orders,
  inventory,
  marketing,
  reports,
  "mobile-app": mobileApp,
};
