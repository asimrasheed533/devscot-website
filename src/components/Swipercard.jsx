import React, { useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Swipercard() {
  const [swiperSlides, setSwiperSlides] = React.useState(2);
  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(1.2);
    } else if (window.innerWidth > 1200) {
      setSwiperSlides(1.1);
    } else if (window.innerWidth > 900) {
      setSwiperSlides(1.2);
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
      <div className="success__story__swiper__over">
        <div className="success__story__swiper">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            slidesPerView={swiperSlides}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SuccessSwiper
                bg="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702184857/Rectangle_jzxaw7.webp"
                image="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702177869/IMAGE_jd6ox9.webp"
                heading="Equitrip"
                subheading="Equitrip is a digital platform for horse owners, horse transportation companies, and other industry stakeholders to connect and collaborate to make horse transport convenient."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessSwiper
                bg="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702184429/Group_1707485942_rcerir.webp"
                image="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702185010/IMAGE_2_eaugdb.webp"
                heading="TeeMates"
                subheading="TeeMates is a social media app for golfers where they can connect, network and share their golfing stories through TeeTimes with other buddies around the world."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessSwiper
                bg="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702184856/Rectangle_1_mbaydp.webp"
                image="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702185010/IMAGE_3_cdo9ox.webp"
                heading="Selah"
                subheading="Selah is a social app designed to connect and interact with friends and family. It's a dedicated platform to socialize, chat, and share media with your loved ones."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessSwiper
                bg="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702184857/IMAGE_1_djxflz.webp"
                image="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702185009/IMAGE_4_c7caj3.webp"
                heading="Ether Legends"
                subheading="Ether Legends is a play to earn collectible NFT - Blockchain Trading Card Game where players can earn trophies and claim rewards by winning matches!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

function SuccessSwiper({ bg, image, heading, subheading }) {
  return (
    <div
      className="success__story__swiper__card"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="success__story__swiper__card__text">
        <div className="success__story__swiper__card__text__heading">
          {heading}
        </div>
        <div className="success__story__swiper__card__text__subheading">
          {subheading}
        </div>
        <div className="success__story__swiper__card__text__enty__wraper">
          <div className="success__story__swiper__card__text__entry">
            android APP dev
          </div>
          <div className="success__story__swiper__card__text__entry">
            ios app dev
          </div>
          <div className="success__story__swiper__card__text__entry">
            ui ux design
          </div>
        </div>
      </div>
      <div className="success__story__swiper__card__img">
        <img
          src={image}
          alt="devscot, ui/ux, mobile app development, ios app development, android app development, web development, web design, ui/ux design, ui/ux design agency, ui/ux design company, ui/ux design services, ui/ux design agency in india, ui/ux design company in india, ui/ux design services in india, ui/ux design agency in usa, ui/ux design company in usa, ui/ux design services in usa, ui/ux design agency in uk, ui/ux design company in uk, ui/ux design services in uk, ui/ux design agency in australia, ui/ux design company in australia, ui/ux design services in australia, ui/ux design agency in canada, ui/ux design company in canada, ui/ux design services in canada, ui/ux design agency in singapore, ui/ux design company in singapore, ui/ux design services in singapore, ui/ux design agency in uae, ui/ux design company in uae, ui/ux design services in uae, ui/ux design agency in dubai, ui/ux design company in dubai, ui/ux design services in dubai"
        />
      </div>
    </div>
  );
}
