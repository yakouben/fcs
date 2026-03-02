import Image from "next/image";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 border-b border-background/10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-fcs.png"
                alt="FCS Logo"
                width={44}
                height={44}
                className="rounded-full brightness-0 invert opacity-90"
              />
              <div>
                <span className="text-xl font-light tracking-[0.12em]">FCS</span>
                <span className="block text-[9px] tracking-[0.3em] uppercase text-background/35 mt-0.5">
                  Froid · Climatisation · Agencement
                </span>
              </div>
            </div>

            <p className="text-sm text-background/45 font-light leading-relaxed max-w-sm">
              Spécialisée dans les métiers de bouche depuis 2002, FCS conçoit et
              réalise des espaces professionnels sur-mesure, de l&apos;idée à la
              livraison clé en main.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] tracking-[0.35em] uppercase text-background/30 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+330143829199"
                  className="group flex items-center gap-3 text-sm text-background/45 hover:text-background font-light tracking-wide transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-gold/50 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  +33 01 43 82 91 99
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33667617159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-background/45 hover:text-background font-light tracking-wide transition-colors duration-300"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-gold/50 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@fcs-concept.fr"
                  className="group flex items-center gap-3 text-sm text-background/45 hover:text-background font-light tracking-wide transition-colors duration-300"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-gold/50 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  contact@fcs-concept.fr
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=13+avenue+Charles+de+Gaulle,+94470+Boissy-Saint-Léger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-background/45 hover:text-background font-light tracking-wide leading-relaxed transition-colors duration-300"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold/50 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  <span>13 Av. Charles de Gaulle, 94470 Boissy-Saint-Léger</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center">
          <p className="text-[11px] text-background/25 font-light tracking-wide">
            &copy; 2002–2026 FCS &mdash; Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}
