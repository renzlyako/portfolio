import React, { useState } from 'react';
import './SkillOrb.css';

export default function SkillOrb({ orb, x, y }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`skill-orb ${hovered ? 'skill-orb--hovered' : ''}`}
      style={{
        left: x,
        top:  y,
        width:  orb.size,
        height: orb.size,
        background: orb.bg,
        border: `1px solid ${orb.border}`,
        boxShadow: hovered
          ? `0 0 36px ${orb.glow}, 0 0 12px ${orb.glow}, inset 0 0 18px rgba(255,255,255,0.04)`
          : `0 0 20px ${orb.glow}, inset 0 0 10px rgba(255,255,255,0.02)`,
        color: orb.color,
        transform: hovered ? 'translate(-50%, -50%) scale(1.25)' : 'translate(-50%, -50%) scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="skill-orb__icon">{orb.icon}</span>
      <span
        className="skill-orb__label"
        dangerouslySetInnerHTML={{ __html: orb.label.replace('\n', '<br/>') }}
      />
      <span className="skill-orb__sub">{orb.sub}</span>

      {hovered && (
        <div className="skill-orb__tooltip">
          {orb.tooltip}
        </div>
      )}
    </div>
  );
}
