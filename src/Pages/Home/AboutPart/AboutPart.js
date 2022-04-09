import React from "react";

const AboutPart = () => {
  return (
    <>
      <section className="about-section pt-115 pb-115">
        <div className="container">
          <div className="down-arrow-wrap text-center">
            <a href="#" className="down-arrow">
              <i className="fal fa-arrow-down"></i>
            </a>
          </div>
          <div className="section-title about-title text-center mb-20">
            <span className="title-tag">
              <i className="flaticon-dog-food-1"></i>Pet Daycare
            </span>
            <h2>
              Situated In Prime Position At The Foot Of The Slopes Of{" "}
              <span className="highlight">Courchevel Moriond.</span>
            </h2>
          </div>
          <ul className="about-features masonry-layout">
            <li className=" wow fadeInUp" data-wow-delay=".3s">
              <a href="service-details.html">
                <i className="flaticon-dog"></i>
                <i className="hover-icon flaticon-dog"></i>
                <span className="title">breakfast</span>
              </a>
            </li>
            <li className=" wow fadeInUp" data-wow-delay=".5s">
              <a href="service-details.html">
                <i className="flaticon-dog-food-1"></i>
                <i className="hover-icon flaticon-dog-food-1"></i>
                <span className="title">Airport Pickup</span>
              </a>
            </li>
            <li className=" wow fadeInUp" data-wow-delay=".7s">
              <a href="service-details.html">
                <i className="flaticon-house"></i>
                <i className="hover-icon flaticon-house"></i>
                <span className="title">city guide</span>
              </a>
            </li>
            <li className=" wow fadeInUp" data-wow-delay=".9s">
              <a href="service-details.html">
                <i className="flaticon-pet-shop"></i>
                <i className="hover-icon flaticon-pet-shop"></i>
                <span className="title">bbq party</span>
              </a>
            </li>
            <li className=" wow fadeInUp" data-wow-delay="1.1s">
              <a href="service-details.html">
                <i className="flaticon-dog-food"></i>
                <i className="hover-icon flaticon-dog-food"></i>
                <span className="title">dog room</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutPart;
