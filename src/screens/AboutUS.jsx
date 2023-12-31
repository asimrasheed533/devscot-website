import React from "react";
import aboutus from "../assets/aboutus.png";
import PricingCard from "../components/PricingCard";
export default function AboutUS() {
  return (
    <>
      <div className="contact__main__container__header__over">
        <div className="contact__mian__container">
          <div className="contact__mian__container__img">
            <img src={aboutus} alt="contact" />
          </div>
          <div className="contact__mian__container__text">
            <div className="contact__mian__container__text__heading">
              ABOUT US
            </div>
            <div className="contact__mian__container__text__sub__heading">
              Home - About Us
            </div>
          </div>
        </div>
      </div>

      <div className="provide__main__container__wraper">
        <div className="provide__main__container__wraper__heading">
          We Provide As
        </div>
        <div className="provide__main__container__card__main">
          <div className="provide__main__container__card__wraper">
            <div className="provide__main__container__card__svg">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="22.5"
                  fill="#604ED5"
                  fillOpacity="0.14"
                />
                <circle cx="22.1343" cy="22.1343" r="18.1343" fill="#604ED5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9557 17.0987L23.2764 17.25L23.689 17.4518L24.1872 17.7068L24.5628 17.905L25.1872 18.2473L25.6403 18.5058L26.1205 18.7878L26.625 19.0941C26.7115 19.1464 26.7979 19.2004 26.8862 19.2554L27.4042 19.5851L27.8907 19.9031L28.3439 20.2094L28.7637 20.5013L29.3267 20.9058L29.6574 21.149L30.2042 21.5689L30.5934 21.8797C31.1735 22.3526 31.1582 23.294 30.5546 23.7868L30.2781 24.0094L29.7718 24.4012L29.1141 24.8877L28.7303 25.1598L28.3114 25.4508L27.8565 25.7571C27.7768 25.8102 27.6969 25.863 27.6168 25.9156L27.1124 26.2417L26.8466 26.4084L26.3439 26.7183L25.8646 27.0048L25.4115 27.2678L24.9845 27.5084L24.5863 27.7264L24.0466 28.012L23.7277 28.175L23.0863 28.4885L22.8971 28.5777C22.2016 28.8966 21.4413 28.4408 21.3521 27.6606L21.2845 26.994L21.2233 26.2426L21.1944 25.7994L21.1674 25.3129L21.144 24.7877L20.6972 25.1075L20.4548 25.2778L19.9323 25.6345L19.3593 26.0129L18.7386 26.4093L18.2359 26.7183L17.5269 27.139L16.8765 27.5084L16.4783 27.7264L15.9387 28.012L15.6198 28.175L14.9783 28.4885L14.7892 28.5777C14.0937 28.8966 13.3333 28.4408 13.2441 27.6606L13.1955 27.1949L13.1396 26.5598L13.0847 25.767L13.0486 25.0751L13.0279 24.5706L13.0072 23.7544L13 23.1715V22.5562L13.0072 21.9553L13.0207 21.3869L13.0514 20.5986L13.0892 19.8932L13.1468 19.0905L13.1901 18.5986L13.2297 18.2086L13.2414 18.1023C13.3342 17.2824 14.1477 16.7752 14.8477 17.0987L15.1684 17.25L15.581 17.4518L16.0792 17.7068L16.4549 17.905L16.8639 18.1275L17.3026 18.3743L17.5323 18.5058L18.0125 18.7878L18.517 19.0941C19 19.3911 19.477 19.6978 19.9476 20.0139L20.4647 20.3671L20.9332 20.6986L21.1494 20.8545L21.1737 20.3211L21.2007 19.831L21.2476 19.1824L21.3089 18.4869L21.3494 18.1023C21.4422 17.2824 22.2557 16.7752 22.9557 17.0987Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="provide__main__container__card__heading">
              Excellent Design
            </div>
            <div className="provide__main__container__card__sub__heading">
              Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
              egestas efficitur euismod.
            </div>
          </div>
          <div className="provide__main__container__card__wraper">
            <div className="provide__main__container__card__svg">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="22.5"
                  fill="#604ED5"
                  fillOpacity="0.14"
                />
                <circle cx="22.1343" cy="22.1343" r="18.1343" fill="#604ED5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9557 17.0987L23.2764 17.25L23.689 17.4518L24.1872 17.7068L24.5628 17.905L25.1872 18.2473L25.6403 18.5058L26.1205 18.7878L26.625 19.0941C26.7115 19.1464 26.7979 19.2004 26.8862 19.2554L27.4042 19.5851L27.8907 19.9031L28.3439 20.2094L28.7637 20.5013L29.3267 20.9058L29.6574 21.149L30.2042 21.5689L30.5934 21.8797C31.1735 22.3526 31.1582 23.294 30.5546 23.7868L30.2781 24.0094L29.7718 24.4012L29.1141 24.8877L28.7303 25.1598L28.3114 25.4508L27.8565 25.7571C27.7768 25.8102 27.6969 25.863 27.6168 25.9156L27.1124 26.2417L26.8466 26.4084L26.3439 26.7183L25.8646 27.0048L25.4115 27.2678L24.9845 27.5084L24.5863 27.7264L24.0466 28.012L23.7277 28.175L23.0863 28.4885L22.8971 28.5777C22.2016 28.8966 21.4413 28.4408 21.3521 27.6606L21.2845 26.994L21.2233 26.2426L21.1944 25.7994L21.1674 25.3129L21.144 24.7877L20.6972 25.1075L20.4548 25.2778L19.9323 25.6345L19.3593 26.0129L18.7386 26.4093L18.2359 26.7183L17.5269 27.139L16.8765 27.5084L16.4783 27.7264L15.9387 28.012L15.6198 28.175L14.9783 28.4885L14.7892 28.5777C14.0937 28.8966 13.3333 28.4408 13.2441 27.6606L13.1955 27.1949L13.1396 26.5598L13.0847 25.767L13.0486 25.0751L13.0279 24.5706L13.0072 23.7544L13 23.1715V22.5562L13.0072 21.9553L13.0207 21.3869L13.0514 20.5986L13.0892 19.8932L13.1468 19.0905L13.1901 18.5986L13.2297 18.2086L13.2414 18.1023C13.3342 17.2824 14.1477 16.7752 14.8477 17.0987L15.1684 17.25L15.581 17.4518L16.0792 17.7068L16.4549 17.905L16.8639 18.1275L17.3026 18.3743L17.5323 18.5058L18.0125 18.7878L18.517 19.0941C19 19.3911 19.477 19.6978 19.9476 20.0139L20.4647 20.3671L20.9332 20.6986L21.1494 20.8545L21.1737 20.3211L21.2007 19.831L21.2476 19.1824L21.3089 18.4869L21.3494 18.1023C21.4422 17.2824 22.2557 16.7752 22.9557 17.0987Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="provide__main__container__card__heading">
              Fast Response
            </div>
            <div className="provide__main__container__card__sub__heading">
              Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
              egestas efficitur euismod.
            </div>
          </div>
          <div className="provide__main__container__card__wraper">
            <div className="provide__main__container__card__svg">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="22.5"
                  fill="#604ED5"
                  fillOpacity="0.14"
                />
                <circle cx="22.1343" cy="22.1343" r="18.1343" fill="#604ED5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9557 17.0987L23.2764 17.25L23.689 17.4518L24.1872 17.7068L24.5628 17.905L25.1872 18.2473L25.6403 18.5058L26.1205 18.7878L26.625 19.0941C26.7115 19.1464 26.7979 19.2004 26.8862 19.2554L27.4042 19.5851L27.8907 19.9031L28.3439 20.2094L28.7637 20.5013L29.3267 20.9058L29.6574 21.149L30.2042 21.5689L30.5934 21.8797C31.1735 22.3526 31.1582 23.294 30.5546 23.7868L30.2781 24.0094L29.7718 24.4012L29.1141 24.8877L28.7303 25.1598L28.3114 25.4508L27.8565 25.7571C27.7768 25.8102 27.6969 25.863 27.6168 25.9156L27.1124 26.2417L26.8466 26.4084L26.3439 26.7183L25.8646 27.0048L25.4115 27.2678L24.9845 27.5084L24.5863 27.7264L24.0466 28.012L23.7277 28.175L23.0863 28.4885L22.8971 28.5777C22.2016 28.8966 21.4413 28.4408 21.3521 27.6606L21.2845 26.994L21.2233 26.2426L21.1944 25.7994L21.1674 25.3129L21.144 24.7877L20.6972 25.1075L20.4548 25.2778L19.9323 25.6345L19.3593 26.0129L18.7386 26.4093L18.2359 26.7183L17.5269 27.139L16.8765 27.5084L16.4783 27.7264L15.9387 28.012L15.6198 28.175L14.9783 28.4885L14.7892 28.5777C14.0937 28.8966 13.3333 28.4408 13.2441 27.6606L13.1955 27.1949L13.1396 26.5598L13.0847 25.767L13.0486 25.0751L13.0279 24.5706L13.0072 23.7544L13 23.1715V22.5562L13.0072 21.9553L13.0207 21.3869L13.0514 20.5986L13.0892 19.8932L13.1468 19.0905L13.1901 18.5986L13.2297 18.2086L13.2414 18.1023C13.3342 17.2824 14.1477 16.7752 14.8477 17.0987L15.1684 17.25L15.581 17.4518L16.0792 17.7068L16.4549 17.905L16.8639 18.1275L17.3026 18.3743L17.5323 18.5058L18.0125 18.7878L18.517 19.0941C19 19.3911 19.477 19.6978 19.9476 20.0139L20.4647 20.3671L20.9332 20.6986L21.1494 20.8545L21.1737 20.3211L21.2007 19.831L21.2476 19.1824L21.3089 18.4869L21.3494 18.1023C21.4422 17.2824 22.2557 16.7752 22.9557 17.0987Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="provide__main__container__card__heading">
              Time Saving
            </div>
            <div className="provide__main__container__card__sub__heading">
              Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
              egestas efficitur euismod.
            </div>
          </div>
          <div className="provide__main__container__card__wraper">
            <div className="provide__main__container__card__svg">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="22.5"
                  fill="#604ED5"
                  fillOpacity="0.14"
                />
                <circle cx="22.1343" cy="22.1343" r="18.1343" fill="#604ED5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9557 17.0987L23.2764 17.25L23.689 17.4518L24.1872 17.7068L24.5628 17.905L25.1872 18.2473L25.6403 18.5058L26.1205 18.7878L26.625 19.0941C26.7115 19.1464 26.7979 19.2004 26.8862 19.2554L27.4042 19.5851L27.8907 19.9031L28.3439 20.2094L28.7637 20.5013L29.3267 20.9058L29.6574 21.149L30.2042 21.5689L30.5934 21.8797C31.1735 22.3526 31.1582 23.294 30.5546 23.7868L30.2781 24.0094L29.7718 24.4012L29.1141 24.8877L28.7303 25.1598L28.3114 25.4508L27.8565 25.7571C27.7768 25.8102 27.6969 25.863 27.6168 25.9156L27.1124 26.2417L26.8466 26.4084L26.3439 26.7183L25.8646 27.0048L25.4115 27.2678L24.9845 27.5084L24.5863 27.7264L24.0466 28.012L23.7277 28.175L23.0863 28.4885L22.8971 28.5777C22.2016 28.8966 21.4413 28.4408 21.3521 27.6606L21.2845 26.994L21.2233 26.2426L21.1944 25.7994L21.1674 25.3129L21.144 24.7877L20.6972 25.1075L20.4548 25.2778L19.9323 25.6345L19.3593 26.0129L18.7386 26.4093L18.2359 26.7183L17.5269 27.139L16.8765 27.5084L16.4783 27.7264L15.9387 28.012L15.6198 28.175L14.9783 28.4885L14.7892 28.5777C14.0937 28.8966 13.3333 28.4408 13.2441 27.6606L13.1955 27.1949L13.1396 26.5598L13.0847 25.767L13.0486 25.0751L13.0279 24.5706L13.0072 23.7544L13 23.1715V22.5562L13.0072 21.9553L13.0207 21.3869L13.0514 20.5986L13.0892 19.8932L13.1468 19.0905L13.1901 18.5986L13.2297 18.2086L13.2414 18.1023C13.3342 17.2824 14.1477 16.7752 14.8477 17.0987L15.1684 17.25L15.581 17.4518L16.0792 17.7068L16.4549 17.905L16.8639 18.1275L17.3026 18.3743L17.5323 18.5058L18.0125 18.7878L18.517 19.0941C19 19.3911 19.477 19.6978 19.9476 20.0139L20.4647 20.3671L20.9332 20.6986L21.1494 20.8545L21.1737 20.3211L21.2007 19.831L21.2476 19.1824L21.3089 18.4869L21.3494 18.1023C21.4422 17.2824 22.2557 16.7752 22.9557 17.0987Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="provide__main__container__card__heading">
              Personal Support
            </div>
            <div className="provide__main__container__card__sub__heading">
              Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
              egestas efficitur euismod.
            </div>
          </div>
        </div>
      </div>
      <div className="number__telling__container__over">
        <div className="number__telling__container">
          <div className="number__telling__container__text">
            <div className="number__telling__container__text__heading">
              Numbers are telling our story
            </div>
            <div className="number__telling__container__text__subheading">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </div>
          </div>
          <div className="number__telling__container__card">
            <div className="number__telling__container__card__entry">
              <div className="number__telling__container__card__entry__number">
                2M+
              </div>
              <div className="number__telling__container__card__entry__detail">
                Tickets Delivered This Month
              </div>
            </div>
            <div className="number__telling__container__card__entry__line"></div>
            <div className="number__telling__container__card__entry">
              <div className="number__telling__container__card__entry__number">
                46K+
              </div>
              <div className="number__telling__container__card__entry__detail">
                Active Customers Rate
              </div>
            </div>
            <div className="number__telling__container__card__entry__line"></div>
            <div className="number__telling__container__card__entry">
              <div className="number__telling__container__card__entry__number">
                99%
              </div>
              <div className="number__telling__container__card__entry__detail">
                Customer Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingCard />
    </>
  );
}
