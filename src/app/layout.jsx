import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Modern Home Inspiration",
  description: "Inspired by IKEA-style layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-neutral-900">
        <Navbar />
        <main className="pt-32">
          {children}

        </main>
        <Footer />
      </body>
    </html>
  );
}
