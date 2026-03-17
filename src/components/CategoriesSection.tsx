"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";

export default function CategoriesSection() {
  return (
    <section className="bg-background pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="mx-auto max-w-7xl px-4">

          <div className="flex flex-col items-center text-center mb-14 md:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4 block">
              Ce que nous faisons
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground uppercase">
              Nos Catégories<br />
              <em className="font-serif italic normal-case">de métiers</em>
            </h2>
            <p className="mt-4 text-muted-foreground/80 text-sm md:text-base max-w-md leading-relaxed font-light tracking-wide">
              Des solutions d&apos;agencement et de froid adaptées à chaque métier de bouche.
            </p>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              <div className={`relative overflow-hidden bg-muted/30 ${cat.radius}`}>
                <div className="aspect-[3/4] relative">
                  <Image
                    src={cat.src}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={60}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div className="mt-5 px-1">
                <h3 className="text-lg md:text-xl font-normal text-foreground tracking-tight">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
