import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])

  // Las llamadas a API normalmente se hacen en el useEffect
  // Usaremos useEffect con un arreglo de dependencias vacío para que se ejecute solo una vez

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=f2hXUfJLRjCD4MHB5ge6hefZID58NM3T&limit=30&offset=0&rating=g&bundle=messaging_non_clips')
    .then(Response => Response.json())
    .then(results => {
      console.log(results.data)
      setGifs(results.data)
    }).catch((error) => {
      console.error(error)
    })
  }, [])
  return (
    <>
      <h1>Giphy App</h1>
    </>
  )
}

export default App
