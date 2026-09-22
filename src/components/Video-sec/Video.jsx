
import { useLayoutEffect, useRef } from "react";
import "./Video.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fasionVideo from "../../assets/fasion.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =========================================
      // INITIAL VIDEO STATE
      // =========================================

      gsap.set(videoRef.current, {
        width: "55vw",
        height: "320px",
        borderRadius: "24px",
      });

      // =========================================
      // VIDEO SCROLL TIMELINE
      // =========================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          // IMPORTANT:
          // Video waits until the Hero above it
          // has completely finished and released.
          start: "top top",

          // How long the Video section stays pinned
          end: "+=2200",

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // =========================================
      // TITLE MOVEMENT
      // =========================================

      tl.to(
        ".video-eyebrow",
        {
          y: -30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        ".video-title",
        {
          y: -90,
          scale: 0.88,
          opacity: 0.35,
          duration: 1.5,
          ease: "power3.out",
        },
        0
      );

      tl.to(
        ".video-description",
        {
          y: -30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        ".video-scroll",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        0
      );

      // =========================================
      // VIDEO EXPANDS
      // =========================================

      tl.to(
        videoRef.current,
        {
          width: "92vw",
          height: "85vh",
          borderRadius: "18px",
          ease: "power3.out",
          duration: 2,
        },
        "<"
      );

      // =========================================
      // VIDEO → FULLSCREEN
      // =========================================

      tl.to(videoRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "power2.inOut",
        duration: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="video-section" ref={sectionRef}>

      {/* =========================================
          EDITORIAL HEADER
      ========================================= */}

      <div className="video-content">

        <div className="video-eyebrow">
          <span className="eyebrow-line"></span>

          <span>THE HOUSE / 2026</span>

          <span className="eyebrow-line"></span>
        </div>

        <h1 className="video-title">
          OUR FILM
        </h1>

        <p className="video-description">
          A cinematic expression of movement, silhouette
          <br />
          and the art of modern elegance.
        </p>

      </div>


      {/* =========================================
          VIDEO
      ========================================= */}

      <div
        className="video-wrapper"
        ref={videoRef}
      >

        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            // src={fasionVideo}
             src="/images/video3.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-overlay"></div>

      </div>


      {/* =========================================
          SCROLL INDICATOR
      ========================================= */}

      <div className="video-scroll">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line">
          <span></span>
        </div>

      </div>

    </section>
  );
}
