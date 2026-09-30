import React, { useState } from 'react';
import './LuxuryMenu.css';

const mainNavLinks = [
  { label: 'About', href: '/About' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Ceo Profile', href: '/ceo-profile' },
//   { label: 'JOIN US', href: '#' },
//   { label: 'DREAM MACHINE', href: '#' },
];

// const secondaryNavLinks = [
//   { label: 'INVESTORS', href: '#' },
//   { label: 'PRESS', href: '#' },
//   { label: 'STARTUPS & TECH PARTNERS', href: '#' },
//   { label: 'SUPPLIERS', href: '#' },
//   { label: 'CANDIDATE PORTAL', href: '#' },
// ];

export default function LuxuryMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="luxury-nav-container">
      {/* Trigger Button (Two Parallel Lines) */}
      <button 
        type="button" 
        className="menu-trigger-btn" 
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Overlay backdrop */}
      <div 
        className={`menu-overlay ${isOpen ? 'is-active' : ''}`} 
        onClick={toggleMenu} 
      />

      {/* Drawer Menu Panel */}
      <aside className={`luxury-drawer ${isOpen ? 'is-open' : ''}`}>
        {/* Header */}
        <div className="drawer-header">
          <button 
            type="button" 
            className="close-btn" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg 
              className="close-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span className="close-text">CLOSE</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="drawer-body">
          {/* Primary Nav Links */}
          <ul className="primary-nav">
            {mainNavLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="primary-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Featured Highlight Section */}
          <div className="featured-section">
            <a href="#" className="featured-link">
              <span>LES JOURNÉES PARTICULIÈRES</span>
              <span className="arrow-icon">&rarr;</span>
            </a>
          </div>

          {/* Secondary Nav Links */}
          {/* <ul className="secondary-nav">
            {secondaryNavLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="secondary-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul> */}

          {/* Social Icons Footer */}
          <div className="social-footer">
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.078 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.02 0 1.513.769 1.513 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.002 12.017.002z"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}