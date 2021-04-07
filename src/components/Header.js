import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartSummery from 'shop/Cart/CartSummery';
import CategoryList from 'shop/CategoryList';

const Header = () => {
    const category = useSelector((state) => state.shop.data.categories);
    return (
        <header className='flex flex-col px-8 pt-4 shadow-lg bg-white'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-3xl'>
                    <Link to='/'>ClothesShop</Link>
                </h1>

                <ul className='flex items-center'>
                    <CartSummery />
                    <li className='ml-5'>Log in</li>
                </ul>
            </div>
            <CategoryList baseUrl='/shop/products' categories={category} />
        </header>
    );
};

export default Header;
