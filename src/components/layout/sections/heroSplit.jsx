import Image from "next/image";

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
            <p className="mb-1 text-sm opacity-80">
              A bedroom fit for spring
            </p>
            <h1 className="text-4xl font-bold">A fresh start</h1>
          </div>
        </div>

        {/* RIGHT CTA */}
        <div className="flex flex-col justify-between bg-yellow-400 p-10">
          <div>
            <h2 className="text-3xl font-bold">
              Go shopping
            </h2>
          </div>

          <div className="flex items-center justify-between border-t border-black/20 pt-4 text-sm">
            <span>Store: shoope.kreasik.com (in)</span>
            <span className="text-xl">↑</span>
          </div>
        </div>

      </div>
    </section>
  );
}
