import React from 'react';
import { Layout } from './components/layout';
import { Header } from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Header />
				</Layout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
