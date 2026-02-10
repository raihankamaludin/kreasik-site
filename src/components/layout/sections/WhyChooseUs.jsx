"use client";
import { useState } from "react";

import {
  Shield,
  Flower,
  Package2,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

const items = [
  {
    title: "Tahan Lama",
    desc: "Produk kami dirancang dengan material pilihan berkualitas tinggi sehingga tidak mudah rusak, tidak cepat menurun kualitasnya, dan tetap terlihat bagus meskipun digunakan atau disimpan dalam jangka waktu yang lama.",
    icons: <Shield />,
  },
  {
    title: "Desain Elegan",
    desc: "Setiap produk memiliki desain yang estetik, modern, dan detail yang diperhatikan dengan baik sehingga cocok digunakan sebagai dekorasi maupun hadiah untuk berbagai momen spesial.",
    icons: <Flower />,
  },
  {
    title: "Packing Aman",
    desc: "Kami menggunakan sistem pengemasan yang rapi dan aman untuk melindungi produk selama proses pengiriman, sehingga pesanan dapat sampai ke tangan Anda dalam kondisi optimal.",
    icons: <Package2 />,
  },
  {
    title: "Tersedia di Shopee",
    desc: "Produk kami tersedia di platform Shopee sehingga Anda dapat bertransaksi dengan mudah, aman, dan terpercaya, dilengkapi dengan berbagai metode pembayaran serta layanan pengiriman resmi.",
    icons: <ShoppingBag />,
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-block rounded-full border px-4 py-1 text-xs font-medium text-text-cta-muted">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-4xl font-semibold text-text-foreground">
              Kenapa Pilih <br /> Produk Kami?
            </h2>

            <p className="mt-4 max-w-md text-text-muted">
              Kami menghadirkan produk berkualitas tinggi dengan desain modern
              dan pengiriman aman ke seluruh Indonesia.
            </p>
          </div>

          {/* RIGHT – ACCORDION */}
          <div className="space-y-4">
            {items.map((item, i) => {
              const isOpen = activeIndex === i;

              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 shadow-md"
                      : "bg-surface"
                  }`}
                >
                  {/* HEADER */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      {/* ICON */}
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "bg-pink-400 text-white"
                            : "bg-pink-50 text-pink-400"
                        }`}
                      >
                        {item.icons}
                      </div>

                      <h3 className="text-sm font-semibold text-text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        isOpen ? "rotate-180 text-pink-400" : ""
                      }`}
                    />
                  </button>

                  {/* DIVIDER */}
                  {isOpen && (
                    <div className="mx-6 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" />
                  )}

                  {/* BODY */}
                  {isOpen && (
                    <div className="px-6 pt-4 pb-6 text-sm text-text-muted">
                      {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
