import React, { useRef, useState } from 'react';
import './Projects.css';

import a1 from '../../assets/ai1.png';
import a2 from '../../assets/ai2.png';
import a3 from '../../assets/ai3.png';
import edit1 from '../../assets/edit1.jpg';
import edit2 from '../../assets/edit2.png';
import email from '../../assets/email.jpg';
import flyers1 from '../../assets/flyers1.jpg';
import flyers2 from '../../assets/flyers2.jpg';
import flyers3 from '../../assets/flyers3.jpg';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import thumb1 from '../../assets/thumb1.png';
import webdesign1 from '../../assets/webdesign1.png';

const BEHANCE = 'https://www.behance.net/renzm';
const TIKTOK = 'https://www.tiktok.com/@insyong224';

const PROJECTS = [
  { id: '001', img: product1,   title: 'Product Manipulation',   category: 'Product Manipulation' },
  { id: '002', img: product2,   title: 'Product Manipulation', category: 'Product Manipulation' },
  { id: '003', img: product3,   title: 'Product Manipulation', category: 'Product Manipulation' },
  { id: '004', img: edit1,      title: 'Photo Enhancement Before',      category: 'Photo Edit' },
  { id: '005', img: edit2,      title: 'Photo Enhancement After',    category: 'Photo Edit' },
  { id: '006', img: flyers1,    title: 'Flyer Design',           category: 'Flyers'     },
  { id: '007', img: flyers2,    title: 'Flyer Design',         category: 'Flyers'     },
  { id: '008', img: flyers3,    title: 'Flyer Design',         category: 'Flyers'     },
  { id: '009', img: email,      title: 'Email Newsletter',       category: 'Email'      },
  { id: '010', img: thumb1,     title: 'YouTube Thumbnail',      category: 'Thumbnail'  },
  { id: '011', img: webdesign1, title: 'UI / UX Design',         category: 'Web Design' },
  { id: '012', img: a1,         title: 'AI Visual Prompt',       category: 'AI Art'     },
  { id: '013', img: a2,         title: 'AI Visual Prompt 2',     category: 'AI Art'     },
  { id: '014', img: a3,         title: 'AI Visual Prompt 3',     category: 'AI Art'     },
];

const STRIP = [...PROJECTS, ...PROJECTS];

export default function Projects() {
  const strip1Ref = useRef(null);
  const strip2Ref = useRef(null);
  const [lightbox, setLightbox] = useState(null);
  const [paused1, setPaused1]   = useState(false);
  const [paused2, setPaused2]   = useState(false);

  const row1 = STRIP.slice(0, STRIP.length / 2).concat(STRIP.slice(0, STRIP.length / 2));
  const row2 = STRIP.slice(STRIP.length / 2).concat(STRIP.slice(STRIP.length / 2));

  return (
    <section className="projects" id="projects">

      <div className="projects__header">
        <div className="projects__label">
          <span className="projects__label-line" />
          <span className="projects__label-text">My Work</span>
          <span className="projects__label-line" />
        </div>

        <div className="projects__title-row">
          <h2 className="projects__heading">
            Selected <span>Projects</span>
          </h2>

<div className="projects__btn-group">
  <a href={BEHANCE} target="_blank" rel="noopener noreferrer" className="projects__behance-btn">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.482.105.894.279 1.24.523.344.242.612.559.804.949.189.390.284.871.284 1.44 0 .619-.14 1.137-.421 1.551-.279.414-.7.757-1.255 1.021.757.219 1.318.602 1.69 1.146.369.542.554 1.2.554 1.971 0 .625-.12 1.162-.358 1.607-.239.446-.566.808-.984 1.085-.416.279-.896.484-1.44.613-.545.131-1.11.195-1.7.195H1V5.698h6.799zm-.351 4.956c.48 0 .878-.114 1.192-.342.312-.228.469-.591.469-1.089 0-.279-.051-.511-.152-.696-.103-.185-.241-.333-.417-.443-.175-.111-.378-.188-.606-.235-.229-.047-.471-.07-.726-.07H3.654v2.875h3.794zm.19 5.265c.271 0 .53-.026.776-.079.246-.051.464-.14.651-.266.188-.126.339-.296.454-.511.114-.214.17-.488.17-.822 0-.656-.184-1.127-.553-1.412-.369-.285-.866-.428-1.489-.428H3.654v3.518h3.984zm8.699.354c.378.367.924.551 1.638.551.51 0 .948-.127 1.319-.384.368-.255.594-.527.678-.816h2.33c-.373 1.159-.943 1.99-1.714 2.493-.769.501-1.698.752-2.786.752-.756 0-1.436-.122-2.042-.365-.605-.244-1.119-.591-1.54-1.042-.422-.452-.748-1-.977-1.642-.228-.643-.343-1.356-.343-2.14 0-.762.118-1.468.354-2.116.237-.649.574-1.205 1.012-1.67.438-.464.959-.826 1.563-1.086.606-.261 1.281-.391 2.025-.391.825 0 1.548.159 2.169.477.62.317 1.131.75 1.532 1.297.401.547.688 1.181.862 1.9.173.718.229 1.485.168 2.298h-6.951c.038.801.257 1.382.635 1.75zm2.883-4.681c-.302-.332-.784-.499-1.448-.499-.419 0-.769.07-1.049.211-.279.140-.505.313-.675.517-.171.204-.292.42-.364.648-.071.229-.112.445-.122.647h4.222c-.093-.715-.263-1.192-.564-1.524zM14.7 7.909h5.146V6.546H14.7v1.363z"/>
    </svg>
    View on Behance
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '2px' }}>
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  </a>

  <a href="https://www.tiktok.com/@insyong224" target="_blank" rel="noopener noreferrer" className="projects__tiktok-btn">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
    Video Edits on TikTok
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '2px' }}>
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  </a>
</div>
        </div>

        <p className="projects__sub">Click any frame to preview · Hover to pause the reel</p>
      </div>

      <div className="film-wrapper">

        <div className="film-reel">
          <div className="film-edge">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="sprocket" />
            ))}
          </div>
          <div
            className={`film-track film-track--left ${paused1 ? 'film-track--paused' : ''}`}
            ref={strip1Ref}
            onMouseEnter={() => setPaused1(true)}
            onMouseLeave={() => setPaused1(false)}
          >
            {row1.map((p, i) => (
              <div key={`r1-${i}`} className="film-frame" onClick={() => setLightbox(p)}>
                <div className="film-frame__counter">{p.id}</div>
                <img src={p.img} alt={p.title} className="film-frame__img" />
                <div className="film-frame__label">{p.category}</div>
                <div className="film-frame__hover">
                  <span className="film-frame__hover-icon">&#8853;</span>
                  <span className="film-frame__hover-title">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="film-edge">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="sprocket" />
            ))}
          </div>
        </div>

        <div className="film-reel" style={{ marginTop: '24px' }}>
          <div className="film-edge">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="sprocket" />
            ))}
          </div>
          <div
            className={`film-track film-track--right ${paused2 ? 'film-track--paused' : ''}`}
            ref={strip2Ref}
            onMouseEnter={() => setPaused2(true)}
            onMouseLeave={() => setPaused2(false)}
          >
            {row2.map((p, i) => (
              <div key={`r2-${i}`} className="film-frame" onClick={() => setLightbox(p)}>
                <div className="film-frame__counter">{p.id}</div>
                <img src={p.img} alt={p.title} className="film-frame__img" />
                <div className="film-frame__label">{p.category}</div>
                <div className="film-frame__hover">
                  <span className="film-frame__hover-icon">&#8853;</span>
                  <span className="film-frame__hover-title">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="film-edge">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="sprocket" />
            ))}
          </div>
        </div>

      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>X</button>
            <div className="lightbox__film-top">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="lightbox__sprocket" />
              ))}
            </div>
            <img src={lightbox.img} alt={lightbox.title} className="lightbox__img" />
            <div className="lightbox__film-bottom">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="lightbox__sprocket" />
              ))}
            </div>
            <div className="lightbox__info">
              <span className="lightbox__counter">{lightbox.id}</span>
              <div>
                <h3 className="lightbox__title">{lightbox.title}</h3>
                <span className="lightbox__category">{lightbox.category}</span>
              </div>
              <a href={BEHANCE} target="_blank" rel="noopener noreferrer" className="lightbox__behance">
                See more on Behance
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
