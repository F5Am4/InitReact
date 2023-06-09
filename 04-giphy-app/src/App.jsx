import { useState, useEffect } from 'react'
import ImageCard from './assets/components/ImageCard'
import SearchBar from './assets/components/SearchBar'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY // Entorno local de una variable. Aquí estará segura tu APIkey

  // Las llamadas a API normalmente se hacen en el useEffect
  // Usaremos useEffect con un arreglo de dependencias vacío para que se ejecute solo una vez
  // Revisar las funciones de las APIKEY ya que sendSaerch y useEffect usan de distinta manera. senSearch usa el API con endpoint

  const sendSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      .then(response => response.json())
      .then(results => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)
      .then(response => response.json())
      .then(results => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <div className='App'>
        <SearchBar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {
            gifs.map(gif => (
              <ImageCard
                key={gif.id}
                url={gif.images.fixed_height.url}
                title={gif.title}
              />
            ))
         }
        </div>
      </div>
    </>
  )
}

export default App
