import React  from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './App.css';
import store from './redux/store-redux';

const AppContainer = () => <Provider store={store}> <App/> </Provider>
export default AppContainer; 