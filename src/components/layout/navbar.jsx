"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  // Hide / show navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
        setOpen(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
      bg-navbar-bg/90 backdrop-blur-md 
      transition-transform duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-7">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="Brand Logo"
              width={140}
              height={44}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu (tidak diubah) */}
          <ul className="hidden md:flex items-center gap-10 text-base font-medium text-navbar-text">
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-navbar-text"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
   {/* Mobile Menu Dropdown */}
<div
  className={`md:hidden absolute top-full left-0 w-full
  bg-navbar-bg/98 backdrop-blur-md border-t border-border
  transition-all duration-300 ease-in-out
  ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
>
  <div className="px-6 py-8">
    <ul className="flex flex-col gap-6 text-lg font-medium text-navbar-text">
      
      <li>
        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>
      </li>

      <li>
        <Link href="/products" onClick={() => setOpen(false)}>
          Products
        </Link>
      </li>

      <li>
        <Link href="/gallery" onClick={() => setOpen(false)}>
          Gallery
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </li>

    </ul>
  </div>
</div>
    </nav>
  );
}