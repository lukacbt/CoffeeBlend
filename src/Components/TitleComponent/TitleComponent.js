import React from "react"
import "./titlecomponent.css"
import 'bulma/css/bulma.css'

const TitleComponent = ({goldTitle, whiteTitle, text}) => {
  return (
    <div className="columns">
      <div className="column title-center">
        <div style={{maxWidth: "635px", margin: "0 auto"}}>
          <h2 className="component-title"><span className="gold-title"> {goldTitle} </span> {whiteTitle} </h2>
          <p className="component-text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default TitleComponent