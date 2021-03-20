import React  from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './App.css';
import store from './redux/store-redux';
import {BrowserRouter as Router} from 'react-router-dom';


const AppContainer = () => {

		return (
			<Provider store={store}>
				<Router>
					<App/>
				</Router>
			</Provider>
		)
}
export default AppContainer; 