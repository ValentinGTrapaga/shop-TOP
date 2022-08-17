import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import '../styles/productCard.css'
import '../styles/shop.css'
import SideBarShop from './SideBarShop'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Shop = () => {
  const { products } = useShoppingCart()

  const productCards = products?.map((product) => (
    <ProductCard product={product} key={product.id} />
  ))

  return (
    <div className='shop'>
      <SideBarShop />
      {productCards
        ? (
          <div className='productsContainer'>{productCards}</div>
          )
        : (
          <div className='errorDiv'>
            <h1 className='errorShop'>Error loading the items, sorry 😣</h1>
          </div>
          )}
    </div>
  )
}

export default Shop
