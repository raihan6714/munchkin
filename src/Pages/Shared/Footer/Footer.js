import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-two">
        <div className="footer-widget-area pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 order-1">
                {/* <!-- Site Info Widget --> */}
                <div className="widget site-info-widget mb-50">
                  <div className="footer-logo mb-50">
                    <img src="assets/img/footer-logo.png" alt="Logo" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed doing eius mod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitat ion ullamco laboris nisi.
                  </p>
                  <ul className="sigma_social-links mt-40">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="red-icon">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="white-icon">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="blue-icon">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 order-3 order-lg-2">
                {/* <!-- Nav Widget --> */}
                <div className="widget nav-widget mb-50">
                  <div>
                    <h4 className="widget-title">Services.</h4>
                    <ul>
                      <li>
                        <Link to="/service-details.html">
                          Pet Spa & Nailbar
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-details.html">Pet Food</Link>
                      </li>
                      <li>
                        <Link to="/service-details.html">Adoption</Link>
                      </li>
                      <li>
                        <Link to="/service-details.html">Pet Marrige</Link>
                      </li>
                      <li>
                        <Link to="/services.html">Services</Link>
                      </li>
                      <li>
                        <Link to="/service-details.html">Pet Grooming</Link>
                      </li>
                      <li>
                        <Link to="/service-details.html">Pet Packages</Link>
                      </li>
                      <li>
                        <Link to="/service-details.html">Pet Training</Link>
                      </li>
                      <li>
                        <Link to="/service-details.html">Pet Medics</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                {/* <!-- Contact Widget --> */}
                <div className="widget contact-widget mb-50">
                  <h4 className="widget-title">Contact Us.</h4>
                  <div className="contact-lists">
                    <div className="contact-box">
                      <div className="icon">
                        <i className="flaticon-call-1"></i>
                      </div>
                      <div className="desc">
                        <h6 className="title">Phone Number</h6>
                        +987 876 765 76 577
                      </div>
                    </div>
                    <div className="contact-box">
                      <div className="icon">
                        <i className="flaticon-email"></i>
                      </div>
                      <div className="desc">
                        <h6 className="title">Email Address</h6>
                        <Link to="#">info@webmail.com</Link>
                      </div>
                    </div>
                    <div className="contact-box">
                      <div className="icon">
                        <i className="flaticon-pin"></i>
                      </div>
                      <div className="desc">
                        <h6 className="title">Office Address</h6>
                        14/A, Muchkin City, NYC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area pt-30 pb-30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-5 order-2 order-md-1">
                <p className="copyright-text copyright-two">
                  Copyright By@<Link to="#">Munchkin</Link> - 2022
                </p>
              </div>
              <div className="col-lg-6 col-md-7 order-1 order-md-2">
                <div className="footer-menu text-center text-md-right">
                  <ul>
                    <li>
                      <Link to="#">Terms of use</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Environmental Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
