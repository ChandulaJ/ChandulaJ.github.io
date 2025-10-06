import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm a</span>{" "}
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                Chandula Jayathilake
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                DevOps Engineering Undergraduate
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate about cloud infrastructure, automation, and building scalable systems. 
              Currently pursuing my degree while gaining hands-on experience with modern DevOps 
              practices and technologies.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={scrollToContact} size="lg" className="hover-lift text-lg">
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift text-lg"
                asChild
              >
                <a href="https://drive.google.com/file/d/11oY8Ors7V0OD05VBsKdfBAeF6HFpV5Zu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="hover-glow" asChild>
                <a href="https://github.com/ChandulaJ" target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover-glow" asChild>
                <a href="https://www.linkedin.com/in/chandula-jayathilake/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-8 w-8" />
                </a>
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 gradient-tech rounded-full blur-xl opacity-30"></div>
              <img
                src={profileImage}
                alt="Chandula Jayathilake - DevOps Engineer"
                className="relative w-96 h-96 mx-auto rounded-full object-cover shadow-custom-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}