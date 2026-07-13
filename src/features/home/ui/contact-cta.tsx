import Link from "next/link";
import { FiPhone } from "react-icons/fi";

export default function ContactCta({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Have a question? Get in touch!
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Reach out and we&apos;ll help you get your store set up and ready
          to sell.
        </p>

        <div className="mt-6">
          <Link
            href="/contact-one"
            className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-md mt-4"
          >
            <FiPhone className="me-1 text-lg" /> Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
