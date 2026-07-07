import { useLayoutEffect, useRef } from "react";
import "./IntroAnimation.css";

import gsap from "gsap";

export default function IntroAnimation() {
  const section = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // hide text initially
      gsap.set(".intro-text", {
        opacity: 0,
        scale: 0.8,
        y: 40,
      });

      // wait like loading screen
      tl.to({}, { duration: 3 });

      // split panels
      tl.to(
        ".top-panel",
        {
          y: "-100%",
          duration: 3,
          ease: "power4.inOut",
        },
        0
      );

      tl.to(
        ".bottom-panel",
        {
          y: "100%",
          duration: 3,
          ease: "power4.inOut",
        },
        0
      );

      // reveal text
      tl.to(
        ".intro-text",
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="intro-section" ref={section}>
      <div className="top-panel"></div>

      <div className="bottom-panel"></div>

      <h1 className="intro-text">ILHAAM GROUP</h1>
    </section>
  );
}