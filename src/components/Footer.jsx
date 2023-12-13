import { useRef } from "react";
import avtrr from "../assets/avtrr.png";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
export default function Footer() {
  // const nextButton = useRef(null);
  // const prevButton = useRef(null);

  return (
    <>
      <div className="footer__over__main">
        <Swiper
        // onInit={(swiper) => {
        //   swiper.params.navigation.prevEl = prevButton.current;
        //   swiper.params.navigation.nextEl = nextButton.current;
        //   swiper.navigation.init();
        //   swiper.navigation.update();
        // }}
        >
          <SwiperSlide>
            <Quotes avtrr={avtrr} />
          </SwiperSlide>
          <SwiperSlide>
            <Quotes avtrr={avtrr} />
          </SwiperSlide>
          <SwiperSlide>
            <Quotes avtrr={avtrr} />
          </SwiperSlide>
          <SwiperSlide>
            <Quotes avtrr={avtrr} />
          </SwiperSlide>
        </Swiper>
        <div className="footer__testim__wrapaer__quote__row">
          <button
            // ref={prevButton}
            className="footer__testim__wrapaer__quote__row__svg1"
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3919 8.55756C20.3919 8.88206 20.263 9.19326 20.0335 9.42272C19.8041 9.65217 19.4928 9.78108 19.1684 9.78108H4.17723L9.42968 15.0335C9.65604 15.2636 9.78232 15.5738 9.78101 15.8966C9.7797 16.2194 9.6509 16.5285 9.42266 16.7568C9.19443 16.985 8.88525 17.1138 8.56249 17.1151C8.23972 17.1164 7.92951 16.9901 7.69942 16.7638L0.358331 9.42269C0.128895 9.19324 0 8.88205 0 8.55756C0 8.23308 0.128895 7.92189 0.358331 7.69244L7.69942 0.351342C7.92951 0.124975 8.23972 -0.00130412 8.56249 1.01571e-05C8.88525 0.00132444 9.19443 0.130126 9.42266 0.358359C9.6509 0.586592 9.7797 0.895766 9.78101 1.21853C9.78232 1.5413 9.65604 1.85151 9.42968 2.0816L4.17733 7.33405H19.1684C19.4928 7.33405 19.8041 7.46295 20.0335 7.69241C20.263 7.92186 20.3919 8.23307 20.3919 8.55756Z"
                fill="#F8F8F8"
              />
            </svg>
          </button>
          <button
            // ref={nextButton}
            className="footer__testim__wrapaer__quote__row__svg2"
          >
            <svg
              width="19"
              height="15"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7941 9.35931L12.5407 16.651C12.3134 16.8759 12.0069 17.0013 11.688 17C11.3691 16.9987 11.0636 16.8707 10.8381 16.6441C10.6126 16.4174 10.4853 16.1103 10.484 15.7897C10.4827 15.4691 10.6075 15.1609 10.8312 14.9324L16.0207 9.71529H1.20889C0.888274 9.71529 0.580788 9.58725 0.354076 9.35934C0.127365 9.13143 0 8.82231 0 8.5C0 8.17769 0.127365 7.86857 0.354076 7.64066C0.580788 7.41275 0.888274 7.28471 1.20889 7.28471H16.0208L10.8312 2.0676C10.6075 1.83906 10.4827 1.53093 10.484 1.21034C10.4853 0.88974 10.6126 0.582647 10.8381 0.355949C11.0636 0.129251 11.3691 0.00131553 11.688 1.00887e-05C12.0069 -0.00129535 12.3134 0.124135 12.5407 0.348979L19.7941 7.64069C20.0208 7.8686 20.1481 8.1777 20.1481 8.5C20.1481 8.8223 20.0208 9.1314 19.7941 9.35931Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="footer__explore__container">
          <div className="footer__explore__container__row__upper">
            <div className="footer__explore__container__row__upper__heading">
              Have an Awesome Project?
            </div>
            <div className="footer__explore__container__row__upper__btn">
              <button className="footer__explore__container__row__upper__btn__entry">
                Explore More
                <div className="footer__explore__container__row__upper__btn__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="footer__explore__container__row__bottom">
            <div className="footer__explore__container__col__first">
              <div className="footer__explore__container__col__logo">
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
              </div>
              <div className="footer__explore__container__col__text">
                We're a trusted web and mobile app development agency with
                expertise in SaaS, Media, Marketing Tech, and AI development.
                Whether you're a startup, an agency, or a big company, we've got
                you covered.
              </div>
            </div>
            <div className="footer__explore__container__col__wraper">
              <div className="footer__explore__container__col">
                <div className="footer__explore__container__col__heading">
                  Company
                </div>
                <div className="footer__explore__container__col__entry">
                  About us
                </div>
                <div className="footer__explore__container__col__entry">
                  Services
                </div>
                <div className="footer__explore__container__col__entry">
                  Contact
                </div>
              </div>
              <div className="footer__explore__container__col">
                <div className="footer__explore__container__col__heading">
                  Legal
                </div>
                <div className="footer__explore__container__col__entry">
                  Terms
                </div>
                <div className="footer__explore__container__col__entry">
                  Privacy
                </div>
                <div className="footer__explore__container__col__entry">
                  Cookies
                </div>
              </div>
              <div className="footer__explore__container__col">
                <div className="footer__explore__container__col__heading"></div>
                <div className="footer__explore__container__col__entry">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5908 10.7454C21.5908 4.81395 16.7544 0 10.7954 0C4.83633 0 0 4.81395 0 10.7454C0 15.9462 3.71361 20.2766 8.6363 21.2759V13.9691H6.47723V10.7454H8.6363V8.05907C8.6363 5.9852 10.3312 4.29817 12.4147 4.29817H15.1135V7.5218H12.9545C12.3607 7.5218 11.8749 8.00534 11.8749 8.59634V10.7454H15.1135V13.9691H11.8749V21.4371C17.3266 20.8999 21.5908 16.3223 21.5908 10.7454Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="footer__explore__container__col__entry">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M10.7934 21.8607C9.2085 21.8607 7.62199 21.897 6.03814 21.8523C3.44 21.7791 1.5857 20.5326 0.485879 18.2075C0.163644 17.5111 0.000373744 16.7528 0.00769394 15.9867C0.00450604 12.7667 -0.00984236 9.54729 0.0114103 6.32733C0.0294751 3.52796 2.08355 1.10286 4.86287 0.556992C5.26226 0.477853 5.66855 0.43783 6.07586 0.4375C9.22816 0.441711 12.3805 0.434342 15.5333 0.441185C16.9222 0.44335 18.2683 0.917622 19.3467 1.78477C20.4252 2.65192 21.1706 3.85943 21.4585 5.20558C21.5439 5.60927 21.5865 6.02069 21.5855 6.43314C21.5818 9.66152 21.6078 12.8904 21.5696 16.1188C21.5366 18.8697 19.3221 21.3301 16.5752 21.7675C16.1383 21.8349 15.6965 21.8669 15.2544 21.8634C13.7667 21.8634 12.279 21.8634 10.7913 21.8634L10.7934 21.8607ZM15.9695 11.1538C15.9698 9.79312 15.4254 8.48783 14.4556 7.52422C13.4859 6.56062 12.1701 6.01736 10.7966 6.0136C7.94504 6.0136 5.62318 8.31237 5.61521 11.1481C5.60777 13.9711 7.9376 16.2857 10.7892 16.2883C13.6407 16.2909 15.9647 13.9859 15.9695 11.1538ZM17.7005 5.57406C17.6952 4.86974 17.0916 4.27544 16.3956 4.28913C15.6837 4.30334 15.0955 4.8987 15.1067 5.59248C15.1079 5.76122 15.1426 5.92807 15.2089 6.0835C15.2752 6.23894 15.3718 6.37991 15.4931 6.49837C15.6144 6.61683 15.758 6.71046 15.9159 6.77392C16.0737 6.83737 16.2426 6.86941 16.4129 6.8682C16.5832 6.86699 16.7516 6.83256 16.9085 6.76687C17.0654 6.70118 17.2077 6.60551 17.3272 6.48534C17.4468 6.36517 17.5413 6.22284 17.6054 6.06648C17.6694 5.91013 17.7018 5.7428 17.7005 5.57406Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.1039 11.0075C14.1182 12.6736 12.816 14.4365 10.6471 14.4328C8.47831 14.4291 7.18881 12.6704 7.19731 10.9997C7.19836 10.0922 7.56323 9.22232 8.21165 8.5814C8.86006 7.94047 9.73891 7.58099 10.6548 7.58203C11.5708 7.58308 12.4488 7.94457 13.0957 8.58698C13.7426 9.22939 14.1049 10.1001 14.1039 11.0075Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="footer__explore__container__col__entry">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_799_139"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="22"
                      height="23"
                    >
                      <path
                        d="M21 11.875C21.0017 13.1922 20.7424 14.4966 20.237 15.7129C19.7316 16.9293 18.9901 18.0334 18.0555 18.9615C17.1286 19.8869 16.0283 20.6205 14.8177 21.1204C13.6071 21.6203 12.3098 21.8767 11 21.875C5.47701 21.875 1.00001 17.398 1.00001 11.875C0.996513 9.3109 1.98145 6.84409 3.75001 4.98751C4.68318 4.00281 5.80747 3.21888 7.05408 2.6837C8.30069 2.14852 9.64339 1.87334 11 1.87501C12.3098 1.87331 13.6071 2.12975 14.8177 2.62967C16.0283 3.12958 17.1286 3.86317 18.0555 4.78851C18.9901 5.71662 19.7316 6.82075 20.237 8.03709C20.7424 9.25343 21.0017 10.5579 21 11.875Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0002 11.8758C19.5412 11.8758 15.5162 11.3258 11.9136 12.9073C8.00014 14.6258 5.16664 17.2913 3.93164 18.9493"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.25 2.60156C8.815 4.04606 12.23 7.72357 13.5 11.3746C14.77 15.0256 15.24 19.5146 15.53 20.7921"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.07715 10.6244C2.96615 10.7384 7.96666 10.8409 11.1667 9.47438C14.3667 8.10788 17.1202 5.59438 18.0647 4.79688"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.75001 15.6815C2.63117 17.8145 4.22036 19.5787 6.25001 20.677M1.00001 11.875C0.996513 9.3109 1.98145 6.84409 3.75001 4.98751C4.68318 4.00281 5.80747 3.21888 7.05408 2.6837C8.30069 2.14852 9.64339 1.87334 11 1.87501M15 2.70701C16.1388 3.20528 17.175 3.91113 18.0555 4.78851C18.9901 5.71662 19.7316 6.82075 20.237 8.03709C20.7424 9.25342 21.0017 10.5579 21 11.875C21 13.106 20.7775 14.2855 20.37 15.375M11 21.875C12.3098 21.8767 13.6071 21.6203 14.8177 21.1204C16.0283 20.6205 17.1286 19.8869 18.0555 18.9615"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_799_139)">
                      <path
                        d="M-1 -0.125H23V23.875H-1V-0.125Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Quotes({ avtrr }) {
  return (
    <div className="footer__testim__wrapaer">
      <div className="footer__testim__wrapaer__text">
        ‘I really enjoyed working with you guys, you guys are ver communicative
        and quick to do the job. I can’t wait to work with you again!!’
      </div>
      <div className="footer__testim__wrapaer__quote">
        <div className="footer__testim__wrapaer__quote__row__first">
          <div className="footer__testim__wrapaer__quote__row__avatar">
            <img src={avtrr} alt="devscort" />
          </div>
          <div className="footer__testim__wrapaer__quote__row__text">
            <div className="footer__testim__wrapaer__quote__row__avatar__name">
              John Doe
            </div>
            <div className="footer__testim__wrapaer__quote__row__avatar__dese">
              CEO at ABC Marketplace
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
