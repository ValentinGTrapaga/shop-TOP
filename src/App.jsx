import './styles/App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App () {
  document.title = 'FIFASH eCommerce'
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
