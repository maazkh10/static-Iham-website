import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Vision.css";

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
     
      gsap.fromTo(
        ".v-reveal-line span",
        { y: "100%" },
        {
          y: "0%",
          duration: 1.4,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

   
      gsap.fromTo(circleRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top 85%",
          }
        }
      );

      // Internal image parallax shift inside the circle boundary
      gsap.fromTo(".v-circle-img",
        { yPercent: -10, scale: 1.15 },
        {
          yPercent: 10,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      // Subtle fade up for descriptions
      gsap.fromTo(".v-details-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".v-details-block",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vision-luxury-canvas" ref={containerRef}>
      
      {/* Editorial Header */}
      <div className="v-meta-header">
        <span className="v-label">[ FUTURE PROJECTION / 02 ]</span>
      </div>

      {/* Main Structural Layout Area */}
      <div className="v-interactive-layout">
        
        {/* Asymmetric Typography Layer */}
        <div className="v-typography-overlay">
          <h2 className="v-reveal-line"><span>BEYOND THE</span></h2>
          <h2 className="v-reveal-line serif-font"><span>Transient Trend.</span></h2>
        </div>

        {/* The Premium Circular Aperture Asset */}
        <div className="v-circle-aperture-frame" ref={circleRef}>
          <div className="v-circle-inner-mask">
            <img 
              className="v-circle-img" 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400" 
              alt="Luxury Space Architectural Silhouette" 
            />
          </div>
        </div>

        {/* Overlapping Counter-Statement Layer */}
        <div className="v-manifesto-overlay">
          <h3 className="v-reveal-line"><span>DEFINING PERMANENT</span></h3>
          <h3 className="v-reveal-line structural-indent"><span>ARCHITECTURAL BENCHMARKS</span></h3>
        </div>

      </div>

      {/* Base Context Copy Block */}
      <div className="v-details-block">
        <div className="v-text-column">
          <p className="v-narrative-p">
            Our framework completely rejects fast visual lifecycles. We orchestrate digital environments and fashion executions that prioritize enduring geometry over superficial market patterns.
          </p>
        </div>
        <div className="v-text-column secondary">
          <p className="v-narrative-p">
            ILHHAM GROUP creates structural depth through strategic technical ecosystems. Every product, platform iteration, and curated experience operates as an ongoing masterclass in deliberate, timeless brand legacy.
          </p>
        </div>
      </div>

    </section>
  );
}