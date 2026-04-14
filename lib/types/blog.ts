export interface BlogPost {
  slug: string;          // URL'de kullanılır: /blog/slug
  title: string;
  excerpt: string;       // Kısa açıklama (kart görünümünde)
  coverImage: string;    // /public klasöründeki görsel yolu
  category: string;      // Örn: "Beslenme", "Tarifler", "Sağlık"
  date: string;          // "2024-03-15" formatında
  readTime: number;      // Dakika cinsinden okuma süresi
  content: BlogSection[]; // Yazının bölümleri
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "tip";
  text?: string;           // paragraph ve heading için
  items?: string[];        // list için
}