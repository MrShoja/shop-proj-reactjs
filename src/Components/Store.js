import React, { useContext } from 'react'

// Context
import { ProductContext } from '../context/ProductContextProvider'

// Components
import Product from '../shared/Product'

const Store = () => {
    const products = useContext(ProductContext)
    return (
        <div style={{display: "flex" ,flexWrap: "wrap" ,justifyContent: "space-between"}}>
            {
                             products.map(product =>
                        <Product 
                     key={product.id}
                     productDate={product}
                     
                />)
            }
        </div>
    )
}

export default Store
