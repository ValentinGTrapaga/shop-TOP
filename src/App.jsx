import './styles/App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App () {
  document.title = 'FIFASH eCommerce'
  return (
    <ShoppingCartProvider>
      <div className='App'>
        <Navbar />
        <Outlet />
      </div>
    </ShoppingCartProvider>
  )
}

export default App
