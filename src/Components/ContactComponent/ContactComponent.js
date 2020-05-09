import React from "react"
import "./contactcomponent.css"
import Fade from "react-reveal/Fade"

const ContactComponent = () => {
  return (
    <section>
      <div className="columns contact-component">
        <div className="column is-offset-2-desktop is-8-desktop contact-component-container">
          <Fade bottom distance={"75px"}>
            <div className="column is-4-desktop contact-component-left">
              <h2>Contact Information</h2>
              <p>Address: <span className="contact-component-left-gray"> 198 West 21th Street, Suite 721 New York NY 10016</span></p>
              <p>Phone <span className="contact-component-left-gold"> +385 95 5999 518</span></p>
              <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lukacbt@gmail.com" target="_blank"><span className="contact-component-left-gold"> lukacbt@gmail.com</span></a></p>
              <p>Website: <span className="contact-component-left-gold">lukakukina.com</span></p>
            </div>
          </Fade>
          <Fade bottom distance={"75px"}>
            <div className="column is-offset-2-desktop is-6-desktop contact-component-right">
              <div className="contact-inp-div1">
                <input className="contact-inp" type="text" placeholder="Your Name" />
                <input className="contact-inp" type="email" placeholder="Your Email" />
              </div>
              <div className="contact-inp-div">
                <input className="contact-inp" type="text" placeholder="Subject" />
              </div>
              <div className="contact-inp-div">
                <textarea className="contact-inp contact-inp-textarea" placeholder="Message" />
              </div>
              <button>Send Message</button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent