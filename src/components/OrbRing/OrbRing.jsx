import React, { useRef, useEffect, useState, useCallback } from 'react';
import SkillOrb from '../SkillOrb/SkillOrb';
import './OrbRing.css';

const ORBS = [
  {
    id: 1,
    label:   'Graphic\nDesign',
    icon:    '✦',
    sub:     'Print & Digital',
    tooltip: 'Brand identity, posters, layouts',
    color:   '#7c5cfc',
    glow:    'rgba(124, 92, 252, 0.4)',
    border:  'rgba(124, 92, 252, 0.55)',
    bg:      'rgba(124, 92, 252, 0.1)',
    orbitR:  195,
    startAngle: -90,
    speed:   0.20,
    size:    94,
  },
  {
    id: 2,
    label:   'UI / UX',
    icon:    '⬡',
    sub:     'Web & App',
    tooltip: 'Figma, wireframes, prototypes',
    color:   '#00d4ff',
    glow:    'rgba(0, 212, 255, 0.35)',
    border:  'rgba(0, 212, 255, 0.55)',
    bg:      'rgba(0, 212, 255, 0.08)',
    orbitR:  205,
    startAngle: -10,
    speed:   0.16,
    size:    90,
  },
  {
    id: 3,
    label:   'Video\nEditing',
    icon:    '◈',
    sub:     'Animation',
    tooltip: 'Premiere Pro, After Effects',
    color:   '#ff6b9d',
    glow:    'rgba(255, 107, 157, 0.35)',
    border:  'rgba(255, 107, 157, 0.55)',
    bg:      'rgba(255, 107, 157, 0.08)',
    orbitR:  198,
    startAngle: 62,
    speed:   0.22,
    size:    86,
  },
  {
    id: 4,
    label:   'Product\nManipulation',
    icon:    '◎',
    sub:     'Photo Edit',
    tooltip: 'Photoshop, Lightroom',
    color:   '#fbbf24',
    glow:    'rgba(251, 191, 36, 0.35)',
    border:  'rgba(251, 191, 36, 0.55)',
    bg:      'rgba(251, 191, 36, 0.08)',
    orbitR:  192,
    startAngle: 138,
    speed:   0.18,
    size:    88,
  },
  {
    id: 5,
    label:   'Photo\nEdit',
    icon:    '◉',
    sub:     'Retouching',
    tooltip: 'Photoshop, Lightroom',
    color:   '#4ade80',
    glow:    'rgba(74, 222, 128, 0.35)',
    border:  'rgba(74, 222, 128, 0.55)',
    bg:      'rgba(74, 222, 128, 0.08)',
    orbitR:  200,
    startAngle: 212,
    speed:   0.19,
    size:    84,
  },
  {
    id: 6,
    label:   'AI Visual\nGenerator',
    icon:    '✧',
    sub:     'AI Art',
    tooltip: 'Gemini, Midjourney, ChatGPT',
    color:   '#f97316',
    glow:    'rgba(249, 115, 22, 0.35)',
    border:  'rgba(249, 115, 22, 0.55)',
    bg:      'rgba(249, 115, 22, 0.08)',
    orbitR:  196,
    startAngle: 283,
    speed:   0.21,
    size:    82,
  },
  {
    id: 7,
    label:   'Front-End\nDev',
    icon:    '⌨',
    sub:     'Web Coding',
    tooltip: 'HTML, CSS, JS, React',
    color:   '#22d3ee',
    glow:    'rgba(34, 211, 238, 0.35)',
    border:  'rgba(34, 211, 238, 0.55)',
    bg:      'rgba(34, 211, 238, 0.08)',
    orbitR:  210,
    startAngle: 175,
    speed:   0.17,
    size:    88,
  },
];

export default function OrbRing() {
  const containerRef = useRef(null);
  const rafRef       = useRef(null);
  const startRef     = useRef(null);
  const [positions, setPositions] = useState(
    ORBS.map(() => ({ x: 0, y: 0 }))
  );
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    setSize({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  const animate = useCallback((ts) => {
    if (!startRef.current) startRef.current = ts;
    const elapsed = (ts - startRef.current) / 1000;
    const cx = size.w / 2;
    const cy = size.h / 2;

    setPositions(
      ORBS.map((o) => {
        const angle = (o.startAngle * Math.PI) / 180 + elapsed * o.speed;
        const bob   = Math.sin(elapsed * 0.75 + o.id * 1.05) * 10;
        return {
          x: cx + o.orbitR * Math.cos(angle),
          y: cy + o.orbitR * Math.sin(angle) + bob,
        };
      })
    );

    rafRef.current = requestAnimationFrame(animate);
  }, [size]);

  useEffect(() => {
    if (size.w === 0) return;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, size]);

  const cx = size.w / 2;
  const cy = size.h / 2;

  return (
    <div ref={containerRef} className="orb-ring">
      <svg className="orb-ring__svg" xmlns="http://www.w3.org/2000/svg">
        {ORBS.map((o, i) => {
          const pos = positions[i];
          if (!pos) return null;
          return (
            <line
              key={o.id}
              x1={cx}
              y1={cy}
              x2={pos.x}
              y2={pos.y}
              stroke={o.color}
              strokeWidth="0.6"
              strokeOpacity="0.18"
              strokeDasharray="5 7"
            />
          );
        })}
      </svg>

      {ORBS.map((o, i) => {
        const pos = positions[i];
        if (!pos) return null;
        return (
          <SkillOrb
            key={o.id}
            orb={o}
            x={pos.x}
            y={pos.y}
          />
        );
      })}
    </div>
  );
}