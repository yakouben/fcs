"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Snowflake } from "lucide-react";
import { slides, AUTO_PLAY_INTERVAL, heroStats, clientNames } from "@/lib/data";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-svh w-full bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-24 md:pt-28 pb-12">

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
              <Snowflake className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/80 font-medium">
                Depuis 2002 en France
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.05]">
              <span className="uppercase">Fabrication de vitrines</span>
              <br />
              <em className="font-serif italic normal-case">
                <span className="text-gold font-extralight"> &amp; </span>
                d&apos;Agencement
              </em>
            </h1>

          <p className="mt-6 text-muted-foreground/80 text-sm md:text-base leading-relaxed max-w-lg font-light tracking-wide">
            Spécialisée dans les métiers de bouche, FCS propose des services
            complets de conception sur-mesure, de l&apos;idée à la réalisation.
            Installation, maintenance et SAV.
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
              Voir nos réalisations
            </Link>
          </div>

          <div className="flex items-center gap-8 md:gap-12 mt-10">
            {heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-light text-gold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground/60 mt-1">
                  {stat.label}
                </span>
              </div>
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
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 1060px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="absolute -bottom-4 left-0 md:-left-6 lg:-left-10 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 overflow-hidden shadow-lg z-20"
              style={{ clipPath: "url(#thumb-mask)" }}
            >
              <Image
                src={slides[(current + 1) % slides.length].src}
                alt="Next slide preview"
                fill
                className="object-cover"
                quality={60}
                sizes="160px"
              />
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

        {/* Client marquee */}
        <div className="relative overflow-hidden py-5 mt-4">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-max animate-marquee" style={{ animationDuration: "20s" }}>
            {[...clientNames, ...clientNames].map((name, i) => (
              <span
                key={i}
                className="mx-6 whitespace-nowrap text-sm md:text-base italic text-muted-foreground/50 font-serif tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
