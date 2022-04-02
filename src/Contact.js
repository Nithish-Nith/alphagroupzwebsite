import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default () => {
  return (
    <>
      <Header />
      <>
        <section
          class="page__title-area page__title-height d-flex align-items-center fix p-relative z-index-1"
          data-background="assets/img/page-title/page-title.jpg"
        >
          <div class="page__title-shape">
            <img class="page-title-dot-4" src="assets/img/page-title/dot-4.png" alt="" />
            <img class="page-title-dot" src="assets/img/page-title/dot.png" alt="" />
            <img class="page-title-dot-2" src="assets/img/page-title/dot-2.png" alt="" />
            <img class="page-title-dot-3" src="assets/img/page-title/dot-3.png" alt="" />
            <img class="page-title-plus" src="assets/img/page-title/plus.png" alt="" />
            <img class="page-title-triangle" src="assets/img/page-title/triangle.png" alt="" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xxl-12">
                <div class="page__title-wrapper text-center">
                  <h3>Contact </h3>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact__area pb-150 p-relative z-index-1">
          <div class="container">
            <div class="row">
              <div class="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div class="contact__wrapper white-bg mt--70 p-relative z-index-1 wow fadeInUp" data-wow-delay=".3s">
                  <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="contact__info pr-80">
                        <h3 class="contact__title">Let's talk</h3>

                        <div class="contact__details">
                          <ul>
                            <li>
                              <h4>Our Location</h4>
                              <p>12 Mirpur DOHS, Cantonment, avenue6, road 6, Area 6300, Bedevs </p>
                            </li>
                            <li>
                              <h4>Email Adress</h4>
                              <p>
                                <a href="https://themepure.net/cdn-cgi/l/email-protection#4a393f3a3a25383e2e2f39210a2d272b232664292527">
                                  <span class="__cf_email__" data-cfemail="7a090f0a0a15080e1e1f09113a1d171b131654191517">
                                    [email&#160;protected]
                                  </span>
                                </a>
                              </p>
                              <p>
                                <a href="https://themepure.net/cdn-cgi/l/email-protection#0c65626a637e616d6563624c6b616d6560226f6361">
                                  <span class="__cf_email__" data-cfemail="dab3b4bcb5a8b7bbb3b5b49abdb7bbb3b6f4b9b5b7">
                                    [email&#160;protected]
                                  </span>
                                </a>
                              </p>
                            </li>
                            <li>
                              <h4>Hotline Number</h4>
                              <p>
                                <a href="tel:+(046)-320-474-458">+ (046) 320 474 458</a>
                              </p>
                              <p>
                                <a href="tel:+(123)-213-147-897">+ (123) 213 147 897</a>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="contact__form">
                        <form action="#">
                          <input type="text" placeholder="Name" />
                          <input type="email" placeholder="Email" />
                          <input type="subject" placeholder="Subject" />
                          <textarea placeholder="Message"></textarea>
                          <button type="submit" class="w-btn w-btn-blue-5 w-btn-6 w-btn-14">
                            Send Massage
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact__support p-relative pb-110">
          <div class="contact__shape">
            <img src="assets/img/contact/shape.png" alt="" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div class="contact__item-inner hover__active mb-30">
                  <div class="contact__item text-center transition-3 white-bg">
                    <div class="contact__icon d-flex justify-content-center align-items-end">
                      <img src="assets/img/contact/call.png" alt="" />
                    </div>
                    <div class="contact__content">
                      <h3 class="contact__title-2">
                        <a href="#">Quick Answers</a>
                      </h3>
                      <p>Absolutely bladdered he blimey guvnor agency. </p>
                      <a href="#" class="link-btn">
                        Read More <i class="arrow_right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div class="contact__item-inner hover__active mb-30">
                  <div class="contact__item text-center transition-3 white-bg">
                    <div class="contact__icon d-flex justify-content-center align-items-end">
                      <img src="assets/img/contact/message.png" alt="" />
                    </div>
                    <div class="contact__content">
                      <h3 class="contact__title-2">
                        <a href="#">Customer Support</a>
                      </h3>
                      <p>Absolutely bladdered he blimey guvnor agency. </p>
                      <a href="#" class="link-btn">
                        Help & Support<i class="arrow_right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div class="contact__item-inner hover__active mb-30">
                  <div class="contact__item text-center transition-3 white-bg">
                    <div class="contact__icon d-flex justify-content-center align-items-end">
                      <img src="assets/img/contact/social.png" alt="" />
                    </div>
                    <div class="contact__content">
                      <h3 class="contact__title-2">
                        <a href="#">We are Social</a>
                      </h3>
                      <p>Absolutely bladdered he blimey guvnor agency. </p>
                      <a href="#" class="link-btn">
                        Join our Community<i class="arrow_right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact__map">
          <div class="container-fluid p-0">
            <div class="row g-0">
              <div class="col-xxl-12">
                <div class="contact__map wow fadeInUp" data-wow-delay=".3s">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4800810528923!2d90.36797221544877!3d23.837080434546706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a3366b005%3A0x901b07016468944c!2z4Kau4Ka_4Kaw4Kaq4KeB4KawIOCmoeCmvyzgppMs4KaP4KaH4KaaLOCmj-CmuCwg4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1615723408957!5m2!1sbn!2sbd"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
    </>
  );
};
