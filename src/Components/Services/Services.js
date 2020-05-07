import React, { Component } from "react"
import "./services.css"
import 'bulma/css/bulma.css'
import Fade from "react-reveal/Fade"
import order from "./order.svg"
import coffeeBean from "./coffee-beans.svg"
import delivery from "./delivery-truck.svg"

class Services extends Component {
  constructor() {
    super()
    this.state = {
      servicesInfo: [
        {
          image: order,
          title: "Easy to order",
          text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          delay: 0
        },
        {
          image: delivery,
          title: "Fastest delivery",
          text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          delay: 100
        },
        {
          image: coffeeBean,
          title: "Quality coffee",
          text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          delay: 200
        }
      ]
    }
  }

  render() {
    const { servicesInfo } = this.state
    return (
      <section>
        <div className="columns services">
          <div className="column is-offset-2-desktop is-offset-0-tablet is-8-desktop is-12-tablet services-list">
            {servicesInfo.map(service => {
              return(
                <Fade key={service.title} bottom distance={"100px"} duration={1000} delay={service.delay}>
                  <div className="each-service">
                    <div className="service-img-container">
                      <img src={service.image} className="service-img" width="60px" height="auto" alt="Service" />
                    </div>
                    <p className="service-title"> {service.title} </p>
                    <p className="service-text"> {service.text} </p>
                  </div>
                </Fade>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Services