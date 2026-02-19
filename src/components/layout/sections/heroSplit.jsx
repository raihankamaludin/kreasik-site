"use client"

import { useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";

export default function HeroSplit() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-3 min-h-150">
        
        {/* LEFT VIDEO */}
        <div className="relative col-span-2 h-100 sm:h-125 lg:h-auto">
          
          <video
            ref={videoRef}
            src="/images/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* TEXT */}
          <div className="absolute bottom-6 left-6 text-white max-w-md">
            <p className="mb-1 text-sm sm:text-base opacity-80">
        For someone special
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Say it with flowers
            </h1>
          </div>

          {/* 🎬 Pause Button */}
          <button
            onClick={toggleVideo}
            className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="text-black" size={22} />
            ) : (
              <Play className="text-black ml-1" size={22} />
            )}
          </button>

        </div>

        {/* RIGHT CTA */}
        <div
          onClick={() => window.open("https://shopee.co.id", "_blank")}
          className="group flex flex-col justify-between bg-primary p-8 sm:p-10 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-surface">
              Go shopping
            </h2>

            <div className="bg-foreground rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-hover group-hover:translate-x-1">
              <ArrowRight className="text-surface" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-black/20 pt-4 text-sm text-cta-muted">
            <span>Store: shopee.kreasik.com</span>
            <span className="text-xl">↑</span>
          </div>
        </div>

      </div>
    </section>
  );
}
