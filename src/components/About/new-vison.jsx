import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./newviss.css";

const NewOurVision = () => {
  const visionContainerRef = useRef(null);
  const visionTitleRef = useRef(null);
  const visionImageRef = useRef(null);

  const valuesData = [
    {
      id: 1,
      label: 'STORYTELLING',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do diamon tempor incididunt, at allouen doore meg mamen.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      label: 'COLLABORATION',
      desc: 'Lorem ipsundee, dilarem consectetu xnithsang elit, sed do diamon tempor naxcidunt, at alioedn doors meg mamen.',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      label: 'HONESTY',
      desc: 'Lorem leaumsive, dflarem customizx wnthvsang elit, sed do eiuuoniod tempor rexcidunt, at atloadn doors meg masrien.',
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      label: 'ARTISTIC',
      desc: 'Lorem looumioa, dilarem consectetu xntlllsang elit, sed do oluoniod tempor rexcidum, at allouen doore meg mssnon.',
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const [activeImage, setActiveImage] = useState(valuesData[0].img);
  const imageRef = useRef(null);

  // High-end parallax reveal for the wide panoramic frame
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(visionImageRef.current,
        { scale: 1.15, clipPath: 'polygon(5% 0%, 95% 0%, 95% 100%, 5% 100%)' },
        { 
          scale: 1, 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
          duration: 1.8, 
          ease: 'power4.inOut' 
        }
      );
      gsap.fromTo(visionTitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.4 }
      );
    }, visionContainerRef);
    return () => ctx.revert();
  }, []);

  const handleValueHover = (imgUrl) => {
    if (activeImage === imgUrl) return;
    gsap.to(imageRef.current, {
      opacity: 0.2,
      scale: 0.97,
      duration: 0.15,
      ease: 'power2.out',
      onComplete: () => {
        setActiveImage(imgUrl);
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });
  };

  return (
    <div className="about-page-wrapper">
      
      {/* 1. CINEMATIC PANORAMIC VISION SECTION */}
      <section className="luxury-section vision-cinematic-hero" ref={visionContainerRef}>
        <div className="vision-header-block">
          <span className="vision-archival-tag">01 / BRAND ESSENCE</span>
          <h2 className="vision-editorial-title" ref={visionTitleRef}>
            Forging New Paradigms <br />In Digital Luxury.
          </h2>
        </div>

        <div className="panoramic-vision-wrapper">
          <div className="panoramic-frame">
            <img 
              ref={visionImageRef}
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop" 
              alt="Brand Vision Canvas" 
              className="panoramic-img"
            />
          </div>
        </div>

        <div className="vision-manifesto-columns">
          <div className="manifesto-left">
            <h4 className="manifesto-sub">THE VISION STATEMENT</h4>
          </div>
          <div className="manifesto-right">
            <p className="manifesto-text-lead">
              We believe true luxury isn't merely seen—it is felt through seamless 
              sensory interactions, uncompromising geometry, and absolute architectural minimalism.
            </p>
            <p className="manifesto-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR VISION SECTION */}
      <section className="luxury-section vision-split">
        {/* <div className="split-left vision-img-col">
          <div className="image-frame vision-frame">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop" 
              alt="Vision Editorial" 
            />
          </div>
        </div> */}
        <div className="split-right vision-text-col">
          <h2 className="editorial-heading">
            SOLUTIONS THAT HELP LUXURY BRANDS CONNECT WITH THEIR TARGET AUDIENCE.
          </h2>
          <div className="editorial-body-wrapper">
            <p className="editorial-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="editorial-paragraph">
              Proin sed libero enim sed faucibus turpis in. At ultrices mi tempus 
              imperdiet nulla. Magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
          <a href="#explore" className="luxury-pill-btn">explore &rarr;</a>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="luxury-section values-grid-container">
        <div className="values-left-header">
          <h2 className="editorial-heading-small">CORE VALUES</h2>
        </div>
        
        <div className="values-right-list-container">
          {valuesData.map((item) => (
            <div 
              key={item.id} 
              className="value-row"
              onMouseEnter={() => handleValueHover(item.img)}
            >
              <div className="value-label">{item.label}</div>
              <div className="value-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="values-far-right-img">
          <div className="image-frame values-frame">
            <img 
              ref={imageRef}
              src={activeImage} 
              alt="Values Side Editorial" 
              className="gsap-value-img"
            />
          </div>
        </div>
      </section>

      {/* 4. OUR MISSION SECTION */}
      <section className="luxury-section mission-layout">
        <div className="mission-left-img">
          <div className="image-frame mission-frame">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
              alt="Mission Concept" 
            />
          </div>
        </div>
        <div className="mission-right-content">
          <blockquote className="mission-quote">
            "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA."
          </blockquote>
          <span className="mission-author">explore</span>
          <a href="#explore-mission" className="luxury-pill-btn">explore &rarr;</a>
        </div>
      </section>

    </div>
  );
};

export default NewOurVision;