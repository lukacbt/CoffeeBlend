import React from "react"
import Fade from "react-reveal/Fade"
import footerLogo from "./logoo.png"
import {ReactComponent as FacebookLogo} from "./logotype.svg"
import {ReactComponent as InstagramLogo} from "./logotype2.svg"
import {ReactComponent as TwitterLogo} from "./logotype3.svg"
import {ReactComponent as Location} from "./logo1.svg"
import {ReactComponent as Phone} from "./logo2.svg"
import {ReactComponent as Mail} from "./logo3.svg"
import "./footer.css"

const Footer = () => {
  return (
    <section>
      <div className="columns footer">
        <div className="column is-12-touch is-offset-1-desktop is-10-desktop footer-container">
          <div className="column is-3 footer-div">
            <img src={footerLogo} className="footer-logo" alt="Logo" />
          </div>
          <div className="column is-3 footer-div">
            <h3 className="footer-title">About us</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="footer-social">
              <Fade bottom>
                <div className="social facebook-social">
                  <FacebookLogo className="social-logo" />
                </div>
              </Fade>
              <Fade bottom delay={100}>
                <div className="social">
                  <InstagramLogo className="social-logo" />
                </div>
              </Fade>
              <Fade bottom delay={200}>
                <div className="social">
                  <TwitterLogo className="social-logo" />
                </div>
              </Fade>

            </div>
          </div>
          <div className="column is-3 footer-div">
            <div className="footer-services-div">
              <h3 className="footer-title">Services</h3>
              <p>Cooked</p>
              <p>Deliver</p>
              <p>Quality Foods</p>
              <p>Mixed</p>
            </div>
          </div>
          <div className="column is-3 footer-div">
            <h3 className="footer-title">Have a question?</h3>
            <div className="footer-question-divs">
              <div className="contact-logo-container">
                <Location className="contact-logo" />
              </div>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="footer-question-divs">
              <div className="contact-logo-container">
                <Phone className="contact-logo" />
              </div>
              <p style={{color:"white"}}>+385 95 5999 518</p>
            </div>
            <div className="footer-question-divs">
              <div className="contact-logo-container">
                <Mail className="contact-logo" />
              </div>
              <p style={{color:"white"}}>lukacbt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
        <div className="column is-12 copyright">
          <p>Copyright ©2020 All rights reserved | Coffee Blend</p>
      </div>
    </section>
  )
}

export default Footer