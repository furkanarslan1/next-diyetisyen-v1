"use client";
import { navigations } from "@/lib/constants/navigation";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 z-20 flex w-full items-center justify-between md:justify-around px-6 h-16 text-white border-b border-gray-400">
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Image
            src="/"
            alt="logo"
            width={52}
            height={52}
            className="object-contain"
          /> */}
          <span className="font-bold tracking-wide text-white ">
            Diyetisyen
          </span>
        </Link>

        {/* Desktop: Linkler */}
        <div className="hidden md:flex items-center gap-6">
          {navigations &&
            navigations.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className={`relative group text-white text-sm pb-0.5 ${
                  pathname === nav.href ? "border-b border-orange-500" : ""
                }`}
              >
                {nav.name}
                {pathname !== nav.href && (
                  <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-500" />
                )}
              </Link>
            ))}
        </div>

        {/* Desktop: Telefon */}
        <div className="hidden md:flex items-center gap-2 text-white">
          <Phone size={16} className="text-orange-500" />
          <p className="text-sm">0511 111 11 11</p>
        </div>

        {/* Mobil: Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menüyü aç/kapat"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="absolute top-16 left-0 z-20 w-full bg-black/90 flex flex-col items-start gap-0 md:hidden">
          {navigations &&
            navigations.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                onClick={() => setMenuOpen(false)}
                className={`w-full px-6 py-4 text-sm border-b border-white/10 hover:bg-white/10 transition-colors ${
                  pathname === nav.href
                    ? "text-orange-500 font-semibold"
                    : "text-white"
                }`}
              >
                {nav.name}
              </Link>
            ))}
          <div className="flex items-center gap-2 px-6 py-4 text-white">
            <Phone size={16} className="text-orange-500" />
            <p className="text-sm">0511 111 11 11</p>
          </div>
        </div>
      )}
    </>
  );
}
