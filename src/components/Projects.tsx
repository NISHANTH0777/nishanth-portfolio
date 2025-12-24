import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* AI Resume Analyzer */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          whileHover={{ y: -6 }}
        >
          <h3 className="text-xl font-semibold mb-2">
            AI Resume Analyzer
          </h3>

          <p className="text-gray-600 mb-4">
            AI-powered resume analysis platform with ATS scoring, skill extraction,
            and intelligent insights.
          </p>

          <div className="flex gap-4">
            <a
              href="https://resume-insight-ai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium
                transition-all duration-300
                hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg
                active:scale-95
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/NISHANTH0777/resume-insight-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium
                transition-all duration-300
                hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-md
                active:scale-95
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Expense Tracker */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          whileHover={{ y: -6 }}
        >
          <h3 className="text-xl font-semibold mb-2">
            Expense Tracker
          </h3>

          <p className="text-gray-600 mb-4">
            Full-stack expense tracking application with analytics and clean UI.
          </p>

          <div className="flex gap-4">
            <a
              href="https://expense-tracker-flask-ssr0.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium
                transition-all duration-300
                hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg
                active:scale-95
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/NISHANTH0777/expense-tracker-flask"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium
                transition-all duration-300
                hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-md
                active:scale-95
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
