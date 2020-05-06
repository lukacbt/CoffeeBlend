import React, { Component } from "react"
import "./gallery.css"
import 'bulma/css/bulma.css'
import Fade from "react-reveal/Fade"
import gallery1 from "./gallery-1.jpg"
import gallery2 from "./gallery-2.jpg"
import gallery3 from "./gallery-3.jpg"
import gallery4 from "./gallery-4.jpg"
import { ReactComponent as Search} from "./search3.svg"

class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      chosenImg: "",
      galleryInfo: [
        {
          id: 0,
          image: gallery1,
          delay: 0
        },
        {
          id: 1,
          image: gallery2,
          delay: 100
        },
        {
          id: 2,
          image: gallery3,
          delay: 200
        },
        {
          id: 3,
          image: gallery4,
          delay: 300
        }
      ]
    }
  }

  handleGallery = (e, name, isClipped) => {
    document.getElementsByTagName("html")[0].className = isClipped
    this.setState({ chosenImg: name })
  }

  render() {
    const { galleryInfo, chosenImg } = this.state
    return (
      <section>
        <div className="columns gallery">
          <div className="column is-12 gallery-container">
            {galleryInfo.map(image => {
              return(
                <Fade bottom delay={image.delay} distance="75px" key={image.id}>
                  <div onClick={(e) => this.handleGallery(e, image.image, "is-clipped")} className="gallery-img-container" style={{backgroundImage: `url(${image.image})`}}>
                    <div className="search-box"></div>
                    <Search className="search-icon" />
                  </div>            
                </Fade>
              )
            })}
          </div>
          <div className={`modal ${chosenImg.length ? "is-active" : ""}`}>
            <div onClick={(e) => this.handleGallery(e, "", "")} name="" className="modal-background"></div>
            <div className="modal-content">
              <img src={chosenImg} alt="ChosenImage" />
            </div>
            <button className="modal-close is-large" onClick={(e) => this.handleGallery(e, "", "")} name="" aria-label="close"></button>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery