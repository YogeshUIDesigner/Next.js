import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingSocial from "@/components/ui/FloatingSocial";
import dynamic from "next/dynamic";
const ParticleBackground = dynamic(() => import("@/components/animations/ParticleBackground"));

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yogeshdesigner.in'),
  title: {
    default: "Yogesh Designer - UI/UX & Graphic Designer in India",
    template: "%s | Yogesh Designer"
  },
  description: "Award-winning UI/UX Designer in India specializing in modern websites, dashboards, and mobile apps. Hire a freelance designer for premium visual identity.",
  keywords: ["graphic designer", "ui ux designer", "freelance graphic designer", "ui ux designer india", "professional graphic designer", "creative graphic designer", "web & app designer", "brand identity designer", "digital designer", "visual designer", "next.js developer", "tailwindcss", "portfolio", "creative portfolio"],
  authors: [{ name: "Yogesh Designer", url: "https://yogeshdesigner.in" }],
  creator: "Yogesh Designer",
  publisher: "Yogesh Designer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yogeshdesigner.in/",
    siteName: "Yogesh Designer",
    title: "Yogesh Designer - UI/UX & Graphic Designer",
    description: "Creative Graphic & UI/UX Designer helping brands grow with modern, user-friendly designs. Logos, websites & app UI by Yogesh Oneness.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yogesh Designer - UI/UX & Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Designer - UI/UX & Graphic Designer",
    description: "Creative Graphic & UI/UX Designer helping brands grow with modern, user-friendly designs. Logos, websites & app UI by Yogesh Oneness.",
    images: ["/og-image.jpg"],
    creator: "@yogeshdesigner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Yogesh Designer",
                url: "https://yogeshdesigner.in",
                jobTitle: "UI/UX & Graphic Designer",
                sameAs: [
                  "https://www.instagram.com/yogeshdesigner",
                  "https://www.linkedin.com/in/yogeshdesigner",
                ],
                description: "Creative Graphic & UI/UX Designer helping brands grow with modern, user-friendly designs.",
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Yogesh Designer",
                "image": "https://yogeshdesigner.in/og-image.jpg",
                "url": "https://yogeshdesigner.in",
                "telephone": "",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "addressCountry": "IN"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              }
            ]),
          }}
        />
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  );
}
