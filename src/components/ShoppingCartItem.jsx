import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import '../styles/shoppingCartItem.css'

export const ShoppingCartItem = ({ id, quantity }) => {
  const { products } = useShoppingCart()

  const item = products.find((item) => item.id === id)
  const { images, price, title } = item
  const total = price * quantity

  return (
    <>
      {quantity === 0
        ? null
        : (
          <div className='shoppingCartItem'>
            <img src={images[0]} alt={title} />
            <div className='itemShoppingCartDescription'>
              <h3 className='itemTitle'>
                {title}
                <span className='itemQuantity'> x {quantity}</span>
              </h3>
              <div className='itemShoppingCartPrices'>
                <h6>{formatCurrency(price)}</h6>
                <h4>Total: {formatCurrency(total)}</h4>
              </div>
            </div>
          </div>
          )}
    </>
  )
}
