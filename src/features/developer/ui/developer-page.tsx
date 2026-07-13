import Link from "next/link";
import { HiOutlineCode, HiOutlineKey, HiOutlineLightningBolt } from "react-icons/hi";
import { IconType } from "react-icons";
import SectionBadge from "@/shared/ui/section-badge";
import PageHeroShell from "@/shared/ui/page-hero-shell";
import ContactCta from "@/features/home/ui/contact-cta";

interface Capability {
  icon: IconType;
  title: string;
  desc: string;
}

const capabilities: Capability[] = [
  {
    icon: HiOutlineKey,
    title: "API access with scoped keys",
    desc: "Generate API keys scoped to exactly what your integration needs, with sensible rate limits built in.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Real-time webhooks",
    desc: "Get notified the moment an order, payment, or inventory change happens — no polling required.",
  },
  {
    icon: HiOutlineCode,
    title: "Build on your storefront data",
    desc: "Pull products, orders, and customers into your own tools, or push updates back into your store.",
  },
];

const codeSample = `curl https://api.salescenta.com/v1/orders \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json"`;

export default function DeveloperPage() {
  return (
    <>
      <PageHeroShell>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-7.5 mt-10">
          <div>
            <SectionBadge icon={HiOutlineCode} label="Developer" align="left" />
            <h3 className="mt-2 md:text-4xl text-2xl md:leading-normal leading-normal font-bold text-black dark:text-white">
              Build on top of your store
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mt-4">
              A real API and webhooks, available on Pro and Enterprise
              plans — connect your own tools and workflows to your store
              data.
            </p>

            <div className="mt-6">
              <Link
                href="/page-pricing"
                className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-md"
              >
                See Pro plan
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-slate-900 p-6 shadow-lg overflow-x-auto">
            <pre className="text-sm text-emerald-400">
              <code>{codeSample}</code>
            </pre>
          </div>
        </div>
      </PageHeroShell>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              What you can build
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Everything your storefront can do, your own tools can do too.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 mt-4">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center"
                >
                  <div className="flex items-center justify-center size-18 mx-auto rounded-full bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="mt-6">
                    <span className="text-xl font-medium">{item.title}</span>
                    <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ContactCta className="container relative md:mt-24 mt-16" />
      </section>
    </>
  );
}
