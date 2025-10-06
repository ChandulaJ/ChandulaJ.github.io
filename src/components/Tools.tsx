import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Container,
  Database,
  GitBranch,
  Monitor,
  Server,
  Shield,
  Workflow,
  Code,
  Settings,
  Terminal,
  Zap,
  Globe,
  Layers,
  FileCode,
  Brain,
  Cpu,
  Network,
  Box,
  Activity,
  Lock,
  GitCommit,
  Play,
  Search,
  BarChart3,
  Eye,
  Boxes,
  Key,
  AlertTriangle,
  Code2,
  Braces,
  Hash,
  Binary,
  Smartphone,
  BookOpen,
  Package,
  HardDrive,
} from "lucide-react";

const toolCategories = [
  // Core DevOps Infrastructure
  {
    category: "Cloud Platforms",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    tools: [
      { name: "AWS", level: "Advanced", icon: Cloud },
      { name: "Azure", level: "Intermediate", icon: Globe },
      { name: "Google Cloud", level: "Beginner", icon: Layers },
    ],
  },
  {
    category: "Containerization & Orchestration",
    icon: Container,
    color: "from-purple-500 to-pink-500",
    tools: [
      { name: "Docker", level: "Advanced", icon: Box },
      { name: "Kubernetes", level: "Advanced", icon: Settings },
      { name: "Docker Compose", level: "Advanced", icon: Boxes },
      { name: "Helm", level: "Intermediate", icon: Package },
    ],
  },
  {
    category: "Infrastructure as Code",
    icon: Code,
    color: "from-orange-500 to-red-500",
    tools: [
      { name: "Terraform", level: "Advanced", icon: Layers },
      { name: "Ansible", level: "Intermediate", icon: Settings },
      { name: "CloudFormation", level: "Intermediate", icon: FileCode },
    ],
  },
  
  // Development & Automation
  {
    category: "CI/CD & Automation",
    icon: Workflow,
    color: "from-green-500 to-emerald-500",
    tools: [
      { name: "Jenkins", level: "Advanced", icon: Settings },
      { name: "GitHub Actions", level: "Intermediate", icon: Play },
      { name: "GitLab CI", level: "Intermediate", icon: GitCommit },
      { name: "Azure DevOps", level: "Intermediate", icon: Workflow },
    ],
  },
  {
    category: "Programming & Scripting",
    icon: FileCode,
    color: "from-teal-500 to-green-500",
    tools: [
      { name: "Python", level: "Advanced", icon: Code2 },
      { name: "JavaScript", level: "Advanced", icon: Braces },
      { name: "Bash", level: "Advanced", icon: Terminal },
      { name: "Java", level: "Intermediate", icon: HardDrive },
      { name: "C++", level: "Intermediate", icon: Cpu },
      { name: "C#", level: "Intermediate", icon: Hash },
      { name: "Flutter", level: "Intermediate", icon: Smartphone },
    ],
  },
  {
    category: "Version Control & Collaboration",
    icon: GitBranch,
    color: "from-slate-500 to-gray-600",
    tools: [
      { name: "Git", level: "Advanced", icon: GitBranch },
      { name: "GitHub", level: "Advanced", icon: BookOpen },
      { name: "GitLab", level: "Intermediate", icon: GitCommit },
    ],
  },
  
  // Operations & Monitoring
  {
    category: "Monitoring & Observability",
    icon: Monitor,
    color: "from-indigo-500 to-blue-500",
    tools: [
      { name: "Datadog", level: "Intermediate", icon: BarChart3 },
      { name: "Prometheus", level: "Intermediate", icon: Activity },
      { name: "Grafana", level: "Intermediate", icon: Eye },
      { name: "OpenSearch", level: "Beginner", icon: Search },
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    color: "from-yellow-500 to-orange-500",
    tools: [
      { name: "MySQL", level: "Intermediate", icon: Database },
      { name: "MongoDB", level: "Intermediate", icon: Layers },
      { name: "Redis", level: "Intermediate", icon: Zap },
    ],
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    tools: [
      { name: "AWS IAM", level: "Advanced", icon: Key },
      { name: "SonarQube", level: "Intermediate", icon: AlertTriangle },
      { name: "Vault", level: "Beginner", icon: Lock },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700";
    case "Intermediate":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-300 dark:border-amber-700";
    case "Beginner":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-300 dark:border-blue-700";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-300 dark:border-gray-700";
  }
};

export function Tools() {
  return (
    <section id="tools" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Tools & Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the modern DevOps and cloud technologies I leverage to build, deploy, and maintain scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {toolCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <Card
                key={category.category}
                className="group p-6 hover-lift animate-scale-in border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => {
                    const ToolIcon = tool.icon;
                    return (
                      <div
                        key={tool.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200 border border-border/50 hover:border-border group/tool"
                        style={{ animationDelay: `${(index * 0.1) + (toolIndex * 0.05)}s` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover/tool:scale-110 transition-transform duration-200">
                            <ToolIcon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium text-card-foreground group-hover/tool:text-primary transition-colors">
                            {tool.name}
                          </span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs font-semibold border ${getLevelColor(tool.level)} transition-all duration-200 group-hover/tool:scale-105`}
                        >
                          {tool.level}
                        </Badge>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tools: {category.tools.length}</span>
                    <span className="flex items-center">
                      <Zap className="h-3 w-3 mr-1" />
                      Active
                    </span>
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