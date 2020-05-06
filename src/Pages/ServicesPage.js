import React from "react"
import "./second-navbar.css"
import Hero from "../Components/Hero/Hero"
import Services from "../Components/Services/Services"

const ServicesPage = ({ handlePage }) => {
  return(
    <div>
      <Hero heroPage="Services" handlePage={handlePage} />
      <Services />
    </div>
  )
}

export default ServicesPage