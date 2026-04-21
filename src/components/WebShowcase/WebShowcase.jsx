import React from 'react';
import './WebShowcase.css';
import webdesign1 from '../../assets/webdesign1.png';
import p1 from '../../assets/P1.jpg';
import webdesign2 from '../../assets/webdesign2.png';
import p2 from '../../assets/P2.png';

const WEBSITES = [
  {
    id: 1,
    name: 'Coffee Farm Website',
    description: 'A warm and inviting website for a local coffee farm brand.',
    image: webdesign1,
    preview: p1,
    url: 'https://coffee-website-delta-gray.vercel.app/',
    tags: ['UI/UX', 'Web Design'],
    color: '#c8854a',
  },
  {
    id: 2,
    name: 'Realtor Empress',
    description: 'A sleek and professional real estate website for property listings and inquiries.',
    image: webdesign2,
    preview: p2,
    url: 'https://realtor-empress.vercel.app/',
    tags: ['UI/UX', 'Web Design'],
    color: '#7c5cfc',
  },
  {
    id: 3,
    name: 'Coming Soon',
    description: 'Next project in progress...',
    image: null,
    preview: null,
    url: null,
    tags: [],
    color: '#00d4ff',
  },
];

export default function WebShowcase() {
  return (
    <section className="webshowcase" id="websites">

      <div className="webshowcase__label">
        <span className="webshowcase__label-line" />
        <span className="webshowcase__label-text">Live Websites</span>
        <span className="webshowcase__label-line" />
      </div>

      <div className="webshowcase__heading-wrap">
        <h2 className="webshowcase__heading">
          Deployed <span>Projects</span>
        </h2>
        <p className="webshowcase__sub">Click any card to visit the live website</p>
      </div>

      <div className="webshowcase__grid">
        {WEBSITES.map((site) => (
          <div
            key={site.id}
            className={`ws-card ${!site.url ? 'ws-card--empty' : ''}`}
            style={{ '--card-color': site.color }}
            onClick={() => site.url && window.open(site.url, '_blank')}
          >
            {/* Browser top bar */}
            <div className="ws-card__bar">
              <div className="ws-card__dots">
                <span className="ws-dot ws-dot--red" />
                <span className="ws-dot ws-dot--yellow" />
                <span className="ws-dot ws-dot--green" />
              </div>
              <div className="ws-card__url">
                {site.url
                  ? site.url.replace('https://', '')
                  : '— — —'
                }
              </div>
            </div>

            {/* Screenshot or empty state */}
            <div className="ws-card__screen">
              {site.image ? (
                <>
                  <img
                    src={site.image}
                    alt={site.name}
                    className="ws-card__img ws-card__img--thumb"
                  />
                  {site.preview && (
                    <div className="ws-card__scroll-preview">
                      <img
                        src={site.preview}
                        alt={`${site.name} full preview`}
                        className="ws-card__scroll-img"
                      />
                      <div className="ws-card__scroll-badge">
                        <span>↗</span> Visit Live Site
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="ws-card__placeholder">
                  <div className="ws-card__placeholder-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M3 9h18"/>
                      <path d="M9 21V9"/>
                    </svg>
                  </div>
                  <span>In Progress</span>
                </div>
              )}
            </div>

            {/* Card info */}
            <div className="ws-card__info">
              <div className="ws-card__info-left">
                <h3 className="ws-card__name">{site.name}</h3>
                <p className="ws-card__desc">{site.description}</p>
              </div>
              <div className="ws-card__tags">
                {site.tags.map((tag) => (
                  <span key={tag} className="ws-card__tag">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}