import './App.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'

import About from './screens/Client/About'
import AdminAboutUs from './screens/Admin/AdminAboutUs'
import AdminAboutUsAdd from './screens/Admin/AdminAboutUsAdd'
import AdminAboutUsModified from './screens/Admin/AdminAboutUsModified'
import AdminNews from './screens/Admin/AdminNews'
import AdminNewsAdd from './screens/Admin/AdminNewsAdd'
import AdminNewsModified from './screens/Admin/AdminNewsModified'
import AdminPro from './screens/Admin/AdminPro'
import AdminProAdd from './screens/Admin/AdminProAdd'
import AdminProModified from './screens/Admin/AdminProModified'
import AdminPart from './screens/Admin/AdminPart'
import AdminPartAdd from './screens/Admin/AdminPartAdd'
import AdminPartModified from './screens/Admin/AdminPartModified'
import AdminSlider from './screens/Admin/AdminSlider'
import Backdrop from './components/Client/Backdrop'
import Concept from './screens/Client/Concept'
import Contact from './screens/Client/Contact'
import Footer from './components/Client/Footer'
import Home from './screens/Client/Home'
import Navbar from './components/Client/Navbar'
import NavBarAdmin from './screens/Admin/NavBarAdmin'
import News from './screens/Client/News'
import Particular from './screens/Client/Particular'
import Pro from './screens/Client/Pro'
import SideDrawer from './components/Client/SideDrawer'

const App = () => {
  const [sideToggle, setSideToggle] = useState(false)

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
          <>
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
          </>
        )}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin/slider' component={AdminSlider} />
          <Route path='/about' component={About} />
          <Route path='/particular' component={Particular} />
          <Route path='/pro' component={Pro} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/admin/actualites' component={AdminNews} />
          <Route path='/admin/actualites/add' component={AdminNewsAdd} />
          <Route
            path='/admin/about/profile/:id'
            component={AdminAboutUsModified}
          />
          <Route path='/admin/actualites' component={AdminNews} />
          <Route path='/admin/professionnel/add' component={AdminProAdd} />
          <Route
            path='/admin/professionnel/modif/:id'
            component={AdminProModified}
          />
          <Route path='/admin/professionnel' component={AdminPro} />
          <Route path='/admin/particulier/add' component={AdminPartAdd} />
          <Route
            path='/admin/particulier/modif/:id'
            component={AdminPartModified}
          />
          <Route path='/admin/particulier' component={AdminPart} />
          <Route path='/admin/about/profile' component={AdminAboutUsAdd} />
          <Route path='/admin/about' component={AdminAboutUs} />
          <Route path='/concept' component={Concept} />
        </Switch>
        {/* Test adress if location contain Admin we get the Nav of admin else the Nav site */}
        {location.pathname.includes('admin') ? '' : <Footer />}
      </div>
    </Router>
  )
}

export default App
