import React from "react";
import feature01 from "../../../img/feature/01.jpg";
import feature02 from "../../../img/feature/02.jpg";
import feature03 from "../../../img/feature/03.jpg";

const FeatureCore = () => {
  return (
    <>
      <section className="core-feature-section bg-white pt-115 pb-115">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="title-tag">
              {" "}
              <i className="flaticon-dog-food-1"></i>facilities{" "}
            </span>
            <h2>
              Our <span className="highlight">Services</span>
            </h2>
          </div>
          {/* <!-- Featre Loop --> */}
          <div className="row features-loop">
            <div className="col-lg-4 col-sm-6 order-1">
              <div
                className="feature-box with-hover-img wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-grooming"></i>
                </div>
                <h3>
                  <a href="service-details.html">Pet Grooming</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">01</span>
                <div
                  className="hover-img"
                  style={{ backgroundImage: `url(${feature01})` }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-2">
              <div className="feature-box wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="flaticon-pet-friendly"></i>
                </div>
                <h3>
                  <a href="service-details.html">Pet Rescue</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">02</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-3 order-sm-4 order-lg-3">
              <div
                className="feature-box with-hover-img wow fadeInRight"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-cat"></i>
                </div>
                <h3>
                  <a href="service-details.html">Pet Care</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">03</span>
                <div
                  className="hover-img"
                  style={{ backgroundImage: `url(${feature02})` }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-4 order-sm-3 order-lg-4">
              <div className="feature-box wow fadeInLeft" data-wow-delay=".7s">
                <div className="icon">
                  <i className="flaticon-pet-toy"></i>
                </div>
                <h3>
                  <a href="service-details.html">Onboarding</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">04</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-5">
              <div
                className="feature-box with-hover-img wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="icon">
                  <i className="flaticon-vet"></i>
                </div>
                <h3>
                  <a href="service-details.html">Pet Vet</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">05</span>
                <div
                  className="hover-img"
                  style={{ backgroundImage: `url(${feature03})` }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-6">
              <div className="feature-box wow fadeInDown" data-wow-delay="1.1s">
                <div className="icon">
                  <i className="flaticon-dog"></i>
                </div>
                <h3>
                  <a href="service-details.html">Pet Shower</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">06</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCore;
