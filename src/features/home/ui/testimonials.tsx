"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import "tiny-slider/dist/tiny-slider.css";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

interface Testimonial {
  description: string;
  image: string;
  name: string;
  role: string;
}

/** Placeholder testimonials pending real customer quotes and permission to feature them. */
const testimonials: Testimonial[] = [
  {
    description:
      "Placeholder quote — swap in a real merchant testimonial here.",
    image: "/images/client/01.jpg",
    name: "Merchant Name",
    role: "Store Owner",
  },
  {
    description:
      "Placeholder quote — swap in a real merchant testimonial here.",
    image: "/images/client/02.jpg",
    name: "Merchant Name",
    role: "Store Owner",
  },
  {
    description:
      "Placeholder quote — swap in a real merchant testimonial here.",
    image: "/images/client/03.jpg",
    name: "Merchant Name",
    role: "Store Owner",
  },
];

const settings = {
  container: ".tiny-three-item",
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom" as const,
  speed: 400,
  gutter: 12,
  responsive: {
    992: { items: 3 },
    767: { items: 2 },
    320: { items: 1 },
  },
};

export default function Testimonials() {
  return (
    <div className="container relative" id="review">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          What Our Merchants Say
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          A few words from stores already selling with SalesCenta.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-8">
        <div className="tiny-three-item">
          <TinySlider settings={settings}>
            {testimonials.map((item) => (
              <div className="tiny-slide text-center" key={item.image}>
                <div>
                  <div className="content relative shadow-sm dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                    <p className="text-slate-400">{item.description}</p>
                  </div>

                  <div className="text-center mt-5">
                    <Image
                      src={item.image}
                      width={56}
                      height={56}
                      className="size-14 rounded-full shadow-md mx-auto object-cover"
                      alt={item.name}
                    />
                    <h6 className="mt-2 font-semibold">{item.name}</h6>
                    <span className="text-slate-400 text-sm">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div>
    </div>
  );
}
