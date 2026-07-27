"use client";
import { useState } from "react";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";

export default function CookieModal() {
  const [display, setDisplay] = useState(true);

  if (!display) return null;

  return (
    <div className="cookie-popup fixed max-w-lg bottom-3 inset-e-3 inset-s-3 sm:inset-s-0 mx-auto bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md py-5 px-6 z-50">
      <p className="text-slate-400">
        This website uses cookies to provide you with a great user
        experience. By using it, you accept our{" "}
        <Link
          href="/privacy"
          className="text-primary font-semibold"
        >
          use of cookies
        </Link>
      </p>
      <div className="cookie-popup-actions text-end">
        <button
          onClick={() => setDisplay(false)}
          className="absolute border-none bg-none p-0 cursor-pointer font-semibold top-2 inset-e-2"
        >
          <LiaTimesSolid />
        </button>
      </div>
    </div>
  );
}
