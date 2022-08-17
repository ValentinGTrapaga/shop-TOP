import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import '../styles/productCard.css'
import '../styles/shop.css'
import SideBarShop from './SideBarShop'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=100')
      .then(res => res.json())
      .then(res => setProducts(res))
      .catch(err => console.error(err))
  }, [])

  const productCards = products?.map((product) => (<ProductCard product={product} key={product.id} />))

  return (
    <div className='shop'>
      <SideBarShop />
      <div className='productsContainer'>
        {productCards || <h1 className='errorShop'>Error loading the items, sorry 😣</h1>} {/* TODO: Error */}
      </div>
    </div>
  )
}

export default Shop
