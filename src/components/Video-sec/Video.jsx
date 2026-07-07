import { useLayoutEffect, useRef } from "react";
import "./Video.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fasionVideo from "../../assets/fasion.mp4" 

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(videoRef.current, {
        width: "55vw",
        height: "320px",
        borderRadius: "24px",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".video-title", {
        y: -80,
        opacity: 0.3,
        scale: 0.85,
        ease: "power2.out",
        duration: 1,
      });

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

      <h1 className="video-title">
        OUR FILM
      </h1>

      <div className="video-wrapper" ref={videoRef}>

        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={fasionVideo} type="video/mp4" />
        </video>

      </div>

    </section>
  );
}