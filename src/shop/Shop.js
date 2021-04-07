import React from 'react';
import ProductList from './ProductList';

export const Shop = ({ products, addToCart }) => (
    <>
        <div>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    </>
);
