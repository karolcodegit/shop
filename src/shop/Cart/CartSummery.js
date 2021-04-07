import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const CartSummery = () => {
    const cartItems = useSelector((state) => state.shop.cartItems);
    const cartPrice = useSelector((state) => state.shop.cartPrice);

    const getSummery = () => {
        return cartItems > 0 ? (
            <>
                <div className='flex flex-col items-center'>
                    <Link to='/shop/cart'>
                        <HiOutlineShoppingCart className='text-xl' />
                    </Link>
                    <div>
                        <span>Produków: {cartItems}</span>
                        <span> / </span>
                        <span>Koszt: {cartPrice.toFixed(2)} zł</span>
                    </div>
                </div>
            </>
        ) : (
            <HiOutlineShoppingCart className='text-xl' />
        );
    };

    return <div className='flex items-center'>{getSummery()}</div>;
};

export default CartSummery;
