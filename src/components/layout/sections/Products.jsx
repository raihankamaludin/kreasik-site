import { products } from "@/app/data/products";
import Image from "next/image";

export default function Products() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">Produk Unggulan</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-sm p-4">
              <Image src={p.image} alt="product" width={400} height={400} className="rounded-lg" />
              <h3 className="mt-4 font-medium">{p.name}</h3>
              <p className="text-sm text-text-muted mt-5 mb-3">{p.paragraf}</p>
              <p className="text-gray-600">{p.price}</p>
              <a
                href={p.link}
                target="_blank"
                className="block mt-4 text-center bg-[#9CAF88] text-white py-2 rounded-lg hover:bg-[#647551]"
              >
                Beli di Shopee
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
