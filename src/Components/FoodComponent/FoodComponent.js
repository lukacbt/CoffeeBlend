import React from "react"
import Fade from "react-reveal/Fade"
import "./foodcomponent.css"


const FoodComponent = ({ food, title, number }) => {
  return (
      <div className="full-menu">
        <Fade bottom distance={"75px"} duration={1000}>
          <p className="full-menu-title">{title}</p>
        </Fade>
          {food.map((dish, i)=> {
            if(i < number){
              return(
                <Fade bottom distance={"75px"} duration={1000}>
                <div className="full-menu-container">
                  <div className="full-menu-image" style={{backgroundImage: `url(${dish.image})`}}></div>
                  <div className="full-menu-name"> 
                    <div className="full-menu-name-container">
                      <div className="full-menu-dish-name">
                        <li><span> {dish.title} </span> <span> ${dish.price} </span> </li>  
                      </div> 
                    </div>
                    <p className="full-menu-dish-text">{dish.text}</p>  
                  </div>   
                </div>
                </Fade>
              )
            }
          })}      
      </div>
  )
}

export default FoodComponent