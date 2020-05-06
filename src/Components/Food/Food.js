import React from "react"
import "./food.css"
import FoodComponent from "../FoodComponent/FoodComponent"
import mainDish from "../Dishes/mainDish"
import drinks from "../Dishes/drinks"
import desserts from "../Dishes/desserts"


const Food = () => {
  return (
    <section>
      <div className="food">
        <div className="columns">  
          <div className="column  is-half food-container food-left">
            <FoodComponent title="Starter" food={mainDish} number={4} />
          </div>
          <div className="column is-half food-container food-right">
            <FoodComponent title="Main Dish" food={mainDish} number={4} />
          </div>
        </div>
      
      
        <div className="columns">
          <div className="column is-half food-container food-left">
            <FoodComponent title="Desserts" food={desserts} number={4} />
          </div>
          <div className="column is-half food-container food-right">
            <FoodComponent title="Drinks" food={drinks} number={4} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Food