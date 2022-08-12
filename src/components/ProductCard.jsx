import React from 'react'
import '../styles/productCard.css'

const ProductCard = ({ product }) => {
  const { title, image, category, price } = product
  return (
    <div className='productCard'>
      <img src={image} alt={title} className='productImg' />
      <div className='description'>
        <p className='productCategory'>{category}</p>
        <h3 className='productTitle'>{title}</h3>
        <div className='cartDiv'>
          <h3 className='productPrice'>$ {price}</h3>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
