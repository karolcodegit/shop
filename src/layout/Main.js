import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Main = ({ children }) => (
    <div className='bg-gray-100'>
        <Header />
        <div className='min-h-minimum'>{children}</div>
        <Footer />
    </div>
);

export default Main;
