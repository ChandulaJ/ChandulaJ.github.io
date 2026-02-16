import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ruhuneLogo from "@/assets/ruhuna-logo.png";
import anandaLogo from "@/assets/ananda-logo.png";
import viduraLogo from "@/assets/vidura-logo.jpeg";

const educationData = [
  {
    period: "2020 - 2025",
    institution: "University of Ruhuna",
    degree: "BScEng Computer Engineering",
    status: "Graduate",
    description: "Currently pursuing Bachelor of Science in Engineering (Computer Engineering), gaining comprehensive knowledge in computer systems, software engineering, algorithms, data structures, and emerging technologies. Developing expertise in both hardware and software aspects of computing.",
    logo: ruhuneLogo,
    location: "Galle, Sri Lanka"
  },
  {
    period: "2016 - 2018",
    institution: "Ananda College, Colombo",
    degree: "Advanced Level Education",
    status: "Completed",
    description: "Completed Advanced Level education focusing on Mathematics, Physics, and Chemistry. These subjects laid a strong foundation for my engineering career and provided essential analytical and problem-solving skills.",
    logo: anandaLogo,
    location: "Colombo, Sri Lanka"
  },
  {
    period: "2006 - 2015",
    institution: "Vidura College, Colombo",
    degree: "Ordinary Level Education",
    status: "Completed",
    description: "Completed Ordinary Level education achieving strong academic results across all subjects. This comprehensive education provided a solid foundation for my future academic pursuits and personal development.",
    logo: viduraLogo,
    location: "Colombo, Sri Lanka"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Educational Background
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey that shaped my foundation in engineering and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => {
            return (
              <Card 
                key={index} 
                className="p-6 md:p-8 hover-lift animate-slide-up bg-card/80 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo and Period */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 p-2">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <Badge variant="outline" className="font-semibold">
                      {edu.period}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-medium text-primary mb-1">
                          {edu.institution}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                      <Badge 
                        variant={edu.status === "Completed" ? "default" : "secondary"}
                        className="self-start"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
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