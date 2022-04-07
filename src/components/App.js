import '../App.css';
import React, { useState, useEffect } from "react";
import Intro from "./Intro"
import TheaterSelect from "./TheaterSelect";
import MovieSelect from "./MovieSelect";


function App() {
  const [theaterInfo, setTheaterInfo] = useState([])
  const [movieInfo, setMovieInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/theaters")
      .then(r => r.json())
      .then(data => setTheaterInfo(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then(r => r.json())
      .then(data => setMovieInfo(data))
  }, [])

  const handleAddMovie = (newMovie) => {
    setMovieInfo([...movieInfo, newMovie])
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
    .then(r => r.json())
    .then((updatedTheater) => updateLocation(updatedTheater))
  }

  const updateLocation = (updatedTheater) => {
    const updatedTheaters = theaterInfo.map((theater) => {
      if (theater.id === updatedTheater.id) {
        return updatedTheater
      } else {
        return theater
      }
    })
    setTheaterInfo(updatedTheaters)
  }

  const theaterDropdown = theaterInfo.map(theater => {
    return <option key={theater.id} value={theater.id}>{theater.name}</option>
  })

  return (
    <div>
      <Intro 
        theaterInfo={theaterInfo}
        handleClosure={handleClosure}
        theaterDropdown={theaterDropdown}
        onAddMovie={handleAddMovie}
      />
      <TheaterSelect 
        theaterInfo={theaterInfo}
        theaterDropdown={theaterDropdown}
      />
      <MovieSelect 
        movieInfo={movieInfo}
      />
    </div>
  );
}

export default App;
