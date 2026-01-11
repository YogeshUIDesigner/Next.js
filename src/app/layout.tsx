import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingSocial from "@/components/ui/FloatingSocial";
import ParticleBackground from "@/components/animations/ParticleBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yogesh Designer - Ui/Ux & Graphic Designer",
  description: "Creative Graphic & UI/UX Designer helping brands grow with modern, user-friendly designs. Logos, websites & app UI by Yogesh Oneness.",
  keywords: ["graphic designer", "ui ux designer", "freelance graphic designer", "ui ux designer india", "professional graphic designer", "creative graphic designer", "web & app designer", "brand identity designer", "digital designer", "visual designer"],
  authors: [{ name: "Yogesh Designer" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yogeshdesigner.in/",
    siteName: "YogeshDesigner",
    title: "Yogesh Designer - Ui/Ux & Graphic Designer",
    description: "Creative Graphic & UI/UX Designer helping brands grow with modern, user-friendly designs. Logos, websites & app UI by Yogesh Oneness.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yogesh Designer - Ui/Ux & Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Designer - Ui/Ux & Graphic Designer",
    description: "Graphic Designer",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
