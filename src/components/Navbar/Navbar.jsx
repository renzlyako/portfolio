import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = ['Home', 'About Me', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (link) => {
    setMenuOpen(false);
    const id = link.toLowerCase().replace(' ', '-');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

        {/* ── DESKTOP: centered pill ── */}
        <div className="navbar__pill">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="navbar__link"
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
          <button
            className="navbar__hire"
            onClick={() => scrollTo('contact')}
          >
            Hire Me
          </button>
        </div>

        {/* ── MOBILE: name + hamburger ── */}
        <div className="navbar__mobile">
          <span className="navbar__mobile-name">Renzly M.</span>
          <button
            className={`navbar__ham ${menuOpen ? 'navbar__ham--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-inner">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              className="navbar__drawer-link"
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => scrollTo(link)}
            >
              <span className="navbar__drawer-dot" />
              {link}
            </button>
          ))}
          <button
            className="navbar__drawer-hire"
            onClick={() => scrollTo('contact')}
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}