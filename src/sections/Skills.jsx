import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { FaJs, FaReact, FaNode, FaPhp, FaPython, FaJava, FaGitAlt, FaFigma, FaAndroid, FaHtml5, FaCss3Alt, FaGithub, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMongodb, SiMysql, SiPostgresql, SiXampp, SiPostman, SiInsomnia, SiCanva, SiRender, SiVercel, SiNetlify, SiWix, SiWordpress, SiOdoo } from "react-icons/si";

const skills = [
  {
    title: "Languages & Frameworks",
    items: [
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "Node.js", icon: <FaNode />, color: "#339933" },
      { name: "Express.js", icon: <FaNode />, color: "#339933" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "C++", icon: <FaJava />, color: "#00599C" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      { name: "XAMPP", icon: <SiXampp />, color: "#F1A43C" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Insomnia", icon: <SiInsomnia />, color: "#4000BF" },
      { name: "Android Studio", icon: <FaAndroid />, color: "#3DDC84" },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
    ],
  },
  {
    title: "API Development",
    items: [
      { name: "RESTful APIs", icon: <FaCode />, color: "#61DAFB" },
      { name: "Mongoose ORM", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { name: "Render", icon: <SiRender />, color: "#EC4C47" },
      { name: "Vercel", icon: <SiVercel />, color: "#000000" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
      { name: "GitHub Pages", icon: <FaGithub />, color: "#181717" },
    ],
  },
  {
    title: "CMS & ERP",
    items: [
      { name: "Wix", icon: <SiWix />, color: "#0C0C0C" },
      { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
      { name: "Odoo", icon: <SiOdoo />, color: "#7A8B8B" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="flex flex-col items-center px-6">
        {/* Section Title */}
        <SectionTitle text="Skills" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-12">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              className="border border-gray-700 rounded-lg p-5 w-64 bg-gray-900 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center relative">
                {category.title}
                <span className="block w-16 h-1 bg-cyan-500 mt-1 mx-auto rounded-full"></span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex flex-col items-center justify-center w-20 h-20 text-3xl cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      className="transition-colors duration-300"
                      initial={{ color: "#FFFFFF" }}
                      whileHover={{ color: item.color }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-sm mt-2 text-center">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  