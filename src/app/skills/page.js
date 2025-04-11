"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillGraph from "../components/SkillGraph";
import SkillList from "../components/SkillList";
import { LayoutGrid, List } from "lucide-react";
import { nodes, links } from "../data/skills";
import { useMobileDevice } from "../hooks/useMobileDevice";


gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const isMobileDevice = useMobileDevice();
  const [viewMode, setViewMode] = useState("graph");

  useEffect(() => {
    setViewMode(isMobileDevice ? "list" : "graph");
  }, [isMobileDevice]);

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="fade-in w-full gap-2">
        <div className="flex justify-between items-center mb-4 px-4 md:px-8">
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
            <div className="w-full h-[800px]">
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