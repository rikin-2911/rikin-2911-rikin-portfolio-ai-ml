import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GridOverlay from "@/components/effects/GridOverlay";
import ParticleBackground from "@/components/effects/ParticleBackground";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Responsibilities from "@/components/sections/Responsibilities";
import Interests from "@/components/sections/Interests";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <GridOverlay />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Responsibilities />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
