'use client';

import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import particles.js client-side
      import('particles.js').then(() => {
        // Initialize particles.js using the correct method
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80, // Number of particles
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#00ff00', // Particle color (neon green)
            },
            shape: {
              type: 'circle', // Shape of particles
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3, // Size of particles
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'attract', // Hover effect: Attract particles towards the cursor
              },
              onclick: {
                enable: true,
                mode: 'push', // Click effect: Push particles outward on click
              },
            },
            modes: {
              attract: {
                // Attract particles to the cursor
                distance: 100, // Distance of attraction
                duration: 0.4, // Duration of attraction
              },
              push: {
                particles_nb: 6, // Number of particles to create on click
              },
            },
          },
          retina_detect: true, // Enable retina resolution support
        });
      });
    }
  }, []);

  return <div
  id="particles-js"
  className="fixed top-0 left-0 w-full h-full -z-10"
/>;

};

export default ParticlesBackground;
