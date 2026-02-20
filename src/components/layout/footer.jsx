import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-cta-muted mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-surface mb-4">
              KreasiK
            </h2>
            <p className="text-sm leading-relaxed">
              Handcrafted bouquet made with love.  
              Bringing beauty to every special moment.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-lg font-semibold text-surface mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/products" className="hover:text-white transition">
                  All Products
                </Link>
              </li>

              <li>
                <Link href="#best-seller" className="hover:text-white transition">
                  Best Seller
                </Link>
              </li>

                <li>
                <Link href="/gallery" className="hover:text-white transition">
                 Gallery
                </Link>
              </li>


            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold text-surface mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-surface mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@kreasik.com</li>
              <li>Instagram: @kreasik</li>
              <li>Shopee: shopee.kreasik.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} RaihanDev. All rights reserved.</p>
          <p>Made with ❤ in Indonesia</p>
        </div>

      </div>
    </footer>
  );
}