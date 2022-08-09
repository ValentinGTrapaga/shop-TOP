import Model from '../assets/home-model-2.jpg'
import './home.css'

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
        <div className='linearGradVert-top'></div>
        <div className='linearGradHorizontal-top'></div>
        <div className='drawings'>''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>
        <img src={Model} alt='Model image' className='modelHomePage' />
        <div className='linearGradVert'></div>
        <div className='linearGradHorizontal'></div>
      </div>
    </div>
  )
}

export default Home
