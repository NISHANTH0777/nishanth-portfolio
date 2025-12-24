import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Links = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect with Me
      </motion.h2>

      <motion.div
        className="bg-white rounded-2xl p-8 shadow-lg flex justify-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/NISHANTH0777"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex flex-col items-center gap-2
            text-gray-700 font-medium
            transition-all duration-300 ease-out
            hover:text-indigo-600
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-md
            active:scale-95
          "
        >
          <Github
            size={36}
            className="transition-transform duration-300 group-hover:rotate-3"
          />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nishanth-s7"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex flex-col items-center gap-2
            text-gray-700 font-medium
            transition-all duration-300 ease-out
            hover:text-indigo-600
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-md
            active:scale-95
          "
        >
          <Linkedin
            size={36}
            className="transition-transform duration-300 group-hover:-rotate-3"
          />
          <span>LinkedIn</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Links;

