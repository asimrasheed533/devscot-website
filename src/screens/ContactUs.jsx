import React, { useState } from "react";
import contactus from "../assets/contactus.png";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [status, setStatus] = useState("");

  function handelSubmit(e) {
    const validateForm = () => {
      if (!name) {
        setNameError("Enter the Name");
      } else {
        setNameError(null);
      }
      if (!email) {
        setEmailError("Enter the correct mail addess");
      } else if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
        setEmailError("Enter the correct mail addess");
      } else {
        setEmailError(null);
      }
      if (!message) {
        setMessageError("Enter the message");
      } else {
        setMessageError(null);
      }
    };
    e.preventDefault();
    validateForm();
    if (nameError === null && emailError === null && messageError === null) {
      setStatus("sending");
      setTimeout(() => {
        setStatus("send");
        setName("");
        setEmail("");
        setMessage("");
        // alert("Your message has been sent successfully");
      }, 1000);
      setTimeout(() => {
        setStatus("");
      }, 2000);
    }
  }

  return (
    <>
      <div className="contact__main__container__header__over">
        <div className="contact__mian__container">
          <div className="contact__mian__container__img">
            <img src={contactus} alt="contact" />
          </div>
          <div className="contact__mian__container__text">
            <div className="contact__mian__container__text__heading">
              CONTACT
            </div>
            <div className="contact__mian__container__text__sub__heading">
              Home - Contacts
            </div>
          </div>
        </div>
      </div>
      <div className="contact__card__row__wraper">
        <div className="contact__card__row__wraper__col__left">
          <div className="contact__card__row__wraper__col__form">
            <div className="contact__card__col__form__text">
              <div className="contact__card__col__form__heading">
                <span>Drop</span> Us a line
              </div>
              <div className="contact__card__col__form__sub__heading">
                Your email address will not be published. Required fields are
                marked*
              </div>
            </div>
            <div className="contact__card__row__wraper__col__form__input">
              <input
                maxLength={50}
                error={nameError}
                value={name}
                type="text"
                placeholder="Your Name"
                onChange={(e) => {
                  if (!e.target.value) {
                    setNameError("Enter the Name");
                  } else {
                    setNameError(null);
                  }
                  setName(e.target.value);
                }}
              />
              {nameError !== "" ? (
                <p className="alert__error__input">{nameError}</p>
              ) : null}
            </div>
            <div className="contact__card__row__wraper__col__form__input">
              <input
                error={emailError}
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => {
                  if (!e.target.value) {
                    setEmailError("Enter the correct mail addess");
                  } else {
                    setEmailError(null);
                  }
                  setEmail(e.target.value);
                }}
              />
              {emailError !== "" ? (
                <p className="alert__error__input">{emailError}</p>
              ) : null}
            </div>
            <div className="contact__card__row__wraper__col__form__input">
              <input
                // className="contact__card__row__wraper__col__form__input__textarea"
                maxLength={500}
                error={messageError}
                type="text"
                value={message}
                placeholder="Your Comment here..."
                onChange={(e) => {
                  if (!e.target.value) {
                    setMessageError("Enter the message");
                  } else {
                    setMessageError(null);
                  }
                  setMessage(e.target.value);
                }}
              />
              {messageError !== "" ? (
                <p className="alert__error__input">{messageError}</p>
              ) : null}
            </div>
            <div className="contact__card__row__wraper__col__form__btn">
              <div className="contact__card__row__wraper__col__form__btn__svg">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="32"
                    fill="url(#paint0_linear_687_2258)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_687_2258"
                      x1="7.03562"
                      y1="3.04182"
                      x2="68.4599"
                      y2="12.0776"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6554DC" />
                      <stop offset="1" stop-color="#4733B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <button
                onClick={handelSubmit}
                className="contact__card__row__wraper__col__form__btn__text"
              >
                {status === "sending" ? <SendingSVG /> : null}
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        <div className="contact__card__row__wraper__col__right">
          <div className="contact__card__col__right__title">OUR CONTACT</div>
          <div className="contact__card__col__right__heading">
            Let’s Start Working Together Get in Touch With Devscot
          </div>
          <div className="contact__card__col__right__subheading">
            Get in touch to discuss your employee. give us a call, drop us an
            email.
          </div>
          <div className="contact__card__col__right__line"></div>
          <div className="contact__card__col__right__address">
            <div className="contact__card__col__right__address__svg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6755 19.2869 15.7128 20.0956 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6445 22.0818 12.325 22.1663 12 22.1663C11.675 22.1663 11.3555 22.0818 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42298 20.2083 7.38707 19.3489 6.442 18.395C4.676 16.588 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="contact__card__col__right__address__text">
              Mr John Smith. 132, My Street, Kingston, New York 12401.
            </div>
          </div>
          <div className="contact__card__col__right__address">
            <div className="contact__card__col__right__address__svg">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5569 10.906L12.1019 11.359C12.1019 11.359 11.0189 12.435 8.06386 9.49698C5.10886 6.55898 6.19186 5.48298 6.19186 5.48298L6.47786 5.19698C7.18486 4.49498 7.25186 3.36698 6.63486 2.54298L5.37486 0.859979C4.61086 -0.160021 3.13586 -0.29502 2.26086 0.57498L0.690856 2.13498C0.257856 2.56698 -0.032144 3.12498 0.002856 3.74498C0.092856 5.33198 0.810856 8.74498 4.81486 12.727C9.06186 16.949 13.0469 17.117 14.6759 16.965C15.1919 16.917 15.6399 16.655 16.0009 16.295L17.4209 14.883C18.3809 13.93 18.1109 12.295 16.8829 11.628L14.9729 10.589C14.1669 10.151 13.1869 10.28 12.5569 10.906Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="contact__card__col__right__address__text">
              +92 304 344 653
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function SendingSVG() {
  return (
    <div className="sendingsvg__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
          height: "100%",
        }}
        width="60px"
        height="60px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.9166666666666666s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(30 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.8333333333333334s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.75s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.6666666666666666s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5833333333333334s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(150 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.4166666666666667s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(210 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.3333333333333333s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.25s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.16666666666666666s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.08333333333333333s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(330 50 50)">
          <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>
    </div>
  );
}

function SentSVG() {
  return (
    <div className="sent__svg__container">
      <div className="animation-ctn">
        <div className="icon icon--order-success svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
            <g fill="none" stroke="#a57e57" strokeWidth="2">
              <circle
                cx="77"
                cy="77"
                r="72"
                style={{
                  strokeDasharray: "480px, 480px",
                  strokeDashoffset: "960px",
                }}
              />
              <circle
                id="colored"
                fill="#a57e57"
                cx="77"
                cy="77"
                r="72"
                style={{
                  strokeDasharray: "480px, 480px",
                  strokeDashoffset: "960px",
                }}
              />
              <polyline
                className="st0"
                stroke="#fff"
                strokeWidth="10"
                points="43.5,77.8 63.7,97.9 112.2,49.4 "
                style={{
                  strokeDasharray: "100px, 100px",
                  strokeDashoffset: "200px",
                }}
              />
            </g>
          </svg>
        </div>
      </div>
      <p
        style={{
          marginTop: "1em",
          color: "#a57e57",
          fontWeight: "bold",
          textAlign: "center",
          margin: "0",
          padding: "0",
          fontSize: "12px",
        }}
      >
        Your message has been sent successfully
      </p>
    </div>
  );
}
