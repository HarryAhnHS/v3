"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the entire grid
    const gridItems = gridRef.current.querySelectorAll(".project-card");
    
    gsap.fromTo(
      gridItems,
      {
        opacity: 0,
        y: 50, // Start position (slightly below)
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Delay between each animation
        duration: 1,
        ease: "power4.out", // Ease out effect
      }
    );
  }, [projects]);

  return (
    <div className="container mx-auto px-4 sm:px-0">
      <div ref={gridRef} className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
