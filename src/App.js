import './App.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AdminAboutUs from './screens/Admin/AdminAboutUs'
import AdminSlider from './screens/Admin/AdminSlider'
import AdminNews from './screens/Admin/AdminNews'
import AdminNewsAdd from './screens/Admin/AdminNewsAdd'
import AdminNewsModified from './screens/Admin/AdminNewsModified'
import NavBarAdmin from './screens/Admin/NavBarAdmin'
import Home from './screens/Client/Home'
import Concept from './screens/Client/Concept'

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
        {location.pathname.includes('admin') ? (
          <NavBarAdmin />
        ) : (
          <nav>Nav site client</nav>
        )}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/concept' component={Concept} />
          <Route path='/admin/slider' component={AdminSlider} />
          <Route path='/admin/about' component={AdminAboutUs} />
          <Route exact path='/admin/actualites' component={AdminNews} />
          <Route path='/admin/actualites/add' component={AdminNewsAdd} />
          <Route
            path='/admin/actualites/modif/:id'
            component={AdminNewsModified}
          />
        </Switch>
        ''
      </div>
    </Router>
  )
}

export default App
