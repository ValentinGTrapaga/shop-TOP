import Model from '../assets/home-model-2.jpg'
import '../styles/home.css'
import '../styles/productCard.css'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homePanel'>
      <div className='panel-1'>
        <h1>Find the best fashion style for you</h1>
        <h4>
          Established since 1997, always having the best models and prices for
          you out there. Now we went online!
        </h4>
        <Link
          className='linkButton'
          to='/shop'>
          Shop NOW
        </Link>
      </div>
      <div className='panel-2'>
        <img
          src={Model}
          alt='Model image'
          className='modelHomePage'
        />
      </div>
      <div className='linearGradVert-top' />
      <div className='linearGradHorizontal-top' />
      <div className='linearGradVert' />
      <div className='linearGradHorizontal' />
      <div className='drawings'>
        ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      </div>
      <div className='drawingsBottom'>
        ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      </div>
    </div>
  )
}

export default Home
