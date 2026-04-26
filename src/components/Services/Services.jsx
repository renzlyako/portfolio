import React, { useState } from 'react';
import './Services.css';

import photoshopImg  from '../../assets/photoshop.png';
import lightroomImg  from '../../assets/lightroom.png';
import premiereImg   from '../../assets/premiere.png';
import figmaImg      from '../../assets/figma.png';
import html5Img      from '../../assets/html5.png';
import css3Img       from '../../assets/css3.png';
import javascriptImg from '../../assets/javascript.png';
import reactImg      from '../../assets/react.png';

// Tool icons mapped by name
const TOOL_ICONS = {
  'Photoshop':   photoshopImg,
  'Lightroom':   lightroomImg,
  'Premiere Pro': premiereImg,
  'Figma':       figmaImg,
  'HTML5':       html5Img,
  'CSS3':          css3Img,
  'JavaScript': javascriptImg,
  'React':       reactImg,
  'Gemini':      null,
  'Midjourney':  null,
  'ChatGPT':     null,
};

const SERVICES = [
  {
    id: 1,
    title: 'Product Manipulation',
    description: 'Creative product compositing and manipulation for stunning visuals.',
    tools: ['Photoshop', 'Lightroom'],
    color: '#31A8FF',
  },
  {
    id: 2,
    title: 'Photo Enhancement',
    description: 'Professional color grading and retouching for flawless photos.',
    tools: ['Photoshop', 'Lightroom'],
    color: '#FF9A00',
  },
  {
    id: 3,
    title: 'Video Editing',
    description: 'Dynamic video editing with smooth transitions and motion graphics.',
    tools: ['Premiere Pro'],
    color: '#9999FF',
  },
  {
    id: 4,
    title: 'AI Visual Prompt Generator',
    description: 'Crafting precise AI prompts to generate stunning visual content.',
    tools: ['Gemini', 'Midjourney', 'ChatGPT'],
    color: '#4ade80',
  },
  {
    id: 5,
    title: 'YouTube Thumbnails',
    description: 'Eye-catching thumbnails designed to maximize clicks and views.',
    tools: ['Photoshop'],
    color: '#FF0000',
  },
  {
    id: 6,
    title: 'UI / UX Design',
    description: 'Clean, user-centered interface design for web and mobile apps.',
    tools: ['Figma', 'Photoshop'],
    color: '#F24E1E',
  },
  {
    id: 7,
    title: 'Banners & Flyers',
    description: 'Bold promotional materials that capture attention and drive action.',
    tools: ['Photoshop'],
    color: '#fbbf24',
  },
  {
    id: 8,
    title: 'Front-End Development',
    description: 'Professionally designed front-end interfaces with clean code and smooth interactions.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    color: '#00d4ff',
  },
];

function ServiceCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`service-card ${flipped ? 'service-card--flipped' : ''}`}
      style={{ '--card-color': service.color }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="service-card__inner">

        {/* FRONT */}
        <div className="service-card__front">
          <div className="service-card__glow" />
          <div className="service-card__number">0{service.id}</div>
          <div className="service-card__icon">{service.icon}</div>
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__desc">{service.description}</p>
          <div className="service-card__hint">
            <span>hover to see tools</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
            </svg>
          </div>
        </div>

        {/* BACK */}
        <div className="service-card__back">
          <div className="service-card__glow" />
          <h3 className="service-card__back-title">Tools Used</h3>
          <div className="service-card__tools">
            {service.tools.map((tool) => (
              <div key={tool} className="service-tool">
                {TOOL_ICONS[tool] ? (
                  <img src={TOOL_ICONS[tool]} alt={tool} className="service-tool__img" />
                ) : (
                  <div className="service-tool__placeholder">
                    {tool.charAt(0)}
                  </div>
                )}
                <span className="service-tool__name">{tool}</span>
              </div>
            ))}
          </div>
          <div className="service-card__tag">{service.title}</div>
        </div>

      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">

      <div className="services__label">
        <span className="services__label-line" />
        <span className="services__label-text">What I Do</span>
        <span className="services__label-line" />
      </div>

      <div className="services__heading-wrap">
        <h2 className="services__heading">My <span>Services</span></h2>
        <p className="services__subheading">Hover over a card to see the tools I use</p>
      </div>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
}