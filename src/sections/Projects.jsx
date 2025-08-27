import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { SectionTitle } from "@/components/SectionTitle";
import project1Image from "@/assets/images/project1.png";

const placeholderImage = "https://via.placeholder.com/600x400?text=Coming+Soon";

const projects = [
  {
    title: "LWF Hospital Appointment and Queuing System",
    description: `Developed a full-stack web application to streamline hospital appointment scheduling, EMR management, and real-time queueing. Implemented secure authentication (JWT and Google OAuth), role-based dashboards for Admin, Doctor, and Patient, automated email notifications, and session-based queue management. Built scalable RESTful APIs with real-time updates using cron jobs and contextual state management.`,
    image: project1Image,
    github: "https://github.com/jasonjisun/LWF-API/tree/revised-version",
  },
  {
    title: "Coming Soon",
    description: "This project will be added soon.",
    image: placeholderImage,
    github: "#",
  },
  {
    title: "Coming Soon",
    description: "This project will be added soon.",
    image: placeholderImage,
    github: "#",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const nextProject = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevProject = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white gap-10"
    >
      <SectionTitle text="Projects" />

      {/* Carousel Container */}
      <div className="relative w-full max-w-3xl h-[650px] sm:h-[700px] md:h-[750px] lg:h-[800px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex flex-col items-center gap-6 bg-zinc-900 p-6 rounded-2xl shadow-xl w-full h-full overflow-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Image */}
            <div
              className="w-full flex-shrink-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center bg-zinc-800 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setZoomed(true)}
            >
              <img
                src={projects[current].image.src || projects[current].image}
                alt={projects[current].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-semibold text-center">
              {projects[current].title}
            </h3>
            <p className="text-gray-400 text-justify max-w-xl">
              {projects[current].description}
            </p>

            {/* GitHub Link */}
            <a
              href={projects[current].github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              <FaGithub /> Source Code
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextProject}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Zoomed Image Modal */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
          >
            <motion.img
              src={projects[current].image.src || projects[current].image}
              alt={projects[current].title}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={() => setZoomed(false)}
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
