import { Rocket, BookOpen, Target, Zap } from "lucide-react";

const journey = [
  {
    icon: BookOpen,
    title: "Self-Driven Learner",
    description: "Continuously learning new technologies and frameworks through online courses and hands-on projects.",
  },
  {
    icon: Rocket,
    title: "Project-Based Learning",
    description: "Building real-world applications to solidify understanding and gain practical experience.",
  },
  {
    icon: Target,
    title: "Internship-Ready",
    description: "Equipped with industry-relevant skills and ready to contribute to professional environments.",
  },
  {
    icon: Zap,
    title: "Quick Adapter",
    description: "Ability to quickly learn and adapt to new technologies and development methodologies.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My path towards becoming a skilled software professional
          </p>
        </div>

        {/* Fresher Badge */}
        <div className="flex justify-center mb-12">
          <div className="glass-card px-8 py-4 inline-flex items-center gap-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-lg font-medium text-foreground">
              Fresher • Final Year BCA Student
            </span>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>

        {/* Journey Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-6 group hover-glow text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary mx-auto mb-4 w-fit group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />
          
          <div className="space-y-8">
            <div className="relative flex items-center justify-center">
              <div className="glass-card px-6 py-3 z-10">
                <span className="text-sm font-medium text-primary">2022</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Started BCA Program</span>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="glass-card px-6 py-3 z-10">
                <span className="text-sm font-medium text-accent">2023</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Built First Projects</span>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="glass-card px-6 py-3 z-10 border-primary/50">
                <span className="text-sm font-medium gradient-text">2024</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Final Year & Job Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
