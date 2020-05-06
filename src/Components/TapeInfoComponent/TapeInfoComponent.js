import React, { Component } from "react"
import "./tapeinfocomponent.css"
import 'bulma/css/bulma.css'

class TapeInfoComponent extends Component {
  render() {
    const { tag, title, text } = this.props
    const TagName = tag
    return (
      <div className="tape-component">
        <div>
          <TagName className="tape-icon" />
        </div>
        <div className="tape-info">
        <h3> {title} </h3>
          <p> {text} </p>
        </div>
      </div>
    )
  }
}

export default TapeInfoComponent