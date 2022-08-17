import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../styles/productCard.css'
import { formatCurrency } from '../utilities/formatCurrency'

const ProductCard = ({ product }) => {
  const { title, price, id } = product
  const image = product.images[0]
  const category = product.category.name
  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <div className='productCard'>
      <img src={image} alt={title} className='productImg' />
      <div className='description'>
        <p className='productCategory'>{category}</p>
        <h3 className='productTitle'>{title}</h3>
        <h3 className='productPrice'>{formatCurrency(price)}</h3>
        {quantity === 0
          ? (
            <div className='cartDiv'>
              <button className='buttonCard' onClick={() => increaseItemQuantity(id)}>
                Add to cart
              </button>
            </div>
            )
          : (
            <div className='cartDiv'>
              <button className='buttonCardSmall' onClick={() => decreaseItemQuantity(id)}>
                -
              </button>
              <p className='quantityDisplay'>{quantity} <small>in cart</small></p>
              <button className='buttonCardSmall' onClick={() => increaseItemQuantity(id)}>
                +
              </button>
            </div>
            )}
      </div>
    </div>
  )
}

export default ProductCard
