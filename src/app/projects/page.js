"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ProjectList from "../components/ProjectList";
import LinkButton from "../components/LinkButton";
import { projects } from "../data/projects";

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
