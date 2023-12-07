import { GridContainer } from "../components/gridContainer";
import React, { useEffect, useMemo } from "react";
import appimg from "../assets/appimg.png";
import aboutball from "../assets/aboutball.png";
import mobile from "../assets/mobile.png";
import web from "../assets/web.png";
import uiux from "../assets/uiux.png";
import { Fade } from "react-reveal";
import Projectss from "../components/Projects";
import Solution from "../components/Solution";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
export default function Index() {
  const [swiperSlides, setSwiperSlides] = React.useState(5);
  const data = [appimg, uiux, appimg, web];
  const [index, setIndex] = React.useState(0);
  useMemo(() => {
    setTimeout(() => {
      setIndex(index + 1 < data.length ? index + 1 : 0);
    }, 4000);
  }, [index]);
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
      <div className="main__header__container__overlay__main">
        <div className="main__header__container">
          <div className="main__header__container__text">
            <div className="main__header__container__text__heading">
              BUILDING APPS THAT REDEFINE
            </div>
            <div className="main__header__container__text__heading__overlay">
              POSSIBILITLES
            </div>
            <div className="main__header__container__text__btn">
              <button class="btn"> Check out our work</button>
            </div>
          </div>
          <div className="main__header__container__imgs">
            <Fade spy={index} duration={2000} appear>
              <img
                className="main__header__container__img__view"
                src={data.filter((_item, i) => i === index).map((item) => item)}
                alt="app"
              />
            </Fade>
          </div>
        </div>
      </div>
      <div className="about__contaner">
        <div className="about__contaner__overlay">
          <img
            src={aboutball}
            alt="about"
            className="about__contaner__overlay__img"
          />
        </div>
        <div className="about__contaner__text">
          <div className="about__contaner__text__heading__wraper">
            <div className="about__contaner__text__heading">ABOUT</div>
            <div className="sevrive__svg">US</div>
          </div>

          <div className="about__contaner__text__sub__heading">
            Back in 2018, we understood our passion for digital products and
            decided to bring even more to this world.That’s how it all started.
            Five years in the making, we are a software house of over 25+
            employees now. Our goal is to create products that users love.
            <b> Devscot</b> combines the freedom of personality and the synergy
            of an Studio. Striving to bring the best to clients, we unite
            forces, cooperate closely, and devote our hearts and souls to our
            work, and the outcomes speak for themselves.
          </div>
        </div>
      </div>
      <div className="services__container__main">
        <div className="services__container__main__wraper">
          <div className="services__container__heading">
            OUR <div className="sevrive__svg">Solution</div>
          </div>
          <div className="services__container__btn">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">View all</span>
            </button>
          </div>
        </div>

        {/* <div className="services__container__card__wraper">
          <Swiper
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            slidesPerView={swiperSlides}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <ServicesCard cardimg={web} text="WEB DEVELOPMENT" />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard cardimg={mobile} text="MOBILE APP DEVELOMENT" />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard cardimg={uiux} text="UI/UX DESIGNING" />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard cardimg={web} text="Startup Services" />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard cardimg={mobile} text="APP DEVELOMENT" />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard cardimg={uiux} text="UI/UX" />
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
      <Solution />
      <GridContainer />
      {/* <Projectss /> */}
    </>
  );
}

function ServicesCard({ cardimg, text }) {
  return (
    <div className="services__container__card">
      <div className="services__container__card__img">
        <img src={cardimg} alt="our services" />
      </div>
      <div className="services__container__card__text">{text}</div>
    </div>
  );
}
