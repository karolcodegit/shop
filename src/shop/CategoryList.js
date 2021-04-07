import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories, baseUrl }) => {
    return (
        <>
            <ul className='flex justify-center font-light'>
                <li className='px-6 py-4' primary='Wszystkie'>
                    <Link to={baseUrl}>All</Link>
                </li>
                {categories &&
                    categories.map((cat) => (
                        <>
                            <li className='px-6 py-4' primary={cat}>
                                <Link
                                    key={cat}
                                    to={`${baseUrl}/${cat.toLowerCase()}`}
                                >
                                    {cat}
                                </Link>
                            </li>
                        </>
                    ))}
            </ul>
        </>
    );
};

export default CategoryList;
