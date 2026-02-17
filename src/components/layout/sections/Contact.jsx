import { MessageSquare, Instagram, ShoppingBag, MapPin } from "lucide-react";
import ContactCard from "@/components/cards/ContactCard";

export default function HomeContact() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let&apos;s Make Your Moment Special 💐
          </h2>
          <p className="text-text-body mt-4 max-w-xl mx-auto">
            Custom bouquet untuk wisuda, anniversary, dan hadiah spesial.
            Hubungi kami lewat platform favorit kamu.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <ContactCard
            icon={<MessageSquare />}
            title="WhatsApp"
            username="Fast Response"
            desc="Chat langsung untuk order & custom"
            href="https://wa.me/6281234567890"
          />

          <ContactCard
            icon={<Instagram />}
            title="Instagram"
            username="@yourbouquet.id"
            desc="Lihat katalog & galeri"
            href="https://instagram.com/yourbouquet.id"
          />

          <ContactCard
            icon={<ShoppingBag />}
            title="Shopee"
            username="Official Store"
            desc="Order via marketplace"
            href="https://shopee.co.id/yourstore"
          />

          <ContactCard
            icon={<MapPin />}
            title="Location"
            username="Tangerang Selatan"
            desc="Pickup & delivery tersedia"
            href="#"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="inline-block px-10 py-4 rounded-xl bg-primary text-white font-semibold
                       hover:bg-primary-hover transition"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
