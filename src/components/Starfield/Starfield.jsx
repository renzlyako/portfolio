import React, { useRef, useEffect } from 'react';
import './Starfield.css';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let rafId;

    function init() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 200 }, () => ({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.3 + 0.2,
        base:  Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.012 + 0.004,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(ts) {
      const t = ts / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        const alpha = s.base * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 210, 255, ${alpha})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    }

    init();
    rafId = requestAnimationFrame(draw);

    const onResize = () => init();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" />;
}
