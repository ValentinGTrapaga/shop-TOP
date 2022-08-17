import React, { useState } from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { ShoppingCart } from './ShoppingCart'

const Navbar = () => {
  const [isShown, setIsShown] = useState(false)

  function showShoppingCart () {
    setIsShown(prevState => !prevState)
  }
  return (
    <>
      <nav>
        <NavLink to='/' className='navTitle'>FIFASH </NavLink>
        <NavLink to='/' className='category'>Home </NavLink>
        <NavLink to='/shop' className='category'>Shop </NavLink>
        <NavLink to='/contact' className='category'>Contact </NavLink>
        <div className='shopIconDiv' onClick={showShoppingCart}>
          <RiShoppingBag3Fill className='category shopIcon' />
        </div>
      </nav>
      {isShown && <ShoppingCart />}
    </>
  )
}

export default Navbar
