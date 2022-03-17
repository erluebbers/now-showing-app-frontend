import '../App.css';
import React, { useState, useEffect } from "react";
import TheaterList from "./TheaterList"


function TheaterSelect( {theaterInfo} ) {
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
          <option value="1">Seattle Downtown Multiplex</option>
          <option value="2">Seattle Uptown Monoplex</option>
          <option value="3">Regal 15</option>
          <option value="4">AMC Madison Park</option>
        </select>
        <TheaterList theaterDisplay={theaterDisplay}/>
    </div>
  );
}

export default TheaterSelect;