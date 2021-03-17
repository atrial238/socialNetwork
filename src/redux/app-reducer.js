import {getAuthData, getCaptchaThunk} from './auth-reucer';
const initializedAC = () => ({type: INITIALIZED_SUCCESS})

const INITIALIZED_SUCCESS ='app_reducer/NITIALIZED_SUCCESS';

export const initializedThunk = () => (dispatch) => {
	const promiseAuthData = dispatch(getAuthData());
	
	Promise.all([promiseAuthData]).then(() => dispatch(initializedAC()));
}

const initState = {
	initialized: false
}

const initApp = (state = initState, action) =>{
	switch(action.type){
		case INITIALIZED_SUCCESS:
			return {...state, initialized: true};
		default: 
			return state;
	}
}
export default initApp;