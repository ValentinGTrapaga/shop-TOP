import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' className='navTitle'>FIFASH </NavLink>
      <NavLink to='/' className='category'>Home </NavLink>
      <NavLink to='/shop' className='category'>Shop </NavLink>
      <NavLink to='/contact' className='category'>Contact </NavLink>
    </nav>
  )
}

export default Navbar
