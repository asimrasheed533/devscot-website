import React from "react";
import { Link } from "react-router-dom";
import aboutus from "../assets/aboutus.png";
import blogimg from "../assets/blogimg.png";
export default function Blog() {
  return (
    <>
      <div className="contact__main__container__header__over">
        <div className="contact__mian__container">
          <div className="contact__mian__container__img">
            <img src={aboutus} alt="contact" />
          </div>
          <div className="contact__mian__container__text">
            <div className="contact__mian__container__text__heading">BLOGS</div>
            <div className="contact__mian__container__text__sub__heading">
              Home - Blogs
            </div>
          </div>
        </div>
      </div>
      <div className="blog__card__wraper">
        <div className="blog__card__wraper__img">
          <img src={blogimg} alt="blog-devscot" />
        </div>
        <div className="blog__card__wraper__text">
          <div className="blog__card__wraper__text__title">March 24, 2023</div>
          <div className="blog__card__wraper__text__heading">
            Beberapa Pertanyaan tentang terjun di industri UI/UX
          </div>
          <div className="blog__card__wraper__text__subheading">
            Get in touch to discuss your employee. give us a call, drop us an
            email.
          </div>

          <Link to="/blogdetial" className="blog__card__wraper__text__button">
            Learn More
          </Link>
        </div>
      </div>
      <div className="blod__card__container">
        <BlogsCard image={blogimg} />
        <BlogsCard image={blogimg} />
        <BlogsCard image={blogimg} />
        <BlogsCard image={blogimg} />
        <BlogsCard image={blogimg} />
        <BlogsCard image={blogimg} />
      </div>
    </>
  );
}

function BlogsCard({ image }) {
  return (
    <div className="blog__cards__detail__wraper">
      <div className="blog__card__img">
        <img src={image} alt="blog" />
      </div>
      <div className="blog__card__text__wraper">
        <div className="blog__card__title">March 24, 2023</div>
        <div className="blog__card__heading">
          Let’s Start Working Get in Touch With Devscot
        </div>
        <div className="blog__card__subheading">
          Get in touch to discuss your employee. give us a call, drop us an
          email.
        </div>
      </div>
    </div>
  );
}
