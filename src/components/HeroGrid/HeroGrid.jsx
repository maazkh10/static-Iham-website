import { useLayoutEffect, useRef } from "react";
import "./Hero.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   IMAGES
========================================================= */

const images = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=85",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=85",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=85",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=85",
];


/* =========================================================
   PORTFOLIO DATA
========================================================= */

const portfolioItems = [
  {
    title: "LUXURY RETAIL",
    image: images[0],
  },
  {
    title: "EVENTS & EXPERIENCES",
    image: images[1],
  },
  {
    title: "TRAVEL & HOSPITALITY",
    image: images[2],
  },
  {
    title: "CRAFTSMANSHIP",
    image: images[3],
  },
  {
    title: "STRATEGIC VENTURES",
    image: images[4],
  },
  {
    title: "PARTNERSHIPS & LOYALTY",
    image: images[5],
  },
  {
    title: "PEOPLE & BRANDS",
    image: images[6],
  },
  {
    title: "STRATEGIC GROWTH",
    image: images[7],
  },
];


export default function Hero() {
  const heroRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(".brand-intro", {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      gsap.set(".brand-logo", {
        opacity: 0,
        y: 25,
        scale: 0.94,
      });

      gsap.set(".brand-divider", {
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.set(".brand-tagline", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".brand-subtitle", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".discover-group", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".brand-bottom", {
        opacity: 0,
      });

      gsap.set(".hero-grid", {
        yPercent: 100,
        opacity: 0,
      });

      gsap.set(".grid-card", {
        y: 120,
        opacity: 0,
      });

      gsap.set(".grid-card img", {
        scale: 1.3,
      });

      gsap.set(".portfolio-copy", {
        opacity: 0,
        x: -50,
      });

      gsap.set(".portfolio-number", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".portfolio-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".portfolio-button", {
        opacity: 0,
        y: 20,
      });


      /* =====================================================
         INTRO BLACK SPLIT
      ===================================================== */

      const introTl = gsap.timeline();

      introTl
        .to({}, {
          duration: 1.1,
        })

        .to(
          ".top-panel",
          {
            y: "-100%",
            duration: 2.4,
            ease: "power4.inOut",
          },
          0
        )

        .to(
          ".bottom-panel",
          {
            y: "100%",
            duration: 2.4,
            ease: "power4.inOut",
          },
          0
        )

        .to(
          ".brand-logo",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.9"
        )

        .to(
          ".brand-divider",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7"
        )

        .to(
          ".brand-tagline",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .to(
          ".brand-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .to(
          ".discover-group",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )

        .to(
          ".brand-bottom",
          {
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4"
        )

        .set(
          [".top-panel", ".bottom-panel"],
          {
            display: "none",
          }
        );


      /* =====================================================
         MAIN SCROLL TIMELINE
      ===================================================== */

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=70000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });


      /* =====================================================
         BRAND INTRO OUT
      ===================================================== */

      scrollTl.to(
        ".brand-intro",
        {
          opacity: 0,
          y: -100,
          scale: 0.92,
          duration: 1.4,
          ease: "power3.inOut",
        }
      );


      /* =====================================================
         PORTFOLIO GRID
      ===================================================== */

      scrollTl.to(
        ".hero-grid",
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
        },
        "-=0.5"
      );


      scrollTl.to(
        ".grid-card",
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8"
      );


      scrollTl.to(
        ".grid-card img",
        {
          scale: 1,
          stagger: 0.04,
          duration: 1.8,
          ease: "power2.out",
        },
        "<"
      );


      /* =====================================================
         GRID PARALLAX
      ===================================================== */

      scrollTl.to(
        ".column-1",
        {
          y: -140,
          duration: 1.8,
        },
        0.5
      );

      scrollTl.to(
        ".column-2",
        {
          y: 100,
          duration: 1.8,
        },
        0.5
      );

      scrollTl.to(
        ".column-3",
        {
          y: -100,
          duration: 1.8,
        },
        0.5
      );

      scrollTl.to(
        ".column-4",
        {
          y: 120,
          duration: 1.8,
        },
        0.5
      );


      /* =====================================================
         PORTFOLIO COPY
      ===================================================== */

      scrollTl.to(
        ".portfolio-number",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.7"
      );


      scrollTl.to(
        ".portfolio-line",
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        "<"
      );


      scrollTl.to(
        ".portfolio-copy",
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=0.45"
      );


      scrollTl.to(
        ".portfolio-button",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.35"
      );


      /* =====================================================
         HORIZONTAL MOVE TO ABOUT SECTION
      ===================================================== */

      scrollTl.to(
        scrollContainerRef.current,
        {
          x: "-100vw",
          duration: 3,
          ease: "power2.inOut",
        },
        "+=0.8"
      );

    }, heroRef);


    return () => ctx.revert();
  }, []);


  return (
    <section
      className="hero"
      ref={heroRef}
    >

      {/* ===================================================
          BLACK SPLIT PANELS
      =================================================== */}

      <div className="top-panel"></div>
      <div className="bottom-panel"></div>


      {/* ===================================================
          HORIZONTAL CONTENT
      =================================================== */}

      <div
        className="horizontal-scroll-wrapper"
        ref={scrollContainerRef}
      >


        {/* =================================================
            PANEL 1
        ================================================= */}

        <div className="view-panel main-hero-view">


          {/* =================================================
              BRAND INTRO
          ================================================= */}

          <div className="brand-intro">

            <div className="gold-flow gold-flow-left"></div>

            <div className="gold-flow gold-flow-right"></div>

            <div className="gold-glow glow-left"></div>

            <div className="gold-glow glow-right"></div>


            <div className="brand-center">

              <div className="brand-logo-wrapper">

                <img
                  src="../../assets/ILHAM_GROUP_LOGO-03.png"
                  alt="ILHAAM GROUP"
                  className="brand-logo"
                />

              </div>


              <div className="brand-divider"></div>


              <h1 className="brand-tagline">
                Beyond luxury.
                <br />
                Into experience.
              </h1>


              <div className="brand-subtitle">

                <span>LUXURY</span>

                <i>·</i>

                <span>LIFESTYLE</span>

                <i>·</i>

                <span>EXPERIENCES</span>

              </div>


              <div className="discover-group">

                <span>
                  DISCOVER THE GROUP
                </span>

                <div className="discover-arrow">
                  ↓
                </div>

              </div>

            </div>


            <div className="brand-bottom">

              <div className="brand-est">

                <span className="small-line"></span>

                <span>
                  EST. 2010
                </span>

              </div>


              <div className="brand-bottom-center">

                <span>
                  PEOPLE
                </span>

                <span>
                  BRANDS
                </span>

                <span>
                  EXPERIENCES
                </span>

              </div>


              <div className="brand-tomorrow">

                <span>
                  A BRIGHTER TOMORROW
                </span>

                <span>
                  THROUGH EXCEPTIONAL EXPERIENCES
                </span>

                <span className="small-line"></span>

              </div>

            </div>

          </div>


          {/* =================================================
              PORTFOLIO COPY
          ================================================= */}

          <div className="hero-left">

            <div className="portfolio-number">

              <span>
                02
              </span>

              <span className="portfolio-line"></span>

            </div>


            <div className="portfolio-copy">

              <h2 className="portfolio-heading">

                <span>
                  A Portfolio
                </span>

                <span>
                  Across
                </span>

                <strong>
                  Luxury & Lifestyle
                </strong>

              </h2>


              <p className="portfolio-description">
                ILHAAM GROUP brings together a curated
                portfolio of businesses spanning fashion
                retail, events, travel, hospitality and
                strategic ventures.
              </p>


              <button className="portfolio-button">

                <span>
                  EXPLORE OUR COMPANIES
                </span>

                <span className="button-arrow">
                  →
                </span>

              </button>

            </div>


            <div className="portfolio-footer">

              <span>
                PEOPLE
              </span>

              <span>
                BRANDS
              </span>

              <span>
                EXPERIENCES
              </span>

              <small>
                A BRIGHTER TOMORROW
              </small>

            </div>

          </div>


          {/* =================================================
              IMAGE GRID
          ================================================= */}

          <div className="hero-right">

            <div className="hero-grid">

              <div className="grid-column column-1">

                <PortfolioCard
                  item={portfolioItems[0]}
                />

                <PortfolioCard
                  item={portfolioItems[3]}
                  tall
                />

              </div>


              <div className="grid-column column-2">

                <PortfolioCard
                  item={portfolioItems[1]}
                  tall
                />

                <PortfolioCard
                  item={portfolioItems[4]}
                />

              </div>


              <div className="grid-column column-3">

                <PortfolioCard
                  item={portfolioItems[2]}
                />

                <PortfolioCard
                  item={portfolioItems[5]}
                  tall
                />

              </div>


              <div className="grid-column column-4">

                <PortfolioCard
                  item={portfolioItems[6]}
                  tall
                />

                <PortfolioCard
                  item={portfolioItems[7]}
                />

              </div>

            </div>

          </div>


          <div className="hero-footer">

            <span>
              PLAYFILM
            </span>

            <span>
              HIGH QUALITY FASHION LOOKBOOK
            </span>

            <span>
              2026
            </span>

          </div>

        </div>


        {/* =================================================
            PANEL 2 — ABOUT ILHAAM GROUP
        ================================================= */}

        <section className="view-panel about-section">


          {/* =================================================
              LEFT IMAGE STRIP
          ================================================= */}

          <div className="about-side about-side-left">

            <img
              src={images[4]}
              alt="ILHAAM lifestyle"
            />


            <div className="side-image-overlay"></div>


            <div className="about-side-top">
              EST. 2010
            </div>


            <div className="about-side-bottom">

              <span></span>

              <p>
                PEOPLE
                <br />
                PLACES
                <br />
                EXPERIENCES
                <br />
                A HIGHER STANDARD
              </p>

            </div>

          </div>


          {/* =================================================
              CENTER WHITE CARD
          ================================================= */}

          <div className="about-center-card">


            {/* TOP HEADER */}

            <div className="about-card-header">

              <span>
                ABOUT ILHAAM GROUP
              </span>

              <span>
                DUBAI, UAE
              </span>

            </div>


            {/* MAIN IMAGE */}

            <div className="about-video">

              <img
                src={images[2]}
                alt="ILHAAM Group experience"
              />


              <div className="about-image-shade"></div>


              <button
                className="about-play"
                aria-label="Play ILHAAM Group film"
              >

                <span></span>

              </button>

            </div>


            {/* MAIN CONTENT */}

            <div className="about-content">


              <h2>
                ONE GROUP.
                <br />
                MULTIPLE WORLDS.
              </h2>


              <p>
                Founded in 2010, ILHAAM GROUP brings
                together businesses across luxury,
                lifestyle and experience — each distinct
                in its purpose, connected by a shared
                vision.
              </p>


              <button className="about-story-button">

                <span>
                  DISCOVER OUR STORY
                </span>

                <span>
                  ↗
                </span>

              </button>

            </div>


            {/* BOTTOM */}

            <div className="about-card-footer">

              <div className="about-footer-spacer"></div>

              <div className="about-page-number">
                03 / 06
              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT IMAGE STRIP
          ================================================= */}

          <div className="about-side about-side-right">

            <img
              src={images[3]}
              alt="ILHAAM Group lifestyle"
            />


            <div className="side-image-overlay"></div>


            <div className="about-right-title">
              VISION
            </div>


            <div className="about-right-bottom">

              <span></span>

              <p>
                A MORE
                <br />
                BEAUTIFUL
                <br />
                TOMORROW
              </p>

            </div>

          </div>

        </section>

      </div>

    </section>
  );
}


/* =========================================================
   PORTFOLIO CARD
========================================================= */

function PortfolioCard({
  item,
  tall = false,
}) {
  return (
    <div
      className={`grid-card ${
        tall ? "tall" : ""
      }`}
    >

      <img
        src={item.image}
        alt={item.title}
      />


      <div className="card-overlay">

        <div className="card-line"></div>


        <div className="card-bottom">

          <span>
            {item.title}
          </span>

          <span className="card-arrow">
            →
          </span>

        </div>

      </div>

    </div>
  );
}