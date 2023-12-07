import React, { useEffect } from "react";
import mealprj1 from "../assets/mealprj1.png";
import maelogo from "../assets/maelogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MealAbouttext from "../components/MealAbouttext";
export default function meal() {
  const [swiperSlides, setSwiperSlides] = React.useState(5);
  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(3.8);
    } else if (window.innerWidth > 1200) {
      setSwiperSlides(3.3);
    } else if (window.innerWidth > 900) {
      setSwiperSlides(3);
    } else if (window.innerWidth > 730) {
      setSwiperSlides(2.5);
    } else if (window.innerWidth > 600) {
      setSwiperSlides(2.3);
    } else {
      setSwiperSlides(1.3);
    }
  };
  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [swiperSlides]);
  return (
    <>
      <div className="meal__text__header__container">
        <div className="meal__text__header__container__left">
          <div className="meal__text__header__container__left__heading">
            UNITED MEAL
          </div>
          <div className="meal__text__header__container__left__subheading">
            Our client is a visionary company that aims to simplify
            decentralized finance. With features offering convenience,
            user-friendly crypto design, and multi-currency support, their
            product — the Infinity wallet — seamlessly integrates into users’
            lives, catering to all their financial needs.
          </div>
          <div className="meal__text__header__container__left__btn">
            <button style={{ margin: "0px" }} class="btn">
              Contact us
            </button>
          </div>
        </div>
        <div className="meal__text__header__container__right">
          <div className="meal__text__header__container__right__logo__title">
            CLIENT
          </div>
          <div className="meal__text__header__container__right__logo">
            <img src={maelogo} alt="logo" />
          </div>
          <div className="meal__right__text__services">
            SERVICES WE PROVIDED
          </div>
          <div className="meal__right__text__services__title">UX/UI Design</div>
          <div className="meal__right__text__services__title">
            Graphic Design
          </div>
        </div>
      </div>
      <div className="project__header__imags__slider">
        <Swiper
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          slidesPerView={swiperSlides}
        >
          <SwiperSlide>
            <div className="project__header__imags__slider__card">
              <img src={mealprj1} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project__header__imags__slider__card">
              <img src={mealprj1} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project__header__imags__slider__card">
              <img src={mealprj1} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project__header__imags__slider__card">
              <img src={mealprj1} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project__header__imags__slider__card">
              <img src={mealprj1} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project__header__imags__slider__card">
              <img src={mealprj1} alt="image" />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="project__header__imags__slider__card">
          <img src={mealprj1} alt="image" />
        </div> */}
      </div>
      <div className="meal__text__header__container__bg"></div>
      <div className="meal__about__container">
        <div className="meal__about__container__heading">ABOUT THE PROJECT</div>
        <MealAbouttext
          heading="The client"
          text="Our client is a visionary company that aims to simplify decentralized finance. With features offering convenience, user-friendly crypto design, and multi-currency support, their product — the Infinity wallet — seamlessly integrates into users’ lives, catering to all their financial needs."
        />
        <MealAbouttext
          heading="Challenge"
          text="The diverse and expansive functionality of the Infinity decentralized mobile app posed a complex challenge to our team. The Web 3 design demanded our attention across numerous screens to capture meaningful user interactions. Other hurdles included reinforcing security measures, offering versatile wallet control options, and enabling Infinity to replace multiple smaller applications."
        />
        <MealAbouttext
          heading="Our solution"
          text="Our goal evolved around the Infinity wallet’s consistency. We aimed to work out styles, fonts, and colors and compile a cohesive set of icons and elements for a seamless user experience across all pages. Our experts also focused on enhancing user-friendliness, reducing visual clutter, facilitating onboarding for beginners, and delivering all DeFi mobile app features properly."
        />
      </div>
    </>
  );
}
