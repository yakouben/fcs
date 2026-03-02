import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Projets – Vitrines & Agencements de Commerce",
  description:
    "Découvrez les 30+ projets réalisés par FCS : boulangeries, boucheries, pâtisseries aménagées partout en France. Vitrines réfrigérées sur mesure, agencement complet.",
  keywords: [
    "Projets vitrines réfrigérées",
    "projets agencement boulangerie",
    "boulangerie aménagée",
    "vitrine boulangerie sur mesure",
    "agencement boucherie réalisé",
    "FCS Projets",
  ],
  openGraph: {
    title: "Nos Projets – FCS Vitrines & Agencements",
    description:
      "30+ projets de boulangeries, boucheries et pâtisseries aménagées en Île-de-France et partout en France.",
    url: "https://fcs-concept.fr/projects",
    siteName: "FCS – Froid & Agencement",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://fcs-concept.fr/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
