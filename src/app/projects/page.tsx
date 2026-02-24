"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Project data ─── */
const projects = [
  {
    id: 1,
    title: "Boulangerie Projet 1",
    category: "Boulangerie",
    location: "Île-de-France",
    year: "2024",
    images: ["/boul1.webp", "/boul11.webp", "/boul12.webp", "/boul13.webp", "/boul14.webp"],
    description:
      "Conception et réalisation complète d'une boulangerie : vitrines réfrigérées, comptoirs de présentation, éclairage et agencement sur mesure.",
    scope: ["Vitrines réfrigérées", "Comptoir de présentation", "Éclairage LED", "Agencement complet"],
  },
  {
    id: 2,
    title: "Boulangerie Projet 2",
    category: "Boulangerie",
    location: "Île-de-France",
    year: "2024",
    images: ["/boul21.webp", "/boul22.webp", "/boul23.webp", "/boul24.webp"],
    description:
      "Agencement complet d'une boulangerie avec comptoirs en marbre, vitrines réfrigérées et mobilier sur mesure.",
    scope: ["Comptoir marbre", "Vitrines réfrigérées", "Mobilier sur mesure", "Froid commercial"],
  },
  {
    id: 3,
    title: "Boulangerie Projet 3",
    category: "Boulangerie",
    location: "Île-de-France",
    year: "2023",
    images: ["/boul3.webp", "/boul31.webp"],
    description:
      "Installation de vitrines réfrigérées, comptoirs de service et aménagement intérieur pour une boulangerie artisanale.",
    scope: ["Vitrines réfrigérées", "Comptoir de service", "Agencement complet"],
  },
  {
    id: 4,
    title: "Boulangerie Projet 4",
    category: "Boulangerie",
    location: "Île-de-France",
    year: "2023",
    images: ["/boul41.webp", "/boul42.webp", "/boul43.webp"],
    description:
      "Aménagement complet avec vitrines réfrigérées, comptoirs de présentation et décoration intérieure soignée.",
    scope: ["Vitrines réfrigérées", "Comptoir de présentation", "Décoration intérieure", "Froid commercial"],
  },
  {
    id: 5,
    title: "Pâtisserie Projet 1",
    category: "Pâtisserie",
    location: "Île-de-France",
    year: "2024",
    images: ["/pati11.webp", "/pali12.webp"],
    description:
      "Création d'un espace pâtisserie avec vitrines de présentation, éclairage d'ambiance et agencement sur mesure.",
    scope: ["Vitrines pâtisserie", "Éclairage ambiance", "Mobilier sur mesure", "Froid pâtissier"],
  },
  {
    id: 6,
    title: "Pâtisserie Projet 2",
    category: "Pâtisserie",
    location: "Île-de-France",
    year: "2024",
    images: ["/pati21.webp", "/pati22.webp", "/pati23.webp", "/pati24.webp"],
    description:
      "Conception et réalisation d'un espace pâtisserie haut de gamme avec vitrines réfrigérées et décor raffiné.",
    scope: ["Vitrines réfrigérées", "Comptoir pâtissier", "Décoration", "Froid commercial"],
  },
];

const categories = ["Tous", "Boulangerie", "Pâtisserie"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const filtered =
    activeFilter === "Tous" ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setModalImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setModalImageIndex(
      (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* ── Hero header ── */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground/60 hover:text-foreground transition-colors mb-6"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Retour à l&apos;accueil
                </Link>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground uppercase leading-[1.05]">
                  NOS RÉALISATIONS
                  <br />
                  <em className="font-serif italic normal-case font-extralight">nos projets</em>
                </h1>
                <p className="mt-5 text-muted-foreground/70 text-sm md:text-base max-w-lg font-light tracking-wide leading-relaxed">
                  Chaque projet est une collaboration unique. Découvrez nos agencements et
                  installations réalisés pour les métiers de bouche.
                </p>
              </div>

              <div className="flex items-center gap-8 md:gap-10">
                {[
                  { value: String(projects.length), label: "Projets" },
                  { value: "20+", label: "Années" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-light text-gold tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50 mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-border/40 mt-10" />

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-[13px] tracking-wide transition-all duration-300 border ${
                    activeFilter === cat
                      ? "bg-gold text-white border-gold"
                      : "bg-transparent text-muted-foreground/70 border-border/50 hover:text-foreground hover:border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-xs text-muted-foreground/40 tracking-wide">
                {filtered.length} projet{filtered.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </section>

        {/* ── Projects grid ── */}
        <section className="px-4 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={() => openProject(project)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-muted/20 aspect-[4/3]"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase bg-white/10 backdrop-blur-sm text-white/80 border border-white/10">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.15em] bg-white/10 backdrop-blur-sm text-white/60 border border-white/10">
                          {project.images.length} photos
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="flex items-center gap-1.5 text-xs text-white/60">
                          <MapPin className="h-3 w-3" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-white/60">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="h-4 w-4 text-gold-light" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <section className="bg-foreground text-background py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 flex flex-col items-center text-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-4">
              Votre projet
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight uppercase">
              CONCRÉTISONS VOTRE VISION
              <br />
              <em className="font-serif italic normal-case font-extralight">votre projet</em>
            </h2>
            <p className="mt-5 text-background/50 text-sm md:text-base max-w-md font-light tracking-wide leading-relaxed">
              Chaque espace mérite un agencement unique. Parlons de votre projet et créons
              ensemble un lieu d&apos;exception.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-3 text-sm font-normal tracking-wide hover:opacity-90 transition-opacity"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33667617159"
                className="inline-flex items-center gap-2 rounded-full border border-background/20 px-8 py-3 text-sm text-background/70 font-light tracking-wide hover:text-background hover:border-background/40 transition-all duration-300"
              >
                <Phone className="h-3.5 w-3.5" />
                Nous appeler
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── Project detail modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image side */}
              <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[500px] shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={modalImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedProject.images[modalImageIndex]}
                      alt={`${selectedProject.title} - ${modalImageIndex + 1}`}
                      fill
                      className="object-cover"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5" />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalImageIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === modalImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-6 md:p-10 overflow-y-auto">
                <span className="self-start px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase bg-muted/50 text-muted-foreground border border-border/50 mb-5">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center gap-4 mt-3 mb-6">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                    <MapPin className="h-3 w-3" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                    <Calendar className="h-3 w-3" />
                    {selectedProject.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 block mb-3">
                    Prestations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.scope.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-xs text-muted-foreground bg-muted/40 border border-border/30 font-light"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 mt-6 overflow-x-auto">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalImageIndex(idx)}
                        className={`relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                          idx === modalImageIndex
                            ? "border-gold"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="56px"
                          quality={40}
                        />
                      </button>
                    ))}
                  </div>
                )}

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-white px-7 py-2.5 text-sm font-normal tracking-wide hover:bg-gold-dark transition-colors mt-8 self-start"
                >
                  Projet similaire ?
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
