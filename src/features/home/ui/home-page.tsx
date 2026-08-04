"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import PaymentMethods from "./payment-methods";
import WebsitesGallery from "./websites-gallery";
import FeatureJourney from "./feature-journey";
import Integrations from "./integrations";
import Faq from "./faq";
import ContactCta from "./contact-cta";
import Testimonials from "./testimonials";

const heroTextVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <section className="relative table w-full py-20 lg:py-30 overflow-hidden">
        <div className="container relative">
          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center  gap-7.5">
            <div className="md:col-span-6">
              <motion.div
                className="md:me-6"
                initial="hidden"
                animate="visible"
                variants={heroTextVariants}
              >
                <h4 className="font-bold capitalize lg:leading-normal leading-normal text-5xl lg:text-6xl mb-5 text-black dark:text-white relative">
                  Built to grow with you, not{" "}
                  <span className="after:absolute after:inset-e-0 after:inset-s-0 after:bottom-3 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-primary/30 relative text-primary">
                    outgrow you
                  </span>
                </h4>
                <p className="text-slate-400 text-lg max-w-xl">
                  Website, POS, multi-location stock, wholesale quotes, staff
                  roles, invoices, and WhatsApp checkout — one platform that
                  works how Nigeria pays, from your first sale to your third
                  store.
                </p>

                <div className="relative mt-8">
                  <Link
                    href="https://app.salescenta.com/signup"
                    className="py-4 px-5 mr-4 inline-block font-semibold tracking-wide border align-middle text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-xl me-2 hover:scale-105 transition-transform duration-300"
                  >
                    Start your free trial{" "}
                    <FaArrowRight className="inline-block ml-2" />
                  </Link>
                  <Link
                    href="/page-pricing"
                    className="py-4 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-white hover:bg-primary/5 border-gray-200 dark:border-gray-800 dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-xl"
                  >
                    See pricing
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-6">
              <motion.div
                className="relative"
                initial="hidden"
                animate="visible"
                variants={heroImageVariants}
              >
                <div
                  className="absolute -inset-4 md:-inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl -z-1"
                  aria-hidden
                />
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 shadow-2xl shadow-primary/10 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="size-2.5 rounded-full bg-red-400/70" />
                    <span className="size-2.5 rounded-full bg-amber-400/70" />
                    <span className="size-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <Image
                    src="/images/saas/home-stat.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="block"
                    alt="SalesCenta dashboard showing sales across walk-in, online, and POS channels"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            <div className="overflow-hidden after:content-[''] after:absolute after:size-32 after:bg-primary/5 after:top-16 after:inset-s-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container relative">
          <PaymentMethods />
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-5xl text-3xl leading-tight font-bold max-w-2xl mx-auto">
              Real stores, running on SalesCenta right now
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              From boutique retailers to wholesale suppliers — a few of the
              businesses already selling with us, live today.
            </p>
          </div>

          <WebsitesGallery limit={3} />

          <div className="text-center mt-8">
            <Link
              href="/showcase"
              className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
            >
              See all stores{" "}
              <MdKeyboardArrowRight className="text-xl ms-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative pt-16 pb-4 md:pt-28" id="features">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-4 text-center">
            <h3 className="mb-4 md:text-6xl text-4xl leading-tight font-bold max-w-3xl mx-auto">
              One system, every part of the business
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Sales, finance, stock, marketing, and your storefront don&apos;t
              live in nine separate apps here — they&apos;re one connected
              system. Follow the thread down to see how it fits together.
            </p>
          </div>
        </div>
      </section>

      <FeatureJourney />

      <section className="relative md:py-24 py-16">
        <Integrations />
      </section>

      {/* <section className="relative md:py-24 py-16">
        <Testimonials />
      </section> */}

      <section className="relative md:py-24 py-16 md:pt-0 pt-0">
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid grid-cols-1 md:text-start text-center justify-center">
                <div className="relative">
                  <Image
                    src="/images/saas/home1.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                  />
                </div>
              </div>

              <div className="content md:mt-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                  <div className="lg:col-start-2 lg:col-span-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <h6 className="text-white/50 text-lg font-semibold">
                            Free trial
                          </h6>
                          <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                            Get your store live <br /> with SalesCenta
                          </h3>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <p className="text-white/50 max-w-xl mx-auto mb-2">
                            Products, payments, and WhatsApp — set up and ready,
                            so you can start taking orders.
                          </p>
                          <Link
                            href="/page-pricing"
                            className="text-white inline-flex items-center"
                          >
                            See pricing{" "}
                            <MdKeyboardArrowRight className="text-xl ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-s-0 inset-e-0 sm:h-2/3 h-4/5 bg-linear-to-b from-primary-500 to-primary"></div>
      </section>

      <section className="relative md:py-24 py-16" id="faq">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-5xl text-3xl leading-tight font-bold max-w-2xl mx-auto">
              Questions merchants actually ask us
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Everything you need to know before you get started —
              pricing, setup, WhatsApp checkout, and what happens after
              your free trial.
            </p>
          </div>

          <div className="relative grid md:grid-cols-12 grid-cols-1 items-stretch mt-8 gap-7.5">
            <div className="md:col-span-6">
              <div className="relative h-full min-h-100 md:min-h-150">
                <Image
                  src="/illustrations/sitting-reading.svg"
                  fill
                  className="object-contain"
                  alt="Illustration of a person reading"
                />
              </div>
            </div>

            <Faq />
          </div>
        </div>

        <ContactCta className="container relative md:mt-24 mt-16" />
      </section>
    </>
  );
}
