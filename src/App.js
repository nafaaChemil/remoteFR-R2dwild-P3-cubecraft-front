import './App.scss'
import AdminSlider from './screens/AdminSlider'
import NavBarAdmin from './screens/NavBarAdmin'

function App() {
  return (
    <div className='App'>
      <div id='back'>
        <NavBarAdmin />
        <AdminSlider></AdminSlider>
      </div>
    </div>
  )
}

export default App
