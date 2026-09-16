import { useLayoutEffect, useRef } from "react";
import "./Hero.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
];

export default function Hero() {
  const heroRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- INITIAL LOAD HIDDEN CONFIGURATIONS ---
      gsap.set(".hero-title", { opacity: 0, scale: 0.8, y: 40 });
      gsap.set(".hero-grid", { yPercent: 100, opacity: 0 });
      gsap.set(".grid-card", { y: 120, opacity: 0 });
      gsap.set(".grid-card img", { scale: 1.3 });

      // ================= TIMELINE 1: PAGE INTRO REVEAL (AUTOPLAY) =================
      const introTl = gsap.timeline();

      introTl
        .to({}, { duration: 1.5 }) // Brief loading screen buffer pause
        .to(".top-panel", { y: "-100%", duration: 2.5, ease: "power4.inOut" }, 0)
        .to(".bottom-panel", { y: "100%", duration: 2.5, ease: "power4.inOut" }, 0)
        .to(".hero-title", { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.6")
        .set([".top-panel", ".bottom-panel"], { display: "none" }); // Remove overlays from DOM tree interaction

      // ================= TIMELINE 2: SCROLLTRIGGER PINNED ACTION =================
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=5500", 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* STEP 1: TITLE REDUCTION & GRID TRANSITION IN */
      scrollTl.to(".hero-title", {
        x: "-28vw",
        y: "0%", // Unlocks dead-center calculation
        left: "42%", // Moves title anchor smoothly to left side container alignment
        scale: 0.75,
        ease: "power3.inOut",
        duration: 1.5
      });

      scrollTl.to(".hero-grid", {
        yPercent: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 1.2,
      }, "<");

      scrollTl.to(".grid-card", {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        ease: "power4.out",
        duration: 1.2,
      }, "-=0.8");

      scrollTl.to(".grid-card img", {
        scale: 1,
        stagger: 0.04,
        ease: "power2.out",
        duration: 1.8,
      }, "<");

      /* MASONRY PARALLAX OFFSETS */
      scrollTl.to(".column-1", { y: -140, duration: 1.8 }, 0);
      scrollTl.to(".column-2", { y: 100, duration: 1.8 }, 0);
      scrollTl.to(".column-3", { y: -100, duration: 1.8 }, 0);
      scrollTl.to(".column-4", { y: 120, duration: 1.8 }, 0);

      /* STEP 2: FILMSTRIP SLIDE TO SPRING 22 EDITORIAL */
      scrollTl.to(scrollContainerRef.current, {
        x: "-100vw",
        ease: "power2.inOut",
        duration: 3
      }, "+=0.3");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      
      {/* INTEGRATED LOADING BLOCK PANELS */}
      <div className="top-panel"></div>
      <div className="bottom-panel"></div>

      {/* CONTINUOUS FILMSTRIP */}
      <div className="horizontal-scroll-wrapper" ref={scrollContainerRef}>
        
        {/* VIEW CONTAINER ONE: ACTIVE GRID HUB */}
        <div className="view-panel main-hero-view">
          
          <div className="hero-left">
            {/* Dedicated single source text component */}
            <h1 className="hero-title">
              ILHAAM
              <br />
              GROUP
            </h1>
          </div>

          <div className="hero-right">
            <div className="hero-grid">
              <div className="grid-column column-1">
                <div className="grid-card">
                  <img src={images[0]} alt="" />
                </div>
                <div className="grid-card tall">
                  <img src={images[1]} alt="" />
                </div>
              </div>

              <div className="grid-column column-2">
                <div className="grid-card tall">
                  <img src={images[2]} alt="" />
                </div>
                <div className="grid-card">
                  <img src={images[3]} alt="" />
                </div>
              </div>

              <div className="grid-column column-3">
                <div className="grid-card">
                  <img src={images[4]} alt="" />
                </div>
                <div className="grid-card tall">
                  <img src={images[5]} alt="" />
                </div>
              </div>

              <div className="grid-column column-4">
                <div className="grid-card tall">
                  <img src={images[6]} alt="" />
                </div>
                <div className="grid-card">
                  <img src={images[7]} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <span>PLAYFILM</span>
            <span>HIGH QUALITY FASHION LOOKBOOK</span>
            <span>2026</span>
          </div>
        </div>

        {/* VIEW CONTAINER TWO: SPRING /22 EDITORIAL SPLIT PANEL */}
        {/* Render matches look and feel layout specification blueprint from Screenshot 2026-07-03 at 3.41.02 PM.jpg */}
        <div className="view-panel spring-section-view">
          
          <div className="spring-panel-left">
            <div className="panel-header">
              <h2 className="panel-title-large">VORLÍF</h2>
              <div className="panel-meta-top">
                <span>KOUP 2026©</span>
                <span>DESIGNED TO ENDURE</span>
              </div>
            </div>
            
            <div className="panel-video-container">
              <img src={images[3]} alt="Vorlif Main Editorial" className="panel-media" />
              <div className="play-button-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="panel-footer-details">
              <span className="view-link">VIEW SHOWROOM</span>
              <h3 className="panel-title-huge">SPRING <span className="fraction-align">/22</span></h3>
              <div className="panel-footer-actions">
                <span className="category-tag">OUTERWEAR<br/>GEL</span>
                <button className="shop-btn">COLLECTION / SHOP CO <span className="arrow">↗</span></button>
              </div>
            </div>
          </div>

          <div className="spring-panel-right">
            <div className="panel-header text-white">
              <h2 className="panel-title-large layout-header-offset">LLECTION /</h2>
            </div>
            
            <div className="panel-video-container">
              <img src={images[5]} alt="Collection Showcase" className="panel-media" />
            </div>
 
 <h3>hehehheehehh</h3>
 
          </div>

        </div>

      </div>
    </section>
  );
}