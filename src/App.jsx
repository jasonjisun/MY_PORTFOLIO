import { Element } from "react-scroll";
import { motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // <-- import Footer
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar is fixed */}
      <Navbar />

      {/* Sections wrapped with Element for react-scroll */}
      <Element name="mainy">
        <Home />
      </Element>

      <Element name="aboutMey">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="project">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      {/* Footer added here */}
      <Footer />
    </div>
  );
}
