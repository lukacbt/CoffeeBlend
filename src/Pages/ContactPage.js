import React from "react"
import "./second-navbar.css"
import Hero from "../Components/Hero/Hero"
import ContactComponent from '../Components/ContactComponent/ContactComponent';

const ContactPage = ({ handlePage }) => {
  return(
    <div>
      <Hero heroPage="Contact" handlePage={handlePage} />
      <ContactComponent />
      <iframe
        className="contact-page-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.637033150057!2d15.443173015790194!3d47.06697003309127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e4b32994e093f%3A0x8e43e7342dcbc7dc!2sBlend%20Coffee%20Roastery!5e0!3m2!1shr!2shr!4v1588402655613!5m2!1shr!2shr" width="100%" height="400px" frameBorder="0" style={{border: 0}} title="whereAreWe" allowFullScreen="" aria-hidden="false" tabIndex="0">
      </iframe>
    </div>
  )
}

export default ContactPage