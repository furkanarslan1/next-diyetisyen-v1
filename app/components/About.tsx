import {
  Baby,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Leaf,
  Scale,
} from "lucide-react";
import Image from "next/image";

const specializations = [
  {
    icon: Scale,
    label: "Kilo Yönetimi",
    bg: "from-green-400 via-emerald-500 to-teal-600",
    speed: "animate-gradient",
  },
  {
    icon: HeartPulse,
    label: "Tıbbi Beslenme Tedavisi",
    bg: "from-emerald-400 via-teal-500 to-green-600",
    speed: "animate-gradient-slow",
  },
  {
    icon: Leaf,
    label: "PCOS Diyeti",
    bg: "from-teal-400 via-green-500 to-emerald-600",
    speed: "animate-gradient-fast",
  },
  {
    icon: Dumbbell,
    label: "Sporcu Beslenmesi",
    bg: "from-green-500 via-teal-400 to-emerald-500",
    speed: "animate-gradient-slow",
  },
  {
    icon: Baby,
    label: "Hamilelik Beslenmesi",
    bg: "from-emerald-500 via-green-400 to-teal-500",
    speed: "animate-gradient",
  },
  {
    icon: ClipboardList,
    label: "Kişiye Özel Planlar",
    bg: "from-teal-500 via-emerald-400 to-green-500",
    speed: "animate-gradient-fast",
  },
];

const leftCards = specializations.slice(0, 3);
const rightCards = specializations.slice(3, 6);

function SpecCard({ spec }: { spec: (typeof specializations)[number] }) {
  const Icon = spec.icon;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl bg-linear-to-r ${spec.bg} ${spec.speed} px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center`}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm shrink-0">
        <Icon size={16} className="text-white" />
      </div>
      <span className="text-sm font-semibold text-white leading-tight">
        {spec.label}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section className="w-full bg-neutral-50 py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Üst: Başlık + Açıklama */}
        <div className="text-center flex flex-col gap-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase mb-3">
              Hakkımda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Merhaba, Ben{" "}
              <span className="bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Dyt. Ayşe Yılmaz
              </span>
            </h2>
          </div>
          <p className="text-neutral-500 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            Hacettepe Üniversitesi Beslenme ve Diyetetik bölümünden mezun
            olduktan sonra{" "}
            <strong className="text-neutral-700">8 yılı aşkın süredir</strong>{" "}
            klinik ve online danışmanlık alanında çalışıyorum. Her danışanımı
            bütüncül bir yaklaşımla değerlendiriyor, yaşam tarzına uygun ve{" "}
            <strong className="text-neutral-700">kalıcı sonuçlar</strong>{" "}
            hedefliyorum.
          </p>
        </div>

        {/* Alt: Kartlar + Resim */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8">
          {/* Sol kartlar */}
          <div className="flex flex-col gap-3">
            {leftCards.map((spec) => (
              <SpecCard key={spec.label} spec={spec} />
            ))}
          </div>

          {/* Orta: Görsel */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-b from-green-100 to-emerald-200 scale-110 blur-2xl opacity-70 animate-gradient" />
              <Image
                src="/diyetisyen.webp"
                alt="Dyt. Ayşe Yılmaz"
                width={620}
                height={820}
                loading="eager"
                className="relative z-10 w-80  md:w-2xl object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Sağ kartlar */}
          <div className="flex flex-col gap-3">
            {rightCards.map((spec) => (
              <SpecCard key={spec.label} spec={spec} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
