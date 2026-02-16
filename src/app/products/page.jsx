import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/Product";

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold text-foreground">
          Our Flower Collection
        </h1>
        <p className="mt-3 text-text-muted">
          Buket bunga elegan untuk setiap momen spesial
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group bg-surface border border-border rounded-3xl overflow-hidden transition hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-72 w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {product.name}
              </h3>

              <p className="mt-1 text-sm text-text-muted line-clamp-2">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-primary font-medium">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>

                <span className="text-sm text-primary group-hover:underline">
                  View Detail →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
