import React, { useEffect, useState } from 'react'
import { formatCurrency } from '../utilities/formatCurrency'

export const ShoppingCartItem = ({ id, quantity }) => {
  const [shoppingCartItem, setShoppingCartItem] = useState({})
  useEffect(() => {
    console.log(id)
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((data) => data.json)
      .then((res) => setShoppingCartItem(res))
  }, [])

  const { title, price, images } = shoppingCartItem
  const total = price * quantity

  return (
    <>{quantity === 0
      ? null
      : <div className='shoppingCartItem'>
        <div className='itemShoppingCartDescription'>
          <img src={images[0]} alt={title} />
          <div className='itemShoppingCartName'>
            <h4>
              {title}
              <span> x {quantity}</span>
            </h4>
            <h6>{formatCurrency(price)}</h6>
          </div>
          <div className='itemShoppingCartTotalItem'>{formatCurrency(total)}</div>
        </div>
        </div>}
    </>
  )
}
