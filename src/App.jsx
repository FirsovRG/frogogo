import React from 'react';
import { Layout } from './components/layout';
import { Header } from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Cart } from './components/cart/cart';
import { Recommendations } from './components/recommendations';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Header />
                    <Cart />
                    <Recommendations />
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
