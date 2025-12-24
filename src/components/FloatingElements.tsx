import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Code Brackets */}
      <motion.div
        className="absolute top-20 left-10 text-6xl font-mono text-primary/20 font-bold"
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-5xl font-mono text-accent/20 font-bold"
        animate={{
          y: [10, -15, 10],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {"</>"}
      </motion.div>

      {/* Terminal-style card */}
      <motion.div
        className="absolute top-1/4 right-10 hidden lg:block"
        animate={{
          y: [-5, 15, -5],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-3 border border-border/50 shadow-lg">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="font-mono text-xs text-muted-foreground/60">
            <span className="text-primary/60">const</span> dev = <span className="text-accent/60">"Nishanth"</span>;
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Cube representation */}
      <motion.div
        className="absolute bottom-1/4 left-20 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-12 backdrop-blur-sm border border-primary/20" />
          <div className="absolute inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg transform -rotate-6 backdrop-blur-sm border border-accent/20" />
        </div>
      </motion.div>

      {/* Tech icons floating */}
      <motion.div
        className="absolute top-1/3 left-1/4 text-2xl hidden md:block"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
          <span className="text-primary/60 font-mono font-bold text-sm">Py</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 text-2xl hidden md:block"
        animate={{
          y: [10, -10, 10],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20">
          <span className="text-accent/60 font-mono font-bold text-sm">AI</span>
        </div>
      </motion.div>

      {/* Git branch icon */}
      <motion.div
        className="absolute top-2/3 left-10 hidden lg:block"
        animate={{
          y: [-5, 15, -5],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/20">
          <svg className="w-5 h-5 text-green-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
            <path d="M6 9v3" />
          </svg>
        </div>
      </motion.div>

      {/* React-like orbit */}
      <motion.div
        className="absolute top-1/2 right-32 hidden xl:block"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border border-primary/20 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/40 rounded-full" />
        </div>
      </motion.div>

      {/* Database icon */}
      <motion.div
        className="absolute bottom-20 right-40 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20">
          <svg className="w-5 h-5 text-cyan-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingElements;
