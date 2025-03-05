"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectList = ( {projects} ) => {
  return (
    <div className="container mx-auto px-4 sm:px-0 ">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;