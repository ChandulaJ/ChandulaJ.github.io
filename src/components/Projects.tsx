import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Enhancing NS-3 for Distributed Network Simulation",
    description: "Final Year Group Project focused on enhancing NS-3 network simulator with distributed simulation capabilities and automated cloud deployment.",
    longDescription: "Designed and implemented CI/CD pipelines using Azure DevOps for automated builds, testing, and deployments. Automated cloud infrastructure provisioning and configuration using Terraform and Ansible, enabling seamless deployment of NS-3 simulation environments on AWS.",
    image: "src/assets/projects/network-sim.jpg",
    technologies: ["Azure DevOps", "Terraform", "Ansible", "AWS", "NS-3", "CI/CD"],
    githubUrl: "",
    demoUrl: null,
    stars: 0,
    featured: true,
    status: "Ongoing",
  },
    {
    title: "AuctionHub",
    description: "Complete GitOps CI/CD pipeline for a microservices auction platform with Kubernetes orchestration and comprehensive monitoring.",
    longDescription: "Designed and implemented a complete GitOps CI/CD pipeline for a microservices auction platform using GitHub Actions for automated Docker builds and ArgoCD for continuous deployment. Orchestrated full Kubernetes infrastructure using declarative YAML manifests with persistent storage (EBS CSI), monitoring stack (Jaeger, DataDog), and infrastructure services (MySQL, Redis, NATS).",
    image: "src/assets/projects/auctionhub.png",
    technologies: ["GitOps", "GitHub Actions", "ArgoCD", "Kubernetes", "Docker", "Jaeger", "DataDog", "MySQL", "Redis"],
    githubUrl: "https://github.com/PramithaMJ/argocd-auctionhub",
    demoUrl: null,
    stars: 0,
    featured: true,
    status: "Completed",
  },

    {
    title: "TravelTrails Web App CI/CD",
    description: "Comprehensive CI/CD pipeline implementation for automated build, test, and deployment processes of TravelTrails application.",
    longDescription: "Designed and implemented a CI/CD pipeline to automate build, test, and deployment processes of TravelTrails app. Integrated SonarQube for code quality checks, Docker for containerization, and Jenkins (master-slave) for build automation. Utilized Terraform for infrastructure provisioning, Ansible for configuration management, and Docker Compose for deployments. Pushed artifacts to DockerHub and set up email notifications in this project.",
    image: "src/assets/projects/ttcicd.jpg",
    technologies: ["Jenkins", "Docker", "SonarQube", "Terraform", "Ansible", "DockerHub", "CI/CD"],
    githubUrl: "https://github.com/ChandulaJ/TravelTrails-MERN-stack-app",
    demoUrl: null,
    stars: 0,
    featured: true,
    status: "Completed",
  },
    {
    title: "LifePill Software System",
    description: "Comprehensive medicine finding system with mobile app, POS system, and web application for seamless healthcare management.",
    longDescription: "A comprehensive software group project based on a system of finding medicine through a mobile app. Acting as Project Manager and Flutter mobile developer, this project includes a mobile app, POS system, and web application for complete healthcare solution.",
    image: "src/assets/projects/lp.png",
    technologies: ["Flutter", "Mobile Development", "POS System", "Web App", "Project Management"],
    githubUrl: "https://github.com/orgs/Life-Pill/repositories",
    demoUrl: null,
    stars: 0,
    featured: true,
    status: "Completed",
  },
    {
    title: "TravelTrails Social Media Web Application",
    description: "MERN stack social media platform designed specifically for travel enthusiasts to share and discover travel experiences.",
    longDescription: "TravelTrails is a social media web application built with MERN stack for travel enthusiasts. Travellers can share their travel experiences, discover new destinations, and connect with fellow travelers through this comprehensive web application.",
    image: "src/assets/projects/traveltrails.jpeg",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "MERN Stack"],
    githubUrl: "https://github.com/ChandulaJ/TravelTrails-MERN-stack-app",
    demoUrl: null,
    stars: 0,
    featured: true,
    status: "Completed",
  },
  {
    title: "Harvest~Link Mobile Application",
    description: "Fresh vegetables and fruits delivery app connecting local small-scale farmers with buyers, built with Flutter.",
    longDescription: "A fresh vegetables and fruits delivery app created with Flutter that connects local small-scale farmers directly with buyers. This platform helps farmers reach customers directly while providing buyers access to fresh, local produce.",
    image: "src/assets/projects/hl.png",
    technologies: ["Flutter", "Mobile Development", "E-commerce", "Agriculture Tech"],
    githubUrl: "https://github.com/ChandulaJ/HarvestLink-Flutter-MobileApp",
    demoUrl: null,
    stars: 0,
    featured: true,
    status: "Completed",
  },



];

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projects and tools I have built
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden hover-lift animate-scale-in group h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className={`absolute top-4 right-4 backdrop-blur-sm rounded-full px-3 py-1 ${
                    project.status === 'Ongoing' 
                      ? 'bg-blue-600 border border-blue-700' 
                      : 'bg-green-600 border border-green-700'
                  }`}>
                    <span className="text-xs font-medium text-white">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-base mb-4 leading-relaxed flex-1">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    {project.githubUrl && project.githubUrl !== '#' ? (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        <Github className="h-4 w-4 mr-2" />
                        Private
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
