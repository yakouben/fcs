"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { slides, AUTO_PLAY_INTERVAL, heroStats, clientNames, partnerNames } from "@/lib/data";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.5 }
    );
    const el = statsRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section className="relative min-h-svh w-full bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-24 md:pt-28 pb-12">

        {/* Hero Content */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.05]">
              <span className="uppercase">FCS</span>
              <br />
              <em className="font-serif italic normal-case">
                La qualité notre métier
              </em>
            </h1>

          <p className="mt-6 text-muted-foreground/80 text-sm md:text-base leading-relaxed max-w-lg font-light tracking-wide">
            Spécialisée dans les métiers de bouche, FCS propose des services
            complets de conception sur-mesure, de l&apos;idée à la réalisation.
            Installation, maintenance et SAV, depuis 2002.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-2.5 text-sm font-normal tracking-wide hover:opacity-90 transition-opacity"
            >
              Demander un devis
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-7 py-2.5 text-sm text-muted-foreground/80 font-light tracking-wide hover:text-foreground hover:bg-muted/40 transition-all duration-200"
            >
              Voir nos Projets
            </Link>
          </div>

          <div ref={statsRef} className="flex items-center gap-8 md:gap-12 mt-10">
            {heroStats.map((stat, i) => (
              <StatCounter key={i} stat={stat} visible={statsVisible} />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[1060px]">
            <svg className="absolute w-0 h-0" aria-hidden="true">
              <defs>
                <clipPath id="hero-mask" clipPathUnits="objectBoundingBox">
                  <path d="M0.03,0.08 C0.03,0.03 0.07,0 0.12,0 L0.88,0 C0.93,0 0.97,0.03 0.97,0.08 L0.97,0.75 C0.97,0.75 0.95,0.92 0.82,0.97 C0.7,1.02 0.55,0.88 0.45,0.88 C0.35,0.88 0.2,1.02 0.12,0.95 C0.04,0.88 0.03,0.75 0.03,0.75 Z" />
                </clipPath>
                <clipPath id="thumb-mask" clipPathUnits="objectBoundingBox">
                  <path d="M0.5,0 C0.7,0 0.85,0.05 0.92,0.15 C1,0.28 1,0.45 0.95,0.62 C0.88,0.82 0.7,0.95 0.5,1 C0.3,0.95 0.12,0.82 0.05,0.62 C0,0.45 0,0.28 0.08,0.15 C0.15,0.05 0.3,0 0.5,0" />
                </clipPath>
              </defs>
            </svg>

            <div
              className="relative w-full overflow-hidden"
              style={{ clipPath: "url(#hero-mask)", aspectRatio: "16/10" }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={slides[current].id}
                  initial={{ clipPath: "circle(0% at 50% 50%)" }}
                  animate={{ clipPath: "circle(150% at 50% 50%)" }}
                  exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
                  transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 z-10"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-cover"
                    priority
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 1060px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            

            <div className="absolute bottom-6 right-8 z-20 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

          {/* Marquees */}
          <div className="mt-8 md:mt-16 flex flex-col gap-2">
            {/* Client marquee */}
            <div className="relative flex items-center gap-4 md:gap-10 py-4 border-y border-border/5">
              <div className="shrink-0 flex items-center gap-3">
                <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-gold/50 shadow-[0_0_8px_rgba(198,169,98,0.3)]" />
                <span className="text-[9px] md:text-[11px] font-medium tracking-[0.3em] uppercase text-gold whitespace-nowrap">
                  Nos clients :
                </span>
              </div>

              <div className="relative flex-1 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
                <div className="flex w-max animate-marquee" style={{ animationDuration: "35s" }}>
                  {[...clientNames, ...clientNames].map((name, i) => (
                    <span
                      key={i}
                      className="mx-6 md:mx-10 whitespace-nowrap text-[13px] md:text-base italic text-muted-foreground/35 font-serif tracking-widest"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Partner marquee */}
            <div className="relative flex items-center gap-4 md:gap-10 py-4 border-b border-border/5">
              <div className="shrink-0 flex items-center gap-3">
                <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-gold/50 shadow-[0_0_8px_rgba(198,169,98,0.3)]" />
                <span className="text-[9px] md:text-[11px] font-medium tracking-[0.3em] uppercase text-gold whitespace-nowrap">
                  Nos partenaires :
                </span>
              </div>

              <div className="relative flex-1 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
                <div className="flex w-max animate-marquee-reverse" style={{ animationDuration: "50s" }}>
                  {[...partnerNames, ...partnerNames].map((name, i) => (
                    <span
                      key={i}
                      className="mx-6 md:mx-10 whitespace-nowrap text-[13px] md:text-base italic text-muted-foreground/35 font-serif tracking-widest"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

function StatCounter({
  stat,
  visible,
}: {
  stat: { value: number; suffix: string; label: string };
  visible: boolean;
}) {
  const count = useCountUp(stat.value, 1800, visible);
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl md:text-3xl font-light text-gold tracking-tight">
        {count}{stat.suffix}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground/60 mt-1">
        {stat.label}
      </span>
    </div>
  );
}
