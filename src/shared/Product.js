import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Function
import { shortan, isInCart, quantityCount } from '../helper/function'

// Components
import { CartContext } from '../context/CartContextProvider'

// Img
import logo from "./trash.png"

const Product = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext)


    return (
        <div>
            <img src={productData.image} style={{ width: "200px" }} />
            <h3>{shortan(productData.title)}</h3>
            <i>{productData.price} $</i>
            <br />
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
            </div>
            
            <div>
                
                {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({ type: "DECREAS", payload: productData })}>-</button>}
               {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}><img src={logo} style={{width: "20px"}}/></button>}
               {
                    isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default Product

