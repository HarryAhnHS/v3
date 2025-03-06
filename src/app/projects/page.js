"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

import Flexor from "../assets/projects/Flexor.png";
import ProjectList from "../components/ProjectList";
import LinkButton from "../components/LinkButton";

const projects = [
  {
    title: "Flexor",
    href: "https://flexor-front-end-2c6r.vercel.app/",
    description: "An interactive real-time social media platform, allowing users to create/join communities and scaled to support 100,000+ posts.",
    image: Flexor,
    imageAlt: "Flexor",
    technologies: ["React", "Node.js", "Express.js", "PostGreSQL", "TailwindCSS", "RestAPI"],
    github: "https://github.com/HarryAhnHS/flexor-front-end",
    demo: "https://flexor-front-end-2c6r.vercel.app",
  },
  {
    title: "FileStorage",
    href: "https://file-storage-production.up.railway.app/",
    description: "A secure and easy-to-use online file storage solution. Start organizing and accessing your files from anywhere in the world.",
    image: Flexor,
    imageAlt: "Match Your Freak app",
    technologies: ["ExpressJS", "PostGreSQL", "Prisma", "TailwindCSS", "Cloudinary"],
    github: "https://github.com/HarryAhnHS/file-storage",
    demo: "https://file-storage-production.up.railway.app/",
  },
  {
    title: "Portfolio Website",
    href: "https://yourportfolio.com",
    description: "A sleek, interactive portfolio website with GSAP animations.",
    image: Flexor,
    imageAlt: "Personal portfolio website",
    technologies: ["React", "Next.js", "GSAP", "TailwindCSS"],
    github: "https://github.com/HarryAhnHS/v3",
    demo: "https://yourportfolio.com",
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative flex items-center">
        <Search className="absolute top-3 left-3 size-4" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-sm text-gray-700 dark:text-gray-200 w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <div className="mt-4 flex items-center justify-center">
        <span>
            See more projects&nbsp;
            <LinkButton target="_blank" href="https://harryahnhs.github.io/portfolio/">
                here
            </LinkButton>
        </span>
        <span>
            &nbsp;or on my&nbsp;
            <LinkButton target="_blank" href="https://github.com/harryahnhs">
                GitHub
            </LinkButton>.
        </span>
      </div>
    </>
  );
}
