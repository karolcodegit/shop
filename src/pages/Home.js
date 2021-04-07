import React from 'react';
import shopWomens from 'assets/shopWomens.jpg';
import shopMens from 'assets/shopMens.jpg';

const Home = () => {
    return (
        <section className='flex justify-between items-center'>
            <div className='w-1/2 relative'>
                <img
                    className='h-home w-full object-cover'
                    src={shopWomens}
                    alt=''
                />
                <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-gray-100 shadow-lg'>
                    Women
                </button>
            </div>
            <div className='w-1/2 relative'>
                <img
                    className='h-home w-full object-cover object-top '
                    src={shopMens}
                    alt=''
                />
                <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-gray-100 shadow-lg '>
                    Man
                </button>
            </div>
        </section>
    );
};

export default Home;
