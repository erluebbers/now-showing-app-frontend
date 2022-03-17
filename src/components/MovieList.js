import '../App.css';
import React from "react";
import MovieCard from "./MovieCard"


function MovieList( {movieDisplay, handleBrokenScreen} ) {

  const theatersbyMovie = movieDisplay.map(theater => {
    return <MovieCard theater={theater} key={theater.id} handleBrokenScreen={handleBrokenScreen}/>
  })

return (
  <div>
    {theatersbyMovie}
  </div>
  );
}

export default MovieList;