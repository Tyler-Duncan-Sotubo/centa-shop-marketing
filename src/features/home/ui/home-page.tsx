"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

import SectionBadge from "@/shared/ui/section-badge";
import PaymentMethods from "./payment-methods";
import WebsitesGallery from "./websites-gallery";
import FeaturesGrid from "./features-grid";
import Integrations from "./integrations";
import Faq from "./faq";
import ContactCta from "./contact-cta";
import Testimonials from "./testimonials";

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
              <div className="md:me-6" data-aos="fade-up">
                <h4 className="font-bold capitalize lg:leading-normal leading-normal text-5xl lg:text-6xl mb-5 text-black dark:text-white relative">
                  Sell the way your customers already{" "}
                  <span className="after:absolute after:inset-e-0 after:inset-s-0 after:bottom-3 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-primary/30 relative text-primary">
                    buy
                  </span>
                </h4>
                <p className="text-slate-400 text-lg max-w-xl">
                  Everything your shop needs — website, POS, stock, invoices,
                  marketing — in one app that works how Nigeria pays. No
                  computer needed.
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
              </div>
            </div>

            <div className="md:col-span-6">
              <div
                className="relative after:content-[''] after:absolute after:md:bottom-12 after:-bottom-20 lg:after:inset-s-0 md:after:-inset-s-20 after:-inset-s-24
                        after:shadow-2xl after:shadow-primary/5 after:-z-1 ltr:after:rotate-130 rtl:after:-rotate-130 after:w-300 after:md:h-220 after:h-120 after:rounded-[20rem]"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Image
                  src="/images/hero-img.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "700px", height: "auto" }}
                  className="lg:max-w-none md:max-w-md"
                  alt=""
                />
              </div>
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
            <SectionBadge icon={HiOutlineGlobeAlt} label="Showcase" />
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Websites built on SalesCenta
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A few of the stores already selling with us.
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

      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="features"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <SectionBadge icon={HiOutlineSparkles} label="Features" />
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Built for how you actually sell
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Everything a Nigerian merchant needs to run a real online store,
              without fighting the platform to get there.
            </p>
          </div>

          <FeaturesGrid />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-7.5">
            <div className="relative">
              <div className="md:me-10">
                <Image
                  src="/images/saas/merchant.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt="Illustration of a person unboxing and setting up their store"
                />
              </div>
              <div className="absolute -bottom-10 inset-e-0 p-6 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 md:w-80 w-60">
                <h5 className="text-lg font-semibold mb-3">
                  Setup in progress
                </h5>
                <p className="text-slate-400">
                  We handle the storefront build while you focus on your
                  products
                </p>
                <div className="flex justify-between mt-3 mb-2">
                  <span className="text-slate-400">Store setup</span>
                  <span className="text-slate-400">84%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: "84%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="lg:ms-8 mt-8 md:mt-0">
              <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Manage orders, payments, and <br /> WhatsApp — in one place
              </h4>
              <p className="text-slate-400">
                Track orders, confirm bank transfers, and reply to customers on
                WhatsApp without switching between five different tools.
              </p>

              <div className="mt-4">
                <Link
                  href="/page-aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-7.5">
            <div className="relative order-1 md:order-2">
              <Image
                src="/images/saas/home-stat.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt=""
              />
            </div>

            <div className="lg:me-8 order-2 md:order-1">
              <h4 className="mb-4 text-2xl leading-normal font-medium">
                Payments that just work
              </h4>
              <p className="text-slate-400">
                No declined cards from currency mismatches, no waiting for a
                plugin update — accept the ways your customers already pay.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-primary text-base me-2" /> Bank
                  transfer, confirmed automatically
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-primary text-base me-2" />{" "}
                  Naira pricing, no conversion guesswork
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-primary text-base me-2" /> Card
                  payments alongside it, not instead of it
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/page-aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <SectionBadge icon={HiOutlineQuestionMarkCircle} label="FAQ" />
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Everything you need to know before you get started with
              SalesCenta.
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
