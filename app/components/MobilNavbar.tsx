"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.098 1.523 5.821L.057 23.428a.75.75 0 0 0 .915.915l5.607-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.518-5.16-1.42l-.37-.22-3.329.871.871-3.33-.22-.37A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-64">
      <div className="relative flex items-center justify-between h-16 px-6 rounded-full bg-neutral-900/95 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Sol: Mail */}
        <Link
          href="mailto:info@diyetisyen.com"
          className="flex flex-col items-center gap-0.5 group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-green-500/20 group-hover:border-green-400/40 transition-all duration-200">
            <Mail
              size={18}
              className="text-white group-hover:text-green-300 transition-colors"
            />
          </div>
          <span className="text-[9px] text-white/60 group-hover:text-green-300 transition-colors">
            Mail
          </span>
        </Link>

        {/* Orta boşluk */}
        <div className="w-14" />

        {/* Sağ: Telefon */}
        <Link
          href="tel:+905111111111"
          className="flex flex-col items-center gap-0.5 group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-green-500/20 group-hover:border-green-400/40 transition-all duration-200">
            <Phone
              size={18}
              className="text-white group-hover:text-green-300 transition-colors"
            />
          </div>
          <span className="text-[9px] text-white/60 group-hover:text-green-300 transition-colors">
            Ara
          </span>
        </Link>

        {/* Orta: WhatsApp yükseltilmiş */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <div className="relative w-14 h-14">
            {/* Ripple halkaları */}
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ backgroundColor: "#25D36640" }}
            />
            <Link
              href="https://wa.me/905111111111?text=Merhaba"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
