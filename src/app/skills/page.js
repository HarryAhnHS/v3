"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillGraph from "../components/SkillGraph";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    useEffect(() => {
        gsap.fromTo(
          ".fade-in",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out" }
        );
      }, []);

    return (
        <div className="relative flex items-center justify-center w-full px-0"> {/* Ensure full width */}
            <div className="fade-in w-full gap-2">
                <h3 className="italic text-gray-700 dark:text-gray-200 mb-2">
                    check out my most comfortable tech stack:
                </h3>
                
                <div className="w-full h-[700px] space-y-2 flex items-center justify-center rounded-sm bg-neutral-300/20 dark:bg-neutral-800/20">
                    {/* Node graph using d3js */}
                    <SkillGraph />
                </div>
            </div>
        </div>
    );
}