import React from "react";
import logo from "../../../img/logo.png";

const Header = () => {
  return (
    <>
      <header className="header-three">
        <div className="header-top">
          <div className="container container-custom-three">
            <div className="d-md-flex align-items-center justify-content-between">
              <ul className="contact-list">
                <li>
                  <a href="mailto:info@website.com">
                    <i className="fal fa-envelope"></i>
                    info@website.com
                  </a>
                </li>
                <li>
                  <a href="tel:+90898787709">
                    <i className="fal fa-phone"></i>
                    +908 987 877 09
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                {/* <!-- search btton --> */}
                <div className="search">
                  <a href="#" className="search-icon" id="searchBtn">
                    <i className="fal fa-search open-icon"></i>
                    <i className="fal fa-times close-icon"></i>
                  </a>
                  <div className="search-form">
                    <form action="#">
                      <input type="text" placeholder="Search your keyword..." />
                      <button type="submit">
                        <i className="far fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <ul className="sigma_social-links justify-content-center">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="red-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="white-icon">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-area sticky-header">
          <div className="container container-custom-three">
            <div className="nav-container d-flex align-items-center justify-content-between">
              {/* <!-- Site Logo --> */}
              <div className="site-logo">
                <a href="index-2.html">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              {/* <!-- Main Menu --> */}
              <div className="nav-menu d-lg-flex align-items-center justify-content-between">
                {/* <!-- Navbar Close Icon --> */}
                <div className="navbar-close">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>

                {/* <!-- Mneu Items --> */}
                <div className="menu-items">
                  <ul>
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>

                    <li>
                      <a href="#">Pages</a>
                      <ul className="submenu">
                        <li>
                          <a href="gallery.html">Our Gallery</a>
                        </li>
                        <li>
                          <a href="services.html">Services</a>
                          <ul className="submenu">
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="locations.html">Locations</a>
                          <ul className="submenu">
                            <li>
                              <a href="locations-details.html">
                                Locations Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="packages.html">Offers</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="package-grid.html">Boarding</a>
                      <ul className="submenu">
                        <li>
                          <a href="package-grid.html">Boarding Grid</a>
                        </li>
                        <li>
                          <a href="package-list.html">Boarding List</a>
                        </li>
                        <li>
                          <a href="package-details.html">Boarding Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-left.html">Shop</a>
                      <ul className="submenu">
                        <li>
                          <a href="shop-left.html">Shop Left</a>
                        </li>
                        <li>
                          <a href="shop-left-style-2.html">Shop Left Style 2</a>
                        </li>
                        <li>
                          <a href="shop-right.html">Shop Right</a>
                        </li>
                        <li>
                          <a href="shop-right-style-2.html">
                            Shop Right Style 2
                          </a>
                        </li>
                        <li>
                          <a href="shop-detail.html">Shop Detail</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="#">Blog Details Format</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog-details-audio.html">
                                Blog Details Audio
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-video.html">
                                Blog Details Video
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-quote.html">
                                Blog Details Quote
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-link.html">
                                Blog Details Link
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-gallery.html">
                                Blog Details Gallery
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- navbar right content --> */}
              <div className="menu-right-buttons">
                {/* <!-- Log in icon --> */}
                <div className="login-btn ml-0">
                  <a href="cart.html" id="loginBtn">
                    <i className="fal fa-shopping-bag"></i>
                  </a>
                </div>

                <a
                  className="main-btn btn-filled ml-2 d-none d-md-block"
                  href="contact.html"
                  tabIndex="0"
                >
                  Book now{" "}
                </a>

                {/* <!-- Navbar Toggler --> */}
                <div className="navbar-toggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
