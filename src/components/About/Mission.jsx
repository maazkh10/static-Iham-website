import "./Mission.css";


// import "./Mission.css";
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Mission = () => {
  // 1. Timeline Data Array
  const timelineData = [
    { year: '2000', title: 'The Genesis', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop' },
    { year: '2006', title: 'Breaking Paradigms', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop' },
    { year: '2010', title: 'Digital Expansion', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop' },
    { year: '2014', title: 'The Luxury Shift', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop' },
    { year: '2018', title: 'Global Footprint', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop' },
    { year: '2022', title: 'Next-Gen Ecosystems', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop' },
    { year: '2026', title: 'Modern Frontiers', desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Animation Refs
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const trackLineRef = useRef(null);

  // Timeline Transition Handler
  const handleTimelineChange = (index) => {
    if (index === activeIndex) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    
    // Smoothly push old slide out
    tl.to([imageRef.current, contentRef.current], {
      opacity: 0,
      y: index > activeIndex ? 20 : -20,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex(index);
      }
    });

    // Bring new slide in elegantly
    tl.to([imageRef.current, contentRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1
    });
  };

  // Sync Progress Line Fill Width
  useEffect(() => {
    const progressPercentage = (activeIndex / (timelineData.length - 1)) * 100;
    gsap.to(trackLineRef.current, {
      width: `${progressPercentage}%`,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, [activeIndex]);

  return (
    <section className="mission-timeline-container">
      <div className="timeline-header">
        <span className="timeline-sub-tag">OUR MISSION & CHRONOLOGY</span>
        <h2 className="timeline-title">
          Forging New Paradigms <br />Through Time.
        </h2>
      </div>

      {/* Interactive Horizontal Progress Axis */}
      <div className="timeline-axis">
        <div className="axis-base-line">
          <div className="axis-progress-line" ref={trackLineRef}></div>
        </div>
        <div className="axis-nodes">
          {timelineData.map((item, index) => (
            <button 
              key={item.year}
              className={`axis-node-btn ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => handleTimelineChange(index)}
            >
              <span className="node-dot"></span>
              <span className="node-year">{item.year}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Media Canvas & Narrative Text Output Grid */}
      <div className="timeline-display-board">
        <div className="timeline-image-wrapper">
          <div className="image-frame-aspect">
            <img 
              ref={imageRef}
              src={timelineData[activeIndex].img} 
              alt={`${timelineData[activeIndex].year} Chapter Canvas`} 
            />
          </div>
        </div>

        <div className="timeline-text-wrapper" ref={contentRef}>
          <div className="text-meta-block">
            <span className="text-index">[{timelineData[activeIndex].year}]</span>
            <h3 className="text-heading">{timelineData[activeIndex].title}</h3>
          </div>
          <p className="text-description">
            {timelineData[activeIndex].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;