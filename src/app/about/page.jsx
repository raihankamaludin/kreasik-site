import Image from "next/image"
import WhyUs from "@/components/layout/sections/WhyUs"
import CtaAbout from "@/components/layout/sections/CtaAbout"

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">

      {/* TOP BIG TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
        FLOWERS ARE{" "}
        <span className="text-primary">FEELINGS</span>{" "}
        MADE VISIBLE!
      </h1>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-65 sm:h-80 md:h-100 lg:h-112.5 rounded-3xl overflow-hidden border border-border shadow-sm">
          
          <Image
            src="/images/bunga.jpg"
            alt="Bucket bunga elegan"
            fill
            priority
            className="object-cover"
          />

        </div>

        {/* RIGHT CARD */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          
          <p className="text-sm tracking-widest text-text-muted mb-4">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
            We Create Bouquets With Meaning.
          </h2>

          <p className="mt-6 text-text-body leading-relaxed">
Kami adalah UMKM bucket bunga yang berfokus pada desain yang elegan, modern, dan penuh makna. Setiap rangkaian kami dibuat dengan perhatian tinggi terhadap detail—mulai dari pemilihan warna, komposisi bunga, hingga finishing—agar setiap bouquet mampu menyampaikan perasaan dengan cara yang indah dan berkesan.

Kami percaya bahwa bunga bukan sekadar hadiah, tetapi bentuk ekspresi emosi dan cerita di balik setiap momen spesial. Karena itu, setiap bucket bunga dirancang secara personal untuk menciptakan kesan yang sesuai dengan karakter dan kebutuhan pelanggan.
          </p>

          <p className="mt-4 text-text-body leading-relaxed">
           Cocok untuk berbagai kesempatan seperti wisuda, ulang tahun, anniversary, hingga perayaan personal lainnya, kami menyediakan layanan custom warna, tema, dan kartu ucapan. Dengan proses pengerjaan yang rapi dan pengemasan yang aman, kami berkomitmen menghadirkan produk yang tidak hanya estetik, tetapi juga berkesan bagi penerima.
          </p>

        </div>

      </div>

  <WhyUs />
 <CtaAbout/>

    </section>
  )
}
