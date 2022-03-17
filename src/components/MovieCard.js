import '../App.css';
import React from "react";


function MovieCard( {theater, handleBrokenScreen} ) {
  const { id, name, location, number_of_screens} = theater

  

  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>location: {location}</p>
      <p>Number of Screens: {number_of_screens} </p>
      <button onClick={() => handleBrokenScreen(theater)}>Report Broken Screen</button>
    </div>
  );
}

export default MovieCard;