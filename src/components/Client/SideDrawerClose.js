import { Link } from 'react-router-dom'
import { navbarlinks } from './Navlinks'
import NavBarClose from './NavBarClose'

export default function SideDrawer({ show, click }) {
  const sideDrawerClass = ['sidedrawer']
  if (show) {
    sideDrawerClass.push('show')
  }

  function closeMenu() {
    const menu = document.getElementsByClassName('sideDrawerClass')
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <NavBarClose close={closeMenu} />
      <ul className='sidedrawer__links' onClick={click}>
        {navbarlinks.map((link, i) => (
          <li key={i}>
            <Link to={link.route}>{link.linkname}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
