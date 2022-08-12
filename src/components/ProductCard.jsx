import React from 'react'
import '../styles/productCard.css'

const ProductCard = ({ product }) => {
  const { title, price } = product
  const image = product.images[0]
  const category = product.category.name
  return (
    <div className='productCard'>
      <img src={image} alt={title} className='productImg' />
      <div className='description'>
        <p className='productCategory'>{category}</p>
        <h3 className='productTitle'>{title}</h3>
        <div className='cartDiv'>
          <h3 className='productPrice'>$ {price}</h3>
          <button className='buttonCard'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
