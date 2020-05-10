import React from "react"
import "./products.css"

const Products = ({ products, handlePage, howMany, button }) => {
  return (
    <div className="columns">
      <div className="column product-menu">
        {products.map((product, i) => {
          if(i < howMany){
          return(
            <div key={product.id} className="product-container">
              <div className="products-img-container" style={{backgroundImage: `url(${product.image})`}}></div>
              <div>
                <h3 className="product-title"> {product.title} </h3>
                <p className="product-text"> {product.text} </p>
                <p className="product-price"> ${product.price} </p>
                <button style={button ? {display: "inline"} : {display: "none"}} onClick={() => handlePage("menu")} className="product-btn"> See More </button>
              </div>
            </div>
           )
        }})}
      </div>
    </div>
  )
}

export default Products