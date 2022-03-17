import '../App.css';
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList"


function MovieSelect( {handleBrokenScreen}) {
  const [movieInfo, setMovieInfo] = useState([])
  const [movieDisplay, setMovieDisplay] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then(r => r.json())
      .then(data => setMovieInfo(data))
  }, [])

  const handleChange = (e) => {
    const movie = movieInfo.find(movie => movie.id === parseInt(e.target.value))
    setMovieDisplay(movie.theaters)
  }

  const dropdownSelects = movieInfo.map(movie => {
    return <option value={movie.id} key={movie.id}>{movie.name}</option>
  })

  return (
    <div className="form-box">
        <h3>Find by Movie:</h3>
        <select name="theater" onChange={handleChange}>
        <option value="Select Theater">Select Theater</option>
          {dropdownSelects}
        </select>
        <MovieList movieDisplay={movieDisplay} handleBrokenScreen={handleBrokenScreen}/>
    </div>
  );
}

export default MovieSelect;