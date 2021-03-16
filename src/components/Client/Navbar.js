import React from 'react'
import { Link } from 'react-router-dom'
import { navbarlinks } from './Navlinks'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img />
      </div>
      <ul className='navbar__links'>
        {navbarlinks.map((link, i) => (
          <li key={i}>
            <Link to={link.route}>{link.linkname}</Link>
          </li>
        ))}
      </ul>
      <div className='hamburger__menu'>
        <div></div>
        <div></div>
        <div></div>
        <div className='container'></div>
      </div>
    </nav>
  )
}

export default Navbar
