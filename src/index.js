import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store-redux';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

export const render = (store) => {

	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App 
					store={store}
					dispatch={store.dispatch.bind(store)}
				/>
		  </Provider>
		</React.StrictMode>,
		document.getElementById('root')
	 );
}
render(store);

store.subscribe(() => render(store));


reportWebVitals();
