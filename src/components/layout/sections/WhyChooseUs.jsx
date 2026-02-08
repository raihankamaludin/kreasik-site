

import { Shield, Flower, Package2, ShoppingBag } from "lucide-react";

const items = [
  { title: "Tahan Lama", desc: "Tidak layu & awet bertahun-tahun", icons: <Shield/> },
  { title: "Desain Elegan", desc: "Tampilan estetik & modern", icons: <Flower/> },
  { title: "Packing Aman", desc: "Siap kirim ke seluruh Indonesia", icons: <Package2/> },
  { title: "Tersedia di Shopee", desc: "Transaksi aman & mudah", icons: <ShoppingBag/> },
];

export default function WhyChooseUs() {
  return (
    <section className=" py-24">
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

          {/* RIGHT */}
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={i}
                className=" shadow-md rounded-2xl border bg-secondary p-6"
              >
                {/* ICON BULLET */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 transition group-hover:bg-black group-hover:text-white">
                  {item.icons}
                </div>

                <h3 className="text-sm font-semibold text-pink-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm  text-surface">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
