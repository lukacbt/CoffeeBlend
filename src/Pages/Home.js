import React from "react"
import "./second-navbar.css"
import Carousel from "../Components/Carousel/Carousel"
import Tape from "../Components/Tape/Tape"
import About from "../Components/About/About"
import Services from "../Components/Services/Services"
import Menu from "../Components/Menu/Menu"
import Brag from "../Components/Brag/Brag"
import BestCoffee from "../Components/BestCoffee/BestCoffee"
import Gallery from "../Components/Gallery/Gallery"
import Dishes from "../Components/Dishes/Dishes"
import Customers from "../Components/Customers/Customers"
import BookTable from "../Components/BookTable/BookTable"

const Home = ({ handlePage }) => {
  return(
    <div>
      <Carousel handlePage={handlePage} />
      <Tape />
      <About />
      <Services />
      <Menu handlePage={handlePage} />
      <Brag />
      <BestCoffee handlePage={handlePage} howMany={4} />
      <Gallery />
      <Dishes handlePage={handlePage} howMany={3} button={true} />
      <Customers />
      <BookTable />
    </div>
  )
}

export default Home