import GallerySection from "@/components/layout/sections/GallerySection";

export const metadata = {
  title: "Gallery | YourBrand",
  description: "Gallery bouquet custom terbaik",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <GallerySection />
    </main>
  );
}
