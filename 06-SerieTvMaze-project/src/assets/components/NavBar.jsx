import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <nav
        className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <NavLink className='navbar-brand' to='/'>Series</NavLink>

        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item px-2'>
            <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink>
            <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink>
          </li>
          <NavLink className='nsv-btn' to='/top'>Top</NavLink>
        </ul>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            SeriesToWatch
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link active' aria-current='page' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>Acerca de</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar
