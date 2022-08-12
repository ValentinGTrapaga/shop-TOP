import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import '../styles/productCard.css'
import '../styles/shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setProducts(res))
      .catch(err => console.error(err))
  }, [])

  const productCards = products?.map((product) => (<ProductCard product={product} key={product.id} />))

  return (
    <div className='productsContainer'>
      {productCards || <h1 className='errorShop'>Error loading the items, sorry 😣</h1>}
    </div>
  )
}

export default Shop
