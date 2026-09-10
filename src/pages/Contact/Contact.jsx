import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Initiated connection with:', email);
  };

  return (
    <div className="luxury-contact-container">
      
      {/* SECTION 1: ARCHIVAL APERÇU HEADLINE */}
      <header className="contact-editorial-header">
        <span className="curated-index-tag">Contact us</span>
        <h1 className="contact-hero-text">
          LETTERS TO <br />THE STUDIO.
        </h1>
      </header>

      {/* SECTION 2: THE STARK GRID LINE SYSTÈME */}
      <main className="contact-asymmetric-layout">
        
        {/* Left Grid Axis: The Digital Directories */}
        <div className="directory-column">
          <div className="directory-row">
            <span className="row-meta">STUDIO LAB</span>
            <a href="mailto:studio@elcircle.com" className="editorial-anchor">
              studio@elcircle.com
            </a>
          </div>

          <div className="directory-row">
            <span className="row-meta">COMMRECIAL & PARTNERSHIPS</span>
            <a href="mailto:partners@elcircle.com" className="editorial-anchor">
              partners@elcircle.com
            </a>
          </div>

          <div className="directory-row">
            <span className="row-meta">LOCATION & TIME</span>
            <p className="editorial-static-text">DUBAI, UAE — 09:00 / 18:00 GST</p>
          </div>
        </div>

        {/* Right Grid Axis: The Ultra-Minimal Substack/Inquiry Intake */}
        <div className="intake-column">
          <p className="intake-manifesto">
            We operate at the intersection of raw software development and high-end digital aesthetics. 
            Leave your digital footprint below to initiate communication.
          </p>

          <form className="stark-intake-field" onSubmit={handleSubmit}>
            <div className="input-underline-wrapper">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL HERE..." 
                required 
              />
              <button type="submit" className="minimal-submit-arrow" aria-label="Submit inquiry">
                &rarr;
              </button>
            </div>
            <span className="field-caption">STRICTLY PRIVÉ / RESPONSE WITHIN 24H</span>
          </form>
        </div>

      </main>

      {/* SECTION 3: SOCIAL SIGN-OFF */}
      <footer className="contact-minimal-footer">
        <div className="footer-line"></div>
        <div className="footer-social-flex">
          <a href="#instagram" className="mono-link">INSTAGRAM</a>
          <a href="#linkedin" className="mono-link">LINKEDIN</a>
          <a href="#github" className="mono-link">GITHUB</a>
        </div>
      </footer>

    </div>
  );
};

export default ContactPage;