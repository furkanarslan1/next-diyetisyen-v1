import { navigations } from "@/lib/constants/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.098 1.523 5.821L.057 23.428a.75.75 0 0 0 .915.915l5.607-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.518-5.16-1.42l-.37-.22-3.329.871.871-3.33-.22-.37A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905111111111?text=Merhaba",
    icon: WhatsAppIcon,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-neutral-900 overflow-hidden border-t border-neutral-400">
      {/* Blob dekor */}
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-emerald-800/20 blur-3xl animate-blob-3 pointer-events-none" />
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-teal-800/15 blur-3xl animate-blob-1 pointer-events-none" />

      {/* Üst içerik */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Marka */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-xl font-bold text-white tracking-wide">
            Diyetisyen
          </Link>
          <p className="text-sm text-green-200/50 leading-relaxed">
            Kişiye özel beslenme programları ve uzman rehberliğiyle sağlıklı
            yaşama giden yolda yanınızdayım.
          </p>
          {/* Sosyal medya */}
          <div className="flex items-center gap-3 mt-1">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-green-300 hover:bg-green-500/20 hover:border-green-400/40 hover:text-white transition-all duration-200"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hızlı Linkler */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white tracking-wide">
            Hızlı Linkler
          </h4>
          <ul className="flex flex-col gap-2">
            {navigations.map((nav) => (
              <li key={nav.href}>
                <Link
                  href={nav.href}
                  className="text-sm text-green-200/50 hover:text-green-300 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-green-700 group-hover:bg-green-400 transition-colors" />
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white tracking-wide">
            İletişim
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="tel:+905111111111"
                className="flex items-center gap-3 text-sm text-green-200/50 hover:text-green-300 transition-colors duration-200 group"
              >
                <Phone
                  size={14}
                  className="text-green-600 group-hover:text-green-400 shrink-0"
                />
                0511 111 11 11
              </a>
            </li>
            <li>
              <a
                href="mailto:info@diyetisyen.com"
                className="flex items-center gap-3 text-sm text-green-200/50 hover:text-green-300 transition-colors duration-200 group"
              >
                <Mail
                  size={14}
                  className="text-green-600 group-hover:text-green-400 shrink-0"
                />
                info@diyetisyen.com
              </a>
            </li>
            <li>
              <a
                href="https://www.openstreetmap.org/?mlat=41.0550&mlon=28.8700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-green-200/50 hover:text-green-300 transition-colors duration-200 group"
              >
                <MapPin
                  size={14}
                  className="text-green-600 group-hover:text-green-400 shrink-0"
                />
                Bayraklı, İzmir
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt çizgi + copyright */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-green-200/30">
            © {new Date().getFullYear()} Diyetisyen. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-green-200/30">
            Uzman beslenme danışmanlığı
          </p>
        </div>
      </div>
    </footer>
  );
}
