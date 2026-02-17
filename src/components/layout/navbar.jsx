import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-navbar-bg/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

      
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"  
            alt="Brand Logo"
            width={120}
            height={40}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

    
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-navbar-text">
          <li>
            <Link href="/stories" className="hover:text-primary transition">
              Stories
            </Link>
          </li>
          <li>
            <Link href="/jobs" className="hover:text-primary transition">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/newsroom" className="hover:text-primary transition">
              Newsroom
            </Link>
          </li>
          <li>
            <Link href="/business" className="hover:text-primary transition">
              Our Business
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
