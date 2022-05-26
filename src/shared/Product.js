import React ,{ useContext } from 'react'
import { Link } from 'react-router-dom'

// Function
import { shortan ,isInCart ,quanityCount } from '../helper/function'

// Components
import { cartContext } from '../context/CartContextProvider'

// Img
import logo from "./trash.png"

const Product = ({productDate}) => {
    const {state ,dispatch} = useContext(cartContext)





    return (
        <div>
            <img src={productDate.image} style={{width: "200px"}} />
            <h3>{shortan(productDate.title)}</h3>
            <i>{productDate.price} $</i>
            <br/>
            <div>
                <Link to={`/products/${productDate.id}`}>Details</Link>
                </div>
            <div>
                    {
                    isInCart(state,productDate.id) ?
                    <button onClick={() => dispatch({type:"INCREASE", payload: productDate})}>+</button> :
                  <button onClick={() => dispatch({type:"ADD_ITEM", payload: productDate})}>Add to Cart</button> 
                }
    
                
                {quanityCount(state, productDate.id) > 1 && <button onClick={() => dispatch({type:"DECREAS", payload: productDate})}>-</button> }
                {quanityCount(state, productDate.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productDate})}><img src={logo} alt="logo" style={{width: "10px"}}/></button> }
                
            </div>
        </div>
    )
}

export default Product
