import React, { useContext } from 'react'
import "./Product.styles";
import { ContainerProduct } from "./Product.styles"

import { Cart1 } from '../../ContextPage/CartContext';



function Product({ data }) {

    const { cart, setCart } = useContext(Cart1)


    const { id, price, productName, img, productDetails } = data

    const content = {
        background: `url("${img}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "15rem",
        height: "20rem",
        margin: "15px",
        boxShadow: '3px 3px 3px 3px gray',
        borderRadius: "3%",
        backgroundColor: "#e6f5fb",
      
        // border: "1px solid rgba(34, 177, 141, 0.883)"


    }

    
    console.log(cart)

    const del = (a) => {
        let go = cart.filter((data) => {
            if (a.id !== data.id) {
                return true
            } else {
                return false
            }
        })

        setCart(go)

    }
    return (
        <ContainerProduct >

            <div className="main">
                <div className='header'   >

                    <div style={{ border: "2px solid rgba(34, 177, 141, 0.883)", borderRadius:"3%",margin:"1rem",background:"white", }} className="sub">
                        <div style={content}>  <a href="" style={{ transform:"hover scale(1.07)"}} ><img src={img} alt='phone' className='image' /></a></div>



                        <div className='phonesDetails'>
                            {/* <p>{id}</p> */}
                            <p><i>{productName}</i></p>
                            {/* <p>color:{productDetails.colors}</p> */}
                            {/* <p>made in :{productDetails.made}</p> */}
                            <p>#{price}</p>

                            <button className='add' onClick={() => {
                                setCart([...cart, data])
                            }}>Add To Cart

                            </button>
                            {/* <button  onClick={()=>{
                        setCart(cart.filter((a)=>a.id!==data.id))
                      
                    }}>Delete from the Cart

                    </button> }
                 

                    {/* <button onClick={()=> del(task)}>del</button> */}
                            <button className='remove' onClick={() => del(data)} >remove</button>

                        </div>
                    </div>



                </div>
            </div>


        </ContainerProduct>

    )
}

export default Product