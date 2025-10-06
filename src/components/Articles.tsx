import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "Opensearch-dashboards on Kubernetes",
    description: "I always wanted to know how monitoring in Kubernetes work. So when looked into several monitoring tools I found that Opensearch by Amazon is a great tool for this. But during this implementation I ran into many issues with fluent-bit. I used Fluent-bit to ship logs from Kubernetes to Opensearch. The configuration of Fluent-bit was so hard to get right and caused me many troubles. 😑.",
    fullDescription: "I will guide you on how to setup this monitoring tool correctly so that you won't have to bear the same problems i got into 😉",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SMhErHzYfEoOBWIp07M5HA.jpeg",
    technologies: ["Kubernetes", "OpenSearch", "Fluent-bit", "Monitoring", "AWS", "DevOps"],
    publishDate: "2024",
    readTime: "8 min read",
    category: "DevOps",
    articleUrl: "https://medium.com/@chandulapamodajayathilake/opensearch-dashboards-on-kubernetes-46d52e122f50", // Add actual URL when available
    featured: true,
  },
  {
    title: "Tired with the VirtualBox Ubuntu Server default shell?",
    description: "After a long day of coding, 🥲you just want to tinker around and run a few experiments on your own terms.😉 So, you spin up a fresh Ubuntu Server on a VirtualBox VM. Everything looks good so far… The machine boots up, Ubuntu installs successfully, and you're greeted with the default shell.",
    fullDescription: "You enter your username and password — voilà! Your server is up and running. 😊 Excited, you begin your experiments. You find some interesting packages to install, copy the commands from your browser, and try to paste them into the VirtualBox shell… but nothing happens. That's when you realize: the default VirtualBox terminal for headless servers doesn't support clipboard sharing. Great. 😑 So how can you avoid this pain? 🤔 Simple. SSH into your server from your favorite terminal. 😁 Here's how to do it… 😏",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*B-Ygh7QpZAo8hAqL3xAVpA.png",
    technologies: ["VirtualBox", "Ubuntu Server", "SSH", "Linux", "Terminal", "Development"],
    publishDate: "2024",
    readTime: "5 min read",
    category: "Linux",
    articleUrl: "https://medium.com/@chandulapamodajayathilake/tired-with-the-virtualbox-ubuntu-server-default-shell-cb87ee4ca9cb", // Add actual URL when available
    featured: true,
  },
  {
    title: "Streamlining Vagrant Setup with Vagrant Creator",
    description: "🚀 What is Vagrant Creator? Vagrant Creator is a Python package designed by me to simplify the process of generating Vagrant init files with custom configurations. Whether you're new to Vagrant or a seasoned developer, this tool aims to streamline the creation of your Vagrant environments by offering an interactive, user-friendly interface.",
    fullDescription: "Say Goodbye to Manual Configurations! 🛠️ Installation: Getting started with Vagrant Creator is straightforward. Simply install the package using pip. PyPI page: https://pypi.org/project/vagrant-creator/",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*gg7O6k-9G9DSo86JBs8dCg.png",
    technologies: ["Python", "Vagrant", "PyPI", "DevOps", "Automation", "CLI"],
    publishDate: "2024",
    readTime: "6 min read",
    category: "DevOps",
    articleUrl: "https://medium.com/@chandulapamodajayathilake/streamlining-vagrant-setup-with-vagrant-creator-say-goodbye-to-manual-configurations-d6e0ad913674",
    featured: true,
  },
  {
    title: "Linux XZ Terror Unveiled",
    description: "What happened? A highly sophisticated and carefully planned attack has targeted the XZ compression tool which is a most widespread tool used in Linux distros, impacting major Linux distributions such as Debian, CI, and openSUSE. This attack is considered one of the most well-executed supply chain attacks to date.",
    fullDescription: "The code was designed to execute at the end of a script and modify the liblzma library, which is part of the XZ Utils package, to provide unauthenticated access to affected machines through a secret backdoor. The severity of this vulnerability is rated at a Threat Level Midnight 10.0, surpassing well-known bugs like Heartbleed, Shellshock, and Log4Shell on the CVE severity scale and is named CVE-2024–3094. The attack was carried out over several years by a user named Jia Tan (JiaT75), who had become a trusted person over several years by contributing to the project XZ Utils.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Da-tMvKXKUJ5tt_b7_o8Cw.png",
    technologies: ["Security", "Linux", "CVE", "Supply Chain Attack", "XZ Utils", "Cybersecurity"],
    publishDate: "2024",
    readTime: "12 min read",
    category: "Security",
    articleUrl: "https://medium.com/@chandulapamodajayathilake/linux-xz-terror-unveiled-357922d2151f", // Add actual URL when available
    featured: true,
  },
];

export function Articles() {
  const featuredArticles = articles.filter(a => a.featured);

  return (
    <section id="articles" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              My Articles
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical articles and insights I've shared with the community
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Published Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card
                key={article.title}
                className="overflow-hidden hover-lift animate-scale-in group h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-sm rounded-full px-3 py-1 bg-primary/90 border border-primary-foreground/20">
                    <span className="text-xs font-medium text-primary-foreground">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-base mb-3 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  
                  <p className="text-muted-foreground text-base mb-4 leading-relaxed flex-1 line-clamp-2">
                    {article.fullDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm whitespace-nowrap">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    {article.articleUrl && article.articleUrl !== '#' ? (
                      <Button className="flex-1" size="sm" asChild>
                        <a href={article.articleUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Article
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Coming Soon
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