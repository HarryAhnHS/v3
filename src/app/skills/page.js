"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillGraph from "../components/SkillGraph";
import SkillList from "../components/SkillList";
import { LayoutGrid, List } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Define skills data at the root level
const nodes = [
  { id: "Me", group: "root" },
  { id: "Frontend", group: "category" },
  { id: "React", group: "tech" },
  { id: "NextJS", group: "tech" },
  { id: "Backend", group: "category" },
  { id: "Node.js", group: "tech" },
  { id: "Express", group: "tech" },
  { id: "Database", group: "category" },
  { id: "Firebase", group: "tech" },
  { id: "PostGreSQL", group: "tech" },
  { id: "MongoDB", group: "tech" },
  { id: "DevOps", group: "category" },
  { id: "Git", group: "tech" },
  { id: "Docker", group: "tech" },
  { id: "Selenium", group: "tech" },
  { id: "Railway", group: "tech" },
  { id: "Language", group: "category" },
  { id: "C++", group: "tech" },
  { id: "Python", group: "tech" },
  { id: "JavaScript", group: "tech" },
  { id: "SwiftUI", group: "tech" },
  { id: "Flutter", group: "tech" },
  { id: "Java", group: "tech" },
  { id: "Supabase", group: "tech" },
  { id: "Prisma", group: "tech" },
];

const links = [
  { source: "Me", target: "Frontend" },
  { source: "Me", target: "Backend" },
  { source: "Me", target: "Database" },
  { source: "Me", target: "DevOps" },
  { source: "Me", target: "Language" },
  { source: "Frontend", target: "React" },
  { source: "Frontend", target: "NextJS" },
  { source: "Backend", target: "Node.js" },
  { source: "Backend", target: "Express" },
  { source: "Database", target: "Firebase" },
  { source: "Database", target: "PostGreSQL" },
  { source: "Database", target: "MongoDB" },
  { source: "Database", target: "Prisma" },
  { source: "DevOps", target: "Git" }, 
  { source: "DevOps", target: "Docker" }, 
  { source: "DevOps", target: "Selenium" }, 
  { source: "DevOps", target: "Supabase" }, 
  { source: "DevOps", target: "Railway" }, 
  { source: "Language", target: "C++" },
  { source: "Language", target: "Python" },
  { source: "Language", target: "JavaScript" },
  { source: "Language", target: "SwiftUI" },
  { source: "Language", target: "Flutter" },
  { source: "Language", target: "Java" },
];

export default function Skills() {
  const [viewMode, setViewMode] = useState("graph");

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-4 md:px-0">
      <div className="fade-in w-full gap-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="italic text-gray-700 dark:text-gray-200">
            check out my most comfortable tech stack:
          </h3>
          <div className="flex items-center gap-2 bg-neutral-300/20 dark:bg-neutral-800/20 rounded-lg p-1">
            <button
              onClick={() => setViewMode("graph")}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                viewMode === "graph"
                  ? "bg-white dark:bg-neutral-700"
                  : "hover:bg-white/50 dark:hover:bg-neutral-700/50"
              }`}
            >
              <LayoutGrid size={20} className="text-gray-700 dark:text-gray-200" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                viewMode === "list"
                  ? "bg-white dark:bg-neutral-700"
                  : "hover:bg-white/50 dark:hover:bg-neutral-700/50"
              }`}
            >
              <List size={20} className="text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        </div>
        
        <div className="w-full space-y-2 flex items-center justify-center rounded-sm bg-neutral-300/20 dark:bg-neutral-800/20 p-4">
          {viewMode === "graph" ? (
            <div className="w-full h-[700px]">
              <SkillGraph nodes={nodes} links={links} />
            </div>
          ) : (
            <SkillList nodes={nodes} links={links} />
          )}
        </div>
      </div>
    </div>
  );
}