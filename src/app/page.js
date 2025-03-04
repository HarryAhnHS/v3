'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div ref={containerRef} className="min-h-screen font-sans p-8">
      <section className="fade-in text-5xl font-bold">Harry Ahn</section>
      <section className="fade-in text-xl mt-4">Software Engineer</section>
      <section className="fade-in mt-16 max-w-2xl">
        <p>
          I build minimalistic, high-performance web applications with a focus on
          simplicity and user experience.
        </p>
      </section>
    </div>
  );
}
