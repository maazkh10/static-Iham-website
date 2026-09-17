import { useLayoutEffect, useRef } from "react";
import "./wwd.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Founded in 2010, ILHAAM GROUP is a diversified luxury and lifestyle group built around a shared vision: creating exceptional experiences across industries.";

const secondText =
  "From fashion retail and events to travel, hospitality and strategic ventures, our businesses each bring a distinct perspective while remaining connected by the same commitment to quality, innovation and experience.";

export default function Whtwedo() {
  const section = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Large background typography
      gsap.to(".bg-title", {
        y: -160,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // First paragraph reveal
      gsap.to(".word-one", {
        color: "#111",
        opacity: 1,
        stagger: 0.025,
        ease: "none",
        scrollTrigger: {
          trigger: ".paragraph-one",
          start: "top 80%",
          end: "bottom 55%",
          scrub: 1,
        },
      });

      // Second paragraph reveal
      gsap.to(".word-two", {
        color: "#111",
        opacity: 1,
        stagger: 0.025,
        ease: "none",
        scrollTrigger: {
          trigger: ".paragraph-two",
          start: "top 80%",
          end: "bottom 55%",
          scrub: 1,
        },
      });

      // CTA
      gsap.from(".about-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="our-word" ref={section}>

      {/* Background Typography */}
      <h1 className="bg-title">
        ONE VISION
      </h1>

      <div className="content">

        {/* Section Label */}
        <div className="section-label">
          <span className="label-line"></span>
          <span>ILHAAM GROUP</span>
        </div>

        {/* Main Statement */}
        <p className="paragraph paragraph-one">
          {text.split("").map((letter, index) => (
            <span className="word word-one" key={index}>
              {letter}
            </span>
          ))}
        </p>

        {/* Supporting Statement */}
        <p className="paragraph paragraph-two">
          {secondText.split("").map((letter, index) => (
            <span className="word word-two" key={index}>
              {letter}
            </span>
          ))}
        </p>

        {/* CTA */}
        <div className="about-cta">
          <a href="/about" className="learn-more">
            <span>LEARN MORE</span>

            <span className="arrow">
              ↗
            </span>
          </a>
        </div>

        {/* Closing Statement */}
        <div className="closing-line">
          <span>One group.</span>
          <span>Multiple worlds.</span>
          <span>One shared vision.</span>
        </div>

      </div>

    </section>
  );
}
