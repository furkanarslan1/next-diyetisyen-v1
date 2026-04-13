import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "İlk danışma ücretsiz mi?",
    answer:
      "Evet, ilk görüşme tamamen ücretsizdir. Bu görüşmede sağlık geçmişinizi, hedeflerinizi ve beklentilerinizi konuşarak size en uygun danışmanlık sürecini birlikte planlıyoruz.",
  },
  {
    question: "Online danışmanlık yüz yüze kadar etkili mi?",
    answer:
      "Online danışmanlık, yüz yüze görüşmeyle aynı içeriği ve kaliteyi sunar. Beslenme programınız, takip seanslarınız ve iletişim kanallarınız eksiksiz şekilde yürütülür. Konum fark etmeksizin destek alabilirsiniz.",
  },
  {
    question: "Ne kadar sürede sonuç alabilirim?",
    answer:
      "Sonuçlar kişiden kişiye farklılık gösterir. Hedeflerinize ve beslenme programına bağlı olarak genellikle ilk 2–4 hafta içinde fark edilir değişimler yaşanır. Kalıcı ve sağlıklı değişim için ortalama 3–6 aylık bir süreç önerilir.",
  },
  {
    question: "Beslenme programı hazırlanırken nelere dikkat edilir?",
    answer:
      "Programınız hazırlanırken yaş, cinsiyet, sağlık geçmişi, mevcut ilaç kullanımı, alerji ve intoleranslar, yaşam tarzı, aktivite düzeyi ve kişisel tercihleriniz göz önünde bulundurulur. Hiçbir program birbirinin kopyası değildir.",
  },
  {
    question: "Diyet yaparken aç kalacak mıyım?",
    answer:
      "Hayır. Hazırlanan programlar yeterli enerji alımını sağlayacak şekilde düzenlenir. Amaç sizi aç bırakmak değil, doğru besinleri doğru miktarda tüketmenizi sağlamaktır. Tok ve enerjik hissederek hedefinize ulaşabilirsiniz.",
  },
  {
    question: "Kronik hastalığım varsa danışabilir miyim?",
    answer:
      "Evet. Diyabet, hipertansiyon, tiroid bozuklukları, PCOS, kolesterol gibi kronik hastalıklar için özel tıbbi beslenme tedavisi programları oluşturulmaktadır. Doktorunuzla koordineli şekilde ilerliyoruz.",
  },
];

export default function FAQ() {
  return (
    <section className="relative w-full py-20 px-6 bg-neutral-900 overflow-hidden">
      {/* Blob arka planlar */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-800/30 blur-3xl animate-blob-2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-800/25 blur-3xl animate-blob-1 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-12">
        {/* Başlık */}
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 uppercase mb-3">
            SSS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Sıkça Sorulan{" "}
            <span className="bg-linear-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Sorular
            </span>
          </h2>
          <p className="mt-4 text-green-200/60 text-sm md:text-base">
            Aklınızdaki soruların cevabını bulamadıysanız bize ulaşın.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-5 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
            >
              <AccordionTrigger className="text-white font-medium text-sm md:text-base py-4 hover:no-underline hover:text-green-300 transition-colors [&>svg]:text-green-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-green-100/70 text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}