import React from "react";
import "./carousel.css"
import Slider from "react-slick";
import Fade from "react-reveal/Fade"
import TitleComponent from "../TitleComponent/TitleComponent"
import bg1 from "./bg_1.jpg"
import bg2 from "./bg_2.jpg"
import bg3 from "./bg_3.jpg"
 
class Carousel extends React.Component {

  scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    })
  }

  render() {
    const { handlePage } = this.props
    const settings = {
      autoplay: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return (
      <div className="carousel">
        <Slider {...settings}>
            <div className="carousel-background">         
              <div className="carousel-img-container" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg1})`}}>
                <div className="carousel-overlay"></div>
                <Fade bottom distance={"75px"} duration={1000}>
                  <div className="carousel-content-container">
                    <TitleComponent 
                      goldTitle="Welcome"
                      whiteTitle="The best coffee testing experience"
                      text="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                    />
                    <div className="carousel-btns">
                      <button onClick={this.scrollToContact} className="carousel-btn carousel-btn-left">Book Table</button>
                      <button onClick={() => handlePage("menu")} className="carousel-btn carousel-btn-right">View Menu</button>
                    </div>
                  </div>
                  </Fade>
              </div>
            </div>
            <div className="carousel-background">             
              <div className="carousel-img-container" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg2})`}}>
                <TitleComponent 
                  goldTitle="Welcome"
                  whiteTitle="Amazing taste & beautiful place"
                  text="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                  />
                  <div className="carousel-btns">
                    <button onClick={this.scrollToContact} className="carousel-btn carousel-btn-left">Book Table</button>
                    <button onClick={() => handlePage("menu")} className="carousel-btn carousel-btn-right">View Menu</button>
                  </div>
              </div>
            </div>
            <div className="carousel-background">
              <div className="carousel-img-container" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg3})`}}>
                <TitleComponent 
                  goldTitle="Welcome"
                  whiteTitle="Creamy hot and ready to serve"
                  text="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                  />
                   <div className="carousel-btns">
                    <button onClick={this.scrollToContact} className="carousel-btn carousel-btn-left">Book Table</button>
                    <button onClick={() => handlePage("menu")} className="carousel-btn carousel-btn-right">View Menu</button>
                  </div>
              </div>
            </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel