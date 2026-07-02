import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";

import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrendsSection from "@/components/TrendsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Lenis inertia scrolling — animates the container's real scrollTop,
  // so existing scroll listeners and framer-motion useScroll keep working.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrapper = containerRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      lerp: 0.09,
      anchors: true,
    });

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="min-h-screen bg-background text-foreground overflow-y-auto h-screen"
    >
      <ScrollProgress containerRef={containerRef} />
      <Navbar />
      <SideNav containerRef={containerRef} />
      <div ref={contentRef}>
        <HeroSection containerRef={containerRef} />

        <SkillsSection containerRef={containerRef} />
        <CareerSection containerRef={containerRef} />
        <ProjectsSection containerRef={containerRef} />
        <TrendsSection containerRef={containerRef} />
        <ContactSection containerRef={containerRef} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
