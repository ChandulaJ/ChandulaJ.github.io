import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Package, Download, Terminal, Zap, Code, Box } from "lucide-react";

const createdTools = [
  {
    title: "Vagrant Creator",
    description: "A Python package designed to simplify the process of generating Vagrant init files with custom configurations.",
    longDescription: "Vagrant Creator is a Python package that streamlines the creation of Vagrant environments by offering an interactive, user-friendly interface. Whether you're new to Vagrant or a seasoned developer, this tool aims to make Vagrant configuration management effortless through guided setup and automated file generation.",
    icon: Box,
    iconColor: "from-violet-500 to-purple-600",
    technologies: ["Python", "Vagrant", "CLI", "PyPI", "Interactive Setup"],
    pypiUrl: "https://pypi.org/project/vagrant-creator/",
    githubUrl: "https://github.com/ChandulaJ/vagrant-creator", // Replace with actual GitHub URL if available
    downloads: "1.2k+", // You can update this with actual download count
    version: "1.0.0", // Update with actual version
    installation: "pip install vagrant-creator",
    usage: "vagrant-creator",
    features: [
      "Interactive configuration setup",
      "Custom Vagrant file generation",
      "User-friendly CLI interface",
      "Multiple provider support",
      "Automated environment setup"
    ],
    category: "DevOps Automation",
    status: "Published"
  }
];

export function CreatedTools() {
  return (
    <section id="created-tools" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              Created Tools & Packages
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Open-source tools and packages I've developed to solve real-world problems and enhance developer productivity
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {createdTools.map((tool, index) => {
            const ToolIcon = tool.icon;
            return (
              <Card
                key={tool.title}
                className="overflow-hidden hover-lift animate-scale-in border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col">
                  {/* Main Info Section */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${tool.iconColor} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <ToolIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">
                            {tool.title}
                          </h3>
                          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-300 dark:border-green-700 w-fit">
                            {tool.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3 text-sm sm:text-base">
                          {tool.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            v{tool.version}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {tool.downloads} downloads
                          </span>
                          <Badge variant="secondary" className="text-xs w-fit">
                            {tool.category}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {tool.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <Terminal className="h-4 w-4 text-primary" />
                          Installation
                        </h4>
                        <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs sm:text-sm border overflow-x-auto">
                          <code>{tool.installation}</code>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <Zap className="h-4 w-4 text-primary" />
                          Usage
                        </h4>
                        <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs sm:text-sm border overflow-x-auto">
                          <code>{tool.usage}</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {tool.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="w-full sm:w-auto" asChild>
                        <a href={tool.pypiUrl} target="_blank" rel="noopener noreferrer">
                          <Package className="h-4 w-4 mr-2" />
                          View on PyPI
                        </a>
                      </Button>
                      {tool.githubUrl && (
                        <Button variant="outline" className="w-full sm:w-auto" asChild>
                          <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="bg-gradient-to-br from-muted/20 to-muted/40 p-4 sm:p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-border/50">
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <Code className="h-4 w-4 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {tool.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}