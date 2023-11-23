import React from "react";
import avtrr from "../assets/avtrr.png";

export default function Footer() {
  return (
    <>
      <div className="footer__over__main">
        <div className="footer__main__container">
          <div className="footer__testim__wrapaer">
            <div className="footer__testim__wrapaer__text">
              ‘I really enjoyed working with you guys, you guys are ver
              communicative and quick to do the job. I can’t wait to work with
              you again!!’
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
              <div className="footer__testim__wrapaer__quote__row">
                <div className="footer__testim__wrapaer__quote__row__svg">
                  🔙
                </div>
                <div className="footer__testim__wrapaer__quote__row__svg">
                  🔜
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
