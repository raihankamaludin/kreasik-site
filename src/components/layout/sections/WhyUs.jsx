import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Why Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Why Choose Our <br /> Flower Bouquet?
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Kami tidak hanya menjual bucket bunga, tetapi menghadirkan karya
            dengan desain modern dan elegan.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Menggunakan rangka kawat besi yang kuat sehingga bouquet lebih kokoh,
            tahan lama, dan tidak mudah berubah bentuk.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Tersedia di platform e-commerce terpercaya untuk pengiriman
            yang lebih aman dan nyaman.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col md:block items-center gap-6 md:h-130 md:gap-30">

          {/* BACK VIDEO */}
  <div className="
  hidden lg:block
  w-44 h-64
  sm:w-52 sm:h-72
  md:w-60 md:h-96
  rounded-3xl overflow-hidden shadow-lg
  lg:absolute lg:left-0 lg:top-0
">
  <video
    src="/images/whyus/vidio1.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>

          {/* FRONT IMAGE */}
          <div className="
             w-10 h-100 
  sm:w-50 sm:h-150
  md:w-90 md:h-100
   lg:w-60 lg:h-96
  rounded-3xl overflow-hidden shadow-xl
  md:absolute lg:left-70 lg:top-20 md:left-10 md:top-20
          ">
            <Image
              src="/images/whyus/handbag_flower.jpg"
              alt="Bouquet"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
