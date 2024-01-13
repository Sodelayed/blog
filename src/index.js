import React from 'react';
import ReactDOM from 'react-dom/client';

import { Blog } from './Blog';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Blog />
		</BrowserRouter>
	</Provider>,
);
