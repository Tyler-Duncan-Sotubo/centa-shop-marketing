"use client";
import { useEffect, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      setVisible(window.scrollY >= 500);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="back-to-top fixed text-lg rounded-full z-10 bottom-5 inset-e-2 size-9 text-center bg-primary text-white leading-9 flex items-center justify-center"
    >
      <HiArrowSmUp />
    </button>
  );
}
