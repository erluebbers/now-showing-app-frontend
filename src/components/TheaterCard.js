import '../App.css';
import React from "react";


function TheaterCard( {movie} ) {
  const { name, opening_date, rating} = movie

  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Opening Date: {opening_date}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default TheaterCard;