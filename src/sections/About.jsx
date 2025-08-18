import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import ProfileCard from "@/components/ProfileCard";
import aboutPicFront from "@/assets/images/aboutPic.jpg";
import aboutPicBack from "@/assets/images/aboutPic2.jpg";

export default function About() {
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
      </motion.div>
    </section>
  );
}
