"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import * as d3 from "d3"

import { useTheme } from "./ThemeProvider";
import { techIcons } from "../data/skills";



const SkillGraph = ({ nodes, links }) => {
  const svgRef = useRef(null);
  const gRef = useRef(null);
  const { theme } = useTheme();

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
      .attr("fill", theme === "dark" ? "#444" : "#eee")
      .attr("stroke", theme === "dark" ? "#888" : "#222")
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

    const techText = g.append("g")
      .selectAll("text")
      .data(nodes.filter(d => d.group === "tech"))
      .enter()
      .append("text")
      .text(d => d.id)
      .attr("font-size", "10px")
      .attr("fill", theme === "dark" ? "#fff" : "#333")
      .attr("x", d => d.x)
      .attr("y", d => d.y + 20)
      .attr("text-anchor", "middle")
      .attr("class", "tech-node-label");

    const node = g.append("g")
      .selectAll("circle")
      .data(nodes.filter(d => d.group === "root" || d.group === "category"))
      .enter()
      .append("circle")
      .attr("r", d => d.group === "root" ? 6 : 4)
      .attr("fill", theme === "dark" ? "#555" : "#222")
      .attr("stroke", theme === "dark" ? "#fff" : "#333")
      .attr("stroke-width", 2)
      .style("cursor", "pointer");

    const text = g.append("g")
      .selectAll("text")
      .data(nodes.filter(d => d.group === "root" || d.group === "category"))
      .enter()
      .append("text")
      .text(d => d.id)
      .attr("font-size", "14px")
      .attr("fill", theme === "dark" ? "#ccc" : "#333")
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

      techText
        .attr("x", d => d.x)
        .attr("y", d => d.y + 20);

      text
        .attr("x", d => d.x)
        .attr("y", d => d.y + 20);
    });

    // Cleanup function
    return () => {
      simulation.stop();
      tooltip.remove();
    };
  }, [nodes, links, theme]);

  return (
    <svg ref={svgRef} className="w-full h-full">
      <g ref={gRef}></g>
    </svg>
  );
};

export default SkillGraph;
