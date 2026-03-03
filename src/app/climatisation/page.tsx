"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks";
import {
  Wind,
  Thermometer,
  Settings2,
  CheckCircle2,
  ArrowUpRight,
  Phone,
  MessageCircle,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    value: "installation",
    label: "Installation",
    icon: Wind,
    title: "Installation professionnelle",
    desc: "Nous installons des systèmes de climatisation adaptés à votre surface commerciale — split, multi-split, gainable ou cassette. Chaque installation est réalisée par nos techniciens certifiés RGE.",
    points: [
      "Audit thermique offert avant installation",
      "Pose soignée, sans nuisance pour votre activité",
      "Mise en service complète incluse",
      "Garantie pièces & main d'œuvre",
    ],
  },
  {
    value: "maintenance",
    label: "Maintenance",
    icon: Settings2,
    title: "Contrat de maintenance",
    desc: "Un entretien régulier prolonge la durée de vie de votre équipement et garantit son efficacité énergétique. Nos contrats sont flexibles et adaptés à votre rythme d'activité.",
    points: [
      "Nettoyage des filtres & batteries",
      "Contrôle du niveau de fluide frigorigène",
      "Vérification des performances thermiques",
      "Rapport d'intervention détaillé",
    ],
  },
  {
    value: "depannage",
    label: "Dépannage",
    icon: Thermometer,
    title: "Dépannage & SAV",
    desc: "Une panne ne prévient pas. Notre équipe intervient rapidement en Île-de-France pour diagnostiquer et résoudre tout problème sur votre installation climatique.",
    points: [
      "Diagnostic précis sur site",
      "Remplacement avec pièces d'origine",
      "Disponible toute l'année",
    ],
  },
];

const stats = [
  { icon: ShieldCheck, value: null, label: "RGE", text: "Certifié" },
  { icon: Wind, value: 24, label: "Année d’expérience", text: null },
];

const faq = [
  {
    q: "Quel type de climatisation convient à mon commerce ?",
    a: "Cela dépend de la surface, de l'isolation et de votre usage. Nous réalisons un audit thermique gratuit pour vous recommander la solution la plus adaptée : split mural, cassette plafond ou système gainable.",
  },
  {
    q: "Combien de temps dure une installation ?",
    a: "Une installation standard (split mural) prend entre 4 et 8 heures. Un système multi-split ou gainable peut nécessiter 1 à 2 jours. Nous planifions selon vos horaires pour minimiser l'impact sur votre activité.",
  },
  {
    q: "Proposez-vous un contrat de maintenance annuel ?",
    a: "Oui. Nos contrats de maintenance annuels comprennent une visite de contrôle, le nettoyage complet et un rapport d'état. C'est obligatoire pour les systèmes de plus de 2 kW.",
  },
  {
    q: "Intervenez-vous en urgence ?",
    a: "Absolument. Notre équipe SAV intervient en Île-de-France pour tout dépannage. Contactez-nous par téléphone ou WhatsApp pour une prise en charge prioritaire.",
  },
];

export default function ClimatisationPage() {
  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-28 pb-0 px-4">
        <div className="mx-auto max-w-7xl">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour à l&apos;accueil
            </Link>
          </motion.div>

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <Badge variant="outline" className="rounded-full border-gold/40 text-gold/80 bg-gold/5 text-[11px] tracking-[0.2em] uppercase font-normal px-4 py-1.5">
              Climatisation
            </Badge>
            <Separator orientation="horizontal" className="w-12 bg-border/30" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 font-light">FCS Concept</span>
          </motion.div>

          {/* Heading + image row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-foreground leading-[1.0] mb-6">
                Confort<br />
                thermique<br />
              </h1>
              <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed font-light max-w-md mb-8">
                Installation, maintenance et dépannage de systèmes de climatisation professionnels — pour votre commerce, boutique ou espace de vente. Techniciens certifiés RGE.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/33667617159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3 text-sm font-normal tracking-wide hover:opacity-90 transition-opacity"
                >
                  Demander un devis
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
                <a
                  href="tel:+330143829199"
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 px-7 py-3 text-sm text-muted-foreground font-light tracking-wide hover:text-foreground hover:bg-muted/30 transition-all duration-200"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Appeler
                </a>
              </div>
            </motion.div>

            {/* Right — 3 images stacked */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-5 grid-rows-2 gap-3 h-[400px] lg:h-[480px]"
            >
              {/* Big left */}
              <div className="col-span-3 row-span-2 relative rounded-3xl overflow-hidden">
                <Image
                  src="/clim1.jpeg"
                  alt="Installation climatisation commerciale"
                  fill
                  className="object-cover"
                  priority
                  quality={60}
                  sizes="(max-width: 1024px) 60vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/20 px-3 py-1.5 text-[11px] font-normal text-gold tracking-wide">
                    <ShieldCheck className="h-3 w-3" strokeWidth={1.5} />
                    Certifié RGE
                  </span>
                </div>
              </div>

              {/* Top right */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden">
                <Image
                  src="/clim2.jpeg"
                  alt="Split mural professionnel"
                  fill
                  className="object-cover"
                  quality={60}
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              {/* Bottom right */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden">
                <Image
                  src="/clim3.jpeg"
                  alt="Unité extérieure climatisation"
                  fill
                  className="object-cover"
                  quality={60}
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/20 border border-border/20 rounded-3xl overflow-hidden"
          >
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Tabs ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-3 block">Nos prestations</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground uppercase">
              CE QUE NOUS FAISONS<br />
              <em className="font-serif italic normal-case font-extralight">comme prestations</em>
            </h2>
          </motion.div>

          <Tabs defaultValue="installation">

            <TabsList className="w-full h-auto bg-transparent p-0 border-b border-border/25 rounded-none justify-start gap-0 mb-10">
              {services.map((s) => (
                <TabsTrigger
                  key={s.value}
                  value={s.value}
                  className="
                    relative rounded-none border-0 bg-transparent shadow-none
                    text-muted-foreground/50 hover:text-foreground
                    data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none
                    px-6 pb-4 pt-1 text-sm tracking-wide font-light transition-all duration-300 h-auto
                    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-foreground after:scale-x-0 after:transition-transform after:duration-300
                    data-[state=active]:after:scale-x-100
                  "
                >
                  {s.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((s) => (
              <TabsContent key={s.value} value={s.value} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start"
                >
                  {/* Left */}
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gold/8 border border-gold/20 flex items-center justify-center mb-8">
                      <s.icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-foreground tracking-tight mb-4">
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed font-light mb-8">
                      {s.desc}
                    </p>
                    <a
                      href="https://wa.me/33667617159"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-2.5 text-sm font-normal tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Demander un devis
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  </div>

                  {/* Right — checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.points.map((point, i) => (
                      <Card key={i} className="border-border/40 bg-muted/10 shadow-none rounded-2xl">
                        <CardContent className="flex items-start gap-3 p-5">
                          <CheckCircle2 className="h-[18px] w-[18px] text-gold shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-[15px] text-foreground font-medium leading-snug">{point}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-3 block">Questions fréquentes</span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground uppercase">
              FAQ<br />
              <em className="font-serif italic normal-case font-extralight">vos questions</em>
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-border/25 rounded-2xl px-6 bg-muted/5 data-[state=open]:bg-muted/10 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-sm font-normal tracking-wide text-foreground hover:no-underline py-5 [&>svg]:text-gold [&>svg]:h-4 [&>svg]:w-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground/70 font-light leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 md:px-16 md:py-20 text-center"
          >
            {/* subtle grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

            <span className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-4 block">Contact</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-background tracking-tight mb-4">
              Un projet de climatisation ?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/33667617159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-3 text-sm font-normal tracking-wide hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                WhatsApp
              </a>
              <a
                href="tel:+330143829199"
                className="inline-flex items-center gap-2 rounded-full border border-background/20 text-background px-8 py-3 text-sm font-light tracking-wide hover:bg-background/10 transition-all duration-200"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                +33 01 43 82 91 99
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatCard({ stat }: { stat: { icon: React.ElementType; value: number | null; label: string; text: string | null } }) {
  const { count, ref } = useCountUp(stat.value ?? 0);
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-8 bg-muted/5 hover:bg-muted/10 transition-colors duration-300">
      <stat.icon className="h-5 w-5 text-gold" strokeWidth={1.3} />
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="text-2xl font-light text-foreground tracking-tight"
      >
        {stat.value !== null ? `${count}` : stat.text}
      </span>
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground/50 text-center">{stat.label}</span>
    </div>
  );
}
