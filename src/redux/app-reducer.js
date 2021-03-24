import {getAuthData, setAvatarSrc} from './auth-reucer';
import {getUserProfile} from './profile-reducer';

const initializedAC = () => ({type: INITIALIZED_SUCCESS});
const setFailedInitApp = () => ({type: INITIALIZED_FAIL});

const INITIALIZED_SUCCESS ='app_reducer/NITIALIZED_SUCCESS';
const INITIALIZED_FAIL = 'INITIALIZED_FAIL';

export const initializedThunk = () => dispatch => {

	dispatch(getAuthData()).then(res => 
											res && res.name === "Error" 
											? dispatch(setFailedInitApp())
											: res.data.resultCode === 0
											? dispatch(getUserProfile(res.data.data.id))
												.then(res => dispatch(setAvatarSrc(res.data.photos.small)) )
												.then(() => dispatch(initializedAC()))
												.catch(() => dispatch(setFailedInitApp()))
											:	dispatch(initializedAC())
	)
}

const initState = {
	initialized: false,
	isInintAppFail: false
}

const initApp = (state = initState, action) =>{
	switch(action.type){
		case INITIALIZED_SUCCESS:
			return {...state, initialized: true};
		case INITIALIZED_FAIL:
			return {...state, isInintAppFail: true}
		default: 
			return state;
	}
}
export default initApp;