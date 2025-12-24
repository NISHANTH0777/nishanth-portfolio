import { Code2, Database, Globe, Brain, Terminal, GitBranch } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: Terminal },
  { name: "Data Analytics", icon: Database },
  { name: "SQL", icon: Database },
  { name: "HTML/CSS/JS", icon: Globe },
  { name: "React", icon: Code2 },
  { name: "FastAPI", icon: Terminal },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "AI / ML Basics", icon: Brain },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Get to know more about my background and expertise
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <motion.div
                className="glass-card p-8"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg leading-relaxed text-foreground/90">
                  I am a <span className="text-primary font-medium">BCA final-year student</span> with 
                  strong skills in Python, Data Analytics, Web Development, and AI-based applications.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                  I enjoy building <span className="gradient-text font-medium">practical projects</span> and 
                  solving real-world problems using technology. My passion lies in creating solutions that 
                  make a difference.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                  Currently seeking opportunities to apply my skills in a professional environment 
                  and contribute to innovative projects.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5+", label: "Projects" },
                  { value: "4+", label: "Certifications" },
                  { value: "8+", label: "Skills" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card p-4 text-center"
                    whileHover={{ y: -4, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card p-4 flex items-center gap-4 group cursor-default"
                    whileHover={{ y: -4, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      <skill.icon className="w-5 h-5" />
                    </motion.div>
                    <span className="font-medium text-foreground/90">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
