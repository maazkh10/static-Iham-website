import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line drawing animation
      gsap.fromTo(
        ".horizontal-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );

      // Stagger reveal of large directory blocks
      gsap.fromTo(
        ".giant-nav-item, .manifesto-side",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".editorial-grid",
            start: "top 75%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="editorial-footer" ref={footerRef}>
      <div className="horizontal-line" />

      <div className="editorial-grid">
        
        {/* Left Manifesto Column */}
        <div className="manifesto-side">
          <div className="sticky-wrapper">
            <span className="section-label">COMMUNICATION</span>
            <h2 className="manifesto-heading">
              LET'S SHAPE THE NEXT BIG LEGACY.
            </h2>
            <div className="editorial-contact">
              <a href="mailto:hello@elcircle88.com" className="editorial-mail">
                hello@elcircle88.com
              </a>
              <p className="editorial-hours">Available for global inquiries • EST</p>
            </div>
          </div>
        </div>

        {/* Right Massive Navigation Block */}
        <div className="directory-side">
          
          <div className="giant-nav-item">
            <span className="index-num">01 /</span>
            <a href="#projects" className="giant-nav-link">
              <span className="link-title">THE ARCHIVE</span>
              <span className="link-subtitle">Selected Projects</span>
            </a>
          </div>

          <div className="giant-nav-item">
            <span className="index-num">02 /</span>
            <a href="#studio" className="giant-nav-link">
              <span className="link-title">THE STUDIO</span>
              <span className="link-subtitle">Philosophy & Culture</span>
            </a>
          </div>

          <div className="giant-nav-item">
            <span className="index-num">03 /</span>
            <a href="#journal" className="giant-nav-link">
              <span className="link-title">EDITORIAL</span>
              <span className="link-subtitle">Thoughts & Perspectives</span>
            </a>
          </div>

          <div className="giant-nav-item">
            <span className="index-num">04 /</span>
            <a href="#contact" className="giant-nav-link">
              <span className="link-title">INQUIRIES</span>
              <span className="link-subtitle">Start a Partnership</span>
            </a>
          </div>

        </div>

      </div>

      {/* Understated Minimalist Base */}
      <div className="editorial-base">
        <div className="base-left">
          <span>&copy; {new Date().getFullYear()} ELCIRCLE 88. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="base-right">
          <div className="social-row">
            <a href="#instagram">INSTAGRAM</a>
            <span>/</span>
            <a href="#linkedin">LINKEDIN</a>
            <span>/</span>
            <a href="#twitter">TWITTER</a>
          </div>
        </div>
      </div>
    </footer>
  );
}