import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Menu, X } from "react-feather";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function changeNavOpenClose() {
    if (window.innerWidth <= 950) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    changeNavOpenClose();
    window.addEventListener("resize", changeNavOpenClose);
    window.addEventListener("scroll", () => {
      changeNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          if (window.innerWidth <= 950) {
            setIsOpen(false);
          }
        }}
      >
        <div
          className={
            isScrolled
              ? "header__nav__container nav__bar__wraper__active"
              : "header__nav__container"
          }
        >
          <NavLink
            to="/"
            className="header__nav__container__logo"
            style={{ backgroundColor: "transparent" }}
          >
            <svg
              width="201"
              height="51"
              viewBox="0 0 201 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.1844 16.3272C27.1844 18.5747 26.7768 20.6514 25.9175 22.6124C25.0196 24.612 23.8793 26.3251 22.4086 27.8345C20.9378 29.3052 19.1861 30.4895 17.1865 31.3434C15.2255 32.2027 13.1047 32.6489 10.8628 32.6489H0L5.42587 27.1789H10.8517C12.3611 27.1789 13.7878 26.8925 15.0988 26.3637C16.4043 25.7908 17.5886 25.0196 18.5692 23.995C19.5497 22.9704 20.3264 21.8302 20.8937 20.5247C21.4666 19.1751 21.7531 17.7925 21.7531 16.3217C21.7531 14.8509 21.4666 13.4628 20.8937 12.1187C20.3209 10.8132 19.5442 9.66742 18.5251 8.64834C17.506 7.62927 16.3602 6.85257 15.0547 6.27969C13.7492 5.75087 12.3225 5.46443 10.8517 5.46443H5.42587L0 0H10.8573C13.1047 0 15.1814 0.446189 17.181 1.30551C19.142 2.16484 20.8937 3.34917 22.3645 4.81443C23.8738 6.32376 25.0196 8.0369 25.9175 10.0365C26.7768 11.9975 27.1844 14.0797 27.1844 16.3217V16.3272Z"
                fill="white"
              />
              <path
                d="M52.6886 0V5.46994H36.3614L30.9355 0H52.6886ZM36.3614 13.6335H52.6886V19.0594H36.3566V13.6335H36.3614ZM36.3614 27.1844H52.6886V32.6544H30.9355V32.2082L36.3614 27.19V27.1844Z"
                fill="white"
              />
              <path
                d="M65.5023 0L78.8108 26.573L75.7481 32.6544L59.4209 0H65.5023Z"
                fill="white"
              />
              <path
                d="M89.0269 19.0594C86.3718 19.0594 84.1298 18.123 82.29 16.2831C80.4556 14.4047 79.5137 12.1628 79.5137 9.50767C79.5137 6.85257 80.4501 4.69324 82.29 2.81484C84.1243 0.936445 86.3718 0 89.0269 0V5.46994C88.454 5.46994 87.9252 5.55257 87.4349 5.75638C86.9061 5.9602 86.4985 6.24664 86.0853 6.65427C85.7162 7.02334 85.4298 7.46953 85.226 7.95978C85.0222 8.45004 84.9395 8.97886 84.9395 9.51318C84.9395 10.6534 85.3086 11.5954 86.0798 12.4107C86.8951 13.2259 87.837 13.6335 89.0158 13.6335H97.1409C99.796 13.6335 102.038 14.57 103.878 16.4098C105.718 18.2497 106.693 20.5302 106.693 23.1467C106.693 25.7633 105.751 28.0052 103.878 29.8836C102.043 31.7179 99.796 32.6599 97.1409 32.6599V27.19C97.7138 27.19 98.2426 27.1073 98.7328 26.9035C99.2617 26.6997 99.7133 26.4133 100.082 26.0442C100.451 25.6751 100.738 25.2675 100.942 24.7387C101.146 24.2484 101.267 23.7196 101.267 23.1467C101.267 22.045 100.821 21.1086 100.044 20.2878C99.2286 19.4725 98.2866 19.0649 97.1464 19.0649H89.0213L89.0269 19.0594Z"
                fill="white"
              />
              <path
                d="M114.984 27.8345C113.514 26.3251 112.329 24.612 111.475 22.6124C110.616 20.6128 110.17 18.5306 110.17 16.3272C110.17 14.1238 110.622 11.959 111.475 9.95937C112.335 7.99834 113.519 6.2852 114.984 4.81443C116.45 3.34366 118.207 2.15933 120.206 1.30551C122.167 0.446189 124.288 0 126.53 0C128.772 0 130.898 0.407629 132.859 1.26696C134.82 2.12628 136.572 3.31061 138.081 4.81994L134.204 8.61529C132.039 6.49452 129.466 5.46994 126.53 5.46994C125.021 5.46994 123.594 5.75638 122.283 6.2852C120.934 6.85808 119.793 7.62927 118.813 8.65385C117.832 9.63437 117.056 10.7746 116.488 12.0801C115.915 13.4297 115.629 14.8124 115.629 16.3272C115.629 17.842 115.915 19.2247 116.488 20.5742C117.061 21.8798 117.838 23.0255 118.857 24.0005C119.837 25.0196 120.978 25.7963 122.283 26.3692C123.633 26.898 125.015 27.1844 126.53 27.1844L132.859 31.3874C130.898 32.2468 128.778 32.6544 126.53 32.6544C124.283 32.6544 122.162 32.2082 120.206 31.3489C118.207 30.4895 116.494 29.3052 114.984 27.84V27.8345Z"
                fill="white"
              />
              <path
                d="M169.922 4.81443C173.144 7.99834 174.78 11.8378 174.78 16.3272C174.78 20.8166 173.15 24.6946 169.922 27.84C166.738 31.0239 162.943 32.6544 158.409 32.6544C153.876 32.6544 150.08 31.0239 146.896 27.84C143.713 24.656 142.082 20.8607 142.082 16.3272C142.082 11.7937 143.713 7.99834 146.896 4.81443C150.042 1.63052 153.876 0 158.409 0C162.943 0 166.738 1.63052 169.922 4.81443ZM150.697 8.65385C148.577 10.7746 147.552 13.3471 147.552 16.3272C147.552 19.3073 148.571 21.9183 150.697 24.0391C152.818 26.1599 155.435 27.1844 158.409 27.1844C161.384 27.1844 163.962 26.1654 166.083 24.0391C168.247 21.8743 169.266 19.3018 169.266 16.3272C169.266 13.3526 168.203 10.7746 166.083 8.65385C163.962 6.53308 161.389 5.46994 158.409 5.46994C155.429 5.46994 152.857 6.48901 150.697 8.65385Z"
                fill="white"
              />
              <path
                d="M200.321 0V5.46994H189.464V32.6544H183.994V0H200.321Z"
                fill="white"
              />
              <path
                d="M91.8566 0H88.9955L87.1885 4.0658L88.9955 5.57166L91.8566 0Z"
                fill="white"
              />
              <path
                d="M67.732 41.3221C67.732 41.7091 68.8012 41.7616 70.1851 41.8271C72.6447 41.9518 76.1013 42.1223 76.0947 44.3327C76.0947 46.8513 73.2088 47.4482 70.1129 47.4482C67.0237 47.4416 64.4591 47.0677 64.1312 44.3327H67.732C68.1256 45.0148 69.0373 45.1919 70.1129 45.1919C71.1821 45.1919 72.4938 45.0148 72.4938 44.3327C72.4938 43.9457 71.4247 43.8867 70.0408 43.8211C67.5812 43.6964 64.1246 43.5259 64.1312 41.3221C64.1312 38.8035 67.0171 38.2 70.1129 38.2C73.2022 38.2197 75.7668 38.5673 76.0947 41.3221H72.4938C72.1003 40.6269 71.1886 40.4629 70.1129 40.4629C69.0438 40.4629 67.732 40.6203 67.732 41.3221ZM86.6279 38.2C89.9467 38.2 92.6424 39.1708 92.6424 42.5027V43.1455C92.6556 46.4774 89.9402 47.4416 86.6279 47.4482C83.309 47.4416 80.5936 46.4774 80.6068 43.1455V42.5027C80.5936 39.1642 83.309 38.2066 86.6279 38.2ZM89.2055 42.929V42.7126C89.2252 41.2762 88.0315 41.0138 86.6279 40.9942C85.2177 41.0138 84.024 41.2762 84.0436 42.7126V42.929C84.024 44.372 85.2177 44.6344 86.6279 44.6541C88.0315 44.6344 89.2252 44.372 89.2055 42.929ZM97.5677 38.4165H101.005V44.4376H107.885V47.2317H97.5677V38.4165ZM120.648 42.9356V38.4165H124.092V43.1521C124.105 46.484 121.376 47.4416 118.07 47.4482C114.765 47.4416 112.036 46.484 112.049 43.1521V38.4165H115.486V42.9356C115.473 44.3851 116.66 44.6344 118.07 44.6541C119.474 44.6344 120.668 44.3851 120.648 42.9356ZM136.651 47.2448H133.215V41.2237H129.128V38.4296H140.738V41.2237H136.651V47.2448ZM145.788 38.4165H149.224V47.2317H145.788V38.4165ZM160.151 38.2C163.47 38.2 166.166 39.1708 166.166 42.5027V43.1455C166.179 46.4774 163.463 47.4416 160.151 47.4482C156.832 47.4416 154.117 46.4774 154.13 43.1455V42.5027C154.117 39.1642 156.832 38.2066 160.151 38.2ZM162.729 42.929V42.7126C162.749 41.2762 161.555 41.0138 160.151 40.9942C158.741 41.0138 157.547 41.2762 157.567 42.7126V42.929C157.547 44.372 158.741 44.6344 160.151 44.6541C161.555 44.6344 162.749 44.372 162.729 42.929ZM179.69 43.0865V38.4165H183.133V47.2317H179.263L174.528 41.8468V47.2317H171.091V38.4165H175.82L179.69 43.0865ZM191.797 41.3221C191.797 41.7091 192.866 41.7616 194.25 41.8271C196.71 41.9518 200.166 42.1223 200.16 44.3327C200.16 46.8513 197.274 47.4482 194.178 47.4482C191.089 47.4416 188.524 47.0677 188.196 44.3327H191.797C192.191 45.0148 193.102 45.1919 194.178 45.1919C195.247 45.1919 196.559 45.0148 196.559 44.3327C196.559 43.9457 195.49 43.8867 194.106 43.8211C191.646 43.6964 188.19 43.5259 188.196 41.3221C188.196 38.8035 191.082 38.2 194.178 38.2C197.267 38.2197 199.832 38.5673 200.16 41.3221H196.559C196.165 40.6269 195.254 40.4629 194.178 40.4629C193.109 40.4629 191.797 40.6203 191.797 41.3221Z"
                fill="white"
              />
            </svg>
          </NavLink>

          {isOpen ? (
            <div className="header__nav__container__menu">
              <NavLink
                onClick={scrollToTop}
                to="/"
                activeClassName="active"
                className="header__nav__container__menu__links"
              >
                Home
              </NavLink>
              <NavLink
                onClick={scrollToTop}
                to="/aboutus"
                activeClassName="active"
                className="header__nav__container__menu__links"
              >
                About US
              </NavLink>
              <NavLink
                to="/work"
                onClick={scrollToTop}
                activeClassName="active"
                className="header__nav__container__menu__links"
              >
                Our Work
              </NavLink>
              <NavLink
                to="/f"
                onClick={scrollToTop}
                activeClassName="active"
                className="header__nav__container__menu__links"
              >
                Blogs
              </NavLink>
              <NavLink
                onClick={scrollToTop}
                to="/ContactUs"
                activeClassName="active"
                className="header__nav__container__menu__links__btn"
              >
                Get Free Quote
              </NavLink>
            </div>
          ) : null}

          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            type="button"
            title="open close menu"
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </ClickAwayListener>
    </>
  );
}
