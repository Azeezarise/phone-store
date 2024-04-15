import React, { useContext, useState } from 'react'
import { productApis } from '../../Api/productApi'
import Product from './Product'
import "./Product.styles";




function Home() {
    //    const {cart ,setCart} = useContext(Cart1)

    const myStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }

    const myname = {
        textAlign: "center",
        // backgroundColor:"rgba(34, 177, 141, 0.883)",
        backgroundColor: "white",
        fontSize: "2rem"
    }

    return (
        <>
            <div className="home" style={{ background: "rgb(231, 231, 231)" }}>
                <div>
                    <h3 className='shop' style={myname}>Phone Deals</h3>
                </div>


                <div className='product' style={myStyle} >

                    {productApis.map((myproduct) => {
                        return (
                            <p >
                                <Product data={myproduct} />
                                {/* {myproduct.productName} */}


                            </p>
                        )
                    })}
                </div>
            </div>

        </>

    )
}

export default Home