import About from "@/components/layout/sections/About";
import Contact from "@/components/layout/sections/Contact";
import CTA from "@/components/layout/sections/CTA";
import HeroSplit from "@/components/layout/sections/heroSplit";
import Products from "@/components/layout/sections/Products";
import PromoSection from "@/components/layout/sections/PromoSection";
import WhyChooseUs from "@/components/layout/sections/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <HeroSplit />
      <WhyChooseUs/>
      <Products/>
      <CTA/>
      <About/>
      <Contact/>
      <PromoSection/>
    </main>
  );
}
