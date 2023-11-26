import React from "react";
import aboutus from "../assets/aboutus.png";
import avtrr from "../assets/avtrr.png";
export default function BlogDetial() {
  return (
    <>
      <div className="contact__main__container__header__over">
        <div className="contact__mian__container">
          <div className="contact__mian__container__img">
            <img src={aboutus} alt="contact" />
          </div>
          <div className="contact__mian__container__text">
            <div className="contact__mian__container__text__heading">
              BLOGS DETAILS
            </div>
            <div className="contact__mian__container__text__sub__heading">
              Home - Blogs - Detaile
            </div>
          </div>
        </div>
      </div>
      <div className="blog__detail__container__over">
        <div className="blog__upper__svg">
          <svg
            width="561"
            height="1100"
            viewBox="0 0 561 1100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_799_211)">
              <circle
                cx="11"
                cy="550"
                r="194"
                fill="url(#paint0_linear_799_211)"
                fill-opacity="0.41"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_799_211"
                x="-538.8"
                y="0.200012"
                width="1099.6"
                height="1099.6"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="177.9"
                  result="effect1_foregroundBlur_799_211"
                />
              </filter>
              <linearGradient
                id="paint0_linear_799_211"
                x1="-135.47"
                y1="642.635"
                x2="205"
                y2="491.8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7480E2" />
                <stop offset="1" stop-color="#5DAFE1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <BlogContentDetail image={avtrr} />
        <BlogContentDetail image={avtrr} />
        <BlogContentDetail image={avtrr} />
        <BlogContentDetail image={avtrr} />
      </div>
      <div className="blog__bottom__svg">
        <svg
          width="592"
          height="1100"
          viewBox="0 0 592 1100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_799_212)">
            <circle
              cx="550"
              cy="550"
              r="194"
              fill="url(#paint0_linear_799_212)"
              fill-opacity="0.41"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_799_212"
              x="0.200012"
              y="0.200012"
              width="1099.6"
              height="1099.6"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="177.9"
                result="effect1_foregroundBlur_799_212"
              />
            </filter>
            <linearGradient
              id="paint0_linear_799_212"
              x1="403.53"
              y1="642.635"
              x2="744"
              y2="491.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7480E2" />
              <stop offset="1" stop-color="#5DAFE1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

function BlogContentDetail({ image }) {
  return (
    <div className="blog__detail__container__content">
      <div className="blog__detail__container__content__heading">
        Beberapa Pertanyaan tentang terjun di industri UI/UX
      </div>
      <div className="blog__detail__person">
        <div className="blog__detail__person__img">
          <img src={image} alt="blog" />
        </div>
        <div className="blog__detail__person__name__waper">
          <div className="blog__detail__person__name">Dwinawan Hariwijaya</div>
          <div className="blog__detail__person__date">Februari 21, 2021</div>
        </div>
      </div>
      <div className="blog__detail__person__wraper">
        <div className="blog__detail__person__wraper__heading">
          Seorang UI/UX Designer haruskah memiliki latar belakang di dunia
          desain dan programming?
        </div>
        <div className="blog__detail__person__wraper__sub__heading">
          nggak harus, banyak UI/UX Designer yang saya kenal memiliki background
          di luar desain dan programming. Ada yang dari jurusan pertanian, Ada
          yang dari jurusan perikanan.
        </div>
        <div className="blog__detail__person__wraper__sub__heading__entry">
          Menurut saya modal awal untuk menjadi UI/UX Designer adalah
        </div>
        <div className="blog__detail__person__wraper__sub__heading__entry">
          Suka membuat design
        </div>
        <div className="blog__detail__person__wraper__sub__heading__entry">
          Suka mengamati suatu produk (Apps, Website) lalu dipelajari apa yang
          membuat produk tersebut bagus atau mencari tahu apa yang bisa
          ditingkatkan dari produk tersebut
        </div>
      </div>
    </div>
  );
}
