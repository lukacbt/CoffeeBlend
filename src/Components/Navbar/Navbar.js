import React, { Component } from "react"
import { ReactComponent as Burger } from "./burger-menu.svg"
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
    const { page, handlePage, collapse, collapseNavbar } = this.props
    return (
        <div id="navbar" className={`columns navbar ${this.state.sticky ? "sticky-navbar" : ""}`}>
          <div className="column is-offset-2-desktop is-8-desktop is-12-tablet navbar-container"> 
            <div className="navbar-left">
            <p onClick={() => handlePage("home")} >Coffee <span>Blend</span></p>
            </div>
            <div className="navbar-right">
              <p>
                <span onClick={() => handlePage("home")} className={page === "home" ? "active-nav" : ""}>Home</span>
                <span onClick={() => handlePage("menu")} className={page === "menu" ? "active-nav" : ""}>Menu</span>
                <span onClick={() => handlePage("services")} className={page === "services" ? "active-nav" : ""}>Services</span>
                <span onClick={() => handlePage("about")} className={page === "about" ? "active-nav" : ""}>About</span>
                <span onClick={() => handlePage("contact")} className={page === "contact" ? "active-nav" : ""}>Contact</span>
              </p>
            </div>
            <div onClick={collapseNavbar} className="hamburger-menu">
              <Burger className="burger" width="20px" />
              <span>Menu</span>
            </div>
          </div>
          <div className={`scroll-burger-nav ${collapse ? "scrolled-burger" : ""}`}>
            <p >
              <a className="burger-nav-span"><span className="burger-nav-span" onClick={() => handlePage("home")} className={page === "home" ? "active-nav" : ""}>Home</span></a>
              <a className="burger-nav-span"><span className="burger-nav-span" onClick={() => handlePage("menu")} className={page === "menu" ? "active-nav" : ""}>Menu</span></a>
              <a className="burger-nav-span"><span className="burger-nav-span" onClick={() => handlePage("services")} className={page === "services" ? "active-nav" : ""}>Services</span></a>
              <a className="burger-nav-span"><span className="burger-nav-span" onClick={() => handlePage("about")} className={page === "about" ? "active-nav" : ""}>About</span></a>
              <a className="burger-nav-span"><span className="burger-nav-span" onClick={() => handlePage("contact")} className={page === "contact" ? "active-nav" : ""}>Contact</span></a>
            </p>
          </div>
        </div>
    )
  }
}

export default Navbar