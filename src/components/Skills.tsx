import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";

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
        <h2 className="text-6xl font-bold mb-4 pb-6">What i Do?</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 place-items-center">
          {skillsIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[160px]  w-[200px]  mb-4 flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
