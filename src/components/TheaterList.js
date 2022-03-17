import '../App.css';
import React from "react";
import TheaterCard from "./TheaterCard"

function TheaterList( {theaterDisplay} ) {

  const moviesByTheater = theaterDisplay.map(movie => {
        return <TheaterCard movie={movie} key={movie.id}/>
      })

  return (
    <div>
      {moviesByTheater}
    </div>
  );
}

export default TheaterList;