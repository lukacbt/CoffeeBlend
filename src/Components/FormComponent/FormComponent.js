import React from "react"
import "./formcomponent.css"

const FormComponent = ({background, givenClass}) => {
  return (
    <div className="book-side-container" style={{padding: "0 7% 0 1%", backgroundColor: background}}>
      <div>
        <p className="book-paragraph">Book a Table</p>
      </div>
      <div className="book-form-div">
        <input placeholder="First Name" className="book-form" type="text" />
        <input placeholder="Last Name" className="book-form" type="text" />
      </div>
      <div className="book-form-div">
        <input placeholder="Date" className="book-form" type="text" onFocus={(e) => e.target.type = 'date'} />
        <select name="time" className="book-form">
          <option value="">Time</option>
          <option value="16:00">16:00pm</option>
          <option value="16:30">16:30pm</option>
          <option value="17:00">17:00pm</option>
          <option value="17:30">17:30pm</option>
          <option value="18:00">18:00pm</option>
          <option value="18:30">18:30pm</option>
          <option value="19:00">19:00pm</option>
          <option value="19:30">19:30pm</option>
          <option value="20:00">20:00pm</option>
          <option value="20:30">20:30pm</option>
          <option value="21:00">21:00pm</option>
          <option value="21:30">21:30pm</option>
          <option value="22:00">22:00pm</option>
        </select>
        <input placeholder="Phone" className="book-form" type="text" />
      </div>
      <div className="book-form-div">
        <textarea placeholder="Message" className="book-form" />
        <button className={givenClass}>Appoitment</button>    
      </div>
    </div>
  )
}

export default FormComponent