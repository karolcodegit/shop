import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from 'app/store';
import Main from 'layout/Main';
import Home from 'pages/Home';
import { ShopConnector } from 'shop/ShopConnector';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Main>
                        <Route exact path='/' component={Home} />
                        <Route path='/shop' component={ShopConnector} />
                    </Main>
                </Switch>
            </Router>
        </Provider>
    );
};
export default App;
