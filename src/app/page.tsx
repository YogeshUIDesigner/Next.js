import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import LiveProjects from "@/components/sections/LiveProjects";
import ProjectGallery from "@/components/sections/ProjectGallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Platforms from "@/components/sections/Platforms";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import LogoSlider from "@/components/sections/LogoSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yogesh Designer | Creative UI/UX & Graphic Design Portfolio",
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
