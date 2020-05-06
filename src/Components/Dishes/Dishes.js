import React, { Component } from "react"
import Fade from "react-reveal"
import TitleComponent from "../TitleComponent/TitleComponent"
import Products from "../Products/Products"
import mainDish from "./mainDish"
import drinks from "./drinks"
import desserts from "./desserts"
import "./dishes.css"

class Dishes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dish: "mainDish",
      dishes: mainDish
    }
  }

  handleDishes = (e) => {
    console.log(this.props.howMany)
    const { name } = e.target
    if (name === "mainDish"){
      this.setState({ dishes: mainDish, dish: name })
    }else if (name === "drinks") {
      this.setState({ dishes: drinks, dish: name })
    }else if (name === "desserts") {
      this.setState({ dishes: desserts, dish: name })
    }
  }

  render() {
    const { button, handlePage, howMany } = this.props
    const { dishes, dish } = this.state
    return(
      <section>
        <Fade bottom distance={"75px"} duration={1000}>
          <TitleComponent 
            goldTitle="Discover"
            whiteTitle="Our products"
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
        </Fade>
        <Fade bottom distance={"100px"} duration={1000}>
          <div className="dishes-btns">
            <button className="dishes-btn" onClick={this.handleDishes} name="mainDish" style={dish === "mainDish" ? {backgroundColor: "#c49b63", color: "black"} : {backgroundColor: "transparent"}}>Main Dish</button>
            <button className="dishes-btn" onClick={this.handleDishes} name="drinks" style={dish === "drinks" ? {backgroundColor: "#c49b63", color: "black"} : {backgroundColor: "transparent"}}>Drinks</button>
            <button className="dishes-btn" onClick={this.handleDishes} name="desserts" style={dish === "desserts" ? {backgroundColor: "#c49b63", color: "black"} : {backgroundColor: "transparent"}}>Desserts</button>
          </div>
          <div className="dishes-products-container">
            <Fade spy={dish}>
              <Products products={dishes} button={button} handlePage={handlePage} howMany={howMany} />
            </Fade>
          </div>
        </Fade>
      </section>
    )
  }
}

export default Dishes