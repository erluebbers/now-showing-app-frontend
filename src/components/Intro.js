import '../App.css';
import React, { useState } from "react";


function Intro( {theaterInfo, handleClosure, theaterDropdown, onAddMovie} ) {
  const initialState = {
      name: "",
      opening_date: 2022,
      rating: "",
      theater_id: null
    }
  
  const [formData, setFormData] = useState(initialState)

  const theaterClosureList = theaterInfo.map(theater => {
    return (
      <div key={theater.id}>
        <li>{theater.name}: {theater.location}</li> 
        <button onClick={() => handleClosure(theater)}>Report Closure</button>
      </div>)
  })

  const handleCreateMovie = (event) => {
    event.preventDefault()
    fetch(`http://localhost:9292/movies`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(movie => {
      onAddMovie(movie)
      setFormData(initialState)
    })
    event.target.reset()
  }

  const handleChange = (event) => {
    const name = event.target.name
    let value = event.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="intro">
      <h1>Now Showing App</h1>
      <h2>What movies are playing now in the major Movie Theaters of Seattle</h2>
      <p>Choose whether to find the right movie by exploring by Theater or by Movie. Check below to make sure your chosen theater is open and report closures below</p>
      <ul>
        {theaterClosureList}
      </ul>
      <h3>Have you noticed a new movie playing at one of our local theaters? Report it using the below form to keep other users updated!</h3>
      <form onSubmit={handleCreateMovie} id="new_movie">
        <input 
          type="text"
          name="name"
          placeholder="Enter Movie Title..."
          onChange={handleChange}
          value={formData.name}
        />
        <select onChange={handleChange} name="rating">
          <option value="rating">Select Rating</option>
          <option value="NR">NR</option>
          <option value="R">R</option>
          <option value="PG-13">PG-13</option>
          <option value="PG">PG</option>
          <option value="G">G</option>
        </select>
        <select onChange={handleChange} name="theater_id">
          <option value="Select Theater">Select Theater</option>
          {theaterDropdown}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Intro;