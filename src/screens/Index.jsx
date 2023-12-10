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
      <div className="industries__main__container">
        <div className="industries__main__container__overlay">
          <div className="industries__main__container__heading">
            <span>Industries</span>we have served
          </div>
          <div className="industries__main__container__wraper">
            <div className="industries__main__container__wraper__upper">
              <div className="industries__main__container__wraper__card">
                <div className="industries__main__container__wraper__card__contant">
                  <div className="industries__main__container__wraper__card__left">
                    <div className="industries__main__container__wraper__card__left__svg">
                      <svg
                        width="69"
                        height="61"
                        viewBox="0 0 69 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.20703 0H20.0609V56.6352H8.20703V0Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M28.5723 15.502H40.4261V56.6359H28.5723V15.502Z"
                          fill="#0FAADF"
                        />
                        <path
                          d="M40.8125 31.0119L44.4598 35.875L48.8164 31.5184L43.9533 27.8711L40.8125 31.0119Z"
                          fill="#3A556A"
                        />
                        <path
                          d="M50.4364 29.8963L42.8378 37.495C42.5338 37.7989 42.5338 38.4068 42.9391 38.8121C43.3443 39.2173 43.9522 39.2173 44.2562 38.9134L51.8548 31.3148C52.1587 31.0108 52.1587 30.4029 51.7535 29.9977C51.3482 29.5924 50.7403 29.5924 50.4364 29.8963Z"
                          fill="#64798A"
                        />
                        <path
                          d="M65.329 44.789L57.7303 52.3876C57.4264 52.6916 57.4264 53.2995 57.8316 53.7047C58.2369 54.11 58.8448 54.11 59.1487 53.806L66.7474 46.2074C67.0513 45.9035 67.0513 45.2956 66.6461 44.8903C66.2408 44.5864 65.6329 44.485 65.329 44.789Z"
                          fill="#64798A"
                        />
                        <path
                          d="M44.2344 38.9238L51.8988 31.2594L65.4368 44.7975L57.7724 52.4619L44.2344 38.9238Z"
                          fill="#64798A"
                        />
                        <path
                          d="M18.319 5.37764C11.227 12.4697 11.227 23.9183 18.319 31.0104C25.4111 38.1024 36.8597 38.1024 43.9518 31.0104C51.0438 23.9183 51.0438 12.4697 43.9518 5.37764C36.8597 -1.71442 25.3098 -1.71442 18.319 5.37764ZM40.3044 27.363C35.2387 32.4288 26.9308 32.4288 21.8651 27.363C16.7993 22.2973 16.7993 13.9894 21.8651 8.92367C26.9308 3.85791 35.2387 3.85791 40.3044 8.92367C45.3702 13.9894 45.3702 22.2973 40.3044 27.363Z"
                          fill="#64798A"
                        />
                        <path
                          d="M0 56.7363H68.9956V60.6876H0V56.7363Z"
                          fill="#64798A"
                        />
                      </svg>
                    </div>
                    <div className="industries__main__container__wraper__card__left__title">
                      Research
                    </div>
                  </div>
                  <div className="industries__main__container__wraper__card__right">
                    <div className="industries__main__container__wraper__card__right__text">
                      Make impovements
                    </div>
                    <div className="industries__main__container__wraper__card__right__text">
                      Explore opportunities
                    </div>
                    <div className="industries__main__container__wraper__card__right__text">
                      Define competitors
                    </div>
                  </div>
                </div>
              </div>
              <div className="industries__main__container__wraper__card">
                <div className="industries__main__container__wraper__card__contant">
                  <div className="industries__main__container__wraper__card__left">
                    <div className="industries__main__container__wraper__card__left__svg">
                      <svg
                        width="58"
                        height="58"
                        viewBox="0 0 58 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 14.8631V35H6.36039C7.13784 35 7.67779 34.2336 7.43247 33.492C7.27092 33.0035 7.19418 32.4763 7.22014 31.9274C7.32534 29.7043 9.14879 27.9078 11.3619 27.8441C13.7786 27.7745 15.7595 29.7232 15.7595 32.1369C15.7595 32.6178 15.6807 33.0802 15.5356 33.5118C15.2894 34.2438 15.8459 34.9999 16.6145 34.9999H22.8798V28.7016C22.8798 27.92 23.6421 27.3772 24.3799 27.6239C24.8658 27.7862 25.3903 27.8634 25.9363 27.8373C28.1478 27.7315 29.9348 25.8985 29.9982 23.6738C30.0675 21.2444 28.1289 19.2531 25.7279 19.2531C25.2495 19.2531 24.7895 19.3323 24.3602 19.4781C23.632 19.7257 22.8799 19.1662 22.8799 18.3936V12H2.84815C1.27512 12.0001 0 13.2819 0 14.8631Z"
                          fill="#0FAADF"
                        />
                        <path
                          d="M7.25808 32.0636C7.23199 32.6096 7.30902 33.1341 7.47153 33.62C7.71814 34.3577 7.17535 35.1202 6.39381 35.1202H0V55.1518C0 56.7249 1.28182 58 2.86312 58H23V51.6396C23 50.8621 22.2336 50.3222 21.492 50.5675C21.0035 50.7291 20.4763 50.8058 19.9274 50.7798C17.7043 50.6746 15.9078 48.8512 15.8441 46.6381C15.7745 44.2214 17.7232 42.2405 20.1369 42.2405C20.6178 42.2405 21.0802 42.3192 21.5118 42.4643C22.2438 42.7106 22.9999 42.1541 22.9999 41.3855V35.1202H16.7017C15.929 35.1202 15.3696 34.368 15.6171 33.6399C15.7631 33.2104 15.8422 32.7505 15.8422 32.2721C15.8422 29.8709 13.851 27.9325 11.4215 28.0018C9.19688 28.0651 7.36384 29.8521 7.25808 32.0636Z"
                          fill="#506EF0"
                        />
                        <path
                          d="M36.508 7.43247C36.9965 7.27092 37.5239 7.19418 38.0726 7.22014C40.2957 7.32534 42.0922 9.14879 42.1559 11.3619C42.2255 13.7786 40.2768 15.7595 37.8631 15.7595C37.3822 15.7595 36.9198 15.6807 36.4882 15.5356C35.7562 15.2894 35.0001 15.8459 35.0001 16.6145V22.8798H41.2984C42.08 22.8798 42.6228 23.6421 42.3761 24.3799C42.2138 24.8658 42.1366 25.3904 42.1627 25.9363C42.2685 28.1478 44.1015 29.9348 46.3262 29.9982C48.7556 30.0675 50.7469 28.1289 50.7469 25.7279C50.7469 25.2495 50.6677 24.7895 50.5219 24.3602C50.2743 23.632 50.8338 22.8799 51.6064 22.8799H58V2.84826C58 1.27512 56.7181 0 55.1369 0H35V6.36039C35 7.13784 35.7664 7.6779 36.508 7.43247Z"
                          fill="#648CFF"
                        />
                        <path
                          d="M19.9497 50.7419C17.7427 50.636 15.9594 48.8029 15.8962 46.5782C15.8272 44.1489 17.7618 42.1577 20.1577 42.1577C20.6351 42.1577 21.0942 42.2369 21.5228 42.3828C22.2494 42.6303 23 42.0708 23 41.2982V35L1 57.1615C1.51429 57.6795 2.22486 58 3.00975 58H23V51.6062C23 50.8247 22.2392 50.2819 21.503 50.5285C21.0181 50.691 20.4945 50.768 19.9497 50.7419Z"
                          fill="#648CFF"
                        />
                        <path
                          d="M57.1616 1L35 22.9202H41.2984C42.0799 22.9202 42.6227 23.6783 42.3761 24.4118C42.2136 24.895 42.1366 25.4166 42.1627 25.9595C42.2685 28.1584 44.1017 29.9353 46.3264 29.9982C48.7557 30.0669 50.7469 28.1395 50.7469 25.7521C50.7469 25.2764 50.6677 24.819 50.5218 24.3921C50.2743 23.6681 50.8337 22.9202 51.6064 22.9202H58V3.00246C58.0002 2.22041 57.6798 1.51242 57.1616 1Z"
                          fill="#506EF0"
                        />
                        <path
                          d="M30.2454 38.0726C30.2195 37.5238 30.2961 36.9965 30.4578 36.508C30.7031 35.7665 30.1631 35 29.3857 35H23.1203V41.2983C23.1203 42.0799 22.3579 42.6227 21.6201 42.3761C21.1342 42.2137 20.6097 42.1365 20.0638 42.1626C17.8522 42.2684 16.0652 44.1014 16.0018 46.3262C15.9325 48.7556 17.8711 50.7469 20.2721 50.7469C20.7505 50.7469 21.2105 50.6677 21.6399 50.5218C22.368 50.2743 23.1202 50.8337 23.1202 51.6064V58H43.1518C44.7248 58 46 56.7182 46 55.1369V35H39.6398C38.8712 35 38.3147 35.7561 38.5609 36.4881C38.7061 36.9198 38.7848 37.3821 38.7848 37.863C38.7848 40.2768 36.804 42.2254 34.3872 42.1558C32.1741 42.0922 30.3506 40.2957 30.2454 38.0726Z"
                          fill="#0FAADF"
                        />
                      </svg>
                    </div>
                    <div className="industries__main__container__wraper__card__left__title">
                      Research
                    </div>
                  </div>
                  <div className="industries__main__container__wraper__card__right">
                    <div className="industries__main__container__wraper__card__right__text">
                      Make impovements
                    </div>
                    <div className="industries__main__container__wraper__card__right__text">
                      Explore opportunities
                    </div>
                    <div className="industries__main__container__wraper__card__right__text">
                      Define competitors
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="industries__main__container__wraper__lower">
              <div className="industries__main__container__wraper__lower__card__over">
                <div className="industries__main__container__wraper__lower__card">
                  <div className="industries__main__container__wraper__lower__card__heading">
                    Brand Identity
                  </div>
                  <div className="industries__main__container__wraper__lower__card__contant">
                    <div className="industries__main__container__wraper__lower__card__contant__svg">
                      <svg
                        width="52"
                        height="65"
                        viewBox="0 0 52 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.9788 55.291L28.7246 55.6633L34.469 61.0354L28.9788 55.291Z"
                          fill="#CACACA"
                        />
                        <path
                          d="M0.684589 24.3367L9.49028 15.7498C10.4031 14.8542 11.9065 14.8542 12.8193 15.7498L50.2972 52.1518C51.2099 53.0473 51.2099 54.4697 50.2972 55.3652L41.4915 63.9521C40.5787 64.8477 39.0753 64.8477 38.1625 63.9521L0.684589 27.5501C-0.228196 26.6546 -0.228196 25.2322 0.684589 24.3367Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M9.16412 15.7988L7.17969 17.7809L30.1574 53.1376L9.16412 15.7988Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M50.2928 55.5101C51.2127 54.6284 51.2127 53.2282 50.2928 52.3465L37.4693 40.2109L25.1328 51.6723L38.0645 63.9635C38.9844 64.8451 40.4994 64.8451 41.4192 63.9635L50.2928 55.5101Z"
                          fill="#E0E0E0"
                        />
                        <path
                          d="M9.79098 12.9838L20.6951 6.77353C21.8231 6.13658 23.2734 6.50813 23.918 7.6228L50.668 53.4834C51.3125 54.598 50.9365 56.0312 49.8085 56.6681L38.9044 62.8784C37.7764 63.5154 36.3261 63.1438 35.6815 62.0292L8.93155 16.1686C8.28697 15.0539 8.66297 13.6208 9.79098 12.9838Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M28.1762 48.8281L28.0039 49.0463L30.1581 53.1364L28.1762 48.8281Z"
                          fill="#D1D1D1"
                        />
                        <path
                          d="M38.9134 62.8777L49.8092 56.6399C50.9364 56.0001 51.3121 54.5606 50.668 53.441L41.3287 37.3398L26.5684 46.4034L35.6393 62.0247C36.337 63.1443 37.7862 63.5175 38.9134 62.8777Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M21.7306 7.74327C21.6251 7.31648 21.6251 6.88969 21.7306 6.46289C21.414 6.51624 21.1501 6.62294 20.8335 6.78299L18.6699 8.06337L33.5511 51.8098L21.7306 7.74327ZM38.6699 59.5988H38.7754V59.5455L38.6699 59.5988Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M38.6715 59.5999H38.7775V59.5467L38.6715 59.5999ZM31.356 43.8027L30.8789 44.1219L33.5294 51.8343L31.356 43.8027Z"
                          fill="#DBDBDB"
                        />
                        <path
                          d="M23.2254 4.71718L35.1787 1.51534C36.3952 1.19515 37.6646 1.88889 38.0348 3.11626L51.6277 53.4918C51.945 54.7192 51.2046 55.9999 49.9881 56.3201L38.0348 59.5219C36.8183 59.8421 35.5489 59.1484 35.1787 57.921L21.6387 7.54546C21.2685 6.31809 22.0089 5.03736 23.2254 4.71718Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M37.9469 0H48.9394C50.4794 0 51.7008 1.22335 51.7008 2.76583V54.6784C51.7008 56.2209 50.4794 57.4442 48.9394 57.4442H37.9469C36.4069 57.4442 35.1855 56.2209 35.1855 54.6784V2.76583C35.1855 1.22335 36.4069 0 37.9469 0Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M30.8789 41.5287L35.2917 57.9128C35.6069 59.1324 36.8677 59.8747 38.1285 59.5035L50.0009 56.3221C51.2092 56.004 51.9446 54.7314 51.6294 53.5119L47.2167 37.3398L30.8789 41.5287Z"
                          fill="#E6E6E6"
                        />
                        <path
                          d="M35.6036 2.57029C35.6036 2.13875 35.7233 1.76115 35.9028 1.4375C35.7831 1.4375 35.6036 1.4375 35.4839 1.49144L32.3125 2.24664L35.6036 45.2387V2.57029Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M35.1855 37.3398V54.7013C35.1855 56.2316 36.4069 57.4453 37.9469 57.4453H48.9394C50.4794 57.4453 51.7008 56.2316 51.7008 54.7013V37.3398H35.1855Z"
                          fill="#EFEFEF"
                        />
                        <path
                          d="M38.0605 40.2109V42.8346H47.2157V40.2109H38.0605ZM38.0605 53.8539H41.8303V52.2797H38.0605V53.8539ZM38.0605 50.1808H41.8303V48.6066H38.0605V50.1808ZM38.0605 46.5077H41.8303V44.9335H38.0605V46.5077ZM47.485 51.2303C48.2389 51.2303 48.8313 51.8075 48.8313 52.5421C48.8313 53.2767 48.2389 53.8539 47.485 53.8539C46.731 53.8539 46.1386 53.2767 46.1386 52.5421C46.1386 51.8075 46.731 51.2303 47.485 51.2303Z"
                          fill="#BFBFBF"
                        />
                      </svg>
                    </div>
                    <div className="industries__main__container__wraper__lower__card__contant__text">
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="industries__main__container__wraper__lower__card__over">
                <div className="industries__main__container__wraper__lower__card">
                  <div className="industries__main__container__wraper__lower__card__heading">
                    Brand Identity
                  </div>
                  <div className="industries__main__container__wraper__lower__card__contant">
                    <div className="industries__main__container__wraper__lower__card__contant__svg">
                      <svg
                        width="52"
                        height="65"
                        viewBox="0 0 52 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.9788 55.291L28.7246 55.6633L34.469 61.0354L28.9788 55.291Z"
                          fill="#CACACA"
                        />
                        <path
                          d="M0.684589 24.3367L9.49028 15.7498C10.4031 14.8542 11.9065 14.8542 12.8193 15.7498L50.2972 52.1518C51.2099 53.0473 51.2099 54.4697 50.2972 55.3652L41.4915 63.9521C40.5787 64.8477 39.0753 64.8477 38.1625 63.9521L0.684589 27.5501C-0.228196 26.6546 -0.228196 25.2322 0.684589 24.3367Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M9.16412 15.7988L7.17969 17.7809L30.1574 53.1376L9.16412 15.7988Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M50.2928 55.5101C51.2127 54.6284 51.2127 53.2282 50.2928 52.3465L37.4693 40.2109L25.1328 51.6723L38.0645 63.9635C38.9844 64.8451 40.4994 64.8451 41.4192 63.9635L50.2928 55.5101Z"
                          fill="#E0E0E0"
                        />
                        <path
                          d="M9.79098 12.9838L20.6951 6.77353C21.8231 6.13658 23.2734 6.50813 23.918 7.6228L50.668 53.4834C51.3125 54.598 50.9365 56.0312 49.8085 56.6681L38.9044 62.8784C37.7764 63.5154 36.3261 63.1438 35.6815 62.0292L8.93155 16.1686C8.28697 15.0539 8.66297 13.6208 9.79098 12.9838Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M28.1762 48.8281L28.0039 49.0463L30.1581 53.1364L28.1762 48.8281Z"
                          fill="#D1D1D1"
                        />
                        <path
                          d="M38.9134 62.8777L49.8092 56.6399C50.9364 56.0001 51.3121 54.5606 50.668 53.441L41.3287 37.3398L26.5684 46.4034L35.6393 62.0247C36.337 63.1443 37.7862 63.5175 38.9134 62.8777Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M21.7306 7.74327C21.6251 7.31648 21.6251 6.88969 21.7306 6.46289C21.414 6.51624 21.1501 6.62294 20.8335 6.78299L18.6699 8.06337L33.5511 51.8098L21.7306 7.74327ZM38.6699 59.5988H38.7754V59.5455L38.6699 59.5988Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M38.6715 59.5999H38.7775V59.5467L38.6715 59.5999ZM31.356 43.8027L30.8789 44.1219L33.5294 51.8343L31.356 43.8027Z"
                          fill="#DBDBDB"
                        />
                        <path
                          d="M23.2254 4.71718L35.1787 1.51534C36.3952 1.19515 37.6646 1.88889 38.0348 3.11626L51.6277 53.4918C51.945 54.7192 51.2046 55.9999 49.9881 56.3201L38.0348 59.5219C36.8183 59.8421 35.5489 59.1484 35.1787 57.921L21.6387 7.54546C21.2685 6.31809 22.0089 5.03736 23.2254 4.71718Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M37.9469 0H48.9394C50.4794 0 51.7008 1.22335 51.7008 2.76583V54.6784C51.7008 56.2209 50.4794 57.4442 48.9394 57.4442H37.9469C36.4069 57.4442 35.1855 56.2209 35.1855 54.6784V2.76583C35.1855 1.22335 36.4069 0 37.9469 0Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M30.8789 41.5287L35.2917 57.9128C35.6069 59.1324 36.8677 59.8747 38.1285 59.5035L50.0009 56.3221C51.2092 56.004 51.9446 54.7314 51.6294 53.5119L47.2167 37.3398L30.8789 41.5287Z"
                          fill="#E6E6E6"
                        />
                        <path
                          d="M35.6036 2.57029C35.6036 2.13875 35.7233 1.76115 35.9028 1.4375C35.7831 1.4375 35.6036 1.4375 35.4839 1.49144L32.3125 2.24664L35.6036 45.2387V2.57029Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M35.1855 37.3398V54.7013C35.1855 56.2316 36.4069 57.4453 37.9469 57.4453H48.9394C50.4794 57.4453 51.7008 56.2316 51.7008 54.7013V37.3398H35.1855Z"
                          fill="#EFEFEF"
                        />
                        <path
                          d="M38.0605 40.2109V42.8346H47.2157V40.2109H38.0605ZM38.0605 53.8539H41.8303V52.2797H38.0605V53.8539ZM38.0605 50.1808H41.8303V48.6066H38.0605V50.1808ZM38.0605 46.5077H41.8303V44.9335H38.0605V46.5077ZM47.485 51.2303C48.2389 51.2303 48.8313 51.8075 48.8313 52.5421C48.8313 53.2767 48.2389 53.8539 47.485 53.8539C46.731 53.8539 46.1386 53.2767 46.1386 52.5421C46.1386 51.8075 46.731 51.2303 47.485 51.2303Z"
                          fill="#BFBFBF"
                        />
                      </svg>
                    </div>
                    <div className="industries__main__container__wraper__lower__card__contant__text">
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="industries__main__container__wraper__lower__card__over">
                <div className="industries__main__container__wraper__lower__card">
                  <div className="industries__main__container__wraper__lower__card__heading">
                    Brand Identity
                  </div>
                  <div className="industries__main__container__wraper__lower__card__contant">
                    <div className="industries__main__container__wraper__lower__card__contant__svg">
                      <svg
                        width="52"
                        height="65"
                        viewBox="0 0 52 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.9788 55.291L28.7246 55.6633L34.469 61.0354L28.9788 55.291Z"
                          fill="#CACACA"
                        />
                        <path
                          d="M0.684589 24.3367L9.49028 15.7498C10.4031 14.8542 11.9065 14.8542 12.8193 15.7498L50.2972 52.1518C51.2099 53.0473 51.2099 54.4697 50.2972 55.3652L41.4915 63.9521C40.5787 64.8477 39.0753 64.8477 38.1625 63.9521L0.684589 27.5501C-0.228196 26.6546 -0.228196 25.2322 0.684589 24.3367Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M9.16412 15.7988L7.17969 17.7809L30.1574 53.1376L9.16412 15.7988Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M50.2928 55.5101C51.2127 54.6284 51.2127 53.2282 50.2928 52.3465L37.4693 40.2109L25.1328 51.6723L38.0645 63.9635C38.9844 64.8451 40.4994 64.8451 41.4192 63.9635L50.2928 55.5101Z"
                          fill="#E0E0E0"
                        />
                        <path
                          d="M9.79098 12.9838L20.6951 6.77353C21.8231 6.13658 23.2734 6.50813 23.918 7.6228L50.668 53.4834C51.3125 54.598 50.9365 56.0312 49.8085 56.6681L38.9044 62.8784C37.7764 63.5154 36.3261 63.1438 35.6815 62.0292L8.93155 16.1686C8.28697 15.0539 8.66297 13.6208 9.79098 12.9838Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M28.1762 48.8281L28.0039 49.0463L30.1581 53.1364L28.1762 48.8281Z"
                          fill="#D1D1D1"
                        />
                        <path
                          d="M38.9134 62.8777L49.8092 56.6399C50.9364 56.0001 51.3121 54.5606 50.668 53.441L41.3287 37.3398L26.5684 46.4034L35.6393 62.0247C36.337 63.1443 37.7862 63.5175 38.9134 62.8777Z"
                          fill="#EBEBEB"
                        />
                        <path
                          d="M21.7306 7.74327C21.6251 7.31648 21.6251 6.88969 21.7306 6.46289C21.414 6.51624 21.1501 6.62294 20.8335 6.78299L18.6699 8.06337L33.5511 51.8098L21.7306 7.74327ZM38.6699 59.5988H38.7754V59.5455L38.6699 59.5988Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M38.6715 59.5999H38.7775V59.5467L38.6715 59.5999ZM31.356 43.8027L30.8789 44.1219L33.5294 51.8343L31.356 43.8027Z"
                          fill="#DBDBDB"
                        />
                        <path
                          d="M23.2254 4.71718L35.1787 1.51534C36.3952 1.19515 37.6646 1.88889 38.0348 3.11626L51.6277 53.4918C51.945 54.7192 51.2046 55.9999 49.9881 56.3201L38.0348 59.5219C36.8183 59.8421 35.5489 59.1484 35.1787 57.921L21.6387 7.54546C21.2685 6.31809 22.0089 5.03736 23.2254 4.71718Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M37.9469 0H48.9394C50.4794 0 51.7008 1.22335 51.7008 2.76583V54.6784C51.7008 56.2209 50.4794 57.4442 48.9394 57.4442H37.9469C36.4069 57.4442 35.1855 56.2209 35.1855 54.6784V2.76583C35.1855 1.22335 36.4069 0 37.9469 0Z"
                          fill="#1BACEC"
                        />
                        <path
                          d="M30.8789 41.5287L35.2917 57.9128C35.6069 59.1324 36.8677 59.8747 38.1285 59.5035L50.0009 56.3221C51.2092 56.004 51.9446 54.7314 51.6294 53.5119L47.2167 37.3398L30.8789 41.5287Z"
                          fill="#E6E6E6"
                        />
                        <path
                          d="M35.6036 2.57029C35.6036 2.13875 35.7233 1.76115 35.9028 1.4375C35.7831 1.4375 35.6036 1.4375 35.4839 1.49144L32.3125 2.24664L35.6036 45.2387V2.57029Z"
                          fill="#5E4CCD"
                        />
                        <path
                          d="M35.1855 37.3398V54.7013C35.1855 56.2316 36.4069 57.4453 37.9469 57.4453H48.9394C50.4794 57.4453 51.7008 56.2316 51.7008 54.7013V37.3398H35.1855Z"
                          fill="#EFEFEF"
                        />
                        <path
                          d="M38.0605 40.2109V42.8346H47.2157V40.2109H38.0605ZM38.0605 53.8539H41.8303V52.2797H38.0605V53.8539ZM38.0605 50.1808H41.8303V48.6066H38.0605V50.1808ZM38.0605 46.5077H41.8303V44.9335H38.0605V46.5077ZM47.485 51.2303C48.2389 51.2303 48.8313 51.8075 48.8313 52.5421C48.8313 53.2767 48.2389 53.8539 47.485 53.8539C46.731 53.8539 46.1386 53.2767 46.1386 52.5421C46.1386 51.8075 46.731 51.2303 47.485 51.2303Z"
                          fill="#BFBFBF"
                        />
                      </svg>
                    </div>
                    <div className="industries__main__container__wraper__lower__card__contant__text">
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                      <div className="industries__main__container__wraper__card__right__text">
                        Values & personality
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Projectss /> */}
    </>
  );
}

// function ServicesCard({ cardimg, text }) {
//   return (
//     <div className="services__container__card">
//       <div className="services__container__card__img">
//         <img src={cardimg} alt="our services" />
//       </div>
//       <div className="services__container__card__text">{text}</div>
//     </div>
//   );
// }
