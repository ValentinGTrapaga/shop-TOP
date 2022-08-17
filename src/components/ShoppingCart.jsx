import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../styles/shoppingCart.css'
import { ShoppingCartItem } from './ShoppingCartItem'
import { formatCurrency } from '../utilities/formatCurrency'

export const ShoppingCart = () => {
  const { cartItems, products } = useShoppingCart()
  const itemsCards = cartItems.map((item) => {
    if (item.quantity > 0) {
      return (
        <ShoppingCartItem id={item.id} quantity={item.quantity} key={item.id} />
      )
    } else {
      return null
    }
  })
  return (
    <>
      {cartItems.length > 0
        ? (
          <div className='shoppingCartContainer'>
            {itemsCards}
            <h2>Total: {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
            </h2>
          </div>
          )
        : null}
    </>
  )
}
