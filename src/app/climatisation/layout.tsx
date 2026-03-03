import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Climatisation Commerce & Boutique | Installation & Maintenance Île-de-France",
    description: "Spécialiste en installation, maintenance et dépannage de climatisation pour commerces et boutiques en Île-de-France. Techniciens certifiés RGE. Devis gratuit.",
    keywords: [
        "climatisation commerce",
        "climatisation boutique",
        "installation climatisation ile de france",
        "maintenance climatisation",
        "dépannage climatisation",
        "technicien RGE",
    ],
};

export default function ClimatisationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
