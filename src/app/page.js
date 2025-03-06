"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Me from "@/app/assets/me.jpeg";
import SkillGraph from "./components/SkillGraph";
import LinkButton from "./components/LinkButton";

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
      <section className="fade-in flex items-center justify-around w-full">
        <div className="fade-in w-24 h-24 sm:w-40 sm:h-40 relative rounded-full overflow-hidden shadow-lg">
          <Image src={Me} alt="Harry Ahn" layout="fill" objectFit="cover" />
        </div>
        <div className="">
          <h1 className="fade-in text-4xl text-gray-700 dark:text-white">Harry Ahn</h1>
          <h2 className="fade-in text-xl sm:text-xl text-gray-700 dark:text-white">
            Full-Stack Software Engineer
          </h2>
        </div>
      </section>

      <ul>
        {/* Current */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">currently, I am:</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li>📚 studying BS/MS in CS @ <LinkButton href="https://www.cs.usc.edu/academic-programs/undergrad/">USC Viterbi School of Engineering</LinkButton></li>
            <li>🚀 building at <LinkButton href="https://usclavalab.org/">LavaLab</LinkButton>, USC’s premier startup incubator.</li>
            <li>💻 developing at <LinkButton href="https://giving.usc.edu/">USC University Advancement</LinkButton>.</li>
            <li>🤖 self-learning with <LinkButton href="https://cs50.harvard.edu/ai/">CS50 AI</LinkButton> at Harvard and Google.</li>
          </ul>
        </li>
        {/* History */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">recently, I:</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li>🔹 interned as SWE at <LinkButton href="https://www.qraftec.com/">Qraft Technologies</LinkButton>, a fintech startup.</li>
            <li>🔹 completed <LinkButton href="https://www.theodinproject.com/">The Odin Project</LinkButton>, a comprehensive coding bootcamp in full-stack JS.</li>
            <li>🔹 created a <LinkButton href="https://flexor-front-end-2c6r.vercel.app/">social media platform</LinkButton> for fun.</li>
            {/* Project Nav */}
            <li className="fade-in flex items-center gap-4">
              <span>🔹 jump to</span>
              <LinkButton isNextLink={true} href="/projects" className="flex-shrink-0 text-center">
                my projects →
              </LinkButton>
              <span>or</span>
              <LinkButton isNextLink={true} href="/skills" className="flex-shrink-0 text-center">
                my skills →
              </LinkButton>
            </li>
          </ul>
        </li>
        {/* Fun Facts */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">did you know?</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li>🌎 i am Korean by birth, but have lived in France, Singapore, Hong Kong, UK, and now the US.</li>
            <li>🎭 i changed my major every year since started university.</li>
            <li>🐩 i have an obsession with my <LinkButton href="https://drive.google.com/file/d/1-bqq4FrjviTp4diNt37gkz6cnVYWMXuf/view?usp=sharing">poodle</LinkButton> and miss him everyday :&#41;</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
