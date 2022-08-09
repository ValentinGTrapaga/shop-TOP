import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h3 className='navTitle'>FIFASH </h3>
      <ul>
        <li className='category'>Women's Clothing</li>
        <li className='category'>Men's Clothing</li>
        <li className='category'>Electronics</li>
        <li className='category'>Jewelery</li>
      </ul>
      <FiShoppingBag className='shopIcon' />
    </nav>
  )
}

export default Navbar
