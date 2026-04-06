import React, { useEffect, useRef } from 'react';
import Starfield from '../Starfield/Starfield';
import OrbRing from '../OrbRing/OrbRing';
import './Hero.css';

export default function Hero() {
  const identityRef = useRef(null);

  // Subtle mouse parallax on the center identity block
  useEffect(() => {
    const onMove = (e) => {
      if (!identityRef.current) return;
      const mx = (e.clientX / window.innerWidth  - 0.5) * 16;
      const my = (e.clientY / window.innerHeight - 0.5) * 10;
      identityRef.current.style.transform =
        `translate(calc(-50% + ${mx * 0.4}px), calc(-50% + ${my * 0.4}px))`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Layer 0 – starfield */}
      <Starfield />

      {/* Layer 1 – deep glow pulse */}
      <div className="hero__glow" />

      {/* Layer 2 – decorative spinning rings */}
      <div className="hero__ring hero__ring--1" />
      <div className="hero__ring hero__ring--2" />
      <div className="hero__ring hero__ring--3" />

      {/* Layer 3 – orbiting skill orbs + connector SVG */}
      <OrbRing />

      {/* Identity Card */}
      <div className="hero__identity" ref={identityRef}>
        <p className="hero__eyebrow">Welcome to my Portfolio!</p>

        {/* Name */}
        <h1 className="hero__name">
          I'm <span className="hero__name--accent">Renzly</span>
        </h1>

        {/* Tagline */}
        <p className="hero__tagline">
          Crafting visuals that speak louder than words
        </p>

        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for freelance work
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
