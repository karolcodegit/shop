import React from 'react';
import { GoTrashcan } from 'react-icons/go';
import { BiMinus, BiPlus } from 'react-icons/bi';

const CartDetailsRow = ({ cart }) => {
    return (
        <>
            {cart.map((item) => (
                <>
                    <div className='flex mb-5 border-b py-8'>
                        <div className='flex items-center flex-wrap flex-grow'>
                            <div className='w-1/2'>{item.name}</div>
                            <div className='w-1/4'>
                                <div className='flex'>
                                    <button className='border px-2 py-2'>
                                        <BiMinus />
                                    </button>
                                    <input
                                        type='number'
                                        className='border w-16 text-center'
                                        autoComplete='off'
                                        value
                                    />
                                    <button className='border px-2 py-2'>
                                        <BiPlus />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className='font-bold text-xl pr-4'>
                                    {item.price.toFixed(2)}zł
                                </span>
                            </div>
                            <div>
                                <GoTrashcan className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};

export default CartDetailsRow;
