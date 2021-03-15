import './App.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AdminAboutUs from './screens/Admin/AdminAboutUs'
import AdminSlider from './screens/Admin/AdminSlider'
import NavBarAdmin from './screens/Admin/NavBarAdmin'
import Home from './screens/Client/Home'
import Concept from './screens/Client/Concept'
import About from './screens/Client/About'
import Particular from './screens/Client/Particular'
import Pro from './screens/Client/Pro'
import News from './screens/Client/News'
import Contact from './screens/Client/Contact'
import Navbar from './components/Client/Navbar'

const App = () => {
  return (
    <Router>
      <div
        className='App'
        style={{
          display: `${location.pathname.includes('admin') ? 'flex' : 'block'}`
        }}
      >
        {/* Test adress if location contain Admin we get the Nav of admin else the Nav site */}
        {location.pathname.includes('admin') ? <NavBarAdmin /> : <Navbar />}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/concept' component={Concept} />
          <Route path='/about' component={About} />
          <Route path='/particular' component={Particular} />
          <Route path='/pro' component={Pro} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='/admin/slider' component={AdminSlider} />
          <Route path='/admin/about' component={AdminAboutUs} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
