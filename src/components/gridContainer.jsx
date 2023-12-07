import React from "react";
import { Link } from "react-router-dom";
export function GridContainer({}) {
  return (
    <>
      <div className="main__grid__overlay">
        <div className="services__container__main__wraper">
          <div className="services__container__heading">
            OUR <div className="sevrive__svg">Products</div>
          </div>
        </div>
        <div class="parent">
          <div class="div1">
            <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701919183/Group_1707485760_ch6tzg.webp" />
          </div>
          <div class="normal">
            <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701919182/Group_1707485761_diop0e.webp" />
          </div>
          <div class="normal">
            <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701965379/Group_1707485887_vxeiiu.webp" />
          </div>
          <div class="normal">
            <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701965236/Group_1707485886_ehdbhg.webp" />
          </div>
          <div class="normal">
            <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701965515/Group_1707485889_lnqrln.webp" />
          </div>

          <div class="normal">
            <Link
              to="/meal"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701928989/Group_1707485877_g1ra1g.webp" />
            </Link>
          </div>

          <div class="normal">
            <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701966247/Group_1707485891_ihgofh.webp" />
          </div>
          <div class="normal">
            <img src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701966370/Group_1707485893_wmkikj.webp" />
          </div>
          <div class="normal">
            <img src="https://picsum.photos/1000/1000" />
          </div>

          {/* <div class="normal2">
        <img src="https://picsum.photos/1000/1000" />
      </div>
      <div class="normal2">
        <img src="https://picsum.photos/1000/1000" />
      </div>
      <div class="normal">
        <img src="https://picsum.photos/1000/1000" />
      </div> */}
        </div>
      </div>
    </>
  );
}
