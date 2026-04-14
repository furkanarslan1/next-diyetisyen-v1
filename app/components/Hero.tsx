import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-[75vh] md:h-[65vw] max-h-225 overflow-hidden">
      {/* Arka plan — mobilde bg-fixed kapalı, masaüstünde parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('/diyetisyen-hero-1.webp')" }}
      />

      {/* Karartma katmanı */}
      <div className="absolute inset-0 bg-black/55" />

      {/* İçerik */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 pt-16 text-center text-white">
        <h1 className="animate-fade-in-down text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Uzman Diyetisyeninizle
          <br />
          <span className="bg-linear-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
            Sağlıklı ve Kalıcı
          </span>
          <br /> Değişime Başlayın
        </h1>

        <p className="animate-fade-in-up animate-delay-200 max-w-sm text-sm leading-relaxed text-gray-300 md:max-w-xl md:text-lg">
          Kişiye özel beslenme programları ve uzman rehberliğiyle sağlık
          hedeflerinize güvenle ulaşın. Kalıcı sonuçlar için doğru adımı atın.
        </p>

        <Link
          href="https://wa.me/90541111111"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up animate-delay-400 mt-1 rounded-xl bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 animate-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 md:px-8 md:py-4 md:text-base"
        >
          Ücretsiz Danışma Al
        </Link>
      </div>
    </div>
  );
}
