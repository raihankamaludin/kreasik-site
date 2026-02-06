import Image from "next/image";

export default function PromoSection() {
  return (
    <section className="w-full bg-[#F5E9E2] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-10 shadow-sm md:grid-cols-2">
          
          {/* TEXT */}
          <div>
            <span className="inline-block rounded-full bg-[#E6B8A2] px-4 py-1 text-sm font-medium text-white">
              Special Event
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Buket Spesial Valentine 💐
            </h2>

            <p className="mt-4 text-gray-600">
              Ekspresikan perasaanmu dengan buket bunga buatan elegan,
              tahan lama, dan siap jadi hadiah berkesan.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#produk"
                className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
              >
                Lihat Produk
              </a>

              <a
                href="https://shopee.co.id"
                target="_blank"
                className="rounded-xl border border-black px-6 py-3 transition hover:bg-black hover:text-white"
              >
                Beli di Shopee
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-70 w-full overflow-hidden rounded-2xl">
            <Image
              src="/Event/Banner Event.png"
              alt="Promo Valentine"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
