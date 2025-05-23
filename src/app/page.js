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
            <h1 className="fade-in text-3xl lg:text-4xl">Harry Ahn</h1>
            <h2 className="fade-in font-extralight text-base lg:text-xl">
              Full-Stack Software Engineer
            </h2>
          </div>
        </div>

        
      </section>

      <ul className="w-full flex flex-col items-center justify-center">
        {/* Current */}
        <li className="fade-in mt-10 w-[90%] md:w-[70%]">
          <h3 className="italic text-neutral-900 dark:text-white">currently, I am:</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li className="transition hover:translate-x-2">📚 studying BS in Computer Science @ <LinkButton href="https://www.cs.usc.edu/academic-programs/undergrad/">USC Viterbi School of Engineering</LinkButton>.</li>
            <li className="transition hover:translate-x-2">🌋 building at <LinkButton href="https://usclavalab.org/">LavaLab</LinkButton>, USC&apos;s premier startup incubator.</li>
            <li className="transition hover:translate-x-2">💻 developing at <LinkButton href="https://giving.usc.edu/">USC University Advancement</LinkButton>.</li>
          </ul>
        </li>
        {/* History */}
        <li className="fade-in mt-10 w-[90%] md:w-[70%]">
          <h3 className="italic text-neutral-900 dark:text-white">recently, I:</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li className="transition hover:translate-x-2">🔹 interned as SWE at <LinkButton href="https://www.qraftec.com/">Qraft Technologies</LinkButton>, a fintech startup.</li>
            <li className="transition hover:translate-x-2">🔹 built and deployed an <LinkButton href="https://toolate.up.railway.app/">AI product similarity evaluator</LinkButton> in 3 days.</li>
            <li className="transition hover:translate-x-2">🔹 completed <LinkButton href="https://www.theodinproject.com/">The Odin Project</LinkButton>, a comprehensive coding bootcamp in full-stack JS.</li>
          </ul>
        </li>
        
        {/* Fun Facts */}
        <li className="fade-in mt-10 w-[90%] md:w-[70%]">
          <h3 className="italic text-neutral-900 dark:text-white">did you know?</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li className="transition hover:translate-x-2">🌎 i am Korean by birth, but have lived in France, Singapore, Hong Kong, UK, and am currently living in the US.</li>
            <li className="transition hover:translate-x-2">🧩 i can solve the <LinkButton href="https://www.worldcubeassociation.org/persons/2015AHNH01">Rubik&apos;s cube</LinkButton> in 15 seconds.</li>
            <li className="transition hover:translate-x-2">🎧 i sometimes produce <LinkButton href="https://soundcloud.com/hhypno/sets/portfolio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">trap instrumentals</LinkButton> on FL Studio 20 for fun.</li>
            {/* <li className="transition hover:translate-x-2">🐩 i miss my <LinkButton href="https://drive.google.com/file/d/1-bqq4FrjviTp4diNt37gkz6cnVYWMXuf/view?usp=sharing">poodle</LinkButton> :&#40; he&apos;s at home.</li> */}
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
                href="/resume.pdf"
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
