import React, { useContext } from 'react'

import { CartContext } from "../context/CartContextProvider"

import trash from "./trash.png"

import { shortan } from "../helper/function"

const Cart = (props, state) => {

    const { dispatch } = useContext(CartContext)
    const { image, title, price, quantity} = props.data

    return (
        <div>
            <img src={image} alt="jjj"/> 
            <div>
                <h3>{shortan(title)}</h3>
                <i>{price} $</i>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREAS", payload: props.data})}>-</button>:
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trash} style={{width: "20px"}} /></button>
                }
                    <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>

            </div>
        </div>
    )
}

export default Cart
