import {
  Home as HomeIcon,
  Briefcase,
  Images,
  Wind,
  Snowflake,
  Store,
  Wrench,
  MapPin,
} from "lucide-react";

export const navLinks = [
  { label: "Accueil",       href: "/",             icon: HomeIcon  },
  { label: "Services",      href: "/#services",    icon: Briefcase },
  { label: "Climatisation", href: "/climatisation",icon: Wind      },
  { label: "Réalisations",  href: "/projects",     icon: Images    },
];

export const slides = [
  { id: 0, src: "/vue-6.webp",  alt: "Bakery counter with POS terminals and marble finish" },
  { id: 1, src: "/vue-7.webp",  alt: "Bakery interior with digital menu and display counter" },
  { id: 2, src: "/vue-5.webp",  alt: "Marble counter with touchscreen POS systems" },
  { id: 3, src: "/vue-8.webp",  alt: "Bakery interior with shelving and beverage display" },
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
    description: "Vitrines à pâtisserie, meubles de présentation et décor raffiné.",
    src: "/boul21.webp",
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
  { value: "20+",  label: "Ans d'expérience" },
  { value: "30+",  label: "Projets réalisés"  },
  { value: "100%", label: "Sur mesure"        },
];

export const featuredProjects = [
  { title: "Le Pavillon des Pains", category: "Boulangerie", location: "Île-de-France", src: "/boul11.webp"  },
  { title: "Maison Gaïa",           category: "Pâtisserie",  location: "Île-de-France", src: "/pati11.webp"  },
  { title: "L'Asnieroise",          category: "Boulangerie", location: "Île-de-France", src: "/boul42.webp"  },
];

export const services = [
  { icon: Wrench,    num: "01", title: "Conception sur mesure", desc: "Chaque projet est unique. Du premier croquis à la livraison, nous concevons vos espaces selon votre activité et votre identité." },
  { icon: Snowflake, num: "02", title: "Vitrines réfrigérées",  desc: "Fabrication et installation de vitrines professionnelles, adaptées à chaque métier de bouche." },
  { icon: Store,     num: "03", title: "Agencement complet",    desc: "Du sol au plafond, l'intégralité de l'aménagement de votre commerce avec une finition irréprochable." },
  { icon: MapPin,    num: "04", title: "Installation & Pose",   desc: "Nos équipes interviennent partout en France pour une pose soignée, dans les délais convenus." },
  { icon: Briefcase, num: "05", title: "Maintenance & SAV",     desc: "Service après-vente réactif. Pannes, entretien régulier, pièces détachées — nous gérons tout." },
];
