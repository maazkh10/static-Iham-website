import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FounderVision.css";

gsap.registerPlugin(ScrollTrigger);

export default function FounderVision() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(
        ".founder-eyebrow, .founder-title, .founder-meta",
        {
          opacity: 0,
          y: 25,
        }
      );

      gsap.set(".founder-divider-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".quote-label, .quote-number", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".quote-text", {
        opacity: 0,
        y: 45,
      });

      gsap.set(".quote-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".image-panel", {
        opacity: 0,
        y: 50,
      });

      gsap.set(".img-wrapper", {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.set(".image-caption", {
        opacity: 0,
        y: 12,
      });

      gsap.set(
        ".content-panel > *",
        {
          opacity: 0,
          y: 25,
        }
      );

      /* =====================================================
         HEADER
      ===================================================== */

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      headerTl
        .to(".founder-eyebrow", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          ".founder-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          ".founder-meta",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          ".founder-divider-line",
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
          },
          "-=0.35"
        );

      /* =====================================================
         QUOTE
      ===================================================== */

      const quoteTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".quote-section",
          start: "top 82%",
          once: true,
        },
      });

      quoteTl
        .to(".quote-label, .quote-number", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          ".quote-text",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .to(
          ".quote-line",
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        );

      /* =====================================================
         IMAGE
      ===================================================== */

      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bottom-layout",
          start: "top 78%",
          once: true,
        },
      });

      imageTl
        .to(".image-panel", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          ".img-wrapper",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.45"
        )
        .to(
          ".image-caption",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

      /* =====================================================
         CONTENT
      ===================================================== */

      gsap.to(".content-panel > *", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-panel",
          start: "top 78%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="founder-container"
      ref={containerRef}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="founder-header">

        <div className="header-left">

          <span className="founder-eyebrow">
            FOUNDER'S NOTE
          </span>

          <div className="founder-index">
            <span>01</span>

            <span className="index-line"></span>

            <span>VISION</span>
          </div>

        </div>

        <div className="header-right">

          <span className="founder-meta">
            ILHAAM GROUP
            <br />
            DUBAI · UAE
          </span>

        </div>

      </div>


      {/* =====================================================
          TITLE
      ===================================================== */}

      <div className="founder-title-wrap">

        <h1 className="founder-title">
          Vision
        </h1>

        <div className="title-side-note">
          <span>PEOPLE</span>
          <span>BRANDS</span>
          <span>EXPERIENCES</span>
        </div>

      </div>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="founder-divider">
        <span className="founder-divider-line"></span>
      </div>


      {/* =====================================================
          QUOTE
      ===================================================== */}

      <div className="quote-section">

        <div className="quote-top">

          <span className="quote-label">
            OUR PHILOSOPHY
          </span>

          <span className="quote-symbol">
            ✦
          </span>

        </div>


        <div className="quote-content">

          <span className="quote-number">
            01
          </span>

          <h2 className="quote-text">

            WE DON'T CREATE
            <br />

            <span className="quote-highlight">
              BRANDS.
            </span>

            <br />

            WE CREATE
            <br />

            <span className="quote-highlight">
              LEGACIES.
            </span>

          </h2>

        </div>


        <div className="quote-bottom">

          <span className="quote-line"></span>

          <p>
            BUILT WITH PURPOSE.
            <br />
            CREATED TO ENDURE.
          </p>

        </div>

      </div>


      {/* =====================================================
          FOUNDER CONTENT
      ===================================================== */}

      <div className="bottom-layout">

        {/* ===================================================
            IMAGE
        =================================================== */}

        <div className="image-panel">

          <div className="image-number">
            01
          </div>

          <div className="image-frame">

            <div className="img-wrapper">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85"
                alt="Founder Portrait"
              />

              <div className="image-overlay"></div>

            </div>

          </div>


          <div className="image-caption">

            <div className="caption-line"></div>

            <div className="caption-content">

              <span>
                THE FOUNDER
              </span>

              <span>
                ILHAAM GROUP
              </span>

            </div>

          </div>

        </div>


        {/* ===================================================
            CONTENT
        =================================================== */}

        <div className="content-panel">

          <div className="content-top">

            <span className="content-eyebrow">
              A NOTE FROM THE FOUNDER
            </span>

            <div className="content-small-line"></div>

          </div>


          {/* =================================================
              FOUNDER MESSAGE
          ================================================= */}

          <div className="narrative-text">

            <p>
              “ILHAAM GROUP was built from a belief that
              luxury is not defined by a single product,
              place or moment — but by the experience
              created around it.
            </p>

            <br />

            <p>
              Since 2010, our journey has been shaped by
              curiosity, relationships and the ambition to
              create businesses that bring meaningful value
              to the lives of our clients. From fashion and
              events to travel, hospitality and strategic
              ventures, every part of the group reflects the
              same commitment to quality, creativity and
              thoughtful service.
            </p>

            <br />

            <p>
              As we continue to grow, our vision remains
              unchanged: to build with purpose, evolve with
              intention and create experiences that endure.”
            </p>

          </div>


          {/* =================================================
              SIGNATURE
          ================================================= */}

          <div className="signature-block">

            <div className="signature-top">

              <span className="signature-line"></span>

              <span className="signature-number">
                01 / 06
              </span>

            </div>


            <h3 className="founder-name">
              Ilham Abbas
            </h3>

            <span className="founder-role">
              Founder, President & CEO
            </span>


            {/* =================================================
                PROFILE BUTTON
            ================================================= */}

            <Link
              to="/ceo-profile"
              className="founder-profile-button"
            >

              <span>
                MEET THE FOUNDER
              </span>

              <span className="profile-button-arrow">
                ↗
              </span>

            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      {/* <div className="founder-bottom">

        <div className="bottom-number">
          01
        </div>

        <p>
          A LONG-TERM VISION
          <br />
          FOR A MORE BEAUTIFUL TOMORROW.
        </p>

        <span className="bottom-arrow">
          ↓
        </span>

      </div> */}

    </section>
  );
}