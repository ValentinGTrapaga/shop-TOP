import React, { useEffect, useState } from 'react'
import '../styles/sideBarShop.css'

const SideBarShop = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(res => setCategories(res))
      .catch(err => console.error(err))
  }, [])

  const categoriesSideBar = categories.map((category, index) => {
    return (<button className='categoriesButton' key={index}>{category.name}</button>)
  })
  return (
    <div className='categoriesSideBar'>{categoriesSideBar}</div>
  )
}

export default SideBarShop
