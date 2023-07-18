/* eslint-disable semi */
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SeriesDetail from '../pages/SeriesDetail'
import SeasonDetail from '../pages/SeasonDetail'

function RoutesIndex () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/serie/:id' element={<SeriesDetail />} />
      <Route path='/season/:idShow/:idSeason' element={<SeasonDetail />} />
    </Routes>
  )
}

export default RoutesIndex
