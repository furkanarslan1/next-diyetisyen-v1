import { BlogPost } from "@/lib/types/blog";

// ─────────────────────────────────────────────
// Yeni blog yazısı eklemek için bu diziye yeni
// bir nesne ekleyin. slug benzersiz olmalıdır.
// ─────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: "kilo-vermek-icin-dogru-beslenme",
    title: "Kilo Vermek İçin Doğru Beslenme Nasıl Olmalı?",
    excerpt:
      "Kalıcı kilo vermenin sırrı açlık çekmekte değil, doğru besinleri doğru miktarda tüketmektedir. İşte bilimsel temelli beslenme önerileri.",
    coverImage: "/blog/diyet-blog-1.webp",
    category: "Kilo Yönetimi",
    date: "2024-03-10",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "Kilo vermek için uygulanan çoğu diyet, kısa vadede sonuç verse de uzun vadede sürdürülemez hale gelir. Bunun temel sebebi, vücudun ihtiyaç duyduğu besinlerden yoksun bırakılmasıdır.",
      },
      {
        type: "heading",
        text: "Kalori Açığı mı, Yoksa Besin Kalitesi mi?",
      },
      {
        type: "paragraph",
        text: "Evet, kalori dengesi önemlidir. Ancak 1500 kalorilik bir fast food ile 1500 kalorilik dengeli bir öğün, vücutta çok farklı etkiler yaratır. Besin kalitesi, hormonal denge, tokluk hissi ve metabolizma hızı açısından belirleyici rol oynar.",
      },
      {
        type: "heading",
        text: "Sağlıklı Kilo Vermenin Temel Kuralları",
      },
      {
        type: "list",
        items: [
          "Öğün atlamayın — metabolizmanızı yavaşlatır.",
          "Her öğünde protein tüketin — tokluk hissini artırır.",
          "İşlenmiş şeker ve un ürünlerini azaltın.",
          "Günde en az 2 litre su için.",
          "Uyku düzeninize dikkat edin — uyku eksikliği iştah artırır.",
        ],
      },
      {
        type: "tip",
        text: "Uzman İpucu: Tabağınızın yarısını sebze, çeyreğini protein, çeyreğini kompleks karbonhidrat ile doldurun. Bu basit kural pek çok danışanımın işini kolaylaştırdı.",
      },
      {
        type: "paragraph",
        text: "Unutmayın, kilo verme süreci bir maraton; sprint değil. Sabırlı ve tutarlı olmak, hızlı ama sürdürülemez yöntemlere başvurmaktan çok daha etkilidir.",
      },
    ],
  },
  {
    slug: "pcos-ve-beslenme",
    title: "PCOS'ta Beslenme: Hormonal Dengeyi Destekleyen Gıdalar",
    excerpt:
      "Polikistik over sendromu olan kadınlar için doğru beslenme, semptomları hafifletmede ilaç kadar etkili olabilir.",
    coverImage: "/blog/diyet-blog-2.webp",
    category: "PCOS",
    date: "2024-02-20",
    readTime: 6,
    content: [
      {
        type: "paragraph",
        text: "PCOS (Polikistik Over Sendromu), insülin direnci, hormonal dengesizlik ve kronik düşük dereceli iltihaplanma ile karakterize bir durumdur. Beslenme, bu tablonun yönetiminde kritik bir rol oynar.",
      },
      {
        type: "heading",
        text: "İnsülin Direncini Azaltan Besinler",
      },
      {
        type: "list",
        items: [
          "Tam tahıllar (beyaz un yerine bulgur, yulaf, kinoa)",
          "Yeşil yapraklı sebzeler (ıspanak, roka, brokoli)",
          "Omega-3 açısından zengin besinler (somon, ceviz, keten tohumu)",
          "Tarçın — insülin duyarlılığını artırır",
          "Düşük glisemik indeksli meyveler (çilek, yaban mersini)",
        ],
      },
      {
        type: "heading",
        text: "Kaçınılması Gereken Besinler",
      },
      {
        type: "list",
        items: [
          "Rafine şeker ve beyaz un ürünleri",
          "Trans yağ içeren işlenmiş gıdalar",
          "Alkol",
          "Yüksek glisemik indeksli besinler",
        ],
      },
      {
        type: "tip",
        text: "Uzman İpucu: PCOS'ta glüten veya süt ürünlerinin kısıtlanması herkese uymaz. Bireysel intolerans testleri yaptırmadan kısıtlama yerine, önce genel beslenme kalitesini artırmaya odaklanın.",
      },
    ],
  },
  {
    slug: "sporcu-beslenmesi-temel-ilkeler",
    title: "Sporcu Beslenmesinde Bilinmesi Gereken 5 Temel İlke",
    excerpt:
      "Antrenman performansınızı artırmak ve toparlanmayı hızlandırmak için beslenmenizi nasıl düzenlemeniz gerektiğini öğrenin.",
    coverImage: "/blog/diyet-blog-3.webp",
    category: "Sporcu Beslenmesi",
    date: "2024-01-15",
    readTime: 4,
    content: [
      {
        type: "paragraph",
        text: "Spor performansı; antrenman kalitesi, dinlenme ve beslenmenin bir bütünüdür. Bu üçlünün en sık ihmal edilen halkası ise beslenmedir.",
      },
      {
        type: "heading",
        text: "1. Karbonhidrat Yakıtınızdır",
      },
      {
        type: "paragraph",
        text: "Karbonhidratlar, kaslarınızın temel enerji kaynağıdır. Antrenman öncesi 1-3 saat içinde tüketilen kompleks karbonhidratlar (yulaf, pirinç, muz) performansı doğrudan etkiler.",
      },
      {
        type: "heading",
        text: "2. Protein Toparlanma İçindir",
      },
      {
        type: "paragraph",
        text: "Antrenman sonrası 30-60 dakika içinde 20-30 gram protein tüketmek, kas protein sentezini en üst düzeye çıkarır. Yumurta, tavuk göğsü, yoğurt veya whey protein bu dönem için idealdir.",
      },
      {
        type: "heading",
        text: "3. Yağları Kesmeyin",
      },
      {
        type: "paragraph",
        text: "Sağlıklı yağlar (avokado, zeytinyağı, kuruyemiş), hormon üretimi ve eklem sağlığı için vazgeçilmezdir.",
      },
      {
        type: "heading",
        text: "4. Hidrasyon Performans Demektir",
      },
      {
        type: "paragraph",
        text: "Vücut ağırlığının %2'si kadar su kaybı bile performansı %10-20 düşürür. Antrenman boyunca düzenli su tüketmeyi alışkanlık haline getirin.",
      },
      {
        type: "heading",
        text: "5. Zamanlama Önemlidir",
      },
      {
        type: "list",
        items: [
          "Antrenman öncesi (1-3 saat): Karbonhidrat ağırlıklı öğün",
          "Antrenman sırasında: Su ve gerekirse elektrolit",
          "Antrenman sonrası (30-60 dk): Protein + karbonhidrat kombinasyonu",
        ],
      },
      {
        type: "tip",
        text: "Uzman İpucu: Takviye almadan önce mutlaka bir diyetisyen veya sporcu hekimiyle görüşün. Gereksiz takviyeler hem bütçenizi zorlar hem de bazı durumlarda zararlı olabilir.",
      },
    ],
  },
];

// Slug'a göre tek yazı getiren yardımcı fonksiyon
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Kategoriye göre filtrele
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

// Tüm slug'ları getir (Next.js generateStaticParams için)
export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}