import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import lsegImage from "@/assets/timeline/lseg.jpg";

const experiences = [
  {
    company: "LSEG (Millennium IT Software)",
    role: "DevOps Intern",
    location: "Colombo, Sri Lanka",
    duration: "6 months (2024)",
    type: "Internship",
    image: lsegImage,
    responsibilities: [
      "Automated CI/CD and infrastructure with Terraform, Ansible, Jenkins and AWS services",
      "Upgraded and automated AMI creation pipelines with comprehensive fixes and optimizations",
      "Performed functional and non-functional testing to ensure system reliability",
      "Debugged and optimized CI/CD pipelines for improved performance and efficiency",
      "Resolved coverage tool issues including Jacoco and Gcov integration problems",
      "Automated AWS resource cleanup using boto3 for cost optimization",
      "Built comprehensive Datadog dashboards for pipeline monitoring and observability",
      "Collaborated effectively with Development, QA, and Tools teams across projects",
    ],
    technologies: ["Terraform", "Ansible", "AWS", "CI/CD", "Datadog", "boto3", "Jacoco", "Gcov", "AMI", "Pipeline Automation"],
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Internship":
      return "bg-primary text-primary-foreground";
    case "Full-time":
      return "bg-success text-success-foreground";
    case "Part-time":
      return "bg-warning text-warning-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in DevOps, cloud computing, and system administration
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-slide-up bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side - Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building className="h-5 w-5 text-muted-foreground mr-2" />
                        <h3 className="text-xl font-bold text-card-foreground">
                          {exp.company}
                        </h3>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <Badge className={getTypeColor(exp.type)} variant="default">
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right side - Image */}
                {exp.image && (
                  <div className="lg:w-80 flex-shrink-0">
                    <img
                      src={exp.image}
                      alt={`${exp.company} experience`}
                      className="w-full h-64 lg:h-full rounded-lg shadow-md object-cover"
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}