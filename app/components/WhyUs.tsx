import {
  FlaskConical,
  HeartHandshake,
  Laptop,
  RefreshCw,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Kişiye Özel Yaklaşım",
    description:
      "Sağlık geçmişin, yaşam tarzın ve hedeflerin doğrultusunda tamamen sana özel program hazırlanır.",
  },
  {
    icon: FlaskConical,
    title: "Bilimsel Temelli Programlar",
    description:
      "Tüm beslenme planları güncel bilimsel araştırmalar ve kanıta dayalı tıp ilkeleri çerçevesinde oluşturulur.",
  },
  {
    icon: Laptop,
    title: "Online & Yüz Yüze Seçeneği",
    description:
      "Nerede olursan ol danışabilirsin. Online görüşme ile kliniğe gelme zorunluluğu olmadan destek alabilirsin.",
  },
  {
    icon: RefreshCw,
    title: "Sürekli Takip & Güncelleme",
    description:
      "Süreç boyunca düzenli kontroller yapılır, ihtiyaçların değiştikçe beslenme programın güncellenir.",
  },
  {
    icon: HeartHandshake,
    title: "Destekleyici ve Samimi İletişim",
    description:
      "Yargılamadan, baskı yapmadan; sadece seni dinleyerek ve motive ederek yanında olmayı önceliğim olarak görüyorum.",
  },
  {
    icon: ShieldCheck,
    title: "Kalıcı ve Sürdürülebilir Sonuçlar",
    description:
      "Kısa vadeli diyetler yerine, hayat boyu sürdürebileceğin sağlıklı beslenme alışkanlıkları kazandırmayı hedefliyorum.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative w-full py-20 px-6 bg-green-950 overflow-hidden">
      {/* Hareketli blob arka planlar */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-emerald-800/40 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-800/35 blur-3xl animate-blob-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-green-700/30 blur-3xl animate-blob-3 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-14">
        {/* Başlık */}
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 uppercase mb-3">
            Neden Biz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Neden{" "}
            <span className="bg-linear-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Beni Tercih Etmelisiniz?
            </span>
          </h2>
          <p className="mt-4 text-green-200/60 max-w-xl mx-auto text-sm md:text-base">
            Binlerce danışanın güvendiği, bilimsel ve insan odaklı bir
            danışmanlık deneyimi.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex flex-col items-center justify-center gap-4 aspect-square rounded-full bg-white/5 backdrop-blur-md border border-white/10 p-8 text-center hover:bg-white/10 hover:border-green-400/30 hover:-translate-y-1 transition-all duration-300"
              >
                {/* İkon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Icon size={24} className="text-green-300" />
                </div>

                {/* İçerik */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-green-100/60 leading-relaxed">
                    {reason.description}
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
