"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Me from "@/app/assets/me.jpg";
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
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 sm:px-12 py-4">
      {/* Name and Intro */}
      <section className="w-[90%] md:w-[70%] flex flex-col items-center justify-center">
        <div className="fade-in flex justify-center items-center gap-8 fade-in mt-10 w-full">
          <div className="min-w-40 min-h-40 relative overflow-hidden shadow-lg rounded-full">
            <Image src={Me} alt="Harry Ahn" layout="fill" objectFit="cover" style={{ transform: "scale(1.2)" }} />
          </div>
          <div className="text-neutral-900 dark:text-white">
            <h1 className="fade-in text-3xl lg:text-4xl">Harry (Hongsuh) Ahn</h1>
            <h2 className="fade-in font-extralight text-base lg:text-xl">
              Full-Stack Software Engineer
            </h2>
          </div>
        </div>

        
      </section>

      <ul className="w-full flex flex-col items-center justify-center">
        {/* Current */}
        <li className="fade-in mt-12 w-[90%] md:w-[70%]">
          <h3 className="italic text-neutral-900 dark:text-white mb-4 text-lg">currently, I am:</h3>
          <ul className="space-y-3">
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">📚</span>
              <span className="leading-relaxed">studying BS + MS in Computer Science @ <LinkButton href="https://www.cs.usc.edu/academic-programs/undergrad/">USC Viterbi School of Engineering</LinkButton></span>
            </li>
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">🗓️</span>
              <span className="leading-relaxed">founding engineer at <LinkButton href="https://usedayli.framer.website/">Dayli</LinkButton>, an AI-powered social coordinator, streamlining the way groups meet</span>
            </li>
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">💻</span>
              <span className="leading-relaxed">developing secure internal systems at <LinkButton href="https://giving.usc.edu/">USC University Advancement</LinkButton></span>
            </li>
          </ul>
        </li>
        {/* History */}
        <li className="fade-in mt-12 w-[90%] md:w-[70%]">
          <h3 className="italic text-neutral-900 dark:text-white mb-4 text-lg">in the past, I:</h3>
          <ul className="space-y-3">
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">🔹</span>
              <span className="leading-relaxed">built, pitched, and launched <LinkButton href="https://mylily.org/">Lily</LinkButton> at <LinkButton href="https://usclavalab.org/">LavaLab</LinkButton>, USC&apos;s premier startup incubator</span>
            </li>
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">🔹</span>
              <span className="leading-relaxed">interned as SWE at <LinkButton href="https://www.qraftec.com/">Qraft Technologies</LinkButton>, where I automated financial data ETL pipelines</span>
            </li>
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">🔹</span>
              <span className="leading-relaxed">completed <LinkButton href="https://www.theodinproject.com/">The Odin Project</LinkButton>, a comprehensive coding bootcamp in full-stack JS</span>
            </li>
          </ul>
        </li>
        
        {/* Fun Facts */}
        <li className="fade-in mt-12 w-[90%] md:w-[70%]">
          <h3 className="italic text-neutral-900 dark:text-white mb-4 text-lg">did you know?</h3>
          <ul className="space-y-3">
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">🌎</span>
              <span className="leading-relaxed">i am Korean by birth, but have lived in France, Singapore, Hong Kong, UK, and am currently living in the US</span>
            </li>
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">🧩</span>
              <span className="leading-relaxed">i can solve the <LinkButton href="https://www.worldcubeassociation.org/persons/2015AHNH01">Rubik&apos;s cube</LinkButton> in 15 seconds</span>
            </li>
            <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 flex-shrink-0">🎧</span>
              <span className="leading-relaxed">i sometimes produce <LinkButton href="https://soundcloud.com/hhypno/sets/portfolio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">trap instrumentals</LinkButton> on FL Studio 20 for fun</span>
            </li>
            {/* <li className="flex items-start group transition-transform duration-200 hover:translate-x-2">
              <span className="text-xl mr-3 mt-0.5 flex-shrink-0">🐩</span>
              <span className="leading-relaxed">i miss my <LinkButton href="https://drive.google.com/file/d/1-bqq4FrjviTp4diNt37gkz6cnVYWMXuf/view?usp=sharing">poodle</LinkButton> :&#40; he&apos;s at home.</span>
            </li> */}
          </ul>
        </li>

        {/* Easy Access Nav */}
        <div className="mt-20 mb-10 fade-in relative">
          
          {/* Content */}
          <div className="relative rounded-2xl py-4 flex flex-col items-center gap-4">
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Jump to</h3>

            {/* Button Row */}
            <div className="flex gap-6 justify-center">
              <div className="group flex items-center text-base font-medium">
                <span className="text-lg">✨</span>
                <LinkButton
                  isNextLink
                  href="/projects"
                  className="transition-colors duration-300 mx-2"
                >
                  my projects
                </LinkButton>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>

              <div className="group flex items-center text-base font-medium">
                <span className="text-lg">🚀</span>
                <LinkButton
                  isNextLink
                  href="/skills"
                  className="transition-colors duration-300 mx-2"
                >
                  my skills
                </LinkButton>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Resume */}
            <div className="group flex items-center text-base font-medium">
              <span className="text-lg">📄</span>
              <LinkButton
                href="/Hongsuh_Ahn_CV.pdf"
                target="_blank"
                className="transition-colors duration-300 mx-2"
              >
                my resume
              </LinkButton>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
