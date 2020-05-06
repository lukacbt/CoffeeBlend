import React, { Component } from "react"
import "./bestcoffee.css"
import 'bulma/css/bulma.css'
import Fade from "react-reveal/Fade"
import TitleComponent from "../TitleComponent/TitleComponent"
import menu1 from "./menu-1.jpg"
import menu2 from "./menu-2.jpg"
import menu3 from "./menu-3.jpg"
import menu4 from "./menu-4.jpg"
import Products from "../Products/Products"

class BestCoffee extends Component {
  constructor() {
    super()
    this.state = {
      coffies: [
        {
          id: 0,
          image: menu1,
          title: "Coffee capuccino",
          text: "A small river named Duden flows by their place and supplies",
          price: "5.90"
        },
        {
          id: 1,
          image: menu2,
          title: "Coffee capuccino",
          text: "A small river named Duden flows by their place and supplies",
          price: "5.90"
        },
        {
          id: 2,
          image: menu3,
          title: "Coffee capuccino",
          text: "A small river named Duden flows by their place and supplies",
          price: "5.90"
        },
        {
          id: 3,
          image: menu4,
          title: "Coffee capuccino",
          text: "A small river named Duden flows by their place and supplies",
          price: "5.90"
        }
      ]
    }
  }

  render() {
    const { handlePage } = this.props
    const { coffies } = this.state
    return (
      <section>
        <Fade bottom distance={"75px"} duration={1000}>
          <TitleComponent 
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            goldTitle="Discover"
            whiteTitle="Best coffee sellers"
          />
        </Fade>
        <div className="coffies-products-container">
          <Products howMany={4} button={true} handlePage={handlePage} products={coffies} />
        </div>
      </section>
    )
  }
}

export default BestCoffee