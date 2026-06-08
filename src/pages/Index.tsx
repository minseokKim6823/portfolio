import { useRef } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";

import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} data-scroll-container className="min-h-screen bg-background text-foreground snap-y snap-proximity overflow-y-auto h-screen scroll-smooth">
      <ScrollProgress containerRef={containerRef} />
      <Navbar />
      <SideNav containerRef={containerRef} />
      <HeroSection containerRef={containerRef} />

      <SkillsSection containerRef={containerRef} />
      <CareerSection containerRef={containerRef} />
      <ProjectsSection containerRef={containerRef} />
      <ContactSection containerRef={containerRef} />
      <Footer />
    </div>
  );
};

export default Index;
