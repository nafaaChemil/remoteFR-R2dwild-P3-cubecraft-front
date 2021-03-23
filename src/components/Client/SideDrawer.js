import { Link } from 'react-router-dom'
import { navbarlinks } from './Navlinks'

export default function SideDrawer ({ show, click }) {
  const sideDrawerClass = ['sidedrawer']
  if (show) {
    sideDrawerClass.push('show')
  }
  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className='sidedrawer__links' onClick={click}>
        {navbarlinks.map((link, i) => (
          <li key={i}>
            <Link to={link.route}>{link.linkname}</Link>
          </li>
        ))}
      </ul>
    </div>
  )

