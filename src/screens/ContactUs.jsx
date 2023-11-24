import React from "react";
import contactus from "../assets/contactus.png";
export default function ContactUs() {
  return (
    <>
      <div className="contact__main__container__header__over">
        <div className="contact__mian__container">
          <div className="contact__mian__container__img">
            <img src={contactus} alt="contact" />
          </div>
          <div className="contact__mian__container__text">
            <div className="contact__mian__container__text__heading">
              CONTACT
            </div>
            <div className="contact__mian__container__text__sub__heading">
              Home - Contacts
            </div>
          </div>
        </div>
      </div>
      <div className="contact__card__row__wraper">
        <div className="contact__card__row__wraper__col__left">
          <div className="contact__card__row__wraper__col__form">
            <div className="contact__card__col__form__text">
              <div className="contact__card__col__form__heading">
                <span>Drop</span> Us a line
              </div>
              <div className="contact__card__col__form__sub__heading">
                Your email address will not be published. Required fields are
                marked*
              </div>
            </div>
            <div className="contact__card__row__wraper__col__form__input">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="contact__card__row__wraper__col__form__input">
              <input type="text" placeholder="Website" />
            </div>
            <div className="contact__card__row__wraper__col__form__input">
              <input type="text" placeholder="Your Comment" />
            </div>
            <div className="contact__card__row__wraper__col__form__btn">
              <div className="contact__card__row__wraper__col__form__btn__svg">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="32"
                    fill="url(#paint0_linear_687_2258)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_687_2258"
                      x1="7.03562"
                      y1="3.04182"
                      x2="68.4599"
                      y2="12.0776"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6554DC" />
                      <stop offset="1" stop-color="#4733B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="contact__card__row__wraper__col__form__btn__text">
                Get in Touch
              </div>
            </div>
          </div>
        </div>
        <div className="contact__card__row__wraper__col__right">
          <div className="contact__card__col__right__title">OUR CONTACT</div>
          <div className="contact__card__col__right__heading">
            Let’s Start Working Together Get in Touch With Devscot
          </div>
          <div className="contact__card__col__right__subheading">
            Get in touch to discuss your employee. give us a call, drop us an
            email.
          </div>
          <div className="contact__card__col__right__line"></div>
          <div className="contact__card__col__right__address">
            <div className="contact__card__col__right__address__svg">svg</div>
            <div className="contact__card__col__right__address__text">
              Mr John Smith. 132, My Street, Kingston, New York 12401.
            </div>
          </div>
          <div className="contact__card__col__right__address">
            <div className="contact__card__col__right__address__svg">svg</div>
            <div className="contact__card__col__right__address__text">
              +92 304 344 653
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
