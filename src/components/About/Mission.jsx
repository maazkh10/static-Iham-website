import "./Mission.css";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

/* =========================================
   VERIFIED ILHAAM GROUP CONTENT
========================================= */

const timelineData = [
  {
    year: "2010",
    title: "The Group Begins",
    desc:
      "Ilhaam Group was established to manage and coordinate a diverse portfolio of lifestyle and luxury businesses, with a shared commitment to creating inspiring experiences for clients worldwide.",
    img:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2010",
    title: "Elilhaam Launches",
    desc:
      "Elilhaam launched as one of the original Ilhaam Group ventures. The online luxury fashion portal grew around a sophisticated, discerning global audience, with expertise across offices in Dubai and Italy.",
    img:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2010",
    title: "Events & Marketing",
    desc:
      "El Events & Marketing opened its doors as a full-service event management, communications and experiential marketing agency serving clients in the United Arab Emirates and beyond.",
    img:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "TODAY",
    title: "A Wider Ecosystem",
    desc:
      "Today, the group spans online fashion retail, travel, events management, experiential marketing, transportation, investment and consulting. Its companies provide strategic support to one another while pursuing a shared mission.",
    img:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "TODAY",
    title: "Luxury Travel & Hospitality",
    desc:
      "The group offers tailored luxury travel and hospitality services through relationships with leading hotels, resorts, attractions and transportation providers around the world.",
    img:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "TODAY",
    title: "Investment & Consulting",
    desc:
      "El Investments provides informed financial advice and growth strategies, while the group also supports investors and entrepreneurs developing profitable, market-aware lifestyle and luxury ventures.",
    img:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "TODAY",
    title: "Partnerships & El Privi",
    desc:
      "Relationships with leading luxury, lifestyle, travel and hospitality brands support the wider group. El Privi provides members with exclusive access to discounts, offers and opportunities around the world.",
    img:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================================
   COMPONENT
========================================= */

const Mission = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const trackLineRef = useRef(null);

  /* =========================================
     TIMELINE TRANSITION
  ========================================= */

  const handleTimelineChange = (index) => {
    if (index === activeIndex) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });

    tl.to([imageRef.current, contentRef.current], {
      opacity: 0,
      y: index > activeIndex ? 20 : -20,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex(index);
      },
    });

    tl.to([imageRef.current, contentRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
    });
  };

  /* =========================================
     PROGRESS LINE
  ========================================= */

  useEffect(() => {
    const progressPercentage =
      (activeIndex / (timelineData.length - 1)) * 100;

    gsap.to(trackLineRef.current, {
      width: `${progressPercentage}%`,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeIndex]);

  const activeItem = timelineData[activeIndex];

  return (
    <section className="mission-timeline-container">
      <div className="timeline-header">
        <span className="timeline-sub-tag">
          OUR MISSION & CHRONOLOGY
        </span>

        <h2 className="timeline-title">
          Creating Inspiring Experiences
          <br />
          Through Every Chapter.
        </h2>
      </div>

      {/* =====================================
          INTERACTIVE HORIZONTAL AXIS
      ===================================== */}

      <div className="timeline-axis">
        <div className="axis-base-line">
          <div
            className="axis-progress-line"
            ref={trackLineRef}
          ></div>
        </div>

        <div className="axis-nodes">
          {timelineData.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              className={`axis-node-btn ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => handleTimelineChange(index)}
              aria-label={`View ${item.title}`}
            >
              <span className="node-dot"></span>

              <span className="node-year">
                {item.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* =====================================
          MEDIA + NARRATIVE
      ===================================== */}

      <div className="timeline-display-board">
        <div className="timeline-image-wrapper">
          <div className="image-frame-aspect">
            <img
              ref={imageRef}
              src={activeItem.img}
              alt={`${activeItem.title} - Ilhaam Group`}
            />
          </div>
        </div>

        <div
          className="timeline-text-wrapper"
          ref={contentRef}
        >
          <div className="text-meta-block">
            <span className="text-index">
              [{activeItem.year}]
            </span>

            <h3 className="text-heading">
              {activeItem.title}
            </h3>
          </div>

          <p className="text-description">
            {activeItem.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
