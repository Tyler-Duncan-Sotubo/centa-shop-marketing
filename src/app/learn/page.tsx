import type { Metadata } from "next";
import LearnPage from "@/features/learn/ui/learn-page";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Feature updates and merchant stories from SalesCenta.",
};

export default function Page() {
  return <LearnPage />;
}
