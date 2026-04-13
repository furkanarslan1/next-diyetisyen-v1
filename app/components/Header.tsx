"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigations } from "@/lib/constants/navigation";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 z-20 flex w-full items-center justify-between md:justify-around px-6 h-16 text-white">
      {/* BRAND */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-wide text-white">
          Ayşe Yılmaz
        </span>
      </Link>

      {/* Desktop: Linkler */}
      <div className="hidden md:flex items-center gap-6 font-bold">
        {navigations.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={`relative group text-white text-sm pb-0.5 ${
              pathname === nav.href ? "border-b border-green-600" : ""
            }`}
          >
            {nav.name}
            {pathname !== nav.href && (
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-green-600 group-hover:w-full group-hover:left-0 transition-all duration-500" />
            )}
          </Link>
        ))}
      </div>

      {/* Desktop: İletişim & Sosyal */}
      <div className="hidden md:flex items-center gap-3 text-white">
        <a
          href="tel:+905111111111"
          className="flex items-center gap-1.5 hover:text-green-300 transition-colors group"
        >
          <Phone
            size={15}
            className="text-green-400 group-hover:text-green-300"
          />
          <span className="text-sm">0511 111 11 11</span>
        </a>
        <span className="w-px h-4 bg-white/20" />
        <a
          href="mailto:info@diyetisyen.com"
          aria-label="Mail"
          className="text-white/70 hover:text-green-300 transition-colors"
        >
          <Mail size={16} />
        </a>
        <a
          href="https://www.openstreetmap.org/?mlat=41.0550&mlon=28.8700"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konum"
          className="text-white/70 hover:text-green-300 transition-colors"
        >
          <MapPin size={16} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white/70 hover:text-green-300 transition-colors"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
        </a>
      </div>

      {/* Mobil: Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Menüyü aç" className="text-white p-1">
              <Menu size={24} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            aria-describedby={undefined}
            className="w-72 p-0 bg-white border-neutral-200 flex flex-col"
          >
            {/* Üst: Marka + Kapat */}
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-neutral-900 font-bold tracking-wide text-base">
                  Ayşe Yılmaz
                </SheetTitle>
                <SheetClose asChild>
                  <button
                    aria-label="Kapat"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-100"
                  >
                    ✕
                  </button>
                </SheetClose>
              </div>
            </SheetHeader>

            {/* Navigasyon Linkleri */}
            <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
              {navigations.map((nav) => (
                <SheetClose asChild key={nav.href}>
                  <Link
                    href={nav.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      pathname === nav.href
                        ? "bg-green-600/10 text-green-600"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        pathname === nav.href
                          ? "bg-green-600"
                          : "bg-neutral-300 group-hover:bg-green-600"
                      }`}
                    />
                    {nav.name}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* Alt: Telefon */}
            <div className="px-6 py-5 border-t border-neutral-200">
              <a
                href="tel:+905111111111"
                className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600/10">
                  <Phone size={15} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 leading-none mb-0.5">
                    Bizi Arayın
                  </p>
                  <p className="text-sm font-medium text-neutral-800">
                    0511 111 11 11
                  </p>
                </div>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
