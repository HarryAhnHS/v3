"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Me from "@/app/assets/me.jpeg";
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
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 sm:px-12 py-8">
      {/* Name and Intro */}
      <section className="fade-in flex items-center justify-center gap-4 w-full">
        <div className="fade-in w-24 h-24 sm:w-40 sm:h-40 relative rounded-full overflow-hidden shadow-lg border-2 border-neutral-300 dark:border-neutral-500">
          <Image src={Me} alt="Harry Ahn" layout="fill" objectFit="cover" />
        </div>
        <div className="">
          <h1 className="fade-in text-2xl sm:text-4xl text-gray-700 dark:text-white">Harry Ahn</h1>
          <h2 className="fade-in font-extralight text-base sm:text-xl sm:text-xl text-gray-700 dark:text-white">
            Full-Stack Software Engineer
          </h2>
        </div>
      </section>

      <ul>
        {/* Current */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">currently, I am:</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li className="transition hover:translate-x-2">📚 studying BS/MS in CS @ <LinkButton href="https://www.cs.usc.edu/academic-programs/undergrad/">USC Viterbi School of Engineering</LinkButton></li>
            <li className="transition hover:translate-x-2">🌋 building at <LinkButton href="https://usclavalab.org/">LavaLab</LinkButton>, USC’s premier startup incubator.</li>
            <li className="transition hover:translate-x-2">💻 developing at <LinkButton href="https://giving.usc.edu/">USC University Advancement</LinkButton>.</li>
            <li className="transition hover:translate-x-2">🤖 self-learning with <LinkButton href="https://cs50.harvard.edu/ai/">CS50 AI</LinkButton> at Harvard and Google.</li>
          </ul>
        </li>
        {/* History */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">recently, I:</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li className="transition hover:translate-x-2">🔹 interned as SWE at <LinkButton href="https://www.qraftec.com/">Qraft Technologies</LinkButton>, a fintech startup.</li>
            <li className="transition hover:translate-x-2">🔹 completed <LinkButton href="https://www.theodinproject.com/">The Odin Project</LinkButton>, a comprehensive coding bootcamp in full-stack JS.</li>
            <li className="transition hover:translate-x-2">🔹 developed a <LinkButton href="https://flexor-front-end-2c6r.vercel.app/">social media platform</LinkButton> as a side project.</li>
            {/* Project Nav */}
          </ul>
        </li>
        <div className="fade-in mt-10 flex items-center italic">
            <span>✨ jump to&nbsp;</span>
            <LinkButton isNextLink={true} href="/projects" className="flex-shrink-0 text-center">
              my projects →
            </LinkButton>
            <span>&nbsp;or&nbsp;</span>
            <LinkButton isNextLink={true} href="/skills" className="flex-shrink-0 text-center">
              my skills →
            </LinkButton>
        </div>
        {/* Fun Facts */}
        <li className="fade-in mt-10 w-full">
          <h3 className="italic text-gray-700 dark:text-gray-200">did you know?</h3>
          <ul className="mt-2 space-y-2 pl-4">
            <li className="transition hover:translate-x-2">🌎 i am Korean by birth, but have lived in France, Singapore, Hong Kong, UK, and am currently living in the US.</li>
            <li className="transition hover:translate-x-2">🧩 i can solve the <LinkButton href="https://www.worldcubeassociation.org/persons/2015AHNH01">Rubik&apos;s cube</LinkButton> in 15 seconds.</li>
            <li className="transition hover:translate-x-2">🎧 i sometimes produce <LinkButton href="https://soundcloud.com/hhypno/sets/portfolio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">trap instrumentals</LinkButton> on FL Studio 20 for fun.</li>
            <li className="transition hover:translate-x-2">🐩 i miss my <LinkButton href="https://drive.google.com/file/d/1-bqq4FrjviTp4diNt37gkz6cnVYWMXuf/view?usp=sharing">poodle</LinkButton> :&#40; he&apos;s at home.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
