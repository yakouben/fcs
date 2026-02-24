import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fcs-concept.fr"),
  icons: {
    icon: "/logo-fcs.png",
    apple: "/logo-fcs.png",
  },
  title: {
    default: "FCS – Fabrication de Vitrines & Agencement Commerce | Île-de-France",
    template: "%s | FCS – Vitrines & Agencement",
  },
  description:
    "FCS, spécialiste depuis 2002 en fabrication de vitrines réfrigérées, agencement de boulangeries, boucheries et pâtisseries. Devis gratuit, intervention partout en France. Climatisation, froid commercial, SAV réactif.",
  keywords: [
    "fabrication vitrine",
    "fabrication vitrine réfrigérée",
    "vitrine boulangerie",
    "vitrine boucherie",
    "vitrine patisserie",
    "agencement boulangerie",
    "agencement commerce",
    "agencement boucherie",
    "climatisation commerce",
    "froid commercial",
    "meuble froid professionnel",
    "installation vitrine réfrigérée",
    "agencement commerce ile de france",
    "vitrine sur mesure",
    "équipement boulangerie",
    "FCS froid agencement",
    "Boissy-Saint-Léger",
    "Île-de-France",
  ],
  authors: [{ name: "FCS – Froid & Agencement", url: "https://fcs-concept.fr" }],
  creator: "FCS",
  publisher: "FCS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fcs-concept.fr",
    siteName: "FCS – Froid & Agencement",
    title: "FCS – Fabrication de Vitrines & Agencement Commerce",
    description:
      "Spécialiste depuis 2002 en fabrication de vitrines réfrigérées, agencement boulangeries, boucheries, pâtisseries. Partout en France.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FCS – Fabrication de vitrines et agencement de commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FCS – Fabrication de Vitrines & Agencement Commerce",
    description:
      "Spécialiste depuis 2002 en fabrication de vitrines réfrigérées et agencement de commerces. Partout en France.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fcs-concept.fr",
  },
  category: "Équipement professionnel & agencement",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fcs-concept.fr",
  name: "FCS – Froid & Agencement",
  description:
    "Fabrication de vitrines réfrigérées, agencement de boulangeries, boucheries et pâtisseries. Climatisation et froid commercial. Depuis 2002.",
  url: "https://fcs-concept.fr",
  telephone: "+33667617159",
  email: "contact@fcs-concept.fr",
  foundingDate: "2002",
  image: "https://fcs-concept.fr/logo-fcs.png",
  logo: "https://fcs-concept.fr/logo-fcs.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 Avenue Charles de Gaulle",
    addressLocality: "Boissy-Saint-Léger",
    postalCode: "94470",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.7546,
    longitude: 2.5055,
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  sameAs: ["https://www.instagram.com/fcs_concept/"],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services FCS",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabrication de vitrines réfrigérées" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agencement de boulangerie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agencement de boucherie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agencement de pâtisserie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Climatisation commerciale" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance & SAV froid commercial" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
