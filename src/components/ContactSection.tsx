"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">

          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground uppercase">
              Parlons de votre<br />
              <em className="font-serif italic normal-case">projet</em>
            </h2>
            <p className="mt-4 text-muted-foreground/80 text-sm md:text-base max-w-md leading-relaxed font-light tracking-wide">
              Devis gratuit et sans engagement. Réponse sous 24h.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <motion.a
            href="tel:+33667617159"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group flex flex-col items-center gap-4 rounded-3xl border border-border/30 bg-muted/10 px-6 py-8 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
              <Phone className="h-5 w-5 text-gold" strokeWidth={1.4} />
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1">Téléphone</p>
              <p className="text-sm font-light text-foreground tracking-wide">+33 6 67 61 71 59</p>
            </div>
          </motion.a>

          <motion.a
            href="https://wa.me/33667617159"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col items-center gap-4 rounded-3xl border border-border/30 bg-muted/10 px-6 py-8 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
              <MessageCircle className="h-5 w-5 text-gold" strokeWidth={1.4} />
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1">WhatsApp</p>
              <p className="text-sm font-light text-foreground tracking-wide">Message direct</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/fcs_concept/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col items-center gap-4 rounded-3xl border border-border/30 bg-muted/10 px-6 py-8 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
              <Instagram className="h-5 w-5 text-gold" strokeWidth={1.4} />
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1">Instagram</p>
              <p className="text-sm font-light text-foreground tracking-wide">@fcs_concept</p>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
