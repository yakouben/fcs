"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat, Clock, Phone, Mail, Instagram } from "lucide-react";

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A962] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <Image
            src="/logo-fcs.png"
            alt="FCS"
            width={100}
            height={100}
            className="opacity-90"
          />
        </motion.div>

        {/* Construction icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl bg-[#C6A962]/10 border border-[#C6A962]/20 flex items-center justify-center mb-8"
        >
          <HardHat className="w-10 h-10 text-[#C6A962]" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl sm:text-4xl font-light tracking-wide text-foreground mb-4"
        >
          Site en construction
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground font-light tracking-wide text-base sm:text-lg leading-relaxed mb-10"
        >
          Nous travaillons sur quelque chose d&apos;exceptionnel.
          <br />
          Notre nouveau site arrive très bientôt.
        </motion.p>

        {/* Animated progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-48 h-[1px] bg-border relative mb-10 origin-left"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#C6A962]"
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Clock icon + coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 text-muted-foreground/60 text-sm font-light tracking-widest uppercase mb-12"
        >
          <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Bientôt disponible</span>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xs font-light tracking-widest uppercase text-muted-foreground/50 mb-2">
            Contactez-nous en attendant
          </p>

          <div className="flex items-center gap-4">
            <a
              href="tel:+330143829199"
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-[#C6A962] hover:border-[#C6A962]/40 transition-all duration-300"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:contact@fcs-agencement.fr"
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-[#C6A962] hover:border-[#C6A962]/40 transition-all duration-300"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-[#C6A962] hover:border-[#C6A962]/40 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 text-[11px] font-light tracking-wider text-muted-foreground/30"
      >
      </motion.p>
    </div>
  );
}
