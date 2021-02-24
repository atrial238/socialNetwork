import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store-redux';
import reportWebVitals from './reportWebVitals';

export const render = (state) => {
	
	ReactDOM.render(
		<React.StrictMode>
		  <App 
			state={state}
			dispatch={store.dispatch.bind(store)}
		  />
		</React.StrictMode>,
		document.getElementById('root')
	 );
}
render(store.getState());

store.subscribe(() => render(store.getState()));


reportWebVitals();
