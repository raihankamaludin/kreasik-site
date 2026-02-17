"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { galleryImages } from "@/app/data/GalleryData";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold">Gallery </h2>
          <p className="text-text-body mt-4 max-w-xl mx-auto">
            Hasil bouquet asli yang kami buat untuk berbagai momen spesial.
          </p>
        </div>

        {/* Masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto rounded-2xl shadow-sm
                           hover:opacity-90 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
