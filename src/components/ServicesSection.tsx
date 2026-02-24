"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4 block">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground uppercase">
            Ce que nous proposons<br />
            <em className="font-serif italic normal-case">comme services</em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative flex items-center gap-5 md:gap-8 px-6 md:px-8 py-6 md:py-7 rounded-2xl border-b border-border/20 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-foreground hover:border-transparent cursor-default"
            >
              <span className="text-[11px] tracking-[0.3em] font-light shrink-0 w-6 text-muted-foreground/30 transition-colors duration-700 group-hover:text-background/40">
                {s.num}
              </span>
              <h3 className="text-lg md:text-xl font-normal tracking-tight w-40 md:w-52 shrink-0 text-foreground transition-colors duration-700 group-hover:text-background">
                {s.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed font-normal hidden sm:block text-muted-foreground/80 transition-colors duration-700 group-hover:text-background/75">
                {s.desc}
              </p>
              <div className="shrink-0 w-10 h-10 rounded-full border border-border/40 text-muted-foreground/40 flex items-center justify-center transition-all duration-700 group-hover:border-background/30 group-hover:text-background">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
