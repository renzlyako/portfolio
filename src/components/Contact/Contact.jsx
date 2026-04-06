import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const SERVICE_ID  = 'service_gxtlm4o';   // 
const TEMPLATE_ID = 'template_hyhzj4y';  // 
const PUBLIC_KEY  = '057teho9jy5rRSfRx';   // 

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
    name: 'TikTok',
    url: 'https://www.tiktok.com/@insyong224',
    color: '#ff0050',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_insyong/',
    color: '#e1306c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name:       form.name,
        from_email: form.email,
        subject:    form.subject,
        message:    form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSent(true);
    })
    .catch((err) => {
      setLoading(false);
      setError('Something went wrong. Please try again or email me directly.');
      console.error(err);
    });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact__orb contact__orb--1" />
      <div className="contact__orb contact__orb--2" />
      <div className="contact__orb contact__orb--3" />

      <div className="contact__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="contact__particle" style={{
            left: `${Math.random() * 100}%`,
            top:  `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }} />
        ))}
      </div>

      <div className="contact__label">
        <span className="contact__label-line" />
        <span className="contact__label-text">Contact</span>
        <span className="contact__label-line" />
      </div>

      <div className="contact__glass">
        <div className="contact__glass-inner">

          <div className="contact__left">
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              Available for freelance work
            </div>

            <h2 className="contact__heading">
              Say <span>Hello</span> 👋
            </h2>

            <p className="contact__desc">
              Have a project in mind? Looking for a designer
              or developer? I'd love to hear from you.
              Let's create something amazing together.
            </p>

            <div className="contact__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                  style={{ '--social-color': s.color }}
                >
                  <span className="contact__social-icon">{s.icon}</span>
                  <span className="contact__social-name">{s.name}</span>
                  <svg className="contact__social-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              ))}
            </div>

            <div className="contact__location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Philippines · Remote Worldwide
            </div>
          </div>

          <div className="contact__divider" />

          <div className="contact__right">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                </div>
                <h3 className="contact__success-title">Message Sent!</h3>
                <p className="contact__success-sub">
                  Thanks for reaching out! I'll get back to you at <strong>{form.email}</strong> within 24 hours.
                </p>
                <button
                  className="contact__btn"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__field-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__field-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="contact__input"
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__field-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="contact__input"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__field-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="contact__input contact__textarea"
                    required
                  />
                </div>

                {error && (
                  <p className="contact__error">{error}</p>
                )}

                <button
                  type="submit"
                  className={`contact__btn ${loading ? 'contact__btn--loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="contact__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}