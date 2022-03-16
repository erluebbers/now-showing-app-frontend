import '../App.css';
import React, { useState } from "react";
import TheaterList from "./TheaterList"


function TheaterForm() {
  const [theaterInfo, setTheaterInfo] = useState([])
  const [theaterId, setTheaterId] = useState(0)  

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/theaters/${theaterId}`)
      .then(r => r.json())
      .then(data => {
        setTheaterInfo(data)
        console.log(theaterInfo)
    })
  }

  function handleChange(e) {
    setTheaterId(parseInt(e.target.value))
  }


  return (
    <div className="form-box">
      <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)}>
        <h3>Find by Theater:</h3>
        <select name="theater">
          <option value="Select Theater">Select Theater</option>
          <option value="1">Seattle Downtown Multiplex</option>
          <option value="2">Seattle Uptown Monoplex</option>
          <option value="3">Regal 15</option>
          <option value="4">AMC Madison Park</option>
        </select>
        <input
          type="submit"
          name="submit"
          value="Find Movies"
        />
      </form>
      {theaterInfo === [] ? null : <TheaterList />}
    </div>
  );
}

export default TheaterForm;