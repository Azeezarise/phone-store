
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Header.styles'
import { productApis } from '../Api/productApi'
import Product from './pages/Product'


import "./Header.styles"
import { Cart1 } from '../ContextPage/CartContext'


function Header() {
    const {cart } = useContext(Cart1)
    return (
        <Container >
            <header className='header' >
                
                <div>
                    <h1>
                        <Link to="/" className='logo'>
                           Arise Phone store
                        </Link>
                    </h1>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/cart">cart<i class="fa-solid fa-cart-shopping"></i>
                            {cart.length}
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </header>


        </Container>
    )
}

export default Header