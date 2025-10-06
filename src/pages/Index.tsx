import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Timeline } from "@/components/Timeline";
import { Tools } from "@/components/Tools";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { CreatedTools } from "@/components/CreatedTools";
import { Articles } from "@/components/Articles";
import { Endorsements } from "@/components/Endorsements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Education />
      <Certifications />
      <Tools />
      <Experience />
      <Projects />
      <CreatedTools />
      <Articles />
      <Timeline />
      <Endorsements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
