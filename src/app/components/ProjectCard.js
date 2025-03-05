import Image from "next/image";
import { GithubIcon, SquareArrowOutUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <Image 
            src={project.image} 
            alt={project.imageAlt} 
            className="rounded-t-lg w-full h-[200px] group-hover:h-[275px] object-cover object-center transition-all duration-500"
        />
        <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm mt-1 h-18">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md">
                    {tech}
                    </span>
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <a href={project.github} target="_blank" className="flex items-center gap-1">
                    <GithubIcon className="h-4 w-4"/>
                </a>
                <a href={project.demo} target="_blank" className="flex items-center gap-1">
                    <SquareArrowOutUpRight className="h-4 w-4"/>
                </a>
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;