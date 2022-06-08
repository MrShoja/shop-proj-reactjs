import React, { useContext } from 'react';

// Cart
import Cart from './Cart';


// Component
import { CartContext } from '../context/CartContextProvider';


const shopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <div> 
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
        </div>
    )
}


export default shopCart;