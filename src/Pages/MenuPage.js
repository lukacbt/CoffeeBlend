import React from "react"
import "./second-navbar.css"
import Hero from "../Components/Hero/Hero"
import Tape from "../Components/Tape/Tape"
import Dishes from "../Components/Dishes/Dishes"
import Food from "../Components/Food/Food"

const MenuPage = ({ handlePage }) => {
  return(
    <div>
      <Hero heroPage="Menu" handlePage={handlePage} />
      <Tape />
      <Food />
      <Dishes handlePage={handlePage} howMany={6} button={false} />
    </div>
  )
}

export default MenuPage