import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { electricianConfig } from "@/data/electrician";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const config = electricianConfig;

export const metadata: Metadata = {
  title: {
    default: `${config.brand.name} — Licensed Electrician in ${config.brand.state}`,
    template: `%s | ${config.brand.name}`,
  },
  description: `Certified Master Electricians serving ${config.coverage.map((c) => c.city).join(", ")}. Emergency electrical repair, panel upgrades, EV charger installation. Licensed, bonded & insured. Call ${config.emergency.phone}.`,
  keywords: [
    "electrician",
    "licensed electrician",
    "emergency electrician",
    "electrical panel upgrade",
    "EV charger installation",
    "Austin electrician",
    "residential electrician",
    "commercial electrician",
    "electrical repair",
    "24 hour electrician",
  ],
  openGraph: {
    title: `${config.brand.name} — ${config.brand.tagline}`,
    description: `Certified Master Electricians serving ${config.coverage.map((c) => c.city).join(", ")}. Emergency electrical repair, panel upgrades, and EV charger installation.`,
    type: "website",
    locale: "en_US",
    siteName: config.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: config.brand.name,
    description: `Certified Master Electricians. Emergency repair, panel upgrades, EV charger installation. Call ${config.emergency.phone}.`,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: config.brand.name,
    description: config.brand.tagline,
    url: "https://voltarcelectrical.com",
    telephone: config.emergency.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4821 Industrial Blvd, Suite 200",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78745",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2172,
      longitude: -97.7694,
    },
    areaServed: config.coverage.map((c) => ({
      "@type": "City",
      name: c.city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical Services",
      itemListElement: config.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: config.trust.rating,
      reviewCount: config.trust.totalReviews,
    },
    credential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "State Electrical Contractor License",
      identifier: config.brand.contractorLicenseKey,
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics — replace G-XXXXXXXXXX with your actual Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
