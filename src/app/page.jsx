import Contact from "@/components/layout/sections/Contact";
import CTA from "@/components/layout/sections/CTA";
import HeroSplit from "@/components/layout/sections/heroSplit";
import Products from "@/components/layout/sections/Products";
import PromoSection from "@/components/layout/sections/PromoSection";
import WhyChooseUs from "@/components/layout/sections/WhyChooseUs";
import Testimoni from "@/components/layout/sections/TestimoniSection";

export default function Home() {
  return (
    <main>
      <HeroSplit />
      <PromoSection />
      <WhyChooseUs />
      <Products />
      <CTA />
      <Testimoni />
      <Contact />
    </main>
  );
}
