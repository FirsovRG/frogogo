import React from 'react';
import { Layout } from './Components/Layout';
import { Header } from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Header />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
