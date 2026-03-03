"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="realisations" className="bg-background pt-16 pb-10 md:pt-24 md:pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground uppercase">
              Nos Projets<br />
              <em className="font-serif italic normal-case">projets récents</em>
            </h2>
            <p className="mt-4 text-muted-foreground/80 text-sm md:text-base max-w-md leading-relaxed font-light tracking-wide">
              Découvrez une sélection de nos projets les plus récents.
            </p>
          </div>
          <Link
            href="/projects"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-2.5 text-sm text-gold font-light tracking-wide hover:text-gold-light hover:bg-gold/5 transition-all duration-200 self-start"
          >
            Voir tous les projets
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="relative mt-6 md:mt-10">
          <div className="flex gap-5 md:gap-7 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar pb-8 px-[5vw] -mx-[5vw] md:px-[calc((100vw-min(1280px,calc(100vw-80px)))/2)] md:-mx-[calc((100vw-min(1280px,calc(100vw-80px)))/2)] touch-pan-x">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="min-w-[280px] md:min-w-[400px] flex-shrink-0 snap-start"
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href="/projects"
                  className="group relative block overflow-hidden rounded-2xl bg-muted/20 aspect-[1.4/1]"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, 400px"
                    quality={60}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-light text-white tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs text-white/50">
                      {project.location}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
