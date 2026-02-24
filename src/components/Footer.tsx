import Image from "next/image";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { navLinks, categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-background/10">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-fcs.png"
                alt="FCS Logo"
                width={44}
                height={44}
                className="rounded-full brightness-0 invert"
              />
              <div>
                <span className="text-lg font-light tracking-wide">FCS</span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-background/40 -mt-0.5">
                  Froid &amp; Agencement
                </span>
              </div>
            </div>
            <p className="text-sm text-background/50 font-light leading-relaxed max-w-sm">
              Spécialisée dans les métiers de bouche, FCS propose des services
              complets de conception sur-mesure, de l&apos;idée à la réalisation.
            </p>
            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: Instagram,     href: "https://www.instagram.com/fcs_concept/", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/33667617159",              label: "WhatsApp"  },
                { icon: Phone,         href: "tel:+33667617159",                       label: "Phone"     },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-background/10 text-background/40 hover:text-background hover:border-background/30 hover:bg-background/5 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation + Métiers */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-background/30 mb-6">
                  Navigation
                </h4>
                <ul className="space-y-3.5">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-background/50 hover:text-background font-light tracking-wide transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-background/30 mb-6">
                  Métiers
                </h4>
                <ul className="space-y-3.5">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <span className="text-sm text-background/50 font-light tracking-wide">
                        {cat.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-background/30 mb-6">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+33667617159"
                  className="text-sm text-background/50 hover:text-background font-light tracking-wide transition-colors duration-300"
                >
                  +33 6 67 61 71 59
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33667617159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/50 hover:text-background font-light tracking-wide transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=11+avenue+Charles+de+Gaulle,+94470+Boissy-Saint-Léger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/50 hover:text-background font-light tracking-wide leading-relaxed transition-colors duration-300"
                >
                  11 av. Charles de Gaulle<br />
                  94470 Boissy-Saint-Léger
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[11px] text-background/30 font-light tracking-wide">
            &copy; 2002–2026 FCS &mdash; Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
