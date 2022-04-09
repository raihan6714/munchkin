import React from "react";
import banner01 from "../../../img/banner/01.jpg";
import banner02 from "../../../img/banner/02.jpg";
const Banner = () => {
  return (
    <>
      <section className="banner-area banner-style-one">
        <div className="container container-custom-two">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="banner-content">
                <span className="promo-tag wow fadeInDown" data-wow-delay=".3s">
                  Veterinary care reimagined experience
                </span>
                <h1 className="title wow fadeInLeft" data-wow-delay=".5s">
                  {" "}
                  A Place <br /> To Eat & Play
                </h1>
                <ul>
                  <li>
                    <a
                      className="main-btn btn-filled wow fadeInUp"
                      data-wow-delay=".7s"
                      href="contact.html"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-btn btn-border wow fadeInUp"
                      data-wow-delay=".9s"
                      href="about.html"
                    >
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <div className="banner-thumb d-none d-md-block">
                <div className="hero-slider-one">
                  <div className="single-thumb">
                    <img src={banner01} alt="images" />
                  </div>
                  <div className="single-thumb">
                    <img src={banner02} alt="images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
