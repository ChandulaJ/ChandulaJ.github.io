import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

// Import certification images
import solutionsArchitectImg from "@/assets/certs/solutions-architect.png";
import sysopsAdminImg from "@/assets/certs/sysops-admin.png";
import oracleImg from "@/assets/certs/oracle.png";
import hackerrankImg from "@/assets/certs/hackerrank.jpeg";
import courseraImg from "@/assets/certs/coursera.png";
import eheImg from "@/assets/certs/ehe.jpg";
import cimaImg from "@/assets/certs/cima.jpeg";
import microsoftImg from "@/assets/certs/microsoft.jpg";
import aviatrixImg from "@/assets/certs/aviatrix.png";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect - Associate",
    provider: "Amazon Web Services (AWS)",
    issueDate: "Apr 2025",
    expiryDate: "Apr 2028",
    image: solutionsArchitectImg,
    skills: ["Amazon Web Services (AWS)", "Cloud Solutions"],
  },
  {
    id: 2,
    title: "AWS Certified SysOps Administrator - Associate",
    provider: "Amazon Web Services (AWS)",
    issueDate: "Jan 2025",
    expiryDate: "Jan 2028",
    image: sysopsAdminImg,
    skills: ["Amazon Web Services (AWS)", "Cloud Admin"],
  },
    {
    id: 3,
    title: "Aviatrix - Multicloud Network Associate",
    provider: "Aviatrix",
    issueDate: "Oct 2025",
    expiryDate: "Oct 2028",
    image: aviatrixImg,
    skills: ["Multicloud","AWS", "Azure","GCP","OCI", "DevOps"],
  },
    {
    id: 4,
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    provider: "Oracle",
    issueDate: "Mar 2021",
    expiryDate: null,
    image: oracleImg,
    skills: ["Java"],
  },
  {
    id: 5,
    title: "HackerRank Java Basic Certificate",
    provider: "HackerRank",
    issueDate: "Jul 2023",
    expiryDate: null,
    image: hackerrankImg,
    skills: ["Java"],
  },
  {
    id: 6,
    title: "Supervised Machine Learning: Regression and Classification",
    provider: "Coursera",
    issueDate: "Jun 2023",
    expiryDate: null,
    image: courseraImg,
    skills: ["Machine Learning"],
  },
  {
    id: 7,
    title: "Ethical Hacking Essentials (EHE)",
    provider: "Coursera",
    issueDate: "Jun 2023",
    expiryDate: null,
    image: eheImg,
    skills: ["Cybersecurity"],
  },

  {
    id: 8,
    title: "Diploma in Management Accounting",
    provider: "CIMA",
    issueDate: "Nov 2020",
    expiryDate: null,
    image: cimaImg,
    skills: ["Management Accounting"],
  },
  {
    id: 9,
    title: "Microsoft Learn AI Skills Challenge",
    provider: "Microsoft",
    issueDate: "Jan 2023",
    expiryDate: null,
    image: microsoftImg,
    skills: ["Machine Learning"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in Cloud computing, Devops, Java programming, Machine learning, Cybersecurity, and more...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="p-4 md:p-6 hover-lift animate-slide-up bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certification Badge Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white dark:bg-gray-100 rounded-lg shadow-md"
                  />
                  <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2">
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Certification Details */}
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-card-foreground">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium text-lg mb-3">
                  {cert.provider}
                </p>
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <span className="text-sm">Expires: {cert.expiryDate}</span>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-card-foreground mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Continuous Learning
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm committed to staying current with the latest technologies and best practices. 
              Currently pursuing additional certifications in cloud security and Kubernetes.
            </p>
            <Badge variant="outline" className="bg-background">
              More certifications coming soon...
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  );
}