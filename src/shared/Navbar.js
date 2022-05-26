import React ,{ useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import { cartContext } from '../context/CartContextProvider'

// Icons
import shop from "./shop.png"

const Navbar = () => {

    const { state } = useContext( cartContext )

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/Cart"><img src={shop} alt="shop"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
