import { Mail, MapPin, Phone } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.098 1.523 5.821L.057 23.428a.75.75 0 0 0 .915.915l5.607-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.518-5.16-1.42l-.37-.22-3.329.871.871-3.33-.22-.37A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

const contacts = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0511 111 11 11",
    href: "tel:+905111111111",
    gradient: "from-teal-400 via-green-500 to-emerald-600",
    speed: "animate-gradient-fast",
    external: false,
    whatsapp: false,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "0511 111 11 11",
    href: "https://wa.me/905111111111?text=Merhaba",
    gradient: "",
    speed: "",
    external: true,
    whatsapp: true,
  },
  {
    icon: Mail,
    label: "E-Posta",
    value: "info@diyetisyen.com",
    href: "mailto:info@diyetisyen.com",
    gradient: "from-teal-400 via-green-500 to-emerald-600",
    speed: "animate-gradient-fast",
    external: false,
    whatsapp: false,
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Byraklı, İzmir",
    href: "https://www.openstreetmap.org/?mlat=41.0550&mlon=28.8700#map=15/41.0550/28.8700",
    gradient: "from-teal-400 via-green-500 to-emerald-600",
    speed: "animate-gradient-fast",
    external: true,
    whatsapp: false,
  },
];

export default function Contact() {
  return (
    <section className="relative w-full bg-neutral-50 py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-green-100/60 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl animate-blob-2 pointer-events-none" />
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Başlık */}
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase mb-3">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Hemen{" "}
            <span className="bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Ulaşın
            </span>
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-sm md:text-base">
            Sorularınız için bize aşağıdaki kanallardan ulaşabilirsiniz. İlk
            görüşme ücretsizdir.
          </p>
        </div>

        {/* İçerik */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Sol: İletişim Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-row md:flex-col items-center md:items-center gap-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 p-5 shadow-sm hover:shadow-lg hover:bg-white/80 hover:-translate-y-1 transition-all duration-300 md:text-center"
                >
                  {/* İkon */}
                  {contact.whatsapp ? (
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl shadow-sm shrink-0 text-white"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      <Icon size={22} />
                    </div>
                  ) : (
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl shadow-sm shrink-0 bg-linear-to-br ${contact.gradient} ${contact.speed}`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                  )}
                  {/* Metin */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                      {contact.label}
                    </span>
                    <span className="text-sm font-semibold text-neutral-800 group-hover:text-green-600 transition-colors duration-200 break-all">
                      {contact.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Sağ: Harita */}
          <div
            id="map"
            className="rounded-2xl overflow-hidden shadow-md border border-neutral-100 min-h-72"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=28.8500%2C41.0400%2C28.8900%2C41.0700&layer=mapnik&marker=41.0550%2C28.8700"
              width="100%"
              height="100%"
              className="w-full h-full min-h-72"
              style={{ border: 0 }}
              loading="lazy"
              title="Konum"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
