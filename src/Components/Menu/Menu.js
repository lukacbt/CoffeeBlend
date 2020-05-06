import React from "react"
import "./menu.css"
import 'bulma/css/bulma.css'
import Fade from "react-reveal/Fade"
import menu1 from "./menu-1.jpg"
import menu2 from "./menu-2.jpg"
import menu3 from "./menu-3.jpg"
import menu4 from "./menu-4.jpg"

const Menu = ({ handlePage }) => {
  return (
    <section>
      <div className="columns menu">

          <div className="column is-offset-2 is-4 menu-left">
            <Fade bottom distance={"100px"} duration={1000}>
              <div className="menu-left-content-container">
                <p className="title"> <span className="discover">Discover</span>OUR STORY</p>
                <div className="menu-left-text-container">
                  <p className="text">Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia, there live the blind texts. 
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </p>
                  <button onClick={() => handlePage("menu")} className="full-menu-btn">View Full Menu</button>
                </div>
              </div>
            </Fade>
          </div>

          <div className="column is-4 menu-right">
            <div className="menu-right-container1">
              <div className="menu-img-left">
                <div className="bcg-container" style={{backgroundImage: `url(${menu1})`}}></div>
              </div>
              <div className="menu-img-left">
                <div className="bcg-container" style={{backgroundImage: `url(${menu3})`}}></div>
              </div>
            </div>

            <div className="menu-right-container2">
              <div className="menu-img-right">
                <div className="bcg-container" style={{backgroundImage: `url(${menu2})`}}></div>
              </div>
              <div className="menu-img-right">
                <div className="bcg-container" style={{backgroundImage: `url(${menu4})`}}></div>
              </div>
            </div>

          </div>
      </div>
    </section>
  )
}

export default Menu