import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import FloatingElements from "./FloatingElements";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = [
    "BCA Student",
    "Data Analytics",
    "Full Stack Developer",
    "AI Projects",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 decorative-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating Elements */}
      <FloatingElements />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm mb-8 shadow-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Open to opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-foreground">Nishanth </span>
          <span className="gradient-text">S</span>
        </motion.h1>

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-8 mb-6"
        >
          <p className="text-lg md:text-xl font-mono">
            <span className="text-muted-foreground">{">"} </span>
            <TypewriterText texts={roles} className="text-primary font-medium" />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate BCA student with hands-on experience in{" "}
          <span className="text-primary font-medium">Data Analytics</span>,{" "}
          <span className="text-accent font-medium">Full Stack Development</span>, and{" "}
          <span className="gradient-text font-medium">AI-powered applications</span>.
          Skilled in building real-world projects and deploying them live.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button variant="hero" size="lg" onClick={scrollToProjects} className="shadow-lg hover:shadow-xl transition-shadow">
            View Projects
            <ArrowDown className="w-4 h-4" />
          </Button>
          <Button variant="heroOutline" size="lg" asChild className="shadow-sm hover:shadow-lg transition-shadow">
            <a href="/Nishanth_S_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="glass" size="lg" onClick={scrollToContact} className="shadow-sm hover:shadow-lg transition-shadow">
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/NISHANTH0777"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/80 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/nishanth-s7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/80 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
