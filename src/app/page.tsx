import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import LiveProjects from "@/components/sections/LiveProjects";
import ProjectGallery from "@/components/sections/ProjectGallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Platforms from "@/components/sections/Platforms";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <LiveProjects />
      <ProjectGallery />
      <WhyChooseUs />
      <Platforms />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
