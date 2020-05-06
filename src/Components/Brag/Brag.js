import React, { Component } from "react"
import "./brag.css"
import 'bulma/css/bulma.css'
import Fade from "react-reveal/Fade"
import CountUp from "react-countup"
import {ReactComponent as CoffeeCup} from './coffee-cup.svg';

class Brag extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      bragInfo: [
        {
          number: 100,
          subTitle: "Coffee Branches",
          delay: 0
        },
        {
          number: 85,
          subTitle: "Number of Awards",
          delay: 100
        },
        {
          number: 10567,
          subTitle: "Happy Customers",
          delay: 200
        },
        {
          number: 900,
          subTitle: "Staff",
          delay: 300
        }
      ]
    }
  }

  onReveal = () => {
    this.setState({ isVisible: true })
  }

  render() {
    const { bragInfo, isVisible } = this.state
    return (
      <section className="brags-section">
        <div className="columns brags">
          <div className="column is-offset-2 is-offset-0-touch is-8-desktop is-12-touch brags-list">
            {bragInfo.map(brag => {
              return(
                <div key={brag.subTitle} className="column is-3-desktop">
                <Fade bottom distance={"75px"} duration={1000} delay={brag.delay} onReveal={this.onReveal}>
                  <div className="each-brag">
                    <div className="brag-img-container">
                      <div className="brag-img"></div>
                      <CoffeeCup className="coffee-cup" />
                    </div>
                    <CountUp className="brag-number" start={isVisible ? null : 0} separator="," duration={12} end={brag.number} />
                    <p className="brag-subtitle"> {brag.subTitle} </p>
                  </div>
                </Fade>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Brag