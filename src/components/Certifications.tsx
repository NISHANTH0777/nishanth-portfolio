import { Award, CheckCircle, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Data Analytics Certification",
    platform: "Udemy",
    status: "Completed",
    year: "2024",
  },
  {
    name: "AI Course Certification",
    platform: "Simplilearn",
    status: "Completed",
    year: "2024",
  },
  {
    name: "Python Certification",
    platform: "Udemy",
    status: "Completed",
    year: "2023",
  },
  {
    name: "Web Development Bootcamp",
    platform: "Coursera",
    status: "Completed",
    year: "2023",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Professional certifications and courses completed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="glass-card p-6 group hover-glow text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary mx-auto mb-4 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                <Award className="w-8 h-8" />
              </div>
              
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {cert.platform}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">{cert.status}</span>
              </div>
              
              <div className="mt-2 text-xs text-muted-foreground">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
