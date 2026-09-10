import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Profile.css";

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Word-Mask Reveal
      gsap.fromTo(
        ".p-mask-title span",
        { y: "100%" },
        {
          y: "0%",
          duration: 1.4,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // 2. Multi-Image Cinematic Clip Reveal
      gsap.utils.toArray(".p-img-reveal-wrapper").forEach((imgWrap) => {
        const img = imgWrap.querySelector("img");
        
        gsap.fromTo(imgWrap,
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.8,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: imgWrap,
              start: "top 85%",
            }
          }
        );

        // Subtle scale down effect inside the frame
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 1.8,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: imgWrap,
              start: "top 85%",
            }
          }
        );
      });

      // 3. Independent Parallax Scroll Speeds for Each Image Frame
      gsap.to(".img-speed-slow", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(".img-speed-fast", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // 4. Text Reveal Timeline
      gsap.fromTo(
        ".p-text-reveal > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".p-text-reveal",
            start: "top 75%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="profile-canvas-v2" ref={containerRef}>
      
      {/* Editorial Title Block */}
      <div className="p-header-v2">
        <span className="p-eyebrow-v2">// THmaaazzzILE</span>
        <h1 className="p-mask-title"><span>ILHHAM GROUP</span></h1>
        <h1 className="p-mask-title serif-italic"><span>Ecosystem Exhibit</span></h1>
      </div>

      {/* Triptych Interlocking Media & Text Grid */}
      <div className="p-triptych-grid">
        
        {/* Left Column: Vertical Image Pillar + Meta */}
        <div className="p-col-left img-speed-slow">
          <div className="p-img-reveal-wrapper aspect-portrait">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800" 
              alt="High-Fashion Campaign Close-up" 
            />
          </div>
          <div className="p-meta-caption">
            <span>[ COMPOSITION 01A // DIGITAL COUTURE ]</span>
          </div>
        </div>

        {/* Center Column: Primary Narrative & Fine Lines */}
        <div className="p-col-center p-text-reveal">
          <p className="p-manifesto-lead">
            We operate at the volatile intersection of high-tier direct-to-consumer fashion houses and unified multi-brand infrastructure.
          </p>
          <div className="p-editorial-line" />
          <p className="p-manifesto-sub">
            ILHHAM GROUP functions as a decentralized holding entity. We cultivate standalone consumer fashion brands while building our own internal technologies—such as ELCIRCLE 88 and ELMARKAT—transforming fragmented luxury retail into a synchronized architectural ecosystem.
          </p>
          
          {/* Third Tiny Image Nested directly in Narrative */}
          <div className="p-img-reveal-wrapper aspect-landscape inside-text">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800" 
              alt="Luxury Atelier Workshop" 
            />
          </div>
        </div>

        {/* Right Column: High Offset Parallax Image */}
        <div className="p-col-right img-speed-fast">
          <div className="p-img-reveal-wrapper aspect-tall">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800" 
              alt="Avant-Garde Architectural Silhouette" 
            />
          </div>
          <div className="p-meta-caption right-align">
            <span>STRUCTURE & REGIME &copy;2026</span>
          </div>
        </div>

      </div>

    </section>
  );
}