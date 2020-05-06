import React from "react"
import "./about.css"
import 'bulma/css/bulma.css'
import Fade from "react-reveal/Fade"

const About = () => {
  return (
    <section>
      <div className="columns about">
        <div className="column is-half about-left">
        </div>
        <div className="column is-half about-right">
          <div className="our-story">
            <Fade bottom distance={"75px"} duration={1000}>
              <p className="title"> <span className="discover">Discover</span>OUR STORY</p>
            </Fade>
            <p className="text">On her way she met a copy. 
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and 
              everything that was left from its origin would be the word "and" and the Little 
              Blind Text should turn around 
              and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until 
              a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, 
              where they abused her for their.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About