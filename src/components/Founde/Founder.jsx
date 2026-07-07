import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FounderVision.css";

gsap.registerPlugin(ScrollTrigger);

export default function FounderVision() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in eyebrow and title
      gsap.fromTo(
        ".eyebrow, .title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Quote split reveal
      gsap.fromTo(
        ".quote-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".quote-section",
            start: "top 75%",
          },
        }
      );

      // Bottom section: Elegant reveal of image and text
      gsap.fromTo(
        ".img-wrapper",
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.1 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.6,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".bottom-layout",
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".narrative-text, .signature-block",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bottom-layout",
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="founder-container" ref={containerRef}>
      
      {/* Top Header Grid */}
      <div className="header-grid">
        <span className="eyebrow">FOUNDER'S NOTE</span>
        <h1 className="title">Vision</h1>
      </div>

      <hr className="divider" />

      {/* Hero Quote Statement */}
      <div className="quote-section">
        <h2 className="quote-text">
          WE DON'T CREATE BRANDS.
          <br />
          WE CREATE LEGACIES.
        </h2>
      </div>

      {/* Main Narrative & Imagery */}
      <div className="bottom-layout">
        
        <div className="image-panel">
          <div className="img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200"
              alt="Founder Portrait"
            />
          </div>
        </div>

        <div className="content-panel">
          <p className="narrative-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia impedit molestiae molestias recusandae ipsam
            deserunt ratione. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores, aliquid.
          </p>

          <div className="signature-block">
            <h3 className="founder-name">John Williams</h3>
            <span className="founder-role">Founder & Creative Director</span>
          </div>
        </div>

      </div>

    </section>
  );
}