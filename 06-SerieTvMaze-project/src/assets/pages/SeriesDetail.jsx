/* eslint-disable semi */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CastList from '../components/CastList'
import SeasonDropList from '../components/SeasonDropList'
import CardInfo from './components/CardInfo'

const SeriesDetail = () => {
  const [series, setSeries] = useState(null)
  const [serie, setSerie] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setSeries(data);

        // Ahora, realizamos la segunda llamada de API para obtener información del elenco
        fetch(`https://api.tvmaze.com/shows/${id}/cast`)
          .then(response => response.json())
          .then(results => {
            console.log(results);
            setSerie(results);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!series) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{series?.name}</h3>
          <br />
          <div className='row'>
            <div className='col'>
              <CardInfo
                image={series?.image.medium}
                title={series?.name}
                info={series?.summary}
                text=''
                cardSize='auto'
                imageSize='auto'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div
                className='card border-secondary mb-3'
                style={{ maxWidth: '210px' }}
              >
                <div className='card-header'>Show Info</div>
                <div className='card-body'>
                  <p className='text-body-secondary'>
                    <small>Network: {serie?.network.name}</small>
                  </p>
                  <p>
                    <small className='text-body-secondary'>
                      Schedule: {serie?.schedule.time} on {serie?.schedule.days}
                    </small>
                  </p>
                  <p>
                    <small className='text-body-secondary'>
                      Status: {serie?.status}
                    </small>
                  </p>
                  <p>
                    <small className='text-body-secondary'>
                      Rating: {serie?.rating.average}
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-8'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src={series?.image?.medium} alt={series?.name} className='img-fluid' />
                  <SeasonDropList id={id} />
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
                <div className='row'>
                  <div className='col'>
                    <br />
                    <h5>Cast</h5>
                    <CastList id={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeriesDetail
