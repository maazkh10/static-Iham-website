import "./ceo.css"

import React from 'react';


const CeoPage = () => {
  return (
    <div className="ceo-page-container">
      
      {/* SECTION 1: EDITORIAL HEADER GRID */}
      <header className="ceo-header-grid">
        <div className="header-left">
          <h1 className="main-editorial-title">
            <span className="oval-highlight-wrapper">
              WHO
              <svg className="handdrawn-oval" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M5,50 C5,20 95,20 95,50 C95,80 5,80 5,50 Z" />
              </svg>
            </span> IS <br />
            XOXO?
          </h1>
        </div>
        <div className="header-right">
          <p className="editorial-intro-text">
            The visionary leader behind ELCIRCLE 88, creating bespoke luxury ecosystems 
            according to an unconventional philosophy in which minimalism, modern technology, 
            and heritage go hand in hand to showcase digital art as a meaning rather than a template.
          </p>
        </div>
      </header>

      {/* SECTION 2: THE HERO CINEMATIC CLOSE-UP BANNER */}
      <section className="ceo-hero-banner">
        <div className="banner-image-frame">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop" 
            alt="CEO Close up portrait" 
            className="hero-closeup-img"
          />
        </div>
      </section>

      {/* SECTION 3: QUICK METADATA ROW */}
      <section className="metadata-row-grid">
        <div className="meta-col">
          <span className="meta-label">Head office:</span>
          <p className="meta-value">DUBAI /<br />LONDON</p>
        </div>
        <div className="meta-col">
          <span className="meta-label">Founders:</span>
          <p className="meta-value">XOXO /<br />Elhham TEAM</p>
        </div>
        <div className="meta-col social-circles-col">
          <a href="#instagram" className="minimal-circle-btn">inst</a>
          <a href="#facebook" className="minimal-circle-btn">fb</a>
        </div>
      </section>

      <hr className="editorial-divider" />

      {/* SECTION 4: DETAILED PROFILE BLOCK (THE MAN) */}
      <section className="profile-detail-grid">
        
        {/* Left Column: Polaroid Style Portrait & Big Date */}
        <div className="profile-left-col">
          <div className="polaroid-outer-frame">
            <div className="polaroid-img-container">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
                alt="ceo portrait" 
              />
              {/* Minimal mounting tape/pin effects in corners */}
              <div className="tape-effect top-left"></div>
              <div className="tape-effect top-right"></div>
            </div>
            <div className="polaroid-caption">
              <p>xoxo founded xoxo<br />in Dubai, UAE.</p>
              <div className="giant-editorial-date">
                27/04/<br />1997
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="profile-right-col">
          <h2 className="profile-sub-heading">THE MAN</h2>
          <div className="bio-paragraphs">
            <p className="bio-text">
              xoxo xoxo started his eponymous label and creative platform with a single radical idea: 
              to dismantle the predictable visual structures of the modern web and replace them with raw, 
              high-concept digital artistry. He is notoriously dedicated to minimalism, refusing to settle 
              for cluttered designs and always remaining focused on the core architecture of user connection.
            </p>
            <p className="bio-text">
              Under his direction, the studio operates on an intersectional axis where technology, raw luxury 
              fashion, and software development overlap. Through projects like ELCIRCLE 88, he has convinced 
              the industry that luxury is not about excess, but the precise refinement of negative space, 
              impeccable typography, and uncompromising speed.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER QUOTE & RAW ARCHIVAL COLLAGE */}
      <section className="ceo-footer-collage-grid">
        
        {/* Left Column: Testimonial & Starburst Accent */}
        <div className="collage-left">
          <div className="editorial-quote-block">
            <span className="editorial-quote-mark">“</span>
            <p className="quote-text">
              For me, his execution is unmatched. His structures are clean like surgery, 
              his animations feel monumental, and his aesthetic decisions feel incredibly deliberate—with a 
              strong, masculine grounding and a timeless raw look.
            </p>
          </div>
          
          <div className="collage-author-footer">
            <div className="author-name-block">
              <span className="author-title">CREATIVE DIRECTOR</span>
              <h4 className="author-name">ELCIRCLE STUDIO</h4>
            </div>
            
            {/* Hand-drawn raw vector Starburst star icon */}
            <div className="starburst-container">
              <svg className="starburst-svg" viewBox="0 0 100 100">
                <path d="M50,0 L55,35 L90,15 L65,45 L100,50 L65,55 L90,85 L55,65 L50,100 L45,65 L10,85 L35,55 L0,50 L35,45 L10,15 L45,35 Z" fill="none" stroke="black" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Duo Archival Black & White Photos */}
        <div className="collage-right">
          <div className="duo-photos-wrapper">
            <div className="collage-photo-frame frame-left">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
                alt="Atmospheric editorial" 
              />
            </div>
            <div className="collage-photo-frame frame-right">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" 
                alt="Behind the scenes archival" 
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CeoPage;