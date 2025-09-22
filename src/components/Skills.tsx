"use client"
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiDjango, SiMysql, SiNextdotjs, SiMongodb, SiPhp } from "react-icons/si";
import { motion } from "framer-motion";

const skillsIcons = [
  {
    icon: <FaHtml5 size={140} />,
    label: "HTML",
  },
  {
    icon: <FaCss3Alt size={140} />,
    label: "CSS",
  },
  {
    icon: <FaJsSquare size={140} />,
    label: "JavaScript",
  },
  {
    icon: <FaReact size={140} />,
    label: "React",
  },
  {
    icon: <SiTailwindcss size={140} />,
    label: "Tailwind CSS",
  },
  {
    icon: <SiNextdotjs size={140} />,
    label: "Next.js",
  },
  {
    icon: <SiExpress size={140} />,
    label: "Express.js",
  },
  {
    icon: <FaNodeJs size={140} />,
    label: "Node.js",
  },
  {
    icon: <FaPython size={140} />,
    label: "Python",
  },
  {
    icon: <SiPhp size={140} />,
    label: "PHP",
  },
  {
    icon: <SiMysql size={140} />,
    label: "MySQL",
  },
  {
    icon: <SiMongodb size={140} />,
    label: "MongoDB",
  },
];

function Skills() {
  return (
    <div className="py-5" id="skills">
      <div className="text-white mx-auto p-8 text-center">
      <h2 className="text-white mb-16 text-center font-extrabold text-4xl md:text-5xl  ">
        Skills
      </h2>
        <div className="grid grid-cols-2 gap-1 md:gap-6 sm:grid-cols-3 md:grid-cols-4 place-items-center">
          {skillsIcons.map((skill, index) => (
            <motion.div
              key={index}
              className="h-[130px] md:h-[180px]  w-[140px] md:w-[200px]  mb-4 flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {skill.icon}
              <p className="mt-2 text-orange-400">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
