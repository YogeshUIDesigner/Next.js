import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL('https://www.yogeshdesigner.in/'),
  title: {
    default: "Yogesh Designer - UI/UX & Graphic Designer in India",
    template: "%s | Yogesh Designer"
  },
  description: "UI/UX Designer in India specializing in modern websites, dashboards, and mobile apps. Hire a freelance designer for premium visual identity.",
  keywords: ["graphic designer", "ui ux designer", "freelance graphic designer", "ui ux designer in india", "professional graphic designer", "creative graphic designer", "web & app designer", "brand identity designer", "digital designer", "visual designer", "3d designer", "yogesh oneness", "Video Editor", "3d production animation", "2d animation", "portfolio", "creative portfolio"],
  authors: [{ name: "Yogesh Designer", url: "https://www.yogeshdesigner.in" }],
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
    url: "https://www.yogeshdesigner.in/",
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
  verification: {
    google: "3bdbbd7a4201d988",
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
                "@id": "https://www.yogeshdesigner.in/#person",
                "name": "Yogesh Designer",
                "url": "https://www.yogeshdesigner.in",
                "jobTitle": "UI/UX & Graphic Designer",
                "image": "https://www.yogeshdesigner.in/og-image.jpg",
                "sameAs": [
                  "https://www.instagram.com/graphicsdesigner98/",
                  "https://www.linkedin.com/in/yogesh-mahor-826507259/",
                ],
                "description": "Creative Graphic & UI/UX Designer helping brands grow with modern, user-friendly designs.",
                "worksFor": {
                  "@id": "https://www.yogeshdesigner.in/#organization"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.yogeshdesigner.in/#organization",
                "name": "Yogesh Designer",
                "url": "https://www.yogeshdesigner.in",
                "logo": "https://www.yogeshdesigner.in/og-image.jpg",
                "sameAs": [
                  "https://www.instagram.com/graphicsdesigner98/",
                  "https://www.linkedin.com/in/yogesh-mahor-826507259/",
                  "https://www.behance.net/"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+919870765966",
                  "contactType": "customer service"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://www.yogeshdesigner.in/#professionalservice",
                "name": "Yogesh Designer",
                "url": "https://www.yogeshdesigner.in",
                "logo": "https://www.yogeshdesigner.in/og-image.jpg",
                "image": "https://www.yogeshdesigner.in/og-image.jpg",
                "description": "Yogesh Designer is a creative professional offering website design, UI/UX design, 2D motion graphics, 3D product animation, flyer and brochure design for clients worldwide.",
                "priceRange": "$$",
                "telephone": "+919870765966",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "Worldwide"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "06:00",
                  "closes": "23:00"
                }
              }
            ]),
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9DVX4673N3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9DVX4673N3');
          `}
        </Script>
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
