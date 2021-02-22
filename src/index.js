import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeStateWhenTextareaInput, changeStateWhenMessageTyping, addMessage, subscribe} from './state/state';
import reportWebVitals from './reportWebVitals';
import state from './state/state';

export const render = (state) => {
	ReactDOM.render(
		<React.StrictMode>
		  <App 
			state={state}
			addPost={addPost}
			changeStateWhenTextareaInput={changeStateWhenTextareaInput}
			changeStateWhenMessageTyping ={changeStateWhenMessageTyping}
			addMessage={addMessage}
		  />
		</React.StrictMode>,
		document.getElementById('root')
	 );
}
render(state);
subscribe(render);


reportWebVitals();
