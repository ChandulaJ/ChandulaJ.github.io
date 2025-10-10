import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

// Import endorsement profile images
import kushanImg from "@/assets/endosements/kushan.jpg";
import hiranImg from "@/assets/endosements/hiran.jpg";
import tusharaImg from "@/assets/endosements/tushara.jpg";
import praneethImg from "@/assets/endosements/praneeth.jpg";

const endorsements = [

  {
    name: "Dr. Kushan Sudheera",
    role: "Senior Lecturer",
    company: "University of Ruhuna - Electrical & Information Engineering",
    image: kushanImg,
    quote: "Chandula is an exemplary leader and skilled developer who played a crucial role in the success of the LifePill project. As Project Manager, he demonstrated exceptional leadership by ensuring seamless collaboration among team members. His expertise in managing AWS infrastructure and deployment ensured the system's reliability and scalability. His ability to balance technical expertise with leadership is commendable, reflecting innovation, dedication, and a drive to make meaningful contributions.",
    rating: 5,
    credentials: "PhD, Senior Academic",
    relationship: "Direct Manager - LifePill Project"
  },
    {
    name: "Hiran Basnayaka",
    role: "Associate Cloud Engineer",
    company: "Sysco LABS",
    image: hiranImg,
    quote: "I had the pleasure of working with Chandula during his internship at LSEG, and I was truly impressed by his dedication and work ethic. He is a quick learner who consistently put in extra effort to ensure tasks were completed efficiently and on time. His strong collaboration with developers and QA engineers in automating integrations and regression testing significantly improved workflow efficiency. His solid foundation in AWS, Jenkins, Terraform, and Ansible, combined with his passion for learning, made him a valuable asset to our team.",
    rating: 5,
    credentials: "AWS SAA & Terraform Associate",
    relationship: "Worked together at LSEG"
  },
  {
    name: "Prof. Tushara Chaminda",
    role: "Professor",
    company: "Faculty of Engineering, University of Ruhuna",
    image: tusharaImg,
    quote: "Mr. Chandula Jayathilake is one of my exceptional students who consistently demonstrates outstanding leadership qualities, effectively motivating and guiding teams to successful outcomes. His proficiency in effective communication, problem-solving, and collaboration, combined with academic excellence, makes him a motivated and hard-working engineering student. His positive attitude and delightful personality make him a valuable asset to any institute.",
    rating: 5,
    credentials: "Professor of Engineering",
    relationship: "Academic Mentor"
  },
  {
    name: "Praneeth Sathsara Wijesinghe",
    role: "Lecturer",
    company: "Faculty of Engineering, University of Ruhuna",
    image: praneethImg,
    quote: "Chandula is a multi-talented, dedicated, and enthusiastic engineering student who is always willing to accept challenges and finish them successfully in a timely manner. His engagement with extracurricular activities has improved his leadership and communication skills. He immensely supported our department in organizing the 'INSPIRE' guest lecture series. I can recommend Chandula as an all-rounder engineering student who possesses most of the employability skills expected by leading employers.",
    rating: 5,
    credentials: "Academic Lecturer",
    relationship: "Academic Mentor"
  },
];

export function Endorsements() {
  return (
    <section id="endorsements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Endorsements
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What colleagues and mentors say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {endorsements.map((endorsement, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-scale-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/20" />
              
              <div className="flex items-start mb-4">
                <img
                  src={endorsement.image}
                  alt={endorsement.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 shadow-custom-md"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground">
                    {endorsement.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {endorsement.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {endorsement.company}
                  </p>
                  {endorsement.credentials && (
                    <p className="text-xs text-muted-foreground/80 mt-1">
                      {endorsement.credentials}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex">
                      {[...Array(endorsement.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-warning fill-warning" />
                      ))}
                    </div>
                    {endorsement.relationship && (
                      <span className="text-xs text-muted-foreground/70 bg-muted/50 px-2 py-1 rounded-full">
                        {endorsement.relationship}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <blockquote className="text-muted-foreground leading-relaxed italic">
                "{endorsement.quote}"
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}