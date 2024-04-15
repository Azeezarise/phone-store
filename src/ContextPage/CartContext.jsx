import React, { createContext, useEffect, useState } from 'react'


export const Cart1 = createContext()
const CartContext = ({children}) => {
  const [cart , setCart] = useState([])

  
  return (
    <Cart1.Provider value={{cart,setCart}}>
      {children}
    </Cart1.Provider>
  
  )
    
}

export default CartContext