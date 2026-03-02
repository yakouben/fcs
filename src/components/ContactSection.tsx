"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background py-12 md:py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl bg-foreground rounded-3xl px-8 py-14 md:py-20 flex flex-col items-center text-center"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase text-background/40 mb-6 block">
          Contact
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-background tracking-tight mb-10">
          Un projet d&apos;agencement ?
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://wa.me/33667617159"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-background text-foreground text-sm font-light tracking-wide hover:bg-background/90 transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            WhatsApp
          </a>
          <a
            href="tel:+330143829199"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-background/20 text-background text-sm font-light tracking-wide hover:bg-background/10 transition-all duration-300"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            +33 01 43 82 91 99
          </a>
        </div>
      </motion.div>
    </section>
  );
}
