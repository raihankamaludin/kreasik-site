"use client";
import { useState } from "react";
import Image from "next/image";
import { products } from "@/app/data/products";
import ReadMore from "@/components/layout/sections/ReadMore";

export default function Products() {
  const [index, setIndex] = useState(0);

  // ukuran card (px) per breakpoint
  const CARD = {
    mobile: 280,
    md: 320,
    lg: 340,
  };

  const getCardWidth = () => {
    if (typeof window === "undefined") return CARD.lg;
    if (window.innerWidth < 640) return CARD.mobile;
    if (window.innerWidth < 1024) return CARD.md;
    return CARD.lg;
  };

  const cardWidth = getCardWidth();
  const visible =
    cardWidth === CARD.mobile ? 1 : cardWidth === CARD.md ? 2 : 3;

  const next = () => {
    if (index < products.length - visible) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-20">
          Produk Unggulan
        </h2>

        {/* VIEWPORT */}
        <div className="relative ">

          <div className="overflow-hidden py-2">
            <div
            className=" flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * (cardWidth + 24)}px)`,
            }}
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="
                shrink-0
                  w-70
                  md:w-[320px]
                  lg:w-85
                  bg-white
                  rounded-xl
                  shadow-md
                  p-4
                "
              > 
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={400}
                  className="rounded-lg"
                />

                <h3 className="mt-4 font-semibold text-lg">
                  {p.name}
                </h3>

                <ReadMore text={p.paragraf} />

                <p className="text-gray-600">{p.price}</p>

                <a
                  href={p.link}
                  target="_blank"
                  className="block mt-4 text-center bg-[#9CAF88] text-white py-2 rounded-lg hover:bg-[#647551]"
                >
                  Beli di Shopee
                </a>
              </div>
            ))}
          </div>
          </div>



          <div/>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center gap-8 mt-10 text-2xl">
          <button
            onClick={prev}
            disabled={index === 0}
            className="disabled:opacity-30"
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={index >= products.length - visible}
            className="disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
