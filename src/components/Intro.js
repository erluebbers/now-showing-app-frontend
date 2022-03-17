import '../App.css';
import React from "react";


function Intro( {theaterInfo, handleClosure} ) {

  const theaterList = theaterInfo.map(theater => {
    return (
      <div key={theater.id}>
        <li>{theater.name}</li> 
        <button onClick={() => handleClosure(theater)}>Report Closure</button>
      </div>)
  })


  return (
    <div className="intro">
      <h1>Now Showing App</h1>
      <h2>What movies are playing now in the major Movie Theaters of Seattle</h2>
      <p>Choose whether to find the right movie by exploring by Theater or by Movie. Check below to make sure your chosen theater is open and report closures below</p>
      <ul>
        {theaterList}
      </ul>
    </div>
  );
}

export default Intro;