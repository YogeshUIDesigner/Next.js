import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import LogoSlider from "@/components/sections/LogoSlider";
import { Metadata } from "next";

// Lazy load below-the-fold components with placeholders to prevent CLS
const HomeAbout = dynamic(() => import("@/components/sections/HomeAbout"), { loading: () => <div className="h-96" /> });
const LiveProjects = dynamic(() => import("@/components/sections/LiveProjects"), { loading: () => <div className="h-96" /> });
const ProjectGallery = dynamic(() => import("@/components/sections/ProjectGallery"), { loading: () => <div className="h-96" /> });
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { loading: () => <div className="h-96" /> });
const Platforms = dynamic(() => import("@/components/sections/Platforms"), { loading: () => <div className="h-96" /> });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { loading: () => <div className="h-96" /> });
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), { loading: () => <div className="h-96" /> });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { loading: () => <div className="h-96" /> });
const CTA = dynamic(() => import("@/components/sections/CTA"), { loading: () => <div className="h-96" /> });

export const metadata: Metadata = {
  title: "UI/UX Designer in India | Yogesh Designer - Web & Mobile Apps",
  description: "Welcome to the official portfolio of Yogesh Designer. Explore my latest work in UI/UX design, branding, and motion graphics.",
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <LogoSlider />
      <HomeAbout />
      <LiveProjects />
      <ProjectGallery />
      <WhyChooseUs />
      <Platforms />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <CTA />
    </>
  );
}
