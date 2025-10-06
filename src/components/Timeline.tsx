import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, GraduationCap, Briefcase } from "lucide-react";

const timelineEvents = [
  {
    year: "2024",
    title: "Cyberzee 24 Interuniversity Cybersecurity Quiz Competition",
    type: "Achievement",
    position: "Champion",
    description:
      "Leading team CypherX, clinched the championship title at the Cyberzee 24 Interuniversity Cybersecurity Quiz Competition!",
    icon: CheckCircle,
    image: "src/assets/timeline/cyberzee.jpg",
  },
  {
    year: "2024",
    title: "Workshop on competitive programming ",
    type: "Volunteering",
    position: null,
    description:
      "Conducted my first workshop on competitive programming as part of the Axiom workshop series with Tharindu Jayawardhana.",
    icon: GraduationCap,
    image: "src/assets/timeline/axiom.jpg",
  },
  {
    year: "2023",
    title: "INSL Southern provincial competition",
    type: "Achievement",
    position: "2nd Runner-up",
    description:
      "As the team leader of Team Unimatrix , became the 2nd Runner-up at the INSL Southern provincial competition 2023 which was conducted by IEEE of University of Ruhuna.",
    icon: CheckCircle,
    image: "src/assets/timeline/insl2.jpg",
  },
  {
    year: "2023",
    title: "IEEE Xtreme 17.0 2023",
    type: "Achievement",
    position: "2nd Place (University)",
    description:
      "As the team leader of Team UniMatrix at the IEEE Xtreme 17.0 2023 competition secured the 2nd position at the University of Ruhuna and ranked 88th in the national standings for Sri Lanka.",
    icon: CheckCircle,
    image: "src/assets/timeline/ieee17.jpeg",
  },

  {
    year: "2023",
    title: "Eminence 3.0",
    type: "Achievement",
    position: "2nd Runner-up",
    description:
      "As a member of Team UniMatrix, achieved Second runner-up at Eminence 3.0",
    icon: CheckCircle,
    image: "src/assets/timeline/eminence.jpg",
  },
  {
    year: "2023",
    title: "Xbotix - Inter University Robotics Competition",
    type: "Achievement",
    position: "Participant",
    description: "Created Artemis, line following and color recognition robot",
    icon: CheckCircle,
    image: "src/assets/timeline/robo.jpeg",
  },

  {
    year: "2023",
    title: "Mora UXplore 1.0 - Inter University UI/UX design Competition",
    type: "Achievement",
    position: "Semi-finalist",
    description: "As the team leader of Team UniMatrix , became semi-finalists",
    icon: CheckCircle,
    image: "src/assets/timeline/uxplore.jpg",
  },

  {
    year: "2022",
    title: "HaXtreme1.0 - Inter University Coding Competition",
    type: "Achievement",
    position: "2nd Runner-up",
    description:
      "As a member of Team AROMATIC, achieved Second runner-up of HaXtreme1.0 2023",
    icon: CheckCircle,
    image: "src/assets/timeline/haxtreme.jpg",
  },
  {
    year: "2022",
    title: "IEEE Xtreme 16.0 2022",
    type: "Achievement",
    position: "4th Place (University)",
    description:
      "As the team member of Team BitBorg at the IEEE Xtreme 16.0 2022 competition secured the 4th position at the University of Ruhuna and ranked 114th in the national standings for Sri Lanka.",
    icon: CheckCircle,
    image: "src/assets/timeline/ieee16.png",
  },
  {
    year: "2022",
    title: "Genesiz - All island ideathon",
    type: "Achievement",
    position: "Finalist",
    description:
      "As a member of Team AROMATIC, reached finals in Genesiz 2022 competition.",
    icon: CheckCircle,
    image: "src/assets/timeline/genesis.jpg",
  },
  {
    year: "2022",
    title: "INSL - All island Ideathon",
    type: "Achievement",
    position: "Champion",
    description:
      "As the team leader of Team Unimatrix , became the Champions at the INSL Southern provincial competition 2022 which was conducted by IEEE of University of Ruhuna.",
    icon: CheckCircle,
    image: "src/assets/timeline/insl1.jpeg",
  },
    {
    year: "2022",
    title: "CyberZee '22 - Inter-University Quiz Competition on Cyber Security",
    type: "Achievement",
    position: "2nd Runner-up",
    description:
      "As a member of Team Aromatic, achieved Second Runner-up at CyberZee '22 Inter-University Quiz Competition on Cyber Security.",
    icon: CheckCircle,
    image: "src/assets/timeline/cyberzee1.jpg",
  },
    {
    year: "2020",
    title: "CIMA - Top performer",
    type: "Achievement",
    position: "Top performer",
    description:
      "Achieved the highest mark obtainable for a CIMA Cert BA Exam 150/150 for BA3- Fundamentals of Financial Accounting.",
    icon: CheckCircle,
    image: "src/assets/timeline/cima.png",
  },
  
    {
    year: "2022",
    title: "Team Aromatic on official website of University of Ruhuna",
    type: "Achievement",
    position: "Recognition",
    description:
      "The achievements of Team Aromatic at several competitions was recognized in the official site of University of Ruhuna.",
    icon: CheckCircle,
    image: "src/assets/timeline/aromatic.jpg",
  },
      {
    year: "2022",
    title: "Mehewara Maths Seminar series",
    type: "Volunteering",
    position: null,
    description:
      "Got the opportunity participate as a volunteer in the Mehewara Maths Seminar series conducted by Student Union of Faculty of Engineering, University of Ruhuna",
    icon: GraduationCap,
    image: "src/assets/timeline/mehewara.jpg",
  },
];

const getIconColor = (type: string) => {
  switch (type) {
    case "Internship":
      return "text-primary";
    case "Achievement":
      return "text-success";
    case "Education":
      return "text-accent";
    case "Volunteering":
      return "text-info";
    default:
      return "text-muted-foreground";
  }
};

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones, achievements, and experiences in my journey
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Timeline line - centered on desktop, left on mobile */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center animate-slide-up ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-6/12 ml-16 md:ml-0 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="p-6 md:p-8 hover-lift">
                      <div className="flex items-center justify-between mb-6">
                        <Badge variant="outline" className="font-semibold text-sm">
                          {event.year}
                        </Badge>
                        <Badge
                          variant={
                            event.type === "certification"
                              ? "default"
                              : "secondary"
                          }
                          className="capitalize text-sm"
                        >
                          {event.type}
                        </Badge>
                      </div>

                      <div className="mb-6">
                        <img
                          src={event.image}
                          alt={event.title}
                          className={`w-full aspect-video rounded-lg shadow-md ${
                            event.type === "Certification" 
                              ? "object-contain bg-white dark:bg-gray-100" 
                              : "object-cover"
                          }`}
                        />
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-card-foreground">
                        {event.title}
                      </h3>

                      {event.position && (
                        <div className="mb-4">
                          <Badge
                            variant="outline"
                            className="bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 border-yellow-400 dark:border-yellow-600 text-yellow-900 dark:text-yellow-300 font-medium text-sm px-3 py-1"
                          >
                            🏆 {event.position}
                          </Badge>
                        </div>
                      )}

                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </Card>
                  </div>

                  {/* Timeline dot - left on mobile, centered on desktop */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-card border-4 border-background shadow-lg">
                    <Icon
                      className={`h-5 w-5 md:h-8 md:w-8 ${getIconColor(
                        event.type
                      )}`}
                    />
                  </div>

                  {/* Empty space on other side - only on desktop */}
                  <div className="hidden md:block md:w-6/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
