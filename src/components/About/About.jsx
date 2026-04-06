import React, { useEffect, useRef, useState } from 'react';
import './About.css';

import canvaImg      from '../../assets/canva.png';
import css3Img       from '../../assets/css3.png';
import figmaImg      from '../../assets/figma.png';
import html5Img      from '../../assets/html5.png';
import javascriptImg from '../../assets/javascript.png';
import lightroomImg  from '../../assets/lightroom.png';
import photoshopImg  from '../../assets/photoshop.png';
import premiereImg   from '../../assets/premiere.png';
import reactImg      from '../../assets/react.png';
import vscodeImg     from '../../assets/vscode.png';
import IMG_5204      from '../../assets/IMG_5204.png';

const TOOLS = [
  { name: 'Photoshop',    src: photoshopImg,  color: '#31A8FF' },
  { name: 'Lightroom',    src: lightroomImg,  color: '#31A8FF' },
  { name: 'Premiere Pro', src: premiereImg,   color: '#9999FF' },
  { name: 'Figma',        src: figmaImg,      color: '#F24E1E' },
  { name: 'VS Code',      src: vscodeImg,     color: '#007ACC' },
  { name: 'HTML5',        src: html5Img,      color: '#E34F26' },
  { name: 'CSS3',         src: css3Img,       color: '#264DE4' },
  { name: 'JavaScript',   src: javascriptImg, color: '#F7DF1E' },
  { name: 'React',        src: reactImg,      color: '#61DAFB' },
  { name: 'Canva',        src: canvaImg,      color: '#00C4CC' },
];

function useBalls(containerRef, count) {
  const ballsRef = useRef([]);
  const rafRef   = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const R = 36;
    const W = el.clientWidth;
    const H = el.clientHeight;

    ballsRef.current = Array.from({ length: count }, () => ({
      x:  R + Math.random() * (W - R * 2),
      y:  R + Math.random() * (H - R * 2),
      vx: (Math.random() - 0.5) * 3.5,
      vy: (Math.random() - 0.5) * 3.5,
      r:  R,
    }));

    function step() {
      const w = el.clientWidth;
      const h = el.clientHeight;

      ballsRef.current = ballsRef.current.map((b) => {
        let { x, y, vx, vy, r } = b;
        x += vx;
        y += vy;
        if (x - r < 0)  { x = r;     vx =  Math.abs(vx); }
        if (x + r > w)  { x = w - r; vx = -Math.abs(vx); }
        if (y - r < 0)  { y = r;     vy =  Math.abs(vy); }
        if (y + r > h)  { y = h - r; vy = -Math.abs(vy); }
        return { x, y, vx, vy, r };
      });

      const balls = ballsRef.current;
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i], b = balls[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.r + b.r;
          if (dist < minDist && dist > 0) {
            const nx = dx / dist, ny = dy / dist;
            const overlap = (minDist - dist) / 2;
            balls[i].x -= nx * overlap;
            balls[i].y -= ny * overlap;
            balls[j].x += nx * overlap;
            balls[j].y += ny * overlap;
            const dvx = a.vx - b.vx, dvy = a.vy - b.vy;
            const dot = dvx * nx + dvy * ny;
            balls[i].vx -= dot * nx;
            balls[i].vy -= dot * ny;
            balls[j].vx += dot * nx;
            balls[j].vy += dot * ny;
          }
        }
      }

      setPositions(ballsRef.current.map(b => ({ x: b.x, y: b.y })));
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [containerRef, count]);

  return positions;
}

export default function About() {
  const sectionRef   = useRef(null);
  const containerRef = useRef(null);
  const [visible, setVisible]    = useState(false);
  const [hoveredIdx, setHovered] = useState(null);
  const positions = useBalls(containerRef, TOOLS.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about ${visible ? 'about--visible' : ''}`} ref={sectionRef} id="about-me">

      <div className="about__label">
        <span className="about__label-line" />
        <span className="about__label-text">About Me</span>
        <span className="about__label-line" />
      </div>

      <div className="about__split">

        {/* ── LEFT: Bouncing Icons ── */}
        <div className="about__left">
          <p className="about__left-heading">Tools & Technologies</p>
          <div className="about__bounce-box" ref={containerRef}>
            {TOOLS.map((tool, i) => {
              const pos = positions[i];
              if (!pos) return null;
              return (
                <div
                  key={tool.name}
                  className={`bounce-ball ${hoveredIdx === i ? 'bounce-ball--hovered' : ''}`}
                  style={{
                    left: pos.x,
                    top:  pos.y,
                    '--tool-color': tool.color,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img src={tool.src} alt={tool.name} className="bounce-ball__img" />
                  {hoveredIdx === i && (
                    <span className="bounce-ball__tooltip">{tool.name}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="about__divider" />

        {/* ── RIGHT: Profile ── */}
        <div className="about__right">
          <div className="about__photo-wrap">
            <div className="about__photo-ring" />
            <div className="about__photo">
              <img src={IMG_5204} alt="Renz Mangahas" />
            </div>
            <div className="about__photo-glow" />
          </div>

          <div className="about__info">
            <span className="about__info-eyebrow">Freelancer · Designer · Developer</span>
            <h2 className="about__name">RENZ <span>MANGAHAS</span></h2>
            <p className="about__description">
              A freelancer specializing in web design, graphic design, photo editing,
              and video editing. I also do front-end coding, creating visually engaging
              and user-friendly content while continuously improving my skills.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">12+</span>
                <span className="about__stat-label">Tools Mastered</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">5+</span>
                <span className="about__stat-label">Skills</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">100%</span>
                <span className="about__stat-label">Dedicated</span>
              </div>
            </div>
            <button className="about__cta">View My Work</button>
          </div>
        </div>

      </div>
    </section>
  );
}