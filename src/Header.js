import react from "react";

export default () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object" id="object_one"></div>
            <div
              className="object"
              id="object_two"
              style={{ left: "20px" }}
            ></div>
            <div
              className="object"
              id="object_three"
              style={{ left: "40px" }}
            ></div>
            <div
              className="object"
              id="object_four"
              style={{ left: "60px" }}
            ></div>
            <div
              className="object"
              id="object_five"
              style={{ left: "80px" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <header>
        <div
          id="header-sticky"
          className="header__area header__transparent header__padding"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                <div className="logo">
                  <a href="#">
                    <img src={require(`./assets/img/logo-1/logo.png`)} alt="logo" style={{width:"65%"}}/>
                  </a>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-7 d-none d-lg-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <a href="index-2.html">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index-2.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home 5</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="services.html">Services</a>
                        <ul className="submenu">
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="services-details.html">Services Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="blog.html">Blog</a>

                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-standard.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="about.html">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="portfolio.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="portfolio-details.html">
                              Portfolio Details
                            </a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="error.html">Error 404</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Sign Up</a>
                          </li>
                          <li>
                            <a href="sign-in.html">Sign In</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="header__right text-end d-flex align-items-center justify-content-end">
                  <div className="header__right-btn d-none d-md-flex align-items-center">
                    <a href="sign-in.html" className="header__btn">
                      login
                    </a>
                    <a href="sign-up.html" className="w-btn ml-45">
                      sign up
                    </a>
                  </div>
                  <div className="sidebar__menu d-lg-none">
                    <div className="sidebar-toggle-btn" id="sidebar-toggle">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="sidebar__area">
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <span>
                <i className="fal fa-times"></i>
              </span>
              <span>close</span>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="logo mb-40">
              <a href="index-2.html">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </a>
            </div>
            <div className="mobile-menu"></div>
            <div className="sidebar__info mt-350">
              <a href="#" className="w-btn w-btn-4 d-block mb-15 mt-15">
                login
              </a>
              <a href="#" className="w-btn d-block">
                sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
    </>
  );
};
