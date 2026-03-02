"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    const path = href.split("#")[0] || "/";
    return pathname === path;
  };

  return (
    <>
      {/* ── Desktop floating pill ── */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-1.5 rounded-full border px-4 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl shadow-lg shadow-black/[0.06] border-border/40"
            : "bg-background/50 backdrop-blur-sm border-border/25"
        }`}
      >
        <Link href="/">
          <Image src="/logo-fcs.png" alt="FCS Logo" width={36} height={36} className="mx-3 rounded-full" />
        </Link>

        <span className="h-5 w-px bg-border/30 mx-2" />

        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
              className={`px-6 py-2 text-[13px] tracking-[0.04em] rounded-full transition-all duration-300 font-light ${
                isActive(link.href)
                  ? "text-foreground bg-muted/40"
                  : "text-muted-foreground/70 hover:text-foreground"
              }`}
          >
            {link.label}
          </Link>
        ))}

        <span className="h-5 w-px bg-border/30 mx-2" />
      </nav>

      {/* ── Mobile bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div
          className={`flex items-center justify-between px-5 py-3 transition-all duration-300 ${
            scrolled || mobileOpen
              ? "bg-background/90 backdrop-blur-md shadow-sm"
              : "bg-transparent"
          }`}
        >
          <Link href="/">
            <Image src="/logo-fcs.png" alt="FCS Logo" width={48} height={48} className="rounded-full" />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/20 shadow-xl"
            >
              <div className="flex flex-col px-6 py-6 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 text-sm rounded-xl transition-colors ${
                      isActive(link.href)
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <link.icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
