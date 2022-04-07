import '../App.css';
import React from "react";
import MovieCard from "./MovieCard"


function MovieList( {movieDisplay} ) {

  const theatersByMovie = movieDisplay.map(theater => {
    return <MovieCard theater={theater} key={theater.id}/>
  })

return (
  <div>
    {theatersByMovie}
  </div>
  );
}

export default MovieList;