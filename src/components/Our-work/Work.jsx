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
      name: "ELILHAAM",
      description:
        "Luxury fashion online since 2010, with experts presenting creations from leading global designers.",
      image:
        "/images/events&experiences1.png",
      link: "#elilhaam",
    },

    {
      number: "02",
      name: "ELBAS",
      description:
        "Refined occasionwear created with an atelier-inspired point of view.",
      image:
     "/images/events&experiences2.png",
       link: "#elbas",
    },

    {
      number: "03",
      name: "CHIZELL",
      description:
        "Contemporary fashion designed for modern lifestyles.",
      image:
   
    "/images/events&experiences3.png",
       link: "#chizell",
    },

    {
      number: "04",
      name: "GLOBAL RETAIL",
      description:
        "A global retail ecosystem connecting luxury brands with discerning customers.",
      image:
     "/images/events&experiences4.png",
        link: "#global-retail",
    },
  ],


  services: [
    {
      number: "01",
      name: "EL EVENTS",
      description:
        "Creating distinctive events and experiences with a refined approach.",
      image:
       "/images/travel&hospitality.png",
       link: "#events",
    },

    {
      number: "02",
      name: "EL TRANSPORT",
      description:
        "Seamless transportation and journeys through carefully selected partners.",
      image:
       "/images/travel&hospitality2.png", link: "#transport",
    },

    {
      number: "03",
      name: "EL HOSPITALITY",
      description:
        "Exceptional hospitality experiences across extraordinary destinations.",
     image:
       "/images/travel&hospitality3.png",  link: "#hospitality",
    },

    {
      number: "04",
      name: "EL INVESTMENTS",
      description:
        "Strategic investment and growth opportunities across the group.",
       image:
       "/images/travel&hospitality4.png",link: "#investments",
    },
  ],


  partnerships: [
    {
      number: "01",
      name: "EL PRIVI",
      description:
        "Exclusive access to carefully selected offers, experiences and opportunities.",
      image:
    
      "/images/INVESTMENTS & CONSULTING.png",
      link: "#el-privi",
    },

    {
      number: "02",
      name: "GLOBAL PARTNERS",
      description:
        "Long-standing relationships with leading luxury and lifestyle brands.",
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
      name: "BUSINESS CONSULTING",
      description:
        "Helping investors and entrepreneurs develop market-aware ventures.",
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

                <span className="card-arrow">
                  ↗
                </span>

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