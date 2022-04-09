import React from "react";

const BookText = () => {
  return (
    <>
      <section className="text-block pt-115 pb-115">
        <div className="container">
          <div
            className="row align-items-center justify-content-center wow fadeInLeft"
            data-wow-delay=".3s"
          >
            <div className="col-lg-7">
              <div className="text-img text-center text-lg-left mb-small">
                <img src="assets/img/text-block/02.png" alt="Image" />
              </div>
            </div>
            <div
              className="col-lg-5 col-md-8 col-sm-10 wow fadeInRight"
              data-wow-delay=".5s"
            >
              <div className="block-text">
                <div className="section-title mb-20">
                  <span className="title-tag">
                    <i className="flaticon-dog-food-1"></i>Take a tour
                  </span>
                  <h2>
                    Watch Your Pet Play{" "}
                    <span className="highlight">Around.</span>
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="about.html" className="main-btn btn-filled mt-40">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookText;
