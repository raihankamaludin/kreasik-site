"use client"

import Image from "next/image";
import {ArrowRight} from "lucide-react"



export default function HeroSplit() {

  
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid min-h-150 grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-3">
        {/* LEFT IMAGE */}
        <div className="relative col-span-2">
          <Image
            src="/images/hero.avif"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />

          {/* TEXT OVERLAY */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="mb-1 text-sm opacity-80">A bedroom fit for spring</p>
            <h1 className="text-4xl font-bold">A fresh start</h1>
          </div>
        </div>

        {/* RIGHT CTA */}
        <div 

        onClick={() => window.open("https://shopee.co.id/?gad_source=1&gad_campaignid=1558961180&gbraid=0AAAAADPpU80Q6UtP_0MQnmaPk4oOeqjB-&gclid=Cj0KCQiAhaHMBhD2ARIsAPAU_D5u4IH2kfw02OrPIkS4X7OhCMQZAY8LqPjk1dh0SIIyCCryDwlYMF4aAjjDEALw_wcB", "_blank")}
        
        className="group flex flex-col justify-between  bg-primary p-10">
          <div className="text-3xl font-bold text-surface flex gap-20 items-center mt-50">
            <h1>Go shopping</h1> <div className="bg-foreground rounded-full w-10 h-10 flex items-center justify-center transition-color duration-300 ease-in-out group-hover:bg-primary-hover"><ArrowRight/></div>
          </div>

          <div className="flex items-center justify-between border-t border-black/20 pt-4 text-sm text-cta-muted">
            <span>Store: shoope.kreasik.com (in)</span>
            <span className="text-xl">↑</span>
          </div>
        </div>
      </div>
    </section>
  );
}
