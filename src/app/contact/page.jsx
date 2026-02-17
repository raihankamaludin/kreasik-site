import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16">
      {/* Decorative blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">Contact Us</h2>
          <p className="text-text-body mt-4 max-w-xl mx-auto">
            Mau pesan bouquet atau custom desain? Hubungi kami langsung lewat
            platform favorit kamu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-surface border border-border rounded-3xl p-10 shadow-lg">
          {/* LEFT */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-3">{"Let's Connect"}</h3>
              <p className="text-text-muted">
                Fast response & friendly service untuk semua kebutuhan bouquet
                wisuda, anniversary, dan hadiah spesial
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:bg-primary hover:text-white transition"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  WA
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-80">Chat langsung</p>
                </div>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com/yourbouquet.id"
                target="_blank"
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:bg-secondary hover:text-white transition"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold">
                  IG
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm opacity-80">Lihat galeri</p>
                </div>
              </Link>

              {/* Shopee */}
              <Link
                href="https://shopee.co.id/yourstore"
                target="_blank"
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:bg-accent hover:text-white transition"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold">
                  🛒
                </div>
                <div>
                  <p className="font-semibold">Shopee</p>
                  <p className="text-sm opacity-80">Order via marketplace</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:bg-primary-hover hover:text-white transition">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold">
                  📍
                </div>
                <div>
                  <p className="font-semibold">Lokasi</p>
                  <p className="text-sm opacity-80">
                    Tangerang Selatan, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - QUICK ORDER CARD */}
          <div className="flex flex-col justify-between bg-background rounded-2xl p-8 border border-border">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Order? 
              </h3>

              <p className="text-text-muted mb-6">
                Kami siap membantu kamu membuat bouquet spesial untuk momen
                wisuda, anniversary, ulang tahun, atau hadiah surprise 
              </p>

              {/* BENEFITS */}
              <ul className="space-y-3 text-sm text-text-body mb-8">
                <li>✔ Custom design sesuai request</li>
                <li>✔ Fast response (± 5 menit)</li>
                <li>✔ Packaging aman & premium</li>
                <li>✔ Order via E-commerce</li>
              </ul>
            </div>

            {/* CTA BUTTON */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="w-full text-center py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition text-lg"
            >
              Chat WhatsApp Sekarang
            </a>

            {/* Jam Operasional */}
            <p className="text-xs text-text-muted mt-4 text-center">
              Open Daily • 09.00 - 21.00 WIB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
