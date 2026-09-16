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
    id: "partnerships",
    number: "04",
    label: "PARTNERSHIPS",
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
      name: "ELILHAAM",
      description:
        "One of the original Ilhaam Group ventures, launched in 2010 as an online luxury fashion portal for discerning women worldwide.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=90",
      link: "#elilhaam",
    },

    {
      number: "02",
      name: "EL MARKAT",
      description:
        "A luxury fashion and lifestyle destination extending the Elilhaam experience into men's fashion, accessories and prestigious luxury goods.",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=90",
      link: "#el-markat",
    },

    {
      number: "03",
      name: "EL BAZAAR",
      description:
        "An online marketplace connecting shoppers and brands across fashion, beauty and homeware for men, women and children.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
      link: "#el-bazaar",
    },

    {
      number: "04",
      name: "EL EVENTS & MARKETING",
      description:
        "The group's full-service event management, communications and experiential marketing brand, serving clients in the UAE and beyond.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=90",
      link: "#el-events-marketing",
    },
  ],

  /* ---------------------------------------
     E-COMMERCE
  --------------------------------------- */

  ecommerce: [
    {
      number: "01",
      name: "ELILHAAM",
      description:
        "Luxury fashion online since 2010, with experts in Dubai and Italy presenting new creations from leading global fashion designers.",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=90",
      link: "#elilhaam",
    },

    {
      number: "02",
      name: "EL MARKAT",
      description:
        "High-end men's fashion, accessories and luxury goods created for fashion-conscious customers who appreciate a refined lifestyle.",
      image:
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1600&q=90",
      link: "#el-markat",
    },

    {
      number: "03",
      name: "EL BAZAAR",
      description:
        "A simple, accessible marketplace bringing fashion, beauty and homeware together for customers and brands across categories.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=90",
      link: "#el-bazaar",
    },

    {
      number: "04",
      name: "GLOBAL RETAIL",
      description:
        "Retail is a cornerstone of the group's luxury-oriented mission, with its ecommerce businesses designed for a global audience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=90",
      link: "#global-retail",
    },
  ],

  /* ---------------------------------------
     SERVICES
  --------------------------------------- */

  services: [
    {
      number: "01",
      name: "EL EVENTS & MARKETING",
      description:
        "Full-service event management, communications and experiential marketing, with an integrated service model for events and projects.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=90",
      link: "#events-marketing",
    },

    {
      number: "02",
      name: "EL TRANSPORTATION",
      description:
        "Luxury transportation planning and seamless journeys through relationships with leading global transportation operators.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=90",
      link: "#transportation",
    },

    {
      number: "03",
      name: "EL INVESTMENTS",
      description:
        "Informed financial advice and growth strategies supporting the parent group, sister companies and their competitiveness.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
      link: "#investments",
    },

    {
      number: "04",
      name: "TRAVEL & HOSPITALITY",
      description:
        "Tailored luxury travel and hospitality experiences supported by relationships with leading hotels, resorts, attractions and providers.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
      link: "#travel-hospitality",
    },
  ],

  /* ---------------------------------------
     PARTNERSHIPS
  --------------------------------------- */

  partnerships: [
    {
      number: "01",
      name: "EL PRIVI",
      description:
        "The group's loyalty programme offering members exclusive access to one-of-a-kind discounts, offers and opportunities around the world.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
      link: "#el-privi",
    },

    {
      number: "02",
      name: "GLOBAL PARTNERSHIPS",
      description:
        "Long-standing relationships with leading luxury, lifestyle, travel and hospitality brands strengthen the group's offering.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
      link: "#global-partnerships",
    },

    {
      number: "03",
      name: "STRATEGIC SUPPORT",
      description:
        "Ilhaam Group companies support one another through carefully considered partnerships, helping each business serve its clients more effectively.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=90",
      link: "#strategic-support",
    },

    {
      number: "04",
      name: "BUSINESS CONSULTING",
      description:
        "The group also applies its expertise to consulting projects that help investors and entrepreneurs develop profitable, market-aware lifestyle and luxury ventures.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90",
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

  const activeContent = content[activeTab];

  const activeCategory = categories.find(
    (category) => category.id === activeTab
  );

  /* =========================================
     INITIAL / TAB ENTER ANIMATION
  ========================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".brand-card");

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

    const cards = gridRef.current?.querySelectorAll(".brand-card");

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
    <section className="ecosystem-section" ref={sectionRef}>
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
        ===================================== */

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`category-tab ${
                activeTab === category.id ? "active" : ""
              }`}
              onClick={() => changeTab(category.id)}
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
        ===================================== */

        <div className="section-heading" ref={headingRef}>
          <div className="heading-main">
            <p className="eyebrow">
              {activeCategory?.label}
            </p>

            <h1>
              Distinct Identities.
            </h1>

            <p className="heading-description">
              Different businesses. One shared vision.
            </p>
          </div>

          <div className="heading-side">
            <p>
              Explore the businesses, services and partnerships that
              form the Ilhaam Group ecosystem.
            </p>

            <button
              type="button"
              className="explore-all"
            >
              <span>EXPLORE ALL</span>

              <span className="explore-icon">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* =====================================
            2 × 2 GRID
        ===================================== */

        <div className="brand-grid" ref={gridRef}>
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
            <span>LIFESTYLE</span>
            <i>/</i>
            <span>PROGRESS</span>
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
