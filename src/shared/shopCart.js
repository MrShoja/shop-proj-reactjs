import React, { useContext } from 'react';

// Cart
import Cart from './Cart';


// Component
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';


const shopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <div> 
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total}</p>
                    <div>
                        <button onCilck={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button onCilck={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>Cheked Out Successfuly</h3>
                    <Link to="/products">By More</Link>
                </div>
            }
            {
            !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to By</h3>
                    <Link to="/products">By More</Link>
                </div>
            }
        </div>
    )
}


export default shopCart;
