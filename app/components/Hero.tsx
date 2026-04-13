import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-[100vw] md:h-[60vw]">
      <Image
        src="/diyetisyen-hero.webp"
        alt="Uzman diyetisyen danışmanlık"
        fill
        loading="eager"
        className="object-cover"
      />

      {/* Karartma katmanı */}
      <div className="absolute inset-0 bg-black/55" />

      {/* İçerik — header yüksekliği kadar üstten boşluk */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 pt-16 text-center text-white">
        <h1 className="animate-fade-in-down text-lg font-bold leading-snug md:text-5xl">
          Uzman Diyetisyeninizle
          <br />
          <span className="text-orange-500">Sağlıklı ve Kalıcı</span>
          <br className="md:hidden" /> Değişime Başlayın
        </h1>

        <p className="animate-fade-in-up animate-delay-200 max-w-xs text-xs text-gray-200 md:max-w-xl md:text-lg">
          Kişiye özel beslenme programları ve uzman rehberliğiyle sağlık
          hedeflerinize güvenle ulaşın. Kalıcı sonuçlar için doğru adımı atın.
        </p>

        <Link
          href="https://wa.me/90541111111"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up animate-delay-400 mt-1 rounded-md bg-orange-500 px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-orange-600 md:px-6 md:py-3 md:text-base"
        >
          Ücretsiz Danışma Al
        </Link>
      </div>
    </div>
  );
}
