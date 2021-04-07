import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartDetailsRow from './CartDetailsRow';

const CartDetails = () => {
    const cart = useSelector((state) => state.shop.cart);
    const cartItems = useSelector((state) => state.shop.cartItems);
    const cartPrice = useSelector((state) => state.shop.cartPrice);

    return (
        <>
            {cartItems > 0 ? (
                <div className='mx-6'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='my-4'>
                            <h1 className='font-light text-4xl text-gray-800 mx-4 my-4'>
                                Twój koszyk
                            </h1>
                            <div className='flex'>
                                <div className='bg-white w-2/3'>
                                    <div className='px-4 py-4 mb-5'>
                                        <CartDetailsRow cart={cart} />
                                    </div>
                                </div>

                                <aside className=' w-1/3 ml-6'>
                                    <div className='px-7 py-4 flex flex-col sticky top-0 bg-white'>
                                        <div className='flex justify-center items-center mb-4'>
                                            <span className='font-light mr-3'>
                                                Wartość koszyka:
                                            </span>
                                            <span className='font-bold text-2xl'>
                                                {cartPrice.toFixed(2)}zł
                                            </span>
                                        </div>
                                        <Link
                                            to='/'
                                            className='bg-blue-900 text-base text-gray-50 uppercase px-8 py-2 text-center'
                                        >
                                            Płatność
                                        </Link>
                                        <Link
                                            to='/shop/products'
                                            className='bg-green-600 text-base text-gray-50 uppercase px-8 py-2 text-center mt-3'
                                        >
                                            Kontynuj zakupy
                                        </Link>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center min-h-minimum'>
                    <h1 className='text-2xl'>Koszyk jest pusty</h1>
                </div>
            )}
        </>
    );
};

export default CartDetails;
