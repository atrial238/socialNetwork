import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store-redux';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';


	ReactDOM.render(
			<Provider store={store}>
				<App store={store} />
		  </Provider>,
		document.getElementById('root')
	 );

window.state = store.getState();

reportWebVitals();
