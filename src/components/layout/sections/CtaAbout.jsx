export default function CtaAbout() {
  return (
    <section className="w-full py-10  bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-primary text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Custom Bouquet Sesuai Keinginanmu
          </h2>

          <p className="text-cta-muted leading-relaxed mb-4">
            Setiap momen memiliki cerita dan makna tersendiri. Karena itu,
            kami menyediakan layanan custom bouquet dengan pilihan warna,
            desain, dan detail yang bisa disesuaikan dengan kebutuhanmu.
          </p>

          <p className="text-cta-muted leading-relaxed">
            Dengan desain elegan dan pengerjaan yang rapi, kami membantu
            mewujudkan rangkaian bunga yang tidak hanya indah,
            tetapi juga berkesan.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-surface p-10 rounded-3xl shadow-xl flex flex-col justify-center border border-border">
          <p className="text-text-muted mb-4">
            Ingin Custom Bouquet?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Let’s Chat & Create Your Special Moment
          </h2>

          <p className="text-text-body mb-8 leading-relaxed">
            Diskusikan ide, warna, dan detail bouquet yang kamu inginkan
            bersama kami. Kami siap membantu dari konsep hingga siap dikirim.
          </p>

          <button className="w-fit px-8 py-4 rounded-full 
            bg-primary text-white 
            hover:bg-primary-hover
            transition shadow-lg">
            LET’S CHAT
          </button>
        </div>

      </div>
    </section>
  );
}
