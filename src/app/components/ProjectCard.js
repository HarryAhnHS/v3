import Image from "next/image";
import { GithubIcon, SquareArrowOutUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <a 
      href={project.demo} 
      target="_blank" 
      className="block bg-neutral-100/50 dark:bg-neutral-800/50 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neutral-400/30 dark:hover:shadow-neutral-900/50"
    >
      <Image 
        src={project.image} 
        alt={project.imageAlt} 
        className="rounded-t-lg w-full h-[200px] object-cover object-top transition-all duration-500"
      />
      <div className="p-4">
        <h3 className="text-xl text-neutral-800 dark:text-neutral-200 font-semibold">{project.title}</h3>
        <p className="text-sm mt-2">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <a href={project.github} target="_blank" className="flex items-center gap-1 hover:text-gray-600 dark:hover:text-gray-300 transition-transform duration-300 hover:scale-110">
            <GithubIcon className="h-4 w-4 "/>
          </a>
          <SquareArrowOutUpRight className="h-4 w-4"/>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
