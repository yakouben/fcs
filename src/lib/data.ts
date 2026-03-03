import {
  Home as HomeIcon,
  Briefcase,
  Images,
  Wind,
  Snowflake,
  Store,
  Wrench,
  MapPin,
  UtensilsCrossed,
  HelpCircle,
} from "lucide-react";

export const navLinks = [
  { label: "Accueil", href: "/", icon: HomeIcon },
  { label: "Services", href: "/#services", icon: Briefcase },
  { label: "Climatisation", href: "/climatisation", icon: Wind },
  { label: "Projets", href: "/projects", icon: Images },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
];

export const slides = [
  { id: 0, src: "/hero2.jpeg", alt: "Bakery counter with POS terminals and marble finish" },
  { id: 1, src: "/hero1.png", alt: "Bakery interior with digital menu and display counter" },
  { id: 2, src: "/boul1.png", alt: "Marble counter with touchscreen POS systems" },
];

export const AUTO_PLAY_INTERVAL = 4000;

export const categories = [
  {
    name: "Boulangerie",
    description: "Vitrines réfrigérées, fours et agencement complet pour artisans boulangers.",
    src: "/boul1c.webp",
    radius: "rounded-[2rem] rounded-tl-[4rem]",
  },
  {
    name: "Boucherie",
    description: "Comptoirs frigorifiques et présentoirs sur mesure.",
    src: "/bouch1.webp",
    radius: "rounded-[2rem] rounded-br-[4rem]",
  },
  {
    name: "Pâtisserie",
    description: "Vitrines d'exposition élégantes et systèmes de froid haute performance.",
    src: "/pati21.webp",
    radius: "rounded-[2rem] rounded-tr-[4rem]",
  },
];

export const clientNames = [
  "L'Asnieroise",
  "Le Pavillon des Pains",
  "Maison Lamarck",
  "Maison Gaïa",
  "Takumi",
  "L'Instant Gourmand",
  "La Caravelle",
  "Maison Jebrane",
  "Sacré Gourmand",
  "La Pralinoise",
  "Grain d'Or",
  "Miette à Miette",
];

export const heroStats = [
  { value: 24, suffix: "+", label: "Ans d'expérience" },
  { value: 35, suffix: "+", label: "Projets réalisés" },
];

export const featuredProjects = [
  {
    title: "Boulangerie Le Pavillon des Pains",
    category: "Boulangerie",
    location: "Le Plessis-Robinson (92350)",
    src: "/PAVILLON DES PAINS/WhatsApp Image 2026-02-26 at 10.23.08.jpeg",
  },
  {
    title: "Takumi Pâtisserie",
    category: "Pâtisserie",
    location: "Paris (75006)",
    src: "/takumi-dauphine/WhatsApp Image 2026-02-26 at 10.19.11.jpeg",
  },
  {
    title: "Boulangerie L'Asnièroise",
    category: "Boulangerie",
    location: "Asnières-sur-Seine (92600)",
    src: "/L'ASNIEROISE/WhatsApp Image 2026-02-26 at 10.30.55.jpeg",
  },
];

export const services = [
  { icon: Wrench, num: "01", title: "Conception sur mesure", desc: "Chaque projet est unique. Du premier croquis à la livraison, nous concevons vos espaces selon votre activité et votre identité." },
  { icon: Snowflake, num: "02", title: "Vitrines réfrigérées", desc: "Fabrication et installation de vitrines professionnelles, adaptées à chaque métier de bouche." },
  { icon: UtensilsCrossed, num: "03", title: "Équipements CHR", desc: "Du four à la table inox, nous fournissons et installons tous les équipements de restauration et d'hôtellerie." },
  { icon: Store, num: "04", title: "Agencement complet", desc: "Du sol au plafond, l'intégralité de l'aménagement de votre commerce avec une finition irréprochable." },
  { icon: MapPin, num: "05", title: "Installation & Pose", desc: "Nos équipes interviennent partout en France pour une pose soignée, dans les délais convenus." },
  { icon: Briefcase, num: "06", title: "Maintenance & SAV", desc: "Service après-vente réactif. Pannes, entretien régulier, pièces détachées — nous gérons tout." },
];
