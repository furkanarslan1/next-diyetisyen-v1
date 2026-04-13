"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8,    suffix: "+",  label: "Yıl Deneyim",       duration: 1200 },
  { value: 500,  suffix: "+",  label: "Mutlu Danışan",      duration: 1800 },
  { value: 1200, suffix: "+",  label: "Beslenme Planı",     duration: 2000 },
  { value: 300,  suffix: "+",  label: "Online Seans",        duration: 1600 },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  duration,
  active,
}: (typeof stats)[number] & { active: boolean }) {
  const count = useCountUp(value, duration, active);
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-4xl md:text-5xl font-extrabold bg-linear-to-br from-green-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-gradient tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-sm md:text-base text-neutral-500 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Başlık */}
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-600 uppercase mb-3">
            Rakamlarla
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Sonuçlar{" "}
            <span className="bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Konuşuyor
            </span>
          </h2>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}