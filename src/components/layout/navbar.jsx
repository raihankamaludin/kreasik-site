"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  // hide / show navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
        setOpen(false); // auto close menu saat scroll
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
  className={`fixed top-0 left-0 w-full z-40
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

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-base font-muted text-navbar-text">
        <li>
          <Link href="/stories" className="hover:text-primary transition-colors">
            Stories
          </Link>
        </li>
        <li>
          <Link href="/jobs" className="hover:text-primary transition-colors">
            Jobs
          </Link>
        </li>
        <li>
          <Link href="/newsroom" className="hover:text-primary transition-colors">
            Newsroom
          </Link>
        </li>
        <li>
          <Link href="/business" className="hover:text-primary transition-colors">
            Our Business
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
