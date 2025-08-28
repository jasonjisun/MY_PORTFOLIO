import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import ProfileCard from "@/components/ProfileCard";
import aboutPicFront from "@/assets/images/aboutPic.jpg";
import aboutPicBack from "@/assets/images/aboutPic2.jpg";
import { RiShakeHandsFill } from "react-icons/ri";
import { FaLinkedin, FaInstagram, FaGithub, FaSpotify, FaDiscord } from "react-icons/fa";

export default function About() {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-black text-white gap-10"
    >
      {/* Left Column - Profile Card */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProfileCard frontImage={aboutPicFront} backImage={aboutPicBack} />
      </motion.div>

      {/* Right Column - Text */}
      <motion.div
        className="max-w-xl flex flex-col gap-6 text-justify"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle text="About Me" />

        <p className="text-gray-400 leading-relaxed text-lg">
          Hello! I'm Jason Castillon, a passionate{" "}
          <span className="text-white font-medium">Software Developer </span>
          with experience in building modern, responsive web applications. I
          love turning ideas into reality using clean and efficient code. When
          I'm not coding, I enjoy exploring new technologies, improving my
          skills, and collaborating on open-source projects.
        </p>

        <p className="text-gray-400 leading-relaxed text-lg">
          My focus is on{" "}
          <span className="text-white font-medium">
            JavaScript and modern web frameworks
          </span>
          , but I'm always eager to learn new tools and expand my horizons in
          the world of software development.
        </p>

        {/* Connect Button + Social Links */}
        <div className="mt-6 flex flex-col items-center md:items-start gap-4">
          <motion.button
            onClick={() => setShowSocials(!showSocials)}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 text-lg shadow-lg cursor-pointer hover:scale-105"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <span></span><RiShakeHandsFill />Connect with me
          </motion.button>

          {/* Fixed height container so layout doesn’t shift */}
          <div className="h-12 flex items-center">
            <AnimatePresence>
              {showSocials && (
                <motion.div
                  className="flex gap-6 text-2xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.a
                    href="https://www.linkedin.com/in/jason-castillon"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#0A66C2" }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/jinshunnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#E4405F" }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a
                    href="https://github.com/jasonjisun"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#ffffff" }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://open.spotify.com/user/pmqjjrlfjjy8woatwq0rw43cx?si=b673faf615004432"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#1DB954" }}
                  >
                    <FaSpotify />
                  </motion.a>
                  <motion.a
                    href="https://discordapp.com/users/511422157398736896"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#5865F2" }}
                  >
                    <FaDiscord />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
