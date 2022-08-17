import React from 'react'
import '../styles/sideBarShop.css'

const SideBarShop = () => {
  const categories = ['Clothes', 'Electronics', 'Furniture', 'Shoes', 'Others']

  const categoriesSideBar = categories.map((category, index) => {
    return (<button className='categoriesButton' key={index}>{category}</button>)
  })
  return (
    <div className='categoriesSideBar'>{categoriesSideBar}</div>
  )
}

export default SideBarShop
