"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: `Next.js | TailwindCSS | Framer Motion`,
    image: `/images/projects/Portfolio.png`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/portfolio",
    previewUrl: "https://portfolio-azure-nu-72.vercel.app/",
  },
  {
    id: 2,
    title: "DocMemo - Blog",
    description: `Next.js | Tailwind CSS | Vercel`,
    image: `/images/projects/docmemo.png`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/DocMemo",
    previewUrl: "https://docmemo.vercel.app/",
  },
  {
    id: 3,
    title: "Xpo-Social Web App",
    description: `Python | Django | Bootstrap`,
    image: `/images/projects/xpo.jpg`,
    tags: [`All`, `Backend`],
    gitUrl: "https://github.com/ankitchoubeyy/Xpo--Social-WebApp",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Education Website",
    description: `React.js | Tailwind CSS | Web3forms`,
    image: `/images/projects/education.png`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/education-website",
    previewUrl: "https://kaydee-institute.vercel.app/",
  },
  {
    id: 5,
    title: "React portfolio website ",
    description: `Project 1 description`,
    image: `/images/projects/portfolio.jpg`,
    tags: [`All`, `Backend`],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Love Calculator ",
    description: `HTML | CSS | JavaScript`,
    image: `/images/projects/lovecalculator.png`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/LoveCalculator",
    previewUrl: "https://ankitchoubeyy.github.io/LoveCalculator/",
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const fileteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  return (
    <>
      <div
        className="px-4 py-6 md:px-12 text-white py-18 mt-20"
        id="project"
      >
        <h2 className="text-white text-center font-extrabold text-4xl md:text-5xl">
          My Projects
        </h2>
        <div className="flex text-white flex-row justify-center items-center text-2xl gap-5 sm:gap-10 mt-10">
          <ProjectTag
            onClick={handleTagChange}
            tag="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            tag="Frontend"
            isSelected={tag === "Frontend"}
          />
          <ProjectTag
            onClick={handleTagChange}
            tag="Backend"
            isSelected={tag === "Backend"}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {fileteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgURL={project.image}
                tags={project}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
