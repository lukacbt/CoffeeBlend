import React from "react"
import "./hero.css"
import bg from "./bg_3.jpg"
import Fade from "react-reveal/Fade"

const Hero = ({ heroPage, handlePage }) => {
  return(
    <section>
      <div className="hero" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})`}}>
        <Fade bottom duration={1000} distance={"75px"}>
          <div className="hero-container">
            <p className="hero-title">{heroPage}</p>
            <p><span onClick={() => handlePage("home")} className="hero-subtitle hero-subtitle-left">Home</span> <span className="hero-subtitle hero-subtitle-right">{heroPage}</span></p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Hero