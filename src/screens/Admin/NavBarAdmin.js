import React from 'react'
import { navbar } from '../../components/Admin/navbarLink'
import { Link } from 'react-router-dom'
import './styles/NavBarAdmin.scss'

function NavBarAdmin() {
  return (
    <div className='admin_navbarcontainer'>
      <ul className='admin_navbar_link'>
        {navbar.map((link, i) => (
          <li key={i}>
            <Link to={link.route}>{link.linkname}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBarAdmin
