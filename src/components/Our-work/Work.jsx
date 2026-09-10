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
    label: "OUR BRANDS",
  },
  {
    id: "ecommerce",
    number: "02",
    label: "E-COMMERCE",
  },
  {
    id: "services",
    number: "03",
    label: "SERVICES",
  },
  {
    id: "facility",
    number: "04",
    label: "FACILITY MANAGEMENT",
  },
];


/* =========================================
   CONTENT
========================================= */

const content = {
  /* ---------------------------------------
     OUR BRANDS
  --------------------------------------- */

  brands: [
    {
      number: "01",
      name: "CHIZEL",
      description: "Contemporary fashion for modern living.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=90",
      link: "#chizel",
    },

    {
      number: "02",
      name: "ALBAS",
      description: "Timeless essentials for everyday elegance.",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=90",
      link: "#albas",
    },

    {
      number: "03",
      name: "NEXA",
      description: "Bold ideas for modern living.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
      link: "#nexa",
    },

    {
      number: "04",
      name: "VYRA",
      description: "Beauty inspired by nature.",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=90",
      link: "#vyra",
    },
  ],


  /* ---------------------------------------
     E-COMMERCE
  --------------------------------------- */

  ecommerce: [
    {
      number: "01",
      name: "SHOPLY",
      description: "Everyday products, beautifully curated.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=90",
      link: "#shoply",
    },

    {
      number: "02",
      name: "MARKETX",
      description: "A marketplace built around discovery.",
      image:
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1600&q=90",
      link: "#marketx",
    },

    {
      number: "03",
      name: "TRENDHUB",
      description: "Discover what is next.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
      link: "#trendhub",
    },

    {
      number: "04",
      name: "CARTORA",
      description: "Simple commerce for everyday life.",
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=90",
      link: "#cartora",
    },
  ],


  /* ---------------------------------------
     SERVICES
  --------------------------------------- */

  services: [
    {
      number: "01",
      name: "CONSULTING",
      description: "Ideas and strategies that move businesses forward.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
      link: "#consulting",
    },

    {
      number: "02",
      name: "DIGITAL",
      description: "Digital experiences designed around people.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=90",
      link: "#digital",
    },

    {
      number: "03",
      name: "OPERATIONS",
      description: "Building systems that keep businesses moving.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90",
      link: "#operations",
    },

    {
      number: "04",
      name: "BRAND STUDIO",
      description: "Creating identities people remember.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=90",
      link: "#brand-studio",
    },
  ],


  /* ---------------------------------------
     FACILITY MANAGEMENT
  --------------------------------------- */

  facility: [
    {
      number: "01",
      name: "WORKSPACES",
      description: "Spaces designed for people and performance.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
      link: "#workspaces",
    },

    {
      number: "02",
      name: "MAINTENANCE",
      description: "Reliable care behind every space.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=90",
      link: "#maintenance",
    },

    {
      number: "03",
      name: "PROPERTY CARE",
      description: "Complete solutions for better properties.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90",
      link: "#property-care",
    },

    {
      number: "04",
      name: "SUPPORT",
      description: "People and services working behind the scenes.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=90",
      link: "#support",
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

  const activeContent = content[activeTab];

  const activeCategory = categories.find(
    (category) => category.id === activeTab
  );


  /* =========================================
     INITIAL / TAB ENTER ANIMATION
  ========================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        gridRef.current?.querySelectorAll(".brand-card");

      /* Heading */

      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        }
      );


      /* Cards */

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.985,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);


  /* =========================================
     TAB CHANGE
  ========================================= */

  const changeTab = (id) => {
    if (id === activeTab) return;

    const cards =
      gridRef.current?.querySelectorAll(".brand-card");

    if (!cards?.length) {
      setActiveTab(id);
      return;
    }

    gsap.to(cards, {
      opacity: 0,
      y: 18,
      scale: 0.985,
      duration: 0.22,
      stagger: 0.035,
      ease: "power2.in",

      onComplete: () => {
        setActiveTab(id);
      },
    });
  };


  /* =========================================
     RENDER
  ========================================= */

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

          <p>OUR ECOSYSTEM</p>

          <span></span>
        </div>


        {/* =====================================
            CATEGORY TABS
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
            HEADING
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
              Four Unique Identities.
            </h1>

            <p className="heading-description">
              Distinct brands. One shared vision.
            </p>

          </div>


          <div className="heading-side">

            <p>
              Discover the businesses and ideas
              shaping our growing ecosystem.
            </p>

            <button
              type="button"
              className="explore-all"
            >

              <span>
                EXPLORE ALL
              </span>

              <span className="explore-icon">
                ↗
              </span>

            </button>

          </div>

        </div>


        {/* =====================================
            2 × 2 GRID
        ===================================== */}

        <div
          className="brand-grid"
          ref={gridRef}
        >

          {activeContent.map((item) => (

            <a
              href={item.link}
              className="brand-card"
              key={item.number}
            >

              {/* IMAGE */}

              <div className="brand-image-wrap">

                <img
                  src={item.image}
                  alt={item.name}
                  className="brand-image"
                  loading="lazy"
                />


                {/* ARROW */}

                <span className="card-arrow">
                  ↗
                </span>

              </div>


              {/* INFORMATION */}

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

            <span>PEOPLE</span>

            <i>/</i>

            <span>PLANET</span>

            <i>/</i>

            <span>PROGRESS</span>

          </div>


          <div className="footer-line"></div>


          <span>
            A BRIGHTER TOMORROW, TOGETHER.
          </span>

        </div>

      </div>
    </section>
  );
}

export default Work;