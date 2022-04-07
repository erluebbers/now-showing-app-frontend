import '../App.css';
import React, { useState } from "react";
import TheaterList from "./TheaterList"


function TheaterSelect( {theaterInfo, theaterDropdown} ) {
  const [theaterDisplay, setTheaterDisplay] = useState([])

  const handleChange = (e) => {
    const theater = theaterInfo.find(theater => theater.id === parseInt(e.target.value))
    setTheaterDisplay(theater.movies)
  }

  return (
    <div className="form-box">
        <h3>Find by Theater:</h3>
        <select name="theater" onChange={handleChange}>
          <option value="Select Theater">Select Theater</option>
          {theaterDropdown}
        </select>
        <TheaterList theaterDisplay={theaterDisplay}/>
    </div>
  );
}

export default TheaterSelect;