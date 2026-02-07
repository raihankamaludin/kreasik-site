import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="relative h-[80vh] w-full">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Event/banner.png"
        alt="Promo Background"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Promo Akhir<br />Pekan
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Harga spesial setiap Sabtu Minggu.
            Temukan produk favoritmu sekarang.
          </p>

          <a
            href="https://shopee.co.id"
            target="_blank"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-black transition hover:scale-105"
          >
            Belanja Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
