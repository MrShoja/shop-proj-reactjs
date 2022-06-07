import React ,{ useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import { CartContext } from '../context/CartContextProvider'

// Icons
import shop from "./shop.png"

const Navbar = () => {

    const { state } = useContext( CartContext )
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={shop} alt="shop"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
