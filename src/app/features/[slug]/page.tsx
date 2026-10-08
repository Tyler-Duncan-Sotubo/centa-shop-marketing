import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featureContent } from "@/features/feature-pages/content";
import { FeaturePage } from "@/features/feature-pages/ui/feature-page";

export function generateStaticParams() {
  return Object.keys(featureContent).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = featureContent[slug as keyof typeof featureContent];
  return content ? content.meta : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = featureContent[slug as keyof typeof featureContent];
  if (!content) notFound();
  return <FeaturePage content={content} />;
}
