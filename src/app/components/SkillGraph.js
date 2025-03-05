"use client";
import React, { useEffect, useRef } from "react";
import { React as ReactIcon, JavaScript, NodeJs, ExpressJsLight, MongoDB, PostgreSQL } from "developer-icons";
import * as d3 from "d3";

const SkillGraph = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth * 0.9;
    const height = 600;

    const techIcons = {
      "React": ReactIcon,
      "JavaScript": JavaScript,
      "Node.js": NodeJs,
      "Express": ExpressJsLight,
      "MongoDB": MongoDB,
      "PostGreSQL": PostgreSQL
    };

    const nodes = [
      { id: "Harry", group: "root" },
      { id: "Frontend", group: "category" },
      { id: "React", group: "tech" },
      { id: "JavaScript", group: "tech" },
      { id: "Backend", group: "category" },
      { id: "Node.js", group: "tech" },
      { id: "Express", group: "tech" },
      { id: "Database", group: "category" },
      { id: "MongoDB", group: "tech" },
      { id: "PostGreSQL", group: "tech" },
      { id: "DevOps", group: "category" }
    ];

    const links = [
      { source: "Harry", target: "Frontend" },
      { source: "Harry", target: "Backend" },
      { source: "Harry", target: "Database" },
      { source: "Harry", target: "DevOps" },
      { source: "Frontend", target: "React" },
      { source: "Frontend", target: "JavaScript" },
      { source: "Backend", target: "Node.js" },
      { source: "Backend", target: "Express" },
      { source: "Database", target: "MongoDB" },
      { source: "Database", target: "PostGreSQL" }
    ];

    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2);

    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .call(d3.drag()
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
        })
      );

    // Add different styles based on node type
    node.append("circle")
      .attr("r", d => d.group === "root" ? 40 : d.group === "category" ? 30 : 0) // No circle for tech nodes
      .attr("fill", d => d.group === "root" ? "#ffffff" : d.group === "category" ? "#ff5733" : "none")
      .attr("stroke", d => d.group === "root" ? "#000000" : d.group === "category" ? "#ffffff" : "none")
      .attr("stroke-width", d => d.group === "root" ? 2 : 0);

    // Append React components for tech icons
    const techNodes = node.filter(d => techIcons[d.id]);

    techNodes.append("foreignObject")
      .attr("x", -20)
      .attr("y", -20)
      .attr("width", 40)
      .attr("height", 40)
      .html(d => 
          `<div>
            ${techIcons[d.id]}
          </div>`
      );
      

    // Add text labels for all nodes
    node.append("text")
      .text(d => d.id)
      .attr("x", 0)
      .attr("y", d => d.group === "tech" ? 45 : 5) // Adjust position for tech labels
      .attr("font-size", "14px")
      .attr("text-anchor", "middle")
      .attr("fill", d => d.group === "root" ? "#000000" : "#ffffff");

    // // Tooltip
    // const tooltip = d3.select("body")
    //   .append("div")
    //   .style("position", "absolute")
    //   .style("font-size", "10px")
    //   .style("padding", "4px")
    //   .style("background", "#333")
    //   .style("color", "white")
    //   .style("border-radius", "5px")
    //   .style("opacity", 0);

    // node.on("mouseover", (event, d) => {
    //   tooltip.style("opacity", 1)
    //     .html(`<strong>${d.id}</strong>`)
    //     .style("left", `${event.pageX + 10}px`)
    //     .style("top", `${event.pageY}px`);
    // })
    //   .on("mouseout", () => tooltip.style("opacity", 0));

    simulation.on("tick", () => {
      link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("transform", d => `translate(${d.x}, ${d.y})`);
    });

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default SkillGraph;
