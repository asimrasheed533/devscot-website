import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
export default function Solution() {
  const [activeCard, setActiveCard] = useState(0);
  const cardList = [
    {
      title: "Art Vectors",
      image:
        "https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701847091/Group_1707485816_yhtgnk.webp",
      heading: "DESIGN",
      subheading: "Art Vectors & Illustrationst",
      deatils:
        "Seeing rather her you not esteem men settle genius excuse.Deal say over you age from. Comparison new hormonic melancholy.",
      link: "/web",
    },
    {
      title: "Austin & Studio",
      image:
        "https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701854908/Group_1707485843_zhcktu.webp",

      heading: "BRANDING",
      subheading: "Downtown Austin & Studio",
      deatils:
        "Seeing rather her you not esteem men settle genius excuse.Deal say over you age from. Comparison new hormonic melancholy.",
    },
    {
      title: "Creative Ideas",
      image:
        "https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701855044/Group_1707485844_ezhlst.webp",

      heading: "PHOTO",
      subheading: "Creative Project Ideas",
      deatils:
        "Seeing rather her you not esteem men settle genius excuse.Deal say over you age from. Comparison new hormonic melancholy.",
    },
    {
      title: "Branding",
      image:
        "https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701855231/Group_1707485846_dviuju.webp",

      heading: "CREATIVE",
      subheading: "Digital Branding & Marketing",
      deatils:
        "Seeing rather her you not esteem men settle genius excuse.Deal say over you age from. Comparison new hormonic melancholy.",
    },
  ];
  return (
    <section className="Rockcutingsection">
      <div className="homesection">
        <div className="cardsection__content">
          <div className="cardsection__content__right">
            <div
              horizontal={true}
              className="cardsection__content__right__content"
            >
              {cardList.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "cardsection__content__right__content__card",
                    activeCard === index &&
                      "cardsection__content__right__content__card__active"
                  )}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  <div className="cardsection__content__right__content__card__image">
                    <img loading="lazy" src={item.image} alt={item.name} />
                  </div>
                  <div className="cardsection__text__wraper">
                    <div className="cardsection__content__right__content__card__image__left__text">
                      {item.title}
                    </div>
                    <div className="cardsection__content__right__content__card__text__heading">
                      ------------- {item.heading}
                    </div>
                    <div className="cardsection__content__right__content__card__text__subheading">
                      {item.subheading}
                    </div>
                    <div className="cardsection__content__right__content__card__text__deatil">
                      {item.deatils}
                    </div>
                    <Link
                      to={item.link}
                      className="cardsection__content__right__content__card__text__svg"
                    >
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="20.5"
                          cy="20.5"
                          r="20.1694"
                          strokeWidth="0.66129"
                        />
                        <path
                          d="M16.5322 24.4667L24.4677 16.5312"
                          strokeWidth="1.32258"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.0195 16.5312H24.4671V22.9788"
                          strokeWidth="1.32258"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="Rockcutingsection__overlayimg">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1700669312/%D9%84%D8%A7%D9%81%D9%8A_%D9%8A%D8%A7%D8%B1%D8%AF_7_pqb4m9.jpg"
          alt="Image"
        />
      </div> */}
      {/* <div className="Rockcutingsection__overlayimgline">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1700669312/%D9%84%D8%A7%D9%81%D9%8A_%D9%8A%D8%A7%D8%B1%D8%AF_7_pqb4m9.jpg"
          alt="Image"
        />
      </div> */}
    </section>
  );
}
