import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';

export const render = (store) => {
	
	ReactDOM.render(
		<React.StrictMode>
		  <App 
			state={store.getState()}
			dispatch={store.dispatch.bind(store)}
		  />
		</React.StrictMode>,
		document.getElementById('root')
	 );
}
render(store);

store.subscribe(render);


reportWebVitals();
