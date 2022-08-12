import Model from '../assets/home-model-2.jpg'
import '../styles/home.css'
import '../styles/productCard.css'

const Home = () => {
  return (
    <div className='homePanel'>
      <div className='panel-1'>
        <h1>Find the best fashion style for you</h1>
        <h4>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velite officia consequat duis enim velit mollit
        </h4>
        <button>Shop NOW</button>
      </div>
      <div className='panel-2'>
        <img src={Model} alt='Model image' className='modelHomePage' />
      </div>
      <div className='linearGradVert-top' />
      <div className='linearGradHorizontal-top' />
      <div className='linearGradVert' />
      <div className='linearGradHorizontal' />
      <div className='drawings'>''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>
      <div className='drawingsBottom'>''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>

    </div>
  )
}

export default Home
