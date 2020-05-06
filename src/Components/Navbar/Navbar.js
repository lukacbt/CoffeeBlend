import React, { Component } from "react"
import "./navbar.css"

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      sticky: false
    }
  }

  scrollListen = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        this.setState({ sticky: true })
      }else {
        this.setState({ sticky: false })
      }
    })
  }
  componentDidMount() {
    this.scrollListen()
  }

  componentWillUnmount() {
    clearInterval()
  }

  render() {
    const { page, handlePage } = this.props
    return (
      <div id="navbar" className={`columns navbar ${this.state.sticky ? "sticky-navbar" : ""}`}>
        <div className="column is-offset-2-desktop is-8-desktop navbar-container"> 
          <div className="navbar-left">
          <a href="#navbar"><p onClick={() => handlePage("home")} >Coffee <span>Blend</span></p></a>
          </div>
          <div className="navbar-right">
            <p>
              <a href="#navbar"><span onClick={() => handlePage("home")} className={page === "home" ? "active-nav" : ""}>Home</span></a>
              <a href="#navbar"><span onClick={() => handlePage("menu")} className={page === "menu" ? "active-nav" : ""}>Menu</span></a>
              <a href="#navbar"><span onClick={() => handlePage("services")} className={page === "services" ? "active-nav" : ""}>Services</span></a>
              <a href="#navbar"><span onClick={() => handlePage("about")} className={page === "about" ? "active-nav" : ""}>About</span></a>
              <a href="#navbar"><span onClick={() => handlePage("contact")} className={page === "contact" ? "active-nav" : ""}>Contact</span></a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar