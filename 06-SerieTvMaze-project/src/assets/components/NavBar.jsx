import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <NavLink className='navbar-brand' to='/'>Series</NavLink>

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' activeClassName='active' to='/about'>Acerca de</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
