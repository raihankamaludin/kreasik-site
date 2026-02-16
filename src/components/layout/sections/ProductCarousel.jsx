"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductCarousel({ images, alt }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">
      <div className="relative h-105 w-full overflow-hidden rounded-3xl border border-border bg-surface">
        <Image
          src={images[current]}
          alt={alt}
          fill
          priority
          className="object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-xl border border-border hover:bg-surface transition"
        >
          Prev
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="px-4 py-2 rounded-xl border border-border hover:bg-surface transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
