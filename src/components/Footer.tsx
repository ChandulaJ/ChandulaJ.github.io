import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-2">
              Chandula Jayathilake
            </h3>
            <p className="text-sm text-muted-foreground">
              DevOps Engineer & Cloud Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="hover-glow" asChild>
              <a href="https://github.com/ChandulaJ" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="hover-glow" asChild>
              <a href="https://www.linkedin.com/in/chandula-jayathilake/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="hover-glow" asChild>
              <a href="mailto:chandulapamodajayathilake@gmail.com">
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              © 2025 Built by Chandula Jayathilake. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-sm text-primary hover:text-primary/80 transition-colors mt-2"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}