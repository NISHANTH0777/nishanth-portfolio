import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Links from "@/components/Links";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nishanth S | BCA Student | Full Stack Developer & Data Analyst</title>
        <meta
          name="description"
          content="Portfolio of Nishanth S - BCA final-year student with expertise in Data Analytics, Full Stack Development, and AI-powered applications."
        />
        <meta
          name="keywords"
          content="Nishanth S, BCA Student, Full Stack Developer, Data Analyst, AI Projects, Python Developer, React Developer"
        />
        <meta name="author" content="Nishanth S" />
        <meta property="og:title" content="Nishanth S | Full Stack Developer & Data Analyst" />
        <meta
          property="og:description"
          content="Passionate BCA student with hands-on experience in Data Analytics, Full Stack Development, and AI-powered applications."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nishanths.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Links />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
