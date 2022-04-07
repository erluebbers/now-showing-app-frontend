import '../App.css';
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList"


function MovieSelect( {movieInfo}) {
  const [movieDisplay, setMovieDisplay] = useState([])

  const handleChange = (e) => {
    const movie = movieInfo.find(movie => movie.id === parseInt(e.target.value))
    setMovieDisplay(movie.theaters)
  }

  const movieDropdown = movieInfo.map(movie => {
    return <option value={movie.id} key={movie.id}>{movie.name}</option>
  })

  return (
    <div className="form-box">
        <h3>Find by Movie:</h3>
        <select name="theater" onChange={handleChange}>
        <option value="Select Theater">Select Movie</option>
          {movieDropdown}
        </select>
        <MovieList movieDisplay={movieDisplay}/>
    </div>
  );
}

export default MovieSelect;