import React from "react";
import BG_GIRL from "../../assets/images/girl.png";

const Hero = () => {
  return (
    <>
      <div
        className="gc-header"
        data-domain="invlt"
        data-lang="en"
        data-theme="dark"
      >
        <div class="gc-header__inner">
          <a rel="noopener noreferrer" target="_blank" class="gc-header__logo">
            <img
              src="https://alcest-investlite.com/static/common/images/header-logos/header-invlt-logo.svg?v=45525"
              class="gc-header__logo-img"
            />
          </a>
        </div>
      </div>
      <div className="top-bg">
        <div className="bg-girl">
          <img src={BG_GIRL} alt="Girl" />
        </div>
        <div className="hero-title">
          <div>INVEST IN THE BEST:</div>
          <div>AMAZON</div>
          <div>INVEST NOW</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
