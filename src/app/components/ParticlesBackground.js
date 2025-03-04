'use client';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import {useEffect, useMemo, useState} from 'react';
// import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
        //   await loadSlim(engine);
          await loadFull(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

      const particlesLoaded = (container) => {
        console.log(container);
      };
    
      const options = useMemo(
        () => ({
            fullScreen: { enable: true, zIndex: -1 },
            particles: {
              number: { value: 80, density: { enable: true, area: 1000 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.1, random: true },
              size: { value: 2, random: true },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outMode: "out",
                attract: { enable: false },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
              },
            },
            background: { color: "#000000" },
        }),
        [],
      );
    
      if (init) {
        return (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        );
      }
    
      return <></>;
}

export default ParticlesBackground;