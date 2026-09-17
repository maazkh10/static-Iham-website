import React from "react";
import "./ceo.css";

const CeoPage = () => {
  return (
    <div className="ceo-page-container">

      {/* =====================================================
          SECTION 1: EDITORIAL HEADER GRID
      ===================================================== */}

      <header className="ceo-header-grid">

        <div className="header-left">

          <span className="page-eyebrow">
            FOUNDER · PRESIDENT · CEO
          </span>

          <h1 className="main-editorial-title">

            <span className="oval-highlight-wrapper">
              WHO

              <svg
                className="handdrawn-oval"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M5,50 C5,20 95,20 95,50 C95,80 5,80 5,50 Z" />
              </svg>

            </span>

            {" "}IS
            <br />

            ILHAM ABBAS?

          </h1>

        </div>


        <div className="header-right">

          <span className="header-index">
            01 / 06
          </span>

          <p className="editorial-intro-text">

            An Emirati entrepreneur with a career spanning
            luxury, fashion, media and business development,
            Ilham Abbas is the Founder, President and CEO of
            ILHAAM GROUP.

            <br />
            <br />

            Since establishing the group in 2010, she has
            focused on building platforms, businesses and
            experiences across the luxury and lifestyle
            landscape.

          </p>

        </div>

      </header>


      {/* =====================================================
          SECTION 2: HERO CINEMATIC BANNER
      ===================================================== */}

      <section className="ceo-hero-banner">

        <div className="banner-image-frame">

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=85&w=2000&auto=format&fit=crop"
            alt="Ilham Abbas"
            className="hero-closeup-img"
          />

          <div className="hero-image-label">
            <span>
              ILHAM ABBAS
            </span>

            <span>
              FOUNDER / CEO
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 3: QUICK METADATA ROW
      ===================================================== */}

      <section className="metadata-row-grid">

        <div className="meta-col">

          <span className="meta-label">
            BASED IN
          </span>

          <p className="meta-value">
            DUBAI / UAE
          </p>

        </div>


        <div className="meta-col">

          <span className="meta-label">
            FOUNDER
          </span>

          <p className="meta-value">
            ILHAM ABBAS
          </p>

        </div>


        <div className="meta-col">

          <span className="meta-label">
            ROLE
          </span>

          <p className="meta-value">
            PRESIDENT & CEO
          </p>

        </div>

      </section>


      <hr className="editorial-divider" />


      {/* =====================================================
          SECTION 4: DETAILED PROFILE BLOCK
      ===================================================== */}

      <section className="profile-detail-grid">

        {/* ---------------------------------------------------
            LEFT COLUMN
        --------------------------------------------------- */}

        <div className="profile-left-col">

          <div className="polaroid-outer-frame">

            <div className="polaroid-img-container">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=85&w=1200&auto=format&fit=crop"
                alt="Ilham Abbas portrait"
              />

            </div>


            <div className="polaroid-caption">

              <div>

                <span className="portrait-label">
                  PORTRAIT
                </span>

                <p>
                  ILHAM ABBAS
                  <br />
                  DUBAI, UAE
                </p>

              </div>

              {/* <div className="giant-editorial-date">
                2010
              </div> */}

            </div>

          </div>

        </div>


        {/* ---------------------------------------------------
            RIGHT COLUMN
        --------------------------------------------------- */}

        <div className="profile-right-col">

          <span className="profile-kicker">
            FOUNDER · PRESIDENT · CEO
          </span>

          <h2 className="profile-sub-heading">
            THE
            <br />
            FOUNDER
          </h2>


          <div className="bio-paragraphs">

            <p className="bio-text">

              Before founding ILHAAM GROUP, Ilham Abbas built
              a multidisciplinary career across communications,
              media, fashion and business development in Dubai.

              Her earlier work included corporate communications
              for Dubai Shopping Festival and Dubai Summer
              Surprises, as well as fashion and beauty projects
              at Al Bayan.

            </p>


            <p className="bio-text">

              She later held senior responsibilities at TECOM
              Investments across media, technology, education
              and sustainability.

            </p>


            <p className="bio-text">

              In 2010, she founded ILHAAM GROUP and launched
              ELILHAAM, later extending her presence into the
              wider regional fashion landscape through
              leadership involvement with the Arab Fashion
              Council and Arab Fashion Week.

            </p>

          </div>


          {/* -------------------------------------------------
              FOUNDER CTA
          ------------------------------------------------- */}



          {/* -------------------------------------------------
              YEAR
          ------------------------------------------------- */}

          <div className="profile-year-block">

            <span className="year-small-line"></span>

            <div className="profile-year">
              2010
            </div>

            <div className="year-info">

              <span>
                ILHAAM GROUP
              </span>

              <span>
                FOUNDED IN DUBAI
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 5: FOOTER QUOTE + COLLAGE
      ===================================================== */}

      <section className="ceo-footer-collage-grid">

        {/* ---------------------------------------------------
            LEFT: MILESTONE + QUOTE
        --------------------------------------------------- */}

        <div className="collage-left">

          <div className="milestone-block">

            <span className="milestone-label">
              MILESTONE
            </span>

            <div className="milestone-year">
              2010
            </div>

            <p className="milestone-description">
              A new chapter in luxury,
              <br />
              lifestyle and entrepreneurship.
            </p>

          </div>


          <div className="editorial-quote-block">

            <span className="editorial-quote-mark">
              “
            </span>

            <p className="quote-text">

              Success is no easy
              <br />
              achievement and it's
              <br />
              an ongoing process.

            </p>


            <div className="quote-author">

              <span></span>

              ILHAM ABBAS

            </div>

          </div>


          <div className="collage-author-footer">

            <div className="author-name-block">

              <span className="author-title">
                FOUNDER, PRESIDENT & CEO
              </span>

              <h4 className="author-name">
                ILHAAM GROUP
              </h4>

            </div>


            <div className="starburst-container">

              <svg
                className="starburst-svg"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50,0 L55,35 L90,15 L65,45 L100,50 L65,55 L90,85 L55,65 L50,100 L45,65 L10,85 L35,55 L0,50 L35,45 L10,15 L45,35 Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </svg>

            </div>

          </div>

        </div>


        {/* ---------------------------------------------------
            RIGHT: IMAGE COLLAGE
        --------------------------------------------------- */}

        <div className="collage-right">

          <div className="duo-photos-wrapper">

            <div className="collage-photo-frame frame-left">

              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=85&w=1000&auto=format&fit=crop"
                alt="Ilham Abbas speaking"
              />

              <div className="collage-photo-label">
                THE FUTURE
                <br />
                OF LUXURY
              </div>

            </div>


            <div className="collage-photo-frame frame-right">

              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=85&w=1000&auto=format&fit=crop"
                alt="Ilham Abbas at fashion event"
              />

              <div className="collage-photo-label right">
                DUBAI
                <br />
                FASHION
                <br />
                WEEK
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PAGE FOOTER
      ===================================================== */}

      <footer className="ceo-page-footer">

        <span>
          ILHAAM GROUP
        </span>

        <span>
          PEOPLE · BRANDS · EXPERIENCES
        </span>

        <span>
          DUBAI / UAE · 2010
        </span>

      </footer>

    </div>
  );
};

export default CeoPage;