import React, { Component } from "react"
import Fade from "react-reveal"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./customers.css"
import person1 from "./person_3.jpg"
import person2 from "./person_2.jpg"
import person3 from "./person_4.jpg"

class Customers extends Component {
  constructor() {
    super()
    this.state = {
      comments: [
        {
          id: 0,
          comment: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
          customer: "Louise Kelly ",
          role: "Illustrator Designer",
          image: person1
        },
        {
          id: 1,
          comment: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”",
          customer: "Louise Kelly ",
          role: "Illustrator Designer",
          image: person2
        },
        {
          id: 2,
          comment: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.”",
          customer: "Louise Kelly ",
          role: "Illustrator Designer",
          image: person3
        },
        {
          id: 3,
          comment: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.”",
          customer: "Louise Kelly ",
          role: "Illustrator Designer",
          image: person2
        },
        {
          id: 4,
          comment: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.”",
          customer: "Louise Kelly ",
          role: "Illustrator Designer",
          image: person1
        }
      ]
    }
  }

  render() {
    const { comments } = this.state
    return(
      <section className="customers">
        <Fade bottom distance={"75px"} duration={1000}>
          <TitleComponent 
            goldTitle="Testimony"
            whiteTitle="Customers says"
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
        </Fade>
        <div className="customer-comment-container">
          {comments.map((comment, index) => {
            return(
              <Fade key={comment.id} bottom distance={"75px"} duration={1000}>
                <div className="customer-comment-div" style={index % 2 === 0 ? {backgroundColor: "#c49b63"} : {backgroundColor: "#b18c59"}}> 
                  <p className="customers-comment"> {comment.comment} </p>
                  <div className="customers-img">
                    <img src={comment.image} width="100%" height="100%" alt="Customer" />
                  </div>
                  <div className="customers-paragraph">
                    <p className="customers-name"> {comment.customer} </p>
                    <p className="customers-role"> {comment.role} </p>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Customers