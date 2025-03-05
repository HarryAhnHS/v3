"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

import Demo from "../assets/projects/Demo.png";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Shakespeare Translator",
    href: "https://yourtranslatorapp.com",
    description: "A web app that translates modern English to Shakespearean English.",
    image: Demo,
    imageAlt: "Shakespeare Translator app",
    technologies: ["React", "Next.js", "TailwindCSS", "GPT-4"],
    github: "https://github.com/yourrepo/shakespeare-translator",
    demo: "https://yourtranslatorapp.com",
  },
  {
    title: "Match Your Freak",
    href: "https://matchyourfreak.com",
    description: "A personality and humor-based matching app for making friends.",
    image: Demo,
    imageAlt: "Match Your Freak app",
    technologies: ["React Native", "Firebase", "Node.js", "Twilio API"],
    github: "https://github.com/yourrepo/match-your-freak",
    demo: "https://matchyourfreak.com",
  },
  {
    title: "AI Quiz Generator",
    href: "https://aiquiztool.com",
    description: "An AI-powered tool that generates multiple-choice questions from user input.",
    image: Demo,
    imageAlt: "AI Quiz Generator",
    technologies: ["React", "Next.js", "Python", "OpenAI API"],
    github: "https://github.com/yourrepo/ai-quiz-generator",
    demo: "https://aiquiztool.com",
  },
  {
    title: "Portfolio Website",
    href: "https://yourportfolio.com",
    description: "A sleek, interactive portfolio website with GSAP animations.",
    image: Demo,
    imageAlt: "Personal portfolio website",
    technologies: ["React", "Next.js", "GSAP", "TailwindCSS"],
    github: "https://github.com/yourrepo/portfolio",
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
            See more projects
            <Link target="_blank" href="https://harryahnhs.github.io/portfolio/">
                &nbsp;here,&nbsp;
            </Link>
        </span>
        <span>
            or on my
            <Link target="_blank" href="https://github.com/yourgithub">
                &nbsp;GitHub&nbsp;
            </Link>.
        </span>
      </div>
    </>
  );
}
