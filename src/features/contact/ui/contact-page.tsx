"use client";
import { useState } from "react";
import Link from "next/link";
import { FiUser, FiMail, FiBook, FiMessageCircle } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import PageHero from "@/shared/ui/page-hero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        icon={FiMessageCircle}
        label="Contact"
        title="Talk to us"
        subtext="Questions about pricing, migrating your store, or anything else — we're happy to help."
      />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 max-w-5xl mx-auto mb-16">
            <div className="text-center px-6">
              <div className="w-20 h-20 bg-primary/5 text-primary rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                <BsWhatsapp className="w-7 h-7" />
              </div>
              <div className="content mt-7">
                <h5 className="text-xl font-medium">WhatsApp</h5>
                <p className="text-slate-400 mt-3">
                  The fastest way to reach us for setup help or support.
                </p>
                <div className="mt-5">
                  <Link
                    href="https://wa.me/000000000000"
                    target="_blank"
                    className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
                  >
                    Message us on WhatsApp
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="w-20 h-20 bg-primary/5 text-primary rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                <HiOutlineMail className="w-7 h-7" />
              </div>
              <div className="content mt-7">
                <h5 className="text-xl font-medium">Email</h5>
                <p className="text-slate-400 mt-3">
                  For anything that needs more detail or documentation.
                </p>
                <div className="mt-5">
                  <Link
                    href="mailto:hello@salescenta.com"
                    className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
                  >
                    hello@salescenta.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="w-20 h-20 bg-primary/5 text-primary rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                <HiOutlineLocationMarker className="w-7 h-7" />
              </div>
              <div className="content mt-7">
                <h5 className="text-xl font-medium">Office</h5>
                <p className="text-slate-400 mt-3">
                  300 Whitestone Way
                  <br />
                  Startup Croydon
                  <br />
                  Croydon, UK
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5 items-stretch">
            <div className="rounded-md overflow-hidden shadow-sm dark:shadow-gray-800 min-h-100">
              <iframe
                title="TXD Agency office location"
                src="https://www.google.com/maps?q=300+Whitestone+Way,+Croydon,+UK&output=embed"
                className="w-full h-full min-h-100 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 p-6 md:p-8">
              <h3 className="mb-6 text-2xl leading-normal font-medium">
                Send us a message
              </h3>

              {submitted ? (
                <p className="text-slate-400">
                  Thanks — we&apos;ve received your message and will get back to
                  you soon.
                </p>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid lg:grid-cols-2 lg:gap-6">
                    <div className="mb-5">
                      <label htmlFor="name" className="font-semibold">
                        Your Name:
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiUser className="size-4 absolute top-3 inset-s-4" />
                        <input
                          name="name"
                          id="name"
                          type="text"
                          required
                          className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="email" className="font-semibold">
                        Your Email:
                      </label>
                      <div className="form-icon relative mt-2">
                        <FiMail className="size-4 absolute top-3 inset-s-4" />
                        <input
                          name="email"
                          id="email"
                          type="email"
                          required
                          className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                          placeholder="Email :"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="subject" className="font-semibold">
                      Your Question:
                    </label>
                    <div className="form-icon relative mt-2">
                      <FiBook className="size-4 absolute top-3 inset-s-4" />
                      <input
                        name="subject"
                        id="subject"
                        className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                        placeholder="Subject :"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="comments" className="font-semibold">
                      Your Message:
                    </label>
                    <div className="form-icon relative mt-2">
                      <FiMessageCircle className="size-4 absolute top-3 inset-s-4" />
                      <textarea
                        name="comments"
                        id="comments"
                        required
                        className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-md justify-center flex items-center"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
