import Link from "next/link";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import PageHero from "@/shared/ui/page-hero";
import ContactCta from "@/features/home/ui/contact-cta";
import WhyChooseUs from "./why-choose-us";

export default function AboutPage() {
  return (
    <>
      <PageHero
        icon={HiOutlineHeart}
        label="About"
        title={
          <>
            Our business is making <br /> yours a success.
          </>
        }
        subtext="We built SalesCenta to help Nigerian merchants start, manage, and grow a real business — without forcing them into tools built for a market that isn't theirs, and without forcing them to switch platforms the moment they open a second store or take their first wholesale order."
        align="left"
      />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-7.5">
            <div className="md:order-1 order-2">
              <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Why we exist
              </h3>
              <p className="text-slate-400">
                Most commerce platforms are built for a market that isn&apos;t
                ours. They&apos;re designed around card payments and foreign
                currencies first, with WhatsApp and bank transfer bolted on as
                an afterthought, if at all.
              </p>
              <p className="text-slate-400 mt-4">
                Most Nigerian merchants already sell on WhatsApp and get paid by
                bank transfer. So SalesCenta was built the other way round:
                WhatsApp checkout, bank transfer, and Naira pricing from day one
                — with a real storefront, multi-location inventory, POS, and
                wholesale quoting behind it, not a workaround bolted on later.
              </p>
              <p className="text-slate-400 mt-4">
                That means no fighting a platform that wasn&apos;t built for how
                you actually sell, no converting currencies you don&apos;t use,
                and no outgrowing the tool the moment you open a second store
                or land a bulk order. It&apos;s the actual product, built for
                the way business already happens here — and for the size it
                grows into.
              </p>
              <p className="text-slate-400 mt-4">
                It&apos;s built and run by TXD Agency, based in Croydon, UK.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact-one"
                  className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-md"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="relative md:order-2 order-1">
              <Image
                src="/illustrations/loving.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Illustration representing care and connection"
              />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <ContactCta className="container relative md:mt-24 mt-16 md:pb-24 pb-16" />
    </>
  );
}
