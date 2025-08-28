import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ReactTyped } from "react-typed";
import { PiHandWavingBold } from "react-icons/pi";

import pfp from "@/assets/images/pfp.jpg";
import resume from "@/assets/files/CASTILLON_RESUME.pdf";
import resumeImage from "@/assets/images/resumeImage.png";

import AnimatedText from "@/components/motion/AnimatedText";
import AnimatedIconButton from "@/components/motion/AnimatedIconButton";

export default function Home() {
  const [isHoveringResume, setIsHoveringResume] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 bg-black text-white"
    >
      {/* Profile Image */}
      <motion.img
        src={pfp}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.5 }}
      />

      {/* Name & Title */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl text-gray-400 font-light mb-2 inline-flex items-center gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hello, I'm
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block text-white"
          >
            <PiHandWavingBold />
          </motion.span>
        </motion.h2>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 font-[Poppins]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Jason Castillon
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl text-gray-400 mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          And I'm a Software{" "}
          <ReactTyped
            strings={["Developer", "Engineer"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <AnimatedIconButton
            text="Download Resume"
            href={resume}
            download
            isHovering={isHoveringResume}
            setIsHovering={setIsHoveringResume}
          />

          <ScrollLink to="project" smooth duration={600} offset={-140}>
            <motion.button
              className="px-6 py-3 rounded-full bg-white text-black font-medium border border-white cursor-pointer"
              whileHover={{
                backgroundColor: "#37353E",
                color: "#ffffff",
                transition: { duration: 0.3 },
              }}
            >
              <AnimatedText text="View Projects" />
            </motion.button>
          </ScrollLink>
        </div>

        {/* Resume Preview */}
        <motion.div
          className="mt-6 w-48 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHoveringResume ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.4 }}
        >
          <img src={resumeImage} alt="Resume Preview" className="w-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
