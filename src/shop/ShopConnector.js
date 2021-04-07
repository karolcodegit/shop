import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Shop } from './Shop';
import CartDetails from './Cart/CartDetails';

const filterProducts = (products = [], category) =>
    !category || category === 'Wszystkie'
        ? products
        : products.filter(
              (p) => p.category.toLowerCase() === category.toLowerCase(),
          );

export const ShopConnector = (...props) => {
    const products = useSelector((state) => state.shop.data.products);
    const category = useSelector((state) => state.shop.data.categories);

    return (
        <Switch>
            <Route
                path='/shop/products/:category?'
                render={(routeProps) => (
                    <Shop
                        products={filterProducts(
                            products,
                            routeProps.match.params.category,
                        )}
                        categories={category}
                    />
                )}
            />

            <Route path='/shop/cart' component={CartDetails} />
            <Redirect to='/shop/products' />
        </Switch>
    );
};
