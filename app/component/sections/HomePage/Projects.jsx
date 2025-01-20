import React from "react";
import { projects } from "@/app/data/sharedData";
import { motion } from "framer-motion";
import ProjectCard from "../../ui/ProjectCard";

const Projects = () => {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          PROJECTS
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
