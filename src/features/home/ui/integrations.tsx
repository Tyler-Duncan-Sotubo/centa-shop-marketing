import Link from "next/link";
import Image from "next/image";
import { SiGoogleanalytics, SiMeta, SiZoho, SiTiktok, SiPinterest } from "react-icons/si";
import { IconType } from "react-icons";
import { HiLightningBolt } from "react-icons/hi";
import SectionBadge from "@/shared/ui/section-badge";

interface IntegrationNode {
  label: string;
  icon?: IconType;
  image?: string;
  brandColor: string;
  /** Position, as a percentage offset from center. */
  x: number;
  y: number;
  /** Float animation duration, seconds. */
  duration: number;
  /** Float animation delay, seconds — staggers the motion. */
  delay: number;
  /** Not live yet — shown with a "Soon" badge instead of as a working integration. */
  comingSoon?: boolean;
}

const integrations: IntegrationNode[] = [
  {
    label: "Paystack",
    image: "/images/payments/paystack.png",
    brandColor: "#00c3f7",
    x: -46,
    y: 12,
    duration: 5,
    delay: 0,
  },
  {
    label: "Stripe",
    image: "/images/payments/stripe.png",
    brandColor: "#635bff",
    x: -32,
    y: -20,
    duration: 6,
    delay: 0.4,
    comingSoon: true,
  },
  {
    label: "Fincra",
    image: "/images/payments/fincra.png",
    brandColor: "#7c3aed",
    x: -16,
    y: 16,
    duration: 5.5,
    delay: 0.8,
    comingSoon: true,
  },
  {
    label: "Google Analytics",
    icon: SiGoogleanalytics,
    brandColor: "#e37400",
    x: 0,
    y: -20,
    duration: 6.5,
    delay: 0.2,
  },
  {
    label: "Meta Pixel",
    icon: SiMeta,
    brandColor: "#0866ff",
    x: 16,
    y: 16,
    duration: 5,
    delay: 0.6,
  },
  {
    label: "TikTok Pixel",
    icon: SiTiktok,
    brandColor: "#000000",
    x: 32,
    y: -20,
    duration: 5.8,
    delay: 1.2,
  },
  {
    label: "Pinterest Tag",
    icon: SiPinterest,
    brandColor: "#e60023",
    x: 46,
    y: 12,
    duration: 6.2,
    delay: 0.9,
  },
  {
    label: "Zoho",
    icon: SiZoho,
    brandColor: "#e42527",
    x: 0,
    y: 34,
    duration: 6,
    delay: 1,
  },
];

export default function Integrations() {
  return (
    <div className="container relative">
      <div className="grid grid-cols-1 text-center pb-8">
        <SectionBadge icon={HiLightningBolt} label="Integrations" />
        <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Connects with what you already use
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Payments, analytics, and accounting — wired in, not bolted on.
        </p>

        <div className="mt-6">
          <Link
            href="https://app.salescenta.com/signup"
            className="mx-auto py-4 px-10 inline-flex items-center font-semibold tracking-wide align-middle duration-500 text-base text-center bg-primary hover:bg-primary-dark dark:bg-white dark:hover:bg-gray-200 text-white dark:text-slate-900 rounded-xl"
          >
            Get started
          </Link>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl h-56 md:h-72">
        {integrations.map((item) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={item.label}
              className="absolute size-20 md:size-24 rounded-full bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 flex items-center justify-center animate-float"
              style={{
                left: `calc(50% + ${item.x}%)`,
                top: `calc(50% + ${item.y}%)`,
                animationDuration: `${item.duration}s`,
                animationDelay: `${item.delay}s`,
              }}
              title={item.comingSoon ? `${item.label} — coming soon` : item.label}
            >
              {item.comingSoon && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Soon
                </span>
              )}
              {item.image ? (
                <Image
                  src={item.image}
                  width={56}
                  height={56}
                  className="size-11 md:size-12 object-contain"
                  alt={item.label}
                />
              ) : ItemIcon ? (
                <ItemIcon
                  className="size-10 md:size-11"
                  style={{ color: item.brandColor }}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
