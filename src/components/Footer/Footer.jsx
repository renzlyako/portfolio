import React from 'react';
import './Footer.css';

const NAV_LINKS = ['Home', 'About Me', 'Services', 'Projects', 'Contact'];

const SOCIALS = [
  {
    name: 'Behance',
    url: 'https://www.behance.net/renzm',
    color: '#0057ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.482.105.894.279 1.24.523.344.242.612.559.804.949.189.390.284.871.284 1.44 0 .619-.14 1.137-.421 1.551-.279.414-.7.757-1.255 1.021.757.219 1.318.602 1.69 1.146.369.542.554 1.2.554 1.971 0 .625-.12 1.162-.358 1.607-.239.446-.566.808-.984 1.085-.416.279-.896.484-1.44.613-.545.131-1.11.195-1.7.195H1V5.698h6.799zm-.351 4.956c.48 0 .878-.114 1.192-.342.312-.228.469-.591.469-1.089 0-.279-.051-.511-.152-.696-.103-.185-.241-.333-.417-.443-.175-.111-.378-.188-.606-.235-.229-.047-.471-.07-.726-.07H3.654v2.875h3.794zm.19 5.265c.271 0 .53-.026.776-.079.246-.051.464-.14.651-.266.188-.126.339-.296.454-.511.114-.214.17-.488.17-.822 0-.656-.184-1.127-.553-1.412-.369-.285-.866-.428-1.489-.428H3.654v3.518h3.984zm8.699.354c.378.367.924.551 1.638.551.51 0 .948-.127 1.319-.384.368-.255.594-.527.678-.816h2.33c-.373 1.159-.943 1.99-1.714 2.493-.769.501-1.698.752-2.786.752-.756 0-1.436-.122-2.042-.365-.605-.244-1.119-.591-1.54-1.042-.422-.452-.748-1-.977-1.642-.228-.643-.343-1.356-.343-2.14 0-.762.118-1.468.354-2.116.237-.649.574-1.205 1.012-1.67.438-.464.959-.826 1.563-1.086.606-.261 1.281-.391 2.025-.391.825 0 1.548.159 2.169.477.62.317 1.131.75 1.532 1.297.401.547.688 1.181.862 1.9.173.718.229 1.485.168 2.298h-6.951c.038.801.257 1.382.635 1.75zm2.883-4.681c-.302-.332-.784-.499-1.448-.499-.419 0-.769.07-1.049.211-.279.140-.505.313-.675.517-.171.204-.292.42-.364.648-.071.229-.112.445-.122.647h4.222c-.093-.715-.263-1.192-.564-1.524zM14.7 7.909h5.146V6.546H14.7v1.363z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/rm.rm.144868', // 
    color: '#1877f2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_insyong/', // 
    color: '#e1306c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@insyong224',
    color: '#ff0050',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">

      {/* Animated glow orb */}
      <div className="footer__glow" />
      <div className="footer__glow footer__glow--2" />
      <div className="footer__glow footer__glow--3" />

      {/* Top divider line */}
      <div className="footer__topline" />

      <div className="footer__inner">

        {/* Name */}
        <div className="footer__name-wrap">
          <h2 className="footer__name">
            Renzly<span> Mangahas</span>
          </h2>
          <p className="footer__role">
            Graphic Designer &nbsp;·&nbsp; Video Editor &nbsp;·&nbsp; Web Developer
          </p>
        </div>

        {/* Gradient divider */}
        <div className="footer__divider" />

        {/* Nav links */}
        <nav className="footer__nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="footer__nav-link"
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Social icons */}
        <div className="footer__socials">
          {SOCIALS.map((s) => (
            < a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              style={{ '--social-color': s.color }}
              title={s.name}
            >
              {s.icon}
              <span className="footer__social-tooltip">{s.name}</span>
            </a>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="footer__divider footer__divider--faint" />

        {/* Copyright */}
        <p className="footer__copy">
          © {year} Renz Mangahas &nbsp;·&nbsp; All rights reserved
          &nbsp;·&nbsp; Made with ❤️ in the Philippines
        </p>

      </div>
    </footer>
  );
}