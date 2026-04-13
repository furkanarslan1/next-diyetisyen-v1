import { CalendarCheck, ClipboardList, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Randevu Al",
    description:
      "WhatsApp veya telefon üzerinden kolayca randevu oluştur. İlk görüşme ücretsiz, hiçbir yükümlülük yok.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Kişisel Plan Hazırlanır",
    description:
      "Yaşam tarzın, sağlık geçmişin ve hedeflerin doğrultusunda sana özel beslenme programı oluşturulur.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Hedefe Ulaş",
    description:
      "Düzenli takip ve gerektiğinde plan güncellemeleriyle kalıcı sonuçlara ulaşırsın.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-green-950 py-20 px-6 overflow-hidden">
      {/* Başlık */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-widest text-green-400 uppercase mb-3">
          Süreç
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 leading-tight">
          3 Adımda{" "}
          <span className="bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
            Sağlıklı Yaşam
          </span>
        </h2>
        <p className="mt-4 text-neutral-300 max-w-xl mx-auto text-sm md:text-base">
          Başlamak için doğru an her zaman şimdi. Basit adımlarla sağlık
          yolculuğuna ilk adımı at.
        </p>
      </div>

      {/* Adımlar */}
      <div className="max-w-5xl mx-auto relative">
        {/* Bağlantı çizgisi — masaüstü */}
        <div className="hidden lg:block absolute top-14 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-linear-to-r from-green-200 via-emerald-300 to-teal-200 animate-gradient" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="flex flex-col items-center text-center gap-5 group"
              >
                {/* İkon + Numara */}
                <div className="relative">
                  <div className="flex items-center justify-center w-28 h-28 rounded-full bg-linear-to-br from-green-400 via-emerald-400 to-teal-500 animate-gradient shadow-md shadow-green-900/50 group-hover:shadow-green-800/60 group-hover:scale-105 transition-all duration-300">
                    <Icon size={36} className="text-white" />
                  </div>
                  {/* Adım numarası */}
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-white border-2 border-green-400 text-xs font-bold text-green-600">
                    {index + 1}
                  </span>
                </div>

                {/* İçerik */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-neutral-100">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
