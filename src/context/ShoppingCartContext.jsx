import React, { useContext, createContext, useState } from 'react'

const ShoppingCartContext = createContext({})

export function useShoppingCart () {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([])

  function getItemQuantity (id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseItemQuantity (id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            // Probar return [...currItems, { id, quantity: quantity + 1 }]
            console.log(cartItems)
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseItemQuantity (id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider value={{
      getItemQuantity, increaseItemQuantity, decreaseItemQuantity, cartItems
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
