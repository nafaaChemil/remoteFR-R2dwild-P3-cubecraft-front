import React from 'react'
import {navbar} from '../components/navbarLink'

import './NavBarAdmin.scss'

function NavBarAdmin() {
    return (
        <div className="admin_navbarcontainer">
            <ul className="admin_navbar_link">
            {navbar.map((link, i) => (
                <li key={i}>
                    <a href={link.route}>{link.linkname}</a>    
                </li>
            ))}
            </ul>
        </div>
    )
}

export default NavBarAdmin
