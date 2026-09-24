import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./work.css";

/* =========================================
   TABS
========================================= */

const categories = [
  {
    id: "brands",
    number: "01",
    label: "LUXURY RETAIL",
  },
  {
    id: "ecommerce",
    number: "02",
    label: "EVENTS & EXPERIENCES",
  },
  {
    id: "services",
    number: "03",
    label: "TRAVEL & HOSPITALITY",
  },
  {
    id: "partnerships",
    number: "04",
    label: "INVESTMENTS & CONSULTING",
  },
];


/* =========================================
   CONTENT
   Keep/change your images here
========================================= */

const content = {
  brands: [
    {
      number: "01",
      name: "ELILHAAM",
      description:
        "Luxury fashion for life's most memorable occasions.",
      image:
        "/images/Elliham.jpeg",
      link: "#elilhaam",
    },

    {
      number: "02",
      name: "ELBAS",
      description:
        "Refined occasionwear with an atelier point of view.",
      image:
        "/images/Elbas.jpeg",
      link: "#elbas",
    },

    {
      number: "03",
      name: "CHIZELL",
      description:
        "Contemporary fashion for modern dressing.",
      image:
         "/images/chizel.jpeg",
      link: "#chizell",
    },

    {
      number: "04",
      name: "EL Circle",
      description:
        "Elcircle conetnet.",
      image:
        "/images/Elcircle.jpeg",
      link: "#el-travel",
    },
  ],


  ecommerce: [
    {
      number: "01",
      name: "EVENT MANAGEMENT",
      description:
        "End-to-end planning and delivery for exceptional events.",
      image:
        "/images/events&experiences1.png",
      link: "#elilhaam",
    },

    {
      number: "02",
      name: "EXPERIENTIAL MARKETING",
      description:
        "Immersice experiences designed to bring brands to life.",
      image:
     "/images/events&experiences2.png",
       link: "#elbas",
    },

    {
      number: "03",
      name: "CORPORATE & PRIVATE EVENTS",
      description:
        "Tailored experiences for brands, business and private clients.",
      image:
   
    "/images/events&experiences3.png",
       link: "#chizell",
    },

    {
      number: "04",
      name: "COMMUNICATIONS & ACTIVATIONS",
      description:
        "Creative concepts that connect audiences, brands and moments.",
      image:
     "/images/events&experiences4.png",
        link: "#global-retail",
    },
  ],


  services: [
    {
      number: "01",
      name: "DESTINATIONS & EXPERIENCES",
      description:
        "Curated access to places, attractions and experiences worldwide.",
      image:
       "/images/travel&hospitality.png",
       link: "#events",
    },

    {
      number: "02",
      name: "GLOBAL TRANSPORTATION",
      description:
        "Seamless journeys by air, land and beyond.",
      image:
       "/images/travel&hospitality2.png", link: "#transport",
    },

    {
      number: "03",
      name: "TAILORED JOURNEYS",
      description:
        "Travel shaped around each client's preferences.",
     image:
       "/images/travel&hospitality3.png",  link: "#hospitality",
    },

    {
      number: "04",
      name: "HOTELS & RESORTS",
      description:
        "Exceptional stays through a global hospitality ne-twork.",
       image:
       "/images/travel&hospitality4.png",link: "#investments",
    },
  ],


  partnerships: [
    {
      number: "01",
      name: "BUSINESS CONSULTING",
      description:
        "Turning ambitious luxury and lifestyle ideas into viable businesses.",
      image:
    
      "/images/INVESTMENTS & CONSULTING.png",
      link: "#el-privi",
    },

    {
      number: "02",
      name: "INVESTMENT ADVISORY",
      description:
        "Informed guidance designed to support sustainable growth.",
      image:
     
      "/images/INVESTMENTS & CONSULTING2.png", link: "#global-partners",
    },

    {
      number: "03",
      name: "STRATEGIC SUPPORT",
      description:
        "Supporting businesses through carefully considered strategic partnerships.",
      image:
     
     
      "/images/INVESTMENTS & CONSULTING3.png", link: "#strategic-support",
    },

    {
      number: "04",
      name: "GROWTH STRATEGY",
      description:
        "Strategies built around competitiveness, expansion and long-term value.",
      image:
   
   
      "/images/INVESTMENTS & CONSULTING4.png",
   
        link: "#consulting",
    },
  ],
};


/* =========================================
   COMPONENT
========================================= */

function Work() {
  const [activeTab, setActiveTab] = useState("brands");

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const isAnimating = useRef(false);

  const activeContent = content[activeTab];

  const activeCategory = categories.find(
    (category) => category.id === activeTab
  );


  /* =========================================
     ENTER ANIMATION
  ========================================= */

  useLayoutEffect(() => {
    const cards =
      gridRef.current?.querySelectorAll(".brand-card");

    if (!cards?.length) return;

    gsap.killTweensOf([
      headingRef.current,
      cards,
    ]);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 28,
          scale: 0.99,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
          clearProps: "transform",
          onComplete: () => {
            isAnimating.current = false;
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);


  /* =========================================
     TAB CHANGE
  ========================================= */

  const changeTab = (id) => {
    if (
      id === activeTab ||
      isAnimating.current
    ) {
      return;
    }

    const cards =
      gridRef.current?.querySelectorAll(
        ".brand-card"
      );

    if (!cards?.length) {
      setActiveTab(id);
      return;
    }

    isAnimating.current = true;

    gsap.to(cards, {
      opacity: 0,
      y: 16,
      duration: 0.22,
      stagger: 0.035,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(id);
      },
    });
  };


  return (
    <section
      className="ecosystem-section"
      ref={sectionRef}
    >

      <div className="ecosystem-container">


        {/* =====================================
            SECTION LABEL
        ===================================== */}

        <div className="section-label">
          <span></span>

          <p>
            OUR ECOSYSTEM
          </p>

          <span></span>
        </div>



        {/* =====================================
            CATEGORY NAVIGATION
        ===================================== */}

        <div className="category-tabs">

          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`category-tab ${
                activeTab === category.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                changeTab(category.id)
              }
            >

              <span className="tab-number">
                {category.number}
              </span>

              <span className="tab-label">
                {category.label}
              </span>

              <span className="tab-arrow">
                ↗
              </span>

            </button>
          ))}

        </div>



        {/* =====================================
            MAIN HEADING
        ===================================== */}

        <div
          className="section-heading"
          ref={headingRef}
        >

          <div className="heading-main">

            <p className="eyebrow">
              {activeCategory?.label}
            </p>

            <h1>
              An Ecosystem of Experiences.
            </h1>

            <p className="heading-description">
              Distinct businesses. One shared vision.
            </p>

          </div>


          <div className="heading-side">

            <p>
              Discover the companies and ventures
              shaping the world of ILHAAM GROUP.
            </p>


          </div>

        </div>



        {/* =====================================
            2 × 2 CARD GRID
        ===================================== */}

        <div
          className="brand-grid"
          ref={gridRef}
        >

          {activeContent.map((item) => (

            <a
              href={item.link}
              className="brand-card"
              key={`${activeTab}-${item.name}`}
            >

              {/* IMAGE */}

              <div className="brand-image-wrap">

                <img
                  src={item.image}
                  alt={item.name}
                  className="brand-image"
                  loading="lazy"
                />

                {/* <span className="card-arrow">
                  ↗
                </span> */}

              </div>


              {/* CARD INFORMATION */}

              <div className="card-info">

                <div className="card-title-row">

                  <h2>
                    {item.name}
                  </h2>

                  <span className="card-number">
                    {item.number}
                  </span>

                </div>

                <p>
                  {item.description}
                </p>

              </div>

            </a>

          ))}

        </div>



        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="section-footer">

          <div className="footer-left">

            <span>
              PEOPLE
            </span>

            <i>/</i>

            <span>
              LIFESTYLE
            </span>

            <i>/</i>

            <span>
              PROGRESS
            </span>

          </div>

          <div className="footer-line"></div>

          <span>
            INSPIRING EXPERIENCES, BY EVERY MEANS POSSIBLE.
          </span>

        </div>


      </div>

    </section>
  );
}


export default Work;