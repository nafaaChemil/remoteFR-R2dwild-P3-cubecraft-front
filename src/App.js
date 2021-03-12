import './App.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AdminAboutUs from './screens/AdminAboutUs'
import AdminSlider from './screens/AdminSlider'
import AdminNews from './screens/AdminNews'
import AdminNewsAdd from './screens/AdminNewsAdd'
import AdminNewsModified from './screens/AdminNewsModified'
import NavBarAdmin from './screens/NavBarAdmin'

function App() {
  return (
    <Router>
      <div className='App'>
        <div id='back'>
          <NavBarAdmin />
          <Switch>
            <Route exact path='/admin/' component={AdminSlider} />
            <Route path='/admin/about' component={AdminAboutUs} />
            <Route exact path='/admin/actualites' component={AdminNews} />
            <Route path='/admin/actualites/add' component={AdminNewsAdd} />
            <Route
              path='/admin/actualites/modif'
              component={AdminNewsModified}
            />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
