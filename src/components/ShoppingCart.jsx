import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../styles/shoppingCart.css'
import { ShoppingCartItem } from './ShoppingCartItem'

export const ShoppingCart = () => {
  const { cartItems } = useShoppingCart()
  const itemsCards = cartItems.map(item => {
    if (item.quantity > 0) {
      return (<ShoppingCartItem id={item.id} quantity={item.quantity} key={item.id} />)
    } else {
      return null
    }
  })
  return (
    <div className='shoppingCartContainer'>
      {cartItems.length > 0 && itemsCards}
    </div>
  )
}
