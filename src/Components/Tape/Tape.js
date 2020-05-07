import React from "react"
import "./tape.css"
import 'bulma/css/bulma.css'
import Fade from "react-reveal/Fade"
import TapeInfoComponent from "../TapeInfoComponent/TapeInfoComponent"
import FormComponent from "../FormComponent/FormComponent"
import {ReactComponent as Target} from "./logo1.svg"
import {ReactComponent as Phone} from "./logo2.svg"
import {ReactComponent as Clock} from "./logo3.svg"

const Tape = () => {
  return (
    <section>
      <div className="columns tape">
        <div className="column is-offset-1-desktop is-7-desktop is-8-tablet is-12-mobile tape-container">
          <Fade bottom distance={"75px"}>
            <TapeInfoComponent
              tag={Phone}
              title="+385 95 5999 518"
              text="A small river named Duden flows by their place and supplies."
            />
          </Fade>
          <Fade bottom distance={"75px"} delay={100}>
            <TapeInfoComponent
              tag={Target}
              title="198 West 21th Street"
              text="203 Fake St. Mountain View, San Francisco, California, USA"
            />
          </Fade>
          <Fade bottom distance={"75px"} delay={200}>
            <TapeInfoComponent
              tag={Clock}
              title="Open Monday-Friday"
              text="8:00am - 11:00pm"
            />
          </Fade>
        </div>
        <div className="tape-form column is-4">
          <FormComponent 
            background="#c49b63"
            givenClass="table-form-btn"
          />
        </div>
      </div>
    </section>
  )
}

export default Tape