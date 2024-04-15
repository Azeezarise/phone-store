import React, { useContext, useEffect, useState } from 'react'
import { Cart1 } from '../../ContextPage/CartContext'
import Product from './Product'
import "./Product.styles";
import { productApis } from '../../Api/productApi'



function Cart() {
  const { cart } = useContext(Cart1)



  const [total, setTotal] = useState()
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + (curr.price), 0))
  }, [cart])


  return (
    <div >cart

      <p>total:#{total}</p>
      {cart.map((myproduct) => {
        return (
          <div>

           <Product data={myproduct} />

          </div>

        )
      })}

      <div>

      </div>
    </div>

  )
}

export default Cart