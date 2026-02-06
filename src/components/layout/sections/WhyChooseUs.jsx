const items = [
  { title: "Tahan Lama", desc: "Tidak layu & awet bertahun-tahun" },
  { title: "Desain Elegan", desc: "Tampilan estetik & modern" },
  { title: "Packing Aman", desc: "Siap kirim ke seluruh Indonesia" },
  { title: "Tersedia di Shopee", desc: "Transaksi aman & mudah" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Kenapa Pilih Kami?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-sm border text-center"
            >
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
