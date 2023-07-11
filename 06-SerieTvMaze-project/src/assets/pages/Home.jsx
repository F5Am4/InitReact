import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [series, setSeries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.log(error))
  }, [])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredSeries = series.filter(serie => {
    return serie.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <div className='container'>
        <h1>Series</h1>

        <form className='form-inline my-2 my-lg-0 w-75'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Enter name'
            value={searchTerm}
            onChange={handleInputChange}
          />
        </form>

        <div className='row'>
          {filteredSeries.map((serie, index) => (
            <div className='col' key={index}>
              <img src={serie?.image?.medium} alt='' />

              <Link to={`/serie/${serie.id}`}>
                <p>{serie?.name}</p>
              </Link>

              <div className='card-body'>
                <h5 className='card-title'>{serie.name}</h5>
                <p className='card-text'>{serie.summary}</p>
                <a href='#' className='btn btn-primary'>Buscar Serie</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
