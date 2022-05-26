import React, { useContext } from 'react'
import { cartContext } from '../context/CartContextProvider'

const shopCart = () => {

    const {state ,dispatch} = useContext(cartContext)

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart />)}
            </div>
        </div>
    )
}

export default shopCart
