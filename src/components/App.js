import '../App.css';
import React, { useState, useEffect } from "react";
import Intro from "./Intro"
import TheaterSelect from "./TheaterSelect";
import MovieSelect from "./MovieSelect";


function App() {
  const [theaterInfo, setTheaterInfo] = useState([])


  const handleBrokenScreen = (theater) => {
    fetch(`http://localhost:9292/theaters/${theater.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        number_of_screens: theater.number_of_screens - 1,
        name: theater.name,
        location: theater.location
      })
    })
  }

  const handleClosure = (theater) => {
    fetch(`http://localhost:9292/theaters/${theater.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        location: "CLOSED",
        name: theater.name,
        number_of_screens: theater.number_of_screens
      })
    })
  }

  useEffect(() => {
    fetch("http://localhost:9292/theaters")
      .then(r => r.json())
      .then(data => setTheaterInfo(data))
  }, [])


  return (
    <div>
      <Intro 
        theaterInfo={theaterInfo}
        handleClosure={handleClosure}
      />
      <TheaterSelect 
        theaterInfo={theaterInfo}
      />
      <MovieSelect 
        handleBrokenScreen={handleBrokenScreen}
      />
    </div>
  );
}

export default App;
