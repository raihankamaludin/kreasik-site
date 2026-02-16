import { products } from "@/app/data/Product";
import { notFound } from "next/navigation";
import ProductCarousel from "@/components/layout/sections/ProductCarousel";
import ReadMore from "@/components/layout/sections/ReadMore";

export default async function ProductDetail({ params }) {
  const { slug } = await params; // Next.js 16 wajib await

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) notFound();

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {/* Parent Card */}
      <div className="bg-surface border border-border rounded-3xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left: Carousel */}
          <ProductCarousel
            images={product.images}
            alt={product.name}
          />

          {/* Right: Content */}
          <div>
            <h1 className="text-3xl font-semibold text-foreground">
              {product.name}
            </h1>

            {/* Description with ReadMore */}
            <div className="mt-4">
              <ReadMore text={product.description} />
            </div>

            {/* Price */}
            <p className="mt-6 text-2xl font-semibold text-primary">
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <div className="my-8 h-px bg-border" />

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary-hover transition">
                Order Sekarang
              </button>

              <button className="border border-border px-8 py-3 rounded-xl text-text-muted hover:bg-surface transition">
                Chat Admin
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
