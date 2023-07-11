import React, { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>TV Shows</h1>
      <div className='card-container'>
        {shows.map((show) => (
          <div className='card' key={show.id}>
            <img src={show.image.medium} alt={show.name} className='card-image' />
            <h2 className='card-title'>{show.name}</h2>
            <p className='card-summary'>{show.summary}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
