import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    const id = props.match.params.id
    const date = useContext(ProductContext);
    const product = date[id - 1]
    const {title ,price ,description, category ,image} = product
    return (
        <div>
       
       
             <div>
            <img src={image} alt="product"/>
            <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span>Category: </span>{category}</p>
            </div>
            <div>
                <span><i>{price} $</i></span>
                <br/>
                <Link to={`/products`}>Back to Shop</Link>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;