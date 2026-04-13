import { services } from "@/lib/constants/services";
import Link from "next/link";

const cardStyles = [
  {
    bg: "bg-linear-to-br from-green-400 via-emerald-500 to-teal-600",
    speed: "animate-gradient",
  },
  {
    bg: "bg-linear-to-br from-emerald-400 via-teal-500 to-green-600",
    speed: "animate-gradient-slow",
  },
  {
    bg: "bg-linear-to-br from-teal-400 via-green-500 to-emerald-600",
    speed: "animate-gradient-fast",
  },
  {
    bg: "bg-linear-to-br from-green-500 via-teal-400 to-emerald-500",
    speed: "animate-gradient-slow",
  },
  {
    bg: "bg-linear-to-br from-emerald-500 via-green-400 to-teal-500",
    speed: "animate-gradient-fast",
  },
  {
    bg: "bg-linear-to-br from-teal-500 via-emerald-400 to-green-500",
    speed: "animate-gradient",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-neutral-50 py-20 px-6">
      {/* Başlık */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase mb-3">
          Hizmetlerimiz
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
          Sağlığınız İçin <span className="text-green-600">Uzman Çözümler</span>
        </h2>
        <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm md:text-base">
          Kişiye özel beslenme programları ve kanıta dayalı yaklaşımlarla sağlık
          hedeflerinize ulaşmanıza destek oluyoruz.
        </p>
      </div>

      {/* Kartlar */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const { bg, speed } = cardStyles[index % cardStyles.length];
          return (
            <div
              key={service.title}
              className={`group flex flex-col gap-5 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${bg} ${speed}`}
            >
              {/* İkon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm">
                <Icon size={22} className="text-white" />
              </div>

              {/* İçerik */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-semibold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-white leading-relaxed drop-shadow-sm">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="https://wa.me/90541111111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-white/35 backdrop-blur-md border border-white/30 px-4 py-2 rounded-xl hover:bg-white/45 hover:gap-3 transition-all duration-200 mt-auto w-fit"
              >
                Randevu Al
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
