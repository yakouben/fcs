"use client";

import dynamic from "next/dynamic";

const ParisMap = dynamic(() => import("@/components/ParisMap"), { ssr: false });

export default function MapSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
            Nos implantations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Île-de-France &amp; Hors IDF
          </h2>
          <p className="mt-4 text-muted-foreground/80 text-sm md:text-base max-w-md leading-relaxed font-light tracking-wide">
            Principalement implantés en Île-de-France, nous intervenons aussi sur toute la France.
            Chaque repère représente un projet livré avec soin.
          </p>
        </div>
        <ParisMap />
      </div>
    </section>
  );
}
