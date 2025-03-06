"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import Me from "@/app/assets/me.jpeg";
import SkillGraph from "./components/SkillGraph";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-4">
      {/* Name and Intro */}
      <section className="fade-in flex items-center justify-between w-full">
        <div className="fade-in w-24 h-24 sm:w-40 sm:h-40 relative rounded-full overflow-hidden shadow-lg">
          <Image src={Me} alt="Harry Ahn" layout="fill" objectFit="cover" />
        </div>
        <div className="">
          <h1 className="fade-in text-4xl text-gray-700 dark:text-white">Harry Ahn</h1>
          <h2 className="fade-in text-xl sm:text-xl text-gray-700 dark:text-white">
            Full-Stack Software Engineer
          </h2>
        </div>
      </section >

      <ul>
        {/* Current */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">currently, I am:</h3>
          <ul className="mt-2 space-y-2">
            <li>📚 studying BS/MS in CS @ USC Viterbi School of Engineering</li>
            <li>🚀 building at <b>LavaLab</b>, USC’s premier startup incubator.</li>
            <li>💻 developing at <b>USC University Advancement</b>.</li>
            <li>🤖 self-learning with CS50 AI at Harvard and Google.</li>
          </ul>
        </li>
        {/* History */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">recently, I:</h3>
          <ul className="mt-2 space-y-2">
            <li>🔹 interned as SWE at <b>Qraft Technologies</b>, a fintech startup.</li>
            <li>🔹 completed <b>The Odin Project</b>, a comprehensive coding bootcamp in full-stack JS.</li>
            <li>🔹 created a <b>fully-functional </b> for fun (and extra credit!).</li>
          </ul>
          {/* Project Nav */}
          <div className="fade-in mt-12 flex justify-around items-center gap-4">
            <Link href="/projects" className="flex-shrink-0 w-[200px]">
              <span className="px-6 py-3 rounded-lg border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 text-center">
                See My Projects →
              </span>
            </Link>
            <Link href="/skills" className="flex-shrink-0 w-[200px]">
              <span className="px-6 py-3 rounded-lg border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 text-center">
                See Tech Stack →
              </span>
            </Link>
          </div>

        </li>
        {/* Fun Facts */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">did you know?</h3>
          <ul className="mt-2 space-y-2">
            <li>🌎 i lived in Korea, France, Singapore, Hong Kong, and the UK.</li>
            <li>🎭 i changed my major every year since started university.</li>
            <li>☕ iced coffee is my blood type (얼죽아).</li>
          </ul>
        </li>
      </ul>      
    </div>
  );
}
