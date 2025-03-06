"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import * as d3 from "d3";

import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiFirebase, SiSwift, SiFlutter, SiCplusplus, SiPython, SiSelenium, SiRailway } from "react-icons/si";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { DiJava, DiDocker, DiHeroku } from "react-icons/di";
import { MdJavascript } from "react-icons/md";
import { RiSupabaseLine } from "react-icons/ri";
import { TbBrandPrisma } from "react-icons/tb";


import { useTheme } from "./ThemeProvider";

const SkillGraph = () => {
  const svgRef = useRef(null);
  const gRef = useRef(null);
  const { theme } = useTheme(); // Accessing the theme from the context

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    // Clear previous before changing
    g.selectAll("*").remove()

    // Get actual SVG size
    const { width, height } = svgRef.current.getBoundingClientRect();
    const gWidth = width * 1.1;
    const gHeight = height * 1.1;
    svg.attr("viewBox", `0 0 ${gWidth} ${gHeight}`);

    // techIcons including languages, frameworks, and additional tools
    const techIcons = {
      "React": FaReact,
      "Node.js": FaNodeJs,
      "Express": SiExpress,
      "Firebase": SiFirebase,
      "PostGreSQL": SiPostgresql,
      "C++": SiCplusplus,
      "Python": SiPython,
      "JavaScript": MdJavascript,
      "Java": DiJava,
      "SwiftUI": SiSwift,
      "Flutter": SiFlutter,
      "Git": FaGit,
      "Docker": DiDocker,
      "Selenium": SiSelenium,
      "MongoDB": TbBrandMongodb,
      "NextJS": TbBrandNextjs,
      "Supabase": RiSupabaseLine,
      "Railway": SiRailway,
      "Heroku": DiHeroku,
      "Prisma": TbBrandPrisma
    };

    // Nodes including the new DevOps, Database, and Frontend entries
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

    // Links including new connections between tools and languages
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

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(75))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(gWidth / 2, gHeight / 2));

    // Append links, nodes, and text to the same <g> element
    const link = g.append("g")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(links)
      .enter()
      .append("line");

    const nodeBackgrounds = g.append("g")
      .selectAll("rect")
      .data(nodes.filter(d => d.group === "tech"))
      .enter()
      .append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("rx", 10)
      .attr("fill", theme === "dark" ? "#444" : "#eee") // Lighter background for dark theme
      .attr("stroke", theme === "dark" ? "#888" : "#222") // Darker border for light theme
      .attr("stroke-width", 1);

    const techNodes = g.append("g")
      .selectAll("foreignObject")
      .data(nodes.filter(d => d.group === "tech"))
      .enter()
      .append("foreignObject")
      .attr("x", -15)
      .attr("y", -15)
      .attr("width", 30)
      .attr("height", 30)
      .style("cursor", "pointer")
      .style("outline", "none")
      .each(function(d) {
        const root = ReactDOM.createRoot(this);
        root.render(React.createElement(techIcons[d.id], { size: "30px", color: theme === "dark" ? "#fff" : "#333" }));
      });

    // Adjusting label text
    const techText = g.append("g")
      .selectAll("text")
      .data(nodes.filter(d => d.group === "tech"))
      .enter()
      .append("text")
      .text(d => d.id)
      .attr("font-size", "10px")
      .attr("fill", theme === "dark" ? "#fff" : "#333") // Text color for tech nodes
      .attr("x", d => d.x)
      .attr("y", d => d.y + 20)
      .attr("text-anchor", "middle")
      .attr("class", "tech-node-label");  // Add class for mobile visibility


    const node = g.append("g")
      .selectAll("circle")
      .data(nodes.filter(d => d.group === "root" || d.group === "category"))
      .enter()
      .append("circle")
      .attr("r", d => d.group === "root" ? 6 : 4)
      .attr("fill", theme === "dark" ? "#555" : "#222") // Darker node color for dark theme
      .attr("stroke", theme === "dark" ? "#fff" : "#333")
      .attr("stroke-width", 2)
      .style("cursor", "pointer"); // Set pointer cursor on hover

    const text = g.append("g")
      .selectAll("text")
      .data(nodes.filter(d => d.group === "root" || d.group === "category"))
      .enter()
      .append("text")
      .text(d => d.id)
      .attr("font-size", "14px")
      .attr("fill", theme === "dark" ? "#ccc" : "#333") // Lighter text for dark theme
      .attr("text-anchor", "middle");

    const drag = d3.drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);
    techNodes.call(drag);
    nodeBackgrounds.call(drag);

    // Tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "#222")
      .style("color", "#fff")
      .style("padding", "5px 10px")
      .style("border-radius", "5px");

    techNodes
      .on("mouseover", (event, d) => {
        tooltip.style("visibility", "visible").text(d.id);
      })
      .on("mousemove", (event) => {
        tooltip.style("top", `${event.pageY - 10}px`).style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      nodeBackgrounds
        .attr("x", d => d.x - 20)
        .attr("y", d => d.y - 20);

      techNodes
        .attr("x", d => d.x - 15)
        .attr("y", d => d.y - 15);

      text
        .attr("x", d => d.x)
        .attr("y", d => d.y + 20);

      techText
        .attr("x", d => d.x)
        .attr("y", d => d.y + 35); // Adjusting the tech node text position to be above the node
    });

    const resizeHandler = () => {
      const { width, height } = svgRef.current.getBoundingClientRect();
      const gWidth = width * 1.1;
      const gHeight = height * 1.1;
      svg.attr("viewBox", `0 0 ${gWidth} ${gHeight}`);
      simulation.force("center", d3.forceCenter(gWidth / 2, gHeight / 2)).alpha(1).restart();
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      tooltip.remove();
    };
  }, [theme]);

  return (
    <svg ref={svgRef} width="100%" height="100%">
      <g ref={gRef} />
    </svg>
  );
};

export default SkillGraph;
