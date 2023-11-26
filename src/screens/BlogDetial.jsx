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
        <div className="blog__detail__container__content">
          <div className="blog__detail__container__content__heading">
            Beberapa Pertanyaan tentang terjun di industri UI/UX
          </div>
          <div className="blog__detail__person">
            <div className="blog__detail__person__img">
              <img src={avtrr} alt="blog" />
            </div>
            <div className="blog__detail__person__name__waper">
              <div className="blog__detail__person__name">
                Dwinawan Hariwijaya
              </div>
              <div className="blog__detail__person__date">
                Februari 21, 2021
              </div>
            </div>
          </div>
          <div className="blog__detail__person__wraper">
            <div className="blog__detail__person__wraper__heading">
              Seorang UI/UX Designer haruskah memiliki latar belakang di dunia
              desain dan programming?
            </div>
            <div className="blog__detail__person__wraper__sub__heading">
              nggak harus, banyak UI/UX Designer yang saya kenal memiliki
              background di luar desain dan programming. Ada yang dari jurusan
              pertanian, Ada yang dari jurusan perikanan.
            </div>
            <div className="blog__detail__person__wraper__sub__heading__entry">
              Menurut saya modal awal untuk menjadi UI/UX Designer adalah
            </div>
            <div className="blog__detail__person__wraper__sub__heading__entry">
              Suka membuat design
            </div>
            <div className="blog__detail__person__wraper__sub__heading__entry">
              Suka mengamati suatu produk (Apps, Website) lalu dipelajari apa
              yang membuat produk tersebut bagus atau mencari tahu apa yang bisa
              ditingkatkan dari produk tersebut
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
