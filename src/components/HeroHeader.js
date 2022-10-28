import React from "react";
import Link from "next/link";
import Header from "./UI/Header";
import MobileMenu from "./UI/MobileMenu";

const HeroHeader = () => {
  return (
    <div className="hero-header">
    <Header />
    <div className="hero">
      <div className="hero__image">
        <div className="hero__info">
          <span className="hero__subtitle">
            Learn Faster Now. Study Smarter.
          </span>
          <h1 className="hero__title">Anki Learning Software</h1>
          <span className="hero__p">
            Study with Anki spaced repetition platform and boost learning for
            the rest of your life.
          </span>
          <div className="hero__info-links">
            <Link href="/test">
              <a>Try for free!</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// Header.propTypes = propTypes;
// Header.defaultProps = defaultProps;
// #endregion

export default HeroHeader;
