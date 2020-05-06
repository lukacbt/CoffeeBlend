import React from "react"
import "./second-navbar.css"
import Hero from "../Components/Hero/Hero"
import About from "../Components/About/About"
import Customers from "../Components/Customers/Customers"
import Menu from "../Components/Menu/Menu"
import Brag from "../Components/Brag/Brag"

const AboutPage = ({ handlePage }) => {
  return(
    <div>
      <Hero heroPage="About" handlePage={handlePage} />
      <About />
      <Customers />
      <Menu />
      <Brag />
    </div>
  )
}

export default AboutPage