'use client';
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 
                   bg-[radial-gradient(ellipse_at_top,_rgba(231,159,195,0.12),transparent_60%), 
                   radial-gradient(ellipse_at_bottom,_rgba(147,197,253,0.10),transparent_60%)]"
      />

      <Particles
        id="tsparticles"
        init={init}
        style={{ pointerEvents: 'none' }}          // allow page clicks to pass through
        className="fixed inset-0 -z-10 pointer-events-none"        
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: '#0b0a10' },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            detectsOn: 'window',                   // listen on window, not canvas
            events: {
              onHover: { enable: true, mode: 'slow' },
              onClick: { enable: true, mode: 'push' }, // now clicks spawn particles
              resize: true,
            },
            modes: {
              slow: { factor: 2, radius: 120 },
              push: { quantity: 5 },
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 900 } },
            color: { value: ['#E79FC3', '#F5C2E7', '#CBA6F7', '#BDE0FE'] },
            shape: { type: ['heart', 'circle', 'star'] },
            opacity: { value: { min: 0.3, max: 0.7 } },
            size: { value: { min: 2, max: 6 } },
            move: {
              enable: true,
              speed: { min: 0.2, max: 0.8 },
              direction: 'none',
              outModes: 'out',
            },
            tilt: { enable: true, value: { min: 0, max: 360 }, direction: 'random' },
            zIndex: { value: { min: 0, max: 1 } },
          },
        }}
      />
    </>
  );
}
