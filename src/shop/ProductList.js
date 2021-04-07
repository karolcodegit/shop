import React from 'react';
import { useDispatch } from 'react-redux';
import { cartAdd } from 'data/Features/ShopSlice';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();

    if (products === null || products.length === 0) {
        return <h5>Brak produktów</h5>;
    }
    return (
        <section>
            {products.map((p) => (
                <div
                    className='border rounded-md flex flex-col mt-2 px-3 py-4'
                    key={p.id}
                >
                    <div className='flex justify-between items-center'>
                        <h4>{p.name}</h4>
                        <span>{p.price.toFixed(2)} zł</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        {p.description}

                        <button onClick={() => dispatch(cartAdd(p))}>
                            Dodaj do koszyka
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default ProductList;
