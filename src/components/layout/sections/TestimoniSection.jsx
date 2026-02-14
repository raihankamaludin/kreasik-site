"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  { id: 1, img: "/Testimoni/testimoni1.png" },
  { id: 2, img: "/Testimoni/testimoni1.png" },
  { id: 3, img: "/Testimoni/testimoni1.png" },
  { id: 4, img: "/Testimoni/testimoni1.png" },
  { id: 5, img: "/Testimoni/testimoni1.png" },
];

export default function Testimoni() {
  const [index, setIndex] = useState(0);

  // ukuran card
  const CARD = {
    mobile: 260,
    md: 300,
    lg: 320,
  };

  const getCardWidth = () => {
    if (typeof window === "undefined") return CARD.lg;
    if (window.innerWidth < 640) return CARD.mobile;
    if (window.innerWidth < 1024) return CARD.md;
    return CARD.lg;
  };

  const cardWidth = getCardWidth();

  const visible =
    cardWidth === CARD.mobile ? 1 :
    cardWidth === CARD.md ? 2 : 3;

  const next = () => {
    if (index < testimonials.length - visible) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Testimoni
        </h2>

        {/* VIEWPORT */}
        <div className="relative">

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * (cardWidth + 24)}px)`
              }}
            >
             {testimonials.map((item) => (
  <div
    key={item.id}
    className="relative shrink-0 bg-white rounded-xl shadow-sm border p-3"
    style={{ width: cardWidth }}
  >
    {/* Badge */}
    <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
      Shopee
    </div>

    {/* Image */}
    <div className="relative w-full h-60">
      <Image
        src={item.img}
        alt="Testimoni Shopee"
        fill
        className="object-contain"
      />
    </div>
  </div>
))}

            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center gap-8 mt-8 text-2xl">
          <button
            onClick={prev}
            disabled={index === 0}
            className="disabled:opacity-30"
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={index >= testimonials.length - visible}
            className="disabled:opacity-30"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
