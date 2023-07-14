import React, { useEffect, useState } from 'react'
import CastList from './CastList'

const CastList = ({ id }) => {
  const [cast, setCast] = useState([])
  const cardSize = 280
  const imageSize = 90

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        const results = await response.json()
        setCast(results)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCast()
  }, [id])

  return (
    <div className='container-sm text-center'>
      <div className='row row-cols-auto'>
        {cast.map((actor, index) => (
          <CardInfo
            key={index}
            image={actor.person?.image?.medium}
            title={actor.person?.name}
            info=''
            text={`as ${actor.character?.name}`}
            cardSize={cardSize}
            imageSize={imageSize}
          />
        ))}
      </div>
    </div>
  )
}

export default CastList
