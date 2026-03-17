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
  { id: 0, src: "/heropic-1.jpeg", alt: "FCS Réalisation 1" },
  { id: 1, src: "/heropic-2.jpeg", alt: "FCS Réalisation 2" },
  { id: 2, src: "/heropic-3.jpeg", alt: "FCS Réalisation 3" },
  { id: 3, src: "/heropic-4.jpeg", alt: "FCS Réalisation 4" },
];

export const AUTO_PLAY_INTERVAL = 4000;

export const categories = [
  {
    name: "Boulangerie-pâtisserie",
    description: "Vitrines réfrigérées, fournils et agencement complet pour artisans.",
    src: "/boul1c.webp",
    radius: "rounded-[2rem] rounded-tl-[4rem]",
  },
  {
    name: "Chocolaterie",
    description: "Vitrines d'exposition climatisées et systèmes de froid haute performance.",
    src: "/CHOCOLATERIE DE NEUVILLE/WhatsApp Image 2026-02-26 at 10.13.21.jpeg",
    radius: "rounded-[2rem] rounded-tr-[4rem]",
  },
  {
    name: "Boucherie",
    description: "Comptoirs frigorifiques et présentoirs sur mesure haute qualité.",
    src: "/bouch1.webp",
    radius: "rounded-[2rem] rounded-bl-[4rem]",
  },
  {
    name: "Restaurant",
    description: "Cuisines professionnelles et agencement complet de salles.",
    src: "/PIZZERIA/WhatsApp Image 2026-02-25 at 14.31.31.jpeg",
    radius: "rounded-[2rem] rounded-br-[4rem]",
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

export const partnerNames = [
  "FOUR MAP",
  "PANIMATIC",
  "VMI",
  "MALLARD-FERRIERE",
  "GECOMA",
  "PVLAB",
  "TEFCOLD",
  "STALGAST",
  "GINOX",
  "JAC",
  "ACTIF",
  "MAFTER BOURGEAT",
  "LAVINOX",
  "CONTI",
  "DAP",
  "ISOTECH",
  "SEDA",
  "UNOX",
  "EUROFOURS",
  "KRAMPOUZ",
  "ENODIS",
  "LIEBHERR",
  "PIZZAGROUP",
  "TRUE",
  "TOURNUS",
  "SOREMA",
  "SALVA",
  "RONDO",
  "ROTISOL",
  "ROBOT COUPE",
  "RATIONAL",
];

export const heroStats = [
  { value: 24, suffix: "+", label: "Année d’expérience" },
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
  { icon: UtensilsCrossed, num: "03", title: "Materiel de boulangerie", desc: "Equipements  complets du laboratoire et fournil." },
  { icon: Store, num: "04", title: "Agencement complet", desc: "Du sol au plafond, l'intégralité de l'aménagement de votre commerce ." },
  { icon: UtensilsCrossed, num: "05", title: "Équipements CHR", desc: "Du four à la table inox, nous fournissons et installons tous les équipements de restauration et d'hôtellerie." },
  { icon: MapPin, num: "06", title: "Installation & Pose", desc: "Nos équipes interviennent partout en France." },
  { icon: Briefcase, num: "07", title: "Service après-vente réalisé par nos techniciens." },
];
