"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { techIcons } from "../data/skills";

const SkillList = ({ nodes, links }) => {
  const { theme } = useTheme();
  
  // Group skills by category
  const categories = {};
  nodes.forEach(node => {
    if (node.group === "tech") {
      const categoryLink = links.find(link => link.target.id === node.id);
      if (categoryLink) {
        const category = categoryLink.source.id;
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(node);
      }
    }
  });

  return (
    <div className="w-full space-y-6">
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => {
              const Icon = techIcons[skill.id];
              return (
                <div
                  key={skill.id}
                  className="flex flex-col items-center p-4 rounded-lg bg-neutral-300/20 dark:bg-neutral-800/20 hover:bg-neutral-300/30 dark:hover:bg-neutral-800/30 transition-colors"
                >
                  <Icon size={32} color={theme === "dark" ? "#fff" : "#333"} />
                  <span className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                    {skill.id}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList; 