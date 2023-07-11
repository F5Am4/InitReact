import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SeriesDetail = () => {
  const [series, setSeries] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.log(error))
  }, [id])

  if (!series) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{series?.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={series?.image?.medium} alt={series?.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Language</td>
                    <td>{series?.language}</td>
                  </tr>
                  <tr>
                    <td>Premiered</td>
                    <td>{series?.premiered}</td>
                  </tr>
                  <tr>
                    <td>Genres</td>
                    <td>{series?.genres.join(', ')}</td>
                  </tr>
                  <tr>
                    <td>Summary</td>
                    <td>{series?.summary}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeriesDetail
