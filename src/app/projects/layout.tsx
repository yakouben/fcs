import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Projets & Réalisations | Agencement de Commerces FCS",
  description: "Découvrez nos dernières réalisations : agencement complet de boulangeries, boucheries et pâtisseries partout en France. Expertise et savoir-faire depuis 2002.",
  keywords: [
    "projets agencement",
    "réalisation boulangerie",
    "réalisation boucherie",
    "agencement pâtisserie",
    "portfolio agencement commerce",
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
