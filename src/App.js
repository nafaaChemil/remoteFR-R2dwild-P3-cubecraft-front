import './App.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AdminAboutUs from './screens/AdminAboutUs'
import AdminSlider from './screens/AdminSlider'
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
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
