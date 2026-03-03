"use client";

import React, { useState, useEffect, useRef } from "react";
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
import { useCountUp } from "@/lib/hooks";

/* ─── Project data (Ordered newest first) ─── */
const projects = [
  /* 2025 Projects */
  {
    id: 35,
    title: "BOULANGERIE LA VALENTONNAISE",
    category: "Boulangerie",
    location: "Valenton (94460)",
    year: "2025",
    images: [
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.30.55.jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.26 (1).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.26.jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.27 (1).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.27 (2).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.27.jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.28 (1).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.28 (2).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.28 (3).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.28.jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.29 (1).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.29 (2).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.29.jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.30 (1).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.30 (2).jpeg",
      "/VALENTONNAISE/WhatsApp Image 2026-02-26 at 10.38.30.jpeg",
    ],
    description: "Création clé en main : travaux complets, comptoir vitrine, vitrine 4 faces et meubles arrières.",
    scope: ["Création", "Agencement", "Froid"],
  },
  {
    id: 34,
    title: "BOULANGERIE MAISON LAMARCK",
    category: "Boulangerie",
    location: "Paris (75018)",
    year: "2025",
    images: [
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.34.57 (1).jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.34.57 (2).jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.34.57 (3).jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.34.57.jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.34.58 (1).jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.34.58.jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.35.00 (1).jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.35.00 (2).jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.35.00.jpeg",
      "/MAISON LAMARCK/WhatsApp Image 2026-02-26 at 10.35.01.jpeg",
    ],
    description: "Rénovation clé en main : démolition, travaux intérieurs/extérieurs, vitrines 4 faces et équipements.",
    scope: ["Démolition", "Rénovation", "Vitrines"],
  },
  {
    id: 33,
    title: "BOULANGERIE MAISON GAÏA",
    category: "Boulangerie",
    location: "Le Raincy (93340)",
    year: "2025",
    images: [
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.10.jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.11 (1).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.11 (2).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.11 (3).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.11.jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.12 (1).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.12 (2).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.12 (3).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.12 (4).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.12.jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.13 (1).jpeg",
      "/maison-gaia/WhatsApp Image 2026-02-26 at 10.33.13.jpeg",
    ],
    description: "Création clé en main : façades, stores, plomberie, enseigne, vitrines et équipements.",
    scope: ["Façades", "Enseigne", "Plomberie"],
  },
  {
    id: 32,
    title: "BOULANGERIE L'ASNIEROISE",
    category: "Boulangerie",
    location: "Asnières-sur-Seine (92600)",
    year: "2025",
    images: [
      "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.55.jpeg",
      "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.56 (1).jpeg",
      "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.56 (2).jpeg",
      "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.56.jpeg",
      "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.57.jpeg",
      "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.58 (1).jpeg",
      "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.58.jpeg",
    ],
    description: "Rénovation complète : travaux intérieurs, luminaires, comptoir vitrine, grille à pain et meubles arrières.",
    scope: ["Rénovation", "Luminaires", "Grille à pain"],
  },
  {
    id: 31,
    title: "BOULANGERIE PAVILLON DES PAINS",
    category: "Boulangerie",
    location: "Le Plessis-Robinson (92350)",
    year: "2025",
    images: [
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.08 (1).jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.08 (2).jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.08 (3).jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.08 (4).jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.08.jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.09 (1).jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.09 (2).jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.09.jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.10 (1).jpeg",
      "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.10.jpeg",
    ],
    description: "Projet création clé en main : comptoir vitrine réfrigérée & neutre, vitrine 4 faces, vitrine bijoux, et travaux complets.",
    scope: ["Vitrine bijoux", "Vitrine 4 faces", "Clé en main"],
  },

  /* 2024 Projects */
  {
    id: 30,
    title: "LA ROSE DE TUNIS",
    category: "Boulangerie",
    location: "Pantin (93500)",
    year: "2024",
    images: [
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.52 (1).jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.52 (2).jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.52 (3).jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.52.jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.53 (1).jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.53 (2).jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.53 (3).jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.53.jpeg",
      "/LA ROSE DE TUNIS/WhatsApp Image 2026-02-26 at 10.20.54.jpeg",
    ],
    description: "Fourniture et pose des vitrines, meubles arrières et étagères de présentation.",
    scope: ["Vitrines", "Étagères", "Agencement"],
  },
  {
    id: 28,
    title: "TAKUMI PATISSERIE - DAUPHINE",
    category: "Boulangerie",
    location: "Paris (75006)",
    year: "2024",
    images: [
      "/takumi-dauphine/WhatsApp Image 2026-02-26 at 10.19.11 (1).jpeg",
      "/takumi-dauphine/WhatsApp Image 2026-02-26 at 10.19.11 (2).jpeg",
      "/takumi-dauphine/WhatsApp Image 2026-02-26 at 10.19.11.jpeg",
      "/takumi-dauphine/WhatsApp Image 2026-02-26 at 10.19.12 (1).jpeg",
      "/takumi-dauphine/WhatsApp Image 2026-02-26 at 10.19.12 (2).jpeg",
      "/takumi-dauphine/WhatsApp Image 2026-02-26 at 10.19.12.jpeg",
    ],
    description: "Fourniture et pose d'une vitrine pâtisserie et climatisation complète du local.",
    scope: ["Vitrine pâtisserie", "Climatisation"],
  },
  {
    id: 29,
    title: "TAKUMI PATISSERIE - PYRAMIDES",
    category: "Boulangerie",
    location: "Paris (75001)",
    year: "2024",
    images: [
      "/TAKUMI PATISSERIE 1/WhatsApp Image 2026-02-26 at 10.16.52 (1).jpeg",
      "/TAKUMI PATISSERIE 1/WhatsApp Image 2026-02-26 at 10.16.52.jpeg",
      "/TAKUMI PATISSERIE 1/WhatsApp Image 2026-02-26 at 10.16.53 (1).jpeg",
      "/TAKUMI PATISSERIE 1/WhatsApp Image 2026-02-26 at 10.16.53 (2).jpeg",
      "/TAKUMI PATISSERIE 1/WhatsApp Image 2026-02-26 at 10.16.53.jpeg",
    ],
    description: "Fourniture et pose de vitrine pâtisserie et tour arrière réfrigérée.",
    scope: ["Vitrine pâtisserie", "Tour réfrigérée"],
  },
  {
    id: 27,
    title: "CHOCOLATERIE DE NEUVILLE",
    category: "Boulangerie",
    location: "Ibos (65420)",
    year: "2024",
    images: [
      "/CHOCOLATERIE DE NEUVILLE/WhatsApp Image 2026-02-26 at 10.13.21 (1).jpeg",
      "/CHOCOLATERIE DE NEUVILLE/WhatsApp Image 2026-02-26 at 10.13.21.jpeg",
      "/CHOCOLATERIE DE NEUVILLE/WhatsApp Image 2026-02-26 at 10.13.22 (1).jpeg",
      "/CHOCOLATERIE DE NEUVILLE/WhatsApp Image 2026-02-26 at 10.13.22.jpeg",
      "/CHOCOLATERIE DE NEUVILLE/WhatsApp Image 2026-02-26 at 10.13.24 (1).jpeg",
      "/CHOCOLATERIE DE NEUVILLE/WhatsApp Image 2026-02-26 at 10.13.24.jpeg",
    ],
    description: "Fourniture et pose d'une vitrine spécialisée pour glace, macarons et chocolat.",
    scope: ["Vitrine chocolat", "Macarons", "Froid"],
  },
  {
    id: 26,
    title: "BOULANGERIE MIETTE À MIETTE",
    category: "Boulangerie",
    location: "Nice (06300)",
    year: "2024",
    images: [
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.52 (1).jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.52 (2).jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.52.jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.53 (1).jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.53 (2).jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.53 (3).jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.53.jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.54 (1).jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.54 (2).jpeg",
      "/miette-miette/WhatsApp Image 2026-02-26 at 10.11.54.jpeg",
    ],
    description: "Installation complète : vitrine, pantière, vitrine boissons, équipements CHR et laboratoire pâtissier.",
    scope: ["Laboratoire pâtissier", "CHR", "Froid"],
  },
  {
    id: 25,
    title: "BOULANGERIE LA CARAVELLE",
    category: "Boulangerie",
    location: "Villeneuve-la-Garenne (92390)",
    year: "2024",
    images: [
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.05 (1).jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.05 (2).jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.05 (3).jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.05.jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.06 (1).jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.06 (2).jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.06 (3).jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.06.jpeg",
      "/BOULANGERIE LA CARAVELLE/WhatsApp Image 2026-02-26 at 10.09.07.jpeg",
    ],
    description: "Fourniture et pose : vitrine boulangerie, pantière, vitrine pour boissons et meubles arrières.",
    scope: ["Pantière", "Vitrine boissons"],
  },
  {
    id: 24,
    title: "BOULANGERIE L'INSTANT GOURMAND",
    category: "Boulangerie",
    location: "Nanterre (92000)",
    year: "2024",
    images: [
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.23 (1).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.23 (2).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.23.jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.24 (1).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.24 (2).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.24 (3).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.24.jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.25 (1).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.25 (2).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.25 (3).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.25.jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.26 (1).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.26 (2).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.26 (3).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.26.jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.27 (1).jpeg",
      "/L'INSTANT GOURMAND/WhatsApp Image 2026-02-26 at 10.07.27.jpeg",
    ],
    description: "Installation complète : comptoir vitrine réfrigérée, neutre et caisse, grille à pain, meubles arrières et bar.",
    scope: ["Comptoir caisse", "Grille à pain", "Bar"],
  },
  {
    id: 23,
    title: "BOULANGERIE MAISON JEBRANE II",
    category: "Boulangerie",
    location: "Mitry-Mory (77290)",
    year: "2024",
    images: [
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.44 (1).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.44.jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.45 (1).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.45 (2).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.45 (3).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.45 (4).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.45.jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.46 (1).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.46.jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.47 (1).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.47 (2).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.47.jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.48 (1).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.48 (2).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.48.jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.49 (1).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.49 (2).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.49 (3).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.49 (4).jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.49.jpeg",
      "/MAISON JEBRANE/WhatsApp Image 2026-02-26 at 10.00.50.jpeg",
    ],
    description: "Création clé en main. Travaux intérieurs/extérieurs, plomberie, ventilation, enseigne, luminaires et vitrines.",
    scope: ["Projet global", "Ventilation", "Enseigne"],
  },
  {
    id: 22,
    title: "BOUCHERIE DE L'ANGLE VALLAURIS",
    category: "Boucherie",
    location: "Vallauris (06220)",
    year: "2024",
    images: [
      "/BOUCHERIE DE L'ANGLE VALLAURIS/WhatsApp Image 2026-02-26 at 09.56.31.jpeg",
      "/BOUCHERIE DE L'ANGLE VALLAURIS/WhatsApp Image 2026-02-26 at 09.56.34 (1).jpeg",
      "/BOUCHERIE DE L'ANGLE VALLAURIS/WhatsApp Image 2026-02-26 at 09.56.34.jpeg",
      "/BOUCHERIE DE L'ANGLE VALLAURIS/WhatsApp Image 2026-02-26 at 09.56.35.jpeg",
    ],
    description: "Fourniture et pose de vitrine réfrigérée, groupes chambre froide et équipement de laboratoire.",
    scope: ["Froid industriel", "Chambre froide", "Vitrines boucherie"],
  },

  /* 2023 Projects */
  {
    id: 21,
    title: "BOULANGERIE MAISON JEBRANE",
    category: "Boulangerie",
    location: "Villeparisis (77270)",
    year: "2023",
    images: [
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.18 (1).jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.18 (2).jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.18.jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.19 (1).jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.19 (2).jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.19 (3).jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.19.jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.20.jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.21 (1).jpeg",
      "/BOULANGERIE MAISON JEBRANE/WhatsApp Image 2026-02-26 at 09.54.21.jpeg",
    ],
    description: "Fourniture et pose : vitrine, meubles arrière pantière and vitrine à boissons.",
    scope: ["Vitrine boissons", "Pantière"],
  },
  {
    id: 15,
    title: "BOULANGERIE L'INSTANT D'ENVIE",
    category: "Boulangerie",
    location: "Le Bourget (93350)",
    year: "2023",
    images: [
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.44 (1).jpeg",
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.44.jpeg",
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45 (1).jpeg",
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45 (2).jpeg",
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45 (3).jpeg",
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45.jpeg",
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.46 (1).jpeg",
      "/BOULANGERIE L'INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.46.jpeg",
    ],
    description: "Création clé en main. Installation complète : travaux de sol, façades, stores, enseigne, luminaires, chambres froides, plomberie et équipement laboratoire.",
    scope: ["Gros œuvre", "Vitrines", "Chambres froides", "Fournil"],
  },
  {
    id: 20,
    title: "BOULANGERIE INSTANT D'ENVIE",
    category: "Boulangerie",
    location: "Sceaux (92260)",
    year: "2023",
    images: [
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.44 (1).jpeg",
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.44.jpeg",
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45 (1).jpeg",
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45 (2).jpeg",
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45 (3).jpeg",
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.45.jpeg",
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.46 (1).jpeg",
      "/BOULANGERIE INSTANT D'ENVIE/WhatsApp Image 2026-02-26 at 09.50.46.jpeg",
    ],
    description: "Fourniture et pose : vitrine boulangerie, bar, meubles arrières, grilles à pains, vitrine 4 faces et libre-service.",
    scope: ["Libre-service", "Vitrine 4 faces", "Bar"],
  },
  {
    id: 19,
    title: "BOULANGERIE SACRÉ GOURMAND",
    category: "Boulangerie",
    location: "Saint-Ouen-sur-Seine (94400)",
    year: "2023",
    images: [
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.43.jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.43 (1).jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.44.jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.44 (1).jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.44 (2).jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.45.jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.45 (1).jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.45 (2).jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.45 (3).jpeg",
      "/sacre-gourmand/WhatsApp Image 2026-02-26 at 09.47.46.jpeg",
    ],
    description: "Fourniture et pose : vitrine, meubles arrières, équipement chaud/froid, éléments décoratifs et laboratoire pâtisserie.",
    scope: ["Équipement chaud", "Laboratoire", "Décoration"],
  },
  {
    id: 18,
    title: "BOULANGERIE MAISON BEAUCLAIR",
    category: "Boulangerie",
    location: "Rosny-sous-Bois (93110)",
    year: "2023",
    images: [
      "/BOULANGERIE MAISON BEAUCLAIR/WhatsApp Image 2026-02-26 at 09.44.18 (1).jpeg",
      "/BOULANGERIE MAISON BEAUCLAIR/WhatsApp Image 2026-02-26 at 09.44.18.jpeg",
      "/BOULANGERIE MAISON BEAUCLAIR/WhatsApp Image 2026-02-26 at 09.44.19 (1).jpeg",
      "/BOULANGERIE MAISON BEAUCLAIR/WhatsApp Image 2026-02-26 at 09.44.19 (2).jpeg",
      "/BOULANGERIE MAISON BEAUCLAIR/WhatsApp Image 2026-02-26 at 09.44.19 (3).jpeg",
      "/BOULANGERIE MAISON BEAUCLAIR/WhatsApp Image 2026-02-26 at 09.44.19.jpeg",
      "/BOULANGERIE MAISON BEAUCLAIR/WhatsApp Image 2026-02-26 at 09.44.20.jpeg",
    ],
    description: "Fourniture et pose de vitrine boulangerie, meubles arrières pantière, habillages et meubles froid.",
    scope: ["Pantière", "Habillages", "Meubles froid"],
  },
  {
    id: 17,
    title: "BOULANGERIE LE PAVILLON DU PAIN",
    category: "Boulangerie",
    location: "Pontoise (95300)",
    year: "2023",
    images: [
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.49.jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.50 (1).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.50 (2).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.50.jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.51 (1).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.51 (2).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.51 (3).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.51.jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.52 (1).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.52 (2).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.52.jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.53 (1).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.53 (2).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.53.jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.54 (1).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.54 (2).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.54 (3).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.54.jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.55 (1).jpeg",
      "/pavillon-pain-pontoise/WhatsApp Image 2026-02-26 at 09.41.55.jpeg",
    ],
    description: "Installation complète incluant travaux intérieurs/extérieurs, ventilation, vitrine, bar et meubles arrières.",
    scope: ["Ventilation", "Bar", "Vitrines", "Travaux extérieurs"],
  },
  {
    id: 16,
    title: "BOULANGERIE LE PALACIO",
    category: "Boulangerie",
    location: "Noisy-le-Grand (93160)",
    year: "2023",
    images: [
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.20 (1).jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.20.jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.21 (1).jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.21 (2).jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.21 (3).jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.21.jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.22 (1).jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.22 (2).jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.22 (3).jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.22.jpeg",
      "/BOULANGERIE LE PALACIO/WhatsApp Image 2026-02-26 at 09.35.23.jpeg",
    ],
    description: "Fourniture et pose : vitrine, meubles arrières, éléments de décoration et petit équipement CHR.",
    scope: ["Vitrines", "Décoration", "Petit CHR"],
  },
  {
    id: 14,
    title: "BOULANGERIE L'ARC SPORTIF",
    category: "Boulangerie",
    location: "Colombes (92700)",
    year: "2023",
    images: [
      "/BOULANGERIE L'ARC SPORTIF COLOMBES/WhatsApp Image 2026-02-26 at 09.26.21.jpeg",
      "/BOULANGERIE L'ARC SPORTIF COLOMBES/WhatsApp Image 2026-02-26 at 09.26.22.jpeg",
      "/BOULANGERIE L'ARC SPORTIF COLOMBES/WhatsApp Image 2026-02-26 at 09.26.23 (1).jpeg",
      "/BOULANGERIE L'ARC SPORTIF COLOMBES/WhatsApp Image 2026-02-26 at 09.26.23.jpeg",
    ],
    description: "Fourniture et pose de vitrines boulangerie, meubles arrières, équipement CHR et décorations murales.",
    scope: ["Vitrines", "Meubles arrières", "Équipement CHR", "Décoration"],
  },
  {
    id: 13,
    title: "BOULANGERIE L'ATELIER DU PAIN",
    category: "Boulangerie",
    location: "Aulnay-sous-Bois (93600)",
    year: "2023",
    images: [
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.41 (1).jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.41.jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.42 (1).jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.42 (2).jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.42.jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.43 (1).jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.43 (2).jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.43.jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.44 (1).jpeg",
      "/BOULANGERIE L'ATELIER DU PAIN AULNAY-SOUS-BOIS/WhatsApp Image 2026-02-26 at 09.23.44.jpeg",
    ],
    description: "Projet clé en main. Fourniture et installation complète : façades, stores, enseignes, luminaires, chambre froide, plomberie, comptoir vitrine, meubles arrières et équipement du laboratoire.",
    scope: ["Façades & Stores", "Chambre Froide", "Vitrines", "Laboratoire"],
  },

  /* 2022 Projects */
  {
    id: 12,
    title: "PIZZERIA VALENTON",
    category: "Boulangerie",
    location: "Valenton (94460)",
    year: "2022",
    images: [
      "/PIZZERIA/WhatsApp Image 2026-02-25 at 14.31.31 (1).jpeg",
      "/PIZZERIA/WhatsApp Image 2026-02-25 at 14.31.31 (2).jpeg",
      "/PIZZERIA/WhatsApp Image 2026-02-25 at 14.31.31 (3).jpeg",
      "/PIZZERIA/WhatsApp Image 2026-02-25 at 14.31.31.jpeg",
      "/PIZZERIA/WhatsApp Image 2026-02-25 at 14.31.32 (1).jpeg",
      "/PIZZERIA/WhatsApp Image 2026-02-25 at 14.31.32.jpeg",
    ],
    description: "Projet clé en main : climatisation, enseigne lumineuse, mobilier, vitrine réfrigérée et équipement total de la cuisine.",
    scope: ["Climatisation", "Enseigne", "Cuisine complète"],
  },
  {
    id: 11,
    title: "BOULANGERIE MAISON GHAFIF",
    category: "Boulangerie",
    location: "Bois-Colombes (92270)",
    year: "2022",
    images: [
      "/maison-ghafif/WhatsApp Image 2026-02-25 at 14.28.45 (1).jpeg",
      "/maison-ghafif/WhatsApp Image 2026-02-25 at 14.28.45.jpeg",
      "/maison-ghafif/WhatsApp Image 2026-02-25 at 14.28.46 (1).jpeg",
      "/maison-ghafif/WhatsApp Image 2026-02-25 at 14.28.46 (2).jpeg",
      "/maison-ghafif/WhatsApp Image 2026-02-25 at 14.28.46.jpeg",
      "/maison-ghafif/WhatsApp Image 2026-02-25 at 14.28.47.jpeg",
    ],
    description: "Fourniture et pose vitrine, meubles, menuiseries, équipement chaud et froid.",
    scope: ["Vitrines", "Menuiseries", "Équipement chaud/froid"],
  },
  {
    id: 10,
    title: "BOULANGERIE GRAIN D'OR",
    category: "Boulangerie",
    location: "Rueil-Malmaison (92500)",
    year: "2022",
    images: [
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.05 (1).jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.05 (2).jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.05 (3).jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.05.jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.06 (1).jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.06 (2).jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.06 (3).jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.06.jpeg",
      "/GRAIN D'OR/WhatsApp Image 2026-02-25 at 14.26.07.jpeg",
    ],
    description: "Fourniture et pose vitrine, meubles, menuiseries, équipement chaud et froid.",
    scope: ["Vitrines", "Menuiseries", "Équipement chaud/froid"],
  },
  {
    id: 9,
    title: "BOULANGERIE MAISON GOURMANDISE",
    category: "Boulangerie",
    location: "Ivry-sur-Seine (94200)",
    year: "2022",
    images: [
      "/BOULANGERIE MAISON GOURMANDISE/WhatsApp Image 2026-02-25 at 14.20.20 (1).jpeg",
      "/BOULANGERIE MAISON GOURMANDISE/WhatsApp Image 2026-02-25 at 14.20.20 (2).jpeg",
      "/BOULANGERIE MAISON GOURMANDISE/WhatsApp Image 2026-02-25 at 14.20.20 (3).jpeg",
      "/BOULANGERIE MAISON GOURMANDISE/WhatsApp Image 2026-02-25 at 14.20.20.jpeg",
      "/BOULANGERIE MAISON GOURMANDISE/WhatsApp Image 2026-02-25 at 14.20.21.jpeg",
      "/BOULANGERIE MAISON GOURMANDISE/WhatsApp Image 2026-02-25 at 14.20.22 (1).jpeg",
      "/BOULANGERIE MAISON GOURMANDISE/WhatsApp Image 2026-02-25 at 14.20.22.jpeg",
    ],
    description: "Fourniture et pose de chambres froide, laboratoire pâtisserie & fournil entier.",
    scope: ["Chambres froide", "Laboratoire", "Fournil"],
  },
  {
    id: 8,
    title: "BOULANGERIE PAVILLON SUCRE",
    category: "Boulangerie",
    location: "Île-de-France",
    year: "2022",
    images: [
      "/pavillon-sucre/WhatsApp Image 2026-02-25 at 14.16.59 (1).jpeg",
      "/pavillon-sucre/WhatsApp Image 2026-02-25 at 14.16.59.jpeg",
      "/pavillon-sucre/WhatsApp Image 2026-02-25 at 14.17.00.jpeg",
      "/pavillon-sucre/WhatsApp Image 2026-02-25 at 14.17.01 (1).jpeg",
      "/pavillon-sucre/WhatsApp Image 2026-02-25 at 14.17.01 (2).jpeg",
      "/pavillon-sucre/WhatsApp Image 2026-02-25 at 14.17.01.jpeg",
    ],
    description: "Fourniture et pose vitrine, meubles, menuiseries, équipement chaud et froid, chaises et tables.",
    scope: ["Menuiseries", "Équipement chaud/froid", "Mobilier"],
  },


  /* 2021 Projects */
  {
    id: 6,
    title: "HOTEL THIAIS",
    category: "Boulangerie",
    location: "Thiais (94320)",
    year: "2021",
    images: [
      "/hotel-thiais/WhatsApp Image 2026-02-25 at 14.14.35.jpeg",
      "/hotel-thiais/WhatsApp Image 2026-02-25 at 14.14.36 (1).jpeg",
      "/hotel-thiais/WhatsApp Image 2026-02-25 at 14.14.36.jpeg",
      "/hotel-thiais/WhatsApp Image 2026-02-25 at 14.14.37 (1).jpeg",
      "/hotel-thiais/WhatsApp Image 2026-02-25 at 14.14.37.jpeg",
    ],
    description: "Climatisation et petit équipement cuisine pour établissement hôtelier.",
    scope: ["Climatisation", "Petit équipement"],
  },
  {
    id: 5,
    title: "BOULANGERIE DE LA MAIRIE",
    category: "Boulangerie",
    location: "Vitry-sur-Seine (94400)",
    year: "2021",
    images: [
      "/BOULANGERIE DE LA MAIRIE/WhatsApp Image 2026-02-25 at 14.12.34 (1).jpeg",
      "/BOULANGERIE DE LA MAIRIE/WhatsApp Image 2026-02-25 at 14.12.34.jpeg",
      "/BOULANGERIE DE LA MAIRIE/WhatsApp Image 2026-02-25 at 14.12.35 (1).jpeg",
      "/BOULANGERIE DE LA MAIRIE/WhatsApp Image 2026-02-25 at 14.12.35 (2).jpeg",
      "/BOULANGERIE DE LA MAIRIE/WhatsApp Image 2026-02-25 at 14.12.35.jpeg",
      "/BOULANGERIE DE LA MAIRIE/WhatsApp Image 2026-02-25 at 14.12.36.jpeg",
    ],
    description: "Fourniture et pose de la vitrine, meubles arrières et équipement frigorifique.",
    scope: ["Vitrine", "Meubles arrières", "Froid"],
  },
  {
    id: 4,
    title: "BOULANGERIE LA ROSE",
    category: "Boulangerie",
    location: "Paris (75017)",
    year: "2021",
    images: [
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.46 (1).jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.46 (2).jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.46.jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.47 (1).jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.47 (2).jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.47.jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.48 (1).jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.48 (2).jpeg",
      "/BOULANGERIE LA ROSE - 2021/WhatsApp Image 2026-02-25 at 14.09.48.jpeg",
    ],
    description: "Fourniture et pose de la vitrine, meubles arrières et équipement frigorifique.",
    scope: ["Vitrine", "Meubles arrières", "Froid"],
  },
  {
    id: 3,
    title: "BOULANGERIE LA PRALINOISE",
    category: "Boulangerie",
    location: "Le Kremlin-Bicêtre (94270)",
    year: "2021",
    images: [
      "/BOULANGERIE LA PRALINOISE - 2021/WhatsApp Image 2026-02-25 at 14.06.03 (1).jpeg",
      "/BOULANGERIE LA PRALINOISE - 2021/WhatsApp Image 2026-02-25 at 14.06.03.jpeg",
      "/BOULANGERIE LA PRALINOISE - 2021/WhatsApp Image 2026-02-25 at 14.06.04.jpeg",
    ],
    description: "Fourniture et pose de la vitrine, meubles arrières et équipement frigorifique.",
    scope: ["Vitrine", "Meubles arrières", "Froid"],
  },
  {
    id: 2,
    title: "BOULANGERIE LA DALLE D'ARGENTEUIL",
    category: "Boulangerie",
    location: "Argenteuil (95100)",
    year: "2021",
    images: [
      "/BOULANGERIE LA DALLE D'ARGENTEUIL/WhatsApp Image 2026-02-25 at 14.02.02.jpeg",
      "/BOULANGERIE LA DALLE D'ARGENTEUIL/WhatsApp Image 2026-02-25 at 14.02.03.jpeg",
      "/BOULANGERIE LA DALLE D'ARGENTEUIL/WhatsApp Image 2026-02-25 at 14.02.04 (1).jpeg",
      "/BOULANGERIE LA DALLE D'ARGENTEUIL/WhatsApp Image 2026-02-25 at 14.02.04 (2).jpeg",
      "/BOULANGERIE LA DALLE D'ARGENTEUIL/WhatsApp Image 2026-02-25 at 14.02.04.jpeg",
    ],
    description: "Fourniture et pose de vitrine boulangerie, meuble froid et sec arrière vitrine.",
    scope: ["Vitrine boulangerie", "Meuble froid", "Meuble sec"],
  },
  {
    id: 1,
    title: "BOUCHERIE LMDV",
    category: "Boucherie",
    location: "Bagnolet (93170)",
    year: "2021",
    images: [
      "/Bouch LMDV/WhatsApp Image 2026-02-25 at 13.58.32.jpeg",
      "/Bouch LMDV/WhatsApp Image 2026-02-25 at 13.58.33 (1).jpeg",
      "/Bouch LMDV/WhatsApp Image 2026-02-25 at 13.58.33 (2).jpeg",
      "/Bouch LMDV/WhatsApp Image 2026-02-25 at 13.58.33.jpeg",
      "/Bouch LMDV/WhatsApp Image 2026-02-25 at 13.58.34 (1).jpeg",
      "/Bouch LMDV/WhatsApp Image 2026-02-25 at 13.58.34 (2).jpeg",
      "/Bouch LMDV/WhatsApp Image 2026-02-25 at 13.58.34.jpeg",
    ],
    description: "Fourniture et pose de chambres froide, arrière vitrine et vitrine boucherie.",
    scope: ["Chambres froide", "Arrière vitrine", "Vitrine boucherie"],
  },
];

const categories = ["Tous", "Boulangerie", "Boucherie"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const filtered =
    activeFilter === "Tous" ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const touchStartX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? nextImage() : prevImage();
    touchStartX.current = null;
  };

  // Scroll thumbnail strip to keep active thumb visible
  useEffect(() => {
    if (!thumbsRef.current) return;
    const active = thumbsRef.current.querySelector("[data-active='true']") as HTMLElement;
    if (active) {
      active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [modalImageIndex]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        {/* ── Hero header ── */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-4 text-center md:text-left">
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
                  NOS Projets
                  <br />
                  <em className="font-serif italic normal-case font-extralight">nos projets</em>
                </h1>
                <p className="mt-5 text-muted-foreground/70 text-sm md:text-base max-w-lg font-light tracking-wide leading-relaxed mx-auto md:mx-0">
                  Chaque projet est une collaboration unique. Découvrez nos agencements et
                  installations réalisés pour les métiers de bouche.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10">
                <ProjectStat value={projects.length} label="Projets" />
                <ProjectStat value={24} label="Années" suffix="+" />
              </div>
            </div>

            <div className="h-px bg-border/40 mt-10" />

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-[13px] tracking-wide transition-all duration-300 border ${activeFilter === cat
                    ? "bg-gold text-white border-gold"
                    : "bg-transparent text-muted-foreground/70 border-border/50 hover:text-foreground hover:border-border"
                    }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-xs text-muted-foreground/40 tracking-wide hidden sm:block">
                {filtered.length} projet{filtered.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </section>

        {/* ── Projects grid ── */}
        <section className="px-4 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => openProject(project)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-muted/20 aspect-[4/3]"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-[9px] md:text-[10px] tracking-[0.15em] uppercase bg-white/10 backdrop-blur-sm text-white/90 border border-white/10">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[9px] md:text-[10px] tracking-[0.1em] bg-white/5 backdrop-blur-sm text-white/50 border border-white/5">
                          {project.images.length} photos
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-light text-white tracking-tight leading-tight group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-white/60 font-light">
                          <MapPin className="h-3 w-3" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-white/60 font-light">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 border border-white/10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image side */}
              <div
                className="relative w-full md:w-3/5 aspect-[4/3] md:aspect-auto shrink-0 bg-muted select-none"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={modalImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedProject.images[modalImageIndex]}
                      alt={`${selectedProject.title} - ${modalImageIndex + 1}`}
                      fill
                      className="object-cover"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5" />

                {/* Counter badge */}
                <div className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-medium tracking-widest border border-white/10">
                  {modalImageIndex + 1} / {selectedProject.images.length}
                </div>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 active:scale-95 transition-all border border-white/10"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 active:scale-95 transition-all border border-white/10"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Content side */}
              <div className="flex flex-col p-8 md:p-12 overflow-y-auto w-full">
                <span className="self-start px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase bg-gold/10 text-gold border border-gold/20 mb-6 font-medium">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground leading-tight">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap items-center gap-6 mt-4 mb-8">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <MapPin className="h-4 w-4 text-gold" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <Calendar className="h-4 w-4 text-gold" />
                    {selectedProject.year}
                  </span>
                </div>
                <div className="h-px bg-border/50 w-full mb-8" />
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-10">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 block mb-4 font-medium">
                    Prestations réalisées
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.scope.map((s) => (
                      <span
                        key={s}
                        className="px-4 py-2 rounded-full text-xs text-muted-foreground bg-muted/50 border border-border/50 font-light tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.images.length > 1 && (
                  <div
                    ref={thumbsRef}
                    className="flex gap-2.5 mt-8 overflow-x-auto pb-2 scrollbar-hide"
                  >
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        data-active={idx === modalImageIndex ? "true" : "false"}
                        onClick={() => setModalImageIndex(idx)}
                        className={`relative w-20 h-16 md:w-24 md:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 ${idx === modalImageIndex
                          ? "border-gold shadow-lg scale-105"
                          : "border-transparent opacity-40 hover:opacity-80 hover:scale-105"
                          }`}
                      >
                        <Image
                          src={img}
                          alt={`Photo ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="96px"
                          quality={40}
                        />
                        {idx === modalImageIndex && (
                          <div className="absolute inset-0 ring-2 ring-gold/60 rounded-xl" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectStat({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="flex flex-col items-center">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="text-3xl md:text-5xl font-light text-gold tracking-tighter"
      >
        {count}
        {suffix}
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 mt-2 font-medium">
        {label}
      </span>
    </div>
  );
}
