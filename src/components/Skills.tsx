"use client"
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";
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
    icon: <FaReact size={140} />,
    label: "React",
  },
  {
    icon: <FaJsSquare size={140} />,
    label: "JavaScript",
  },
  {
    icon: <FaHtml5 size={140} />,
    label: "HTML",
  },
  {
    icon: <FaCss3Alt size={140} />,
    label: "CSS",
  },
  {
    icon: <FaReact size={140} />,
    label: "React",
  },
  {
    icon: <FaJsSquare size={140} />,
    label: "JavaScript",
  },
];

function Skills() {
  return (
    <div className="py-5">
      <div className="text-white mx-auto p-8 text-center">
      <h2 className="text-white mb-8 text-center font-extrabold text-4xl md:text-5xl  ">
        Technologies
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
