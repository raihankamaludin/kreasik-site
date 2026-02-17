"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function ImageModal({ image, onClose }) {

  // Disable scroll saat modal buka
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10000
                   bg-white/90 hover:bg-white
                   text-black p-2 rounded-full shadow-lg transition"
      >
        <X size={22} />
      </button>

      {/* Image Container */}
      <div className="relative z-10000 max-w-[90vw] max-h-[90vh]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={1200}
          className="w-auto h-auto max-h-[90vh] rounded-2xl object-contain"
        />
      </div>
    </div>
  );
}
