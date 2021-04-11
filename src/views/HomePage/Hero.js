import React from "react";
import BG_GIRL from "../../assets/images/girl.png";
import Form from "./Form";

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
      <div class="wrap">
        <section class="top">
          <div class="top__container container">
            <div class="top__text">
              <h1 class="top__title">
                <div data-editable data-name="top__title">
                  <p>INVEST IN THE BEST:</p>
                </div>
                <div class="top__company">
                  <div data-editable data-name="top__company">
                    <p>AMAZON</p>
                  </div>
                </div>
              </h1>
              <h2>
                <div class="top__subtitle en">
                  <div data-editable data-name="top__subtitle">
                    <p>Invest Now</p>
                  </div>
                </div>
              </h2>
            </div>
            <div class="top__girl" data-editable data-name="top__girl">
              <img
                src="https://alcest-investlite.com/static/funnels/amz_info_4620_2_es_lat/images/girl.png?v=45525"
                alt=""
              />
            </div>
          </div>

          <div
            class="top__bg top__bg_desktop"
            data-editable
            data-name="top__bg_desktop"
          >
            <div
              class="top__bg-img-box"
              data-ce-tag="bkgimg"
              style={{
                backgroundImage:
                  "url(https://alcest-investlite.com/static/funnels/amz_info_4620_2_es_lat/images/top-bg.jpg?v=45525)",
              }}
            ></div>
          </div>
          <div
            class="top__bg top__bg_main-mobile"
            data-editable
            data-name="top__bg_main-mobile"
          >
            <div
              class="top__bg-img-box"
              data-ce-tag="bkgimg"
              style={{
                backgroundImage:
                  "url(https://alcest-investlite.com/static/funnels/amz_info_4620_2_es_lat/images/bg-top-mobile.jpg?v=45525)",
              }}
            ></div>
          </div>
        </section>
        <Form />
      </div>
    </>
  );
};

export default Hero;
