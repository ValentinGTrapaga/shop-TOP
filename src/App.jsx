import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App () {
  document.title = 'FIFASH eCommerce'
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
