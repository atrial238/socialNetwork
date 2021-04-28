import { ThunkDispatch } from 'redux-thunk';
import {getAuthData, setAvatarSrcOnHeader} from './auth-reucer';
import {getUserProfile} from './profile-reducer';
import { stateType } from './store';
import {initializeType, failedInitType, initStateType, ActoinAppType } from './types/app-reducer-types';


const initializedAC = (): initializeType => ({type: INITIALIZED_SUCCESS});
const setFailedInitApp = (): failedInitType => ({type: INITIALIZED_FAIL});

export const INITIALIZED_SUCCESS ='app_reducer/NITIALIZED_SUCCESS';
export const INITIALIZED_FAIL = 'INITIALIZED_FAIL';

export const initializedThunk = () => (dispatch: ThunkDispatch<stateType, unknown, ActoinAppType>) => {

	dispatch(getAuthData()).then((res: any) => 
											res && res.name === "Error"
											? dispatch(setFailedInitApp())
											: res.data.resultCode === 0
											? dispatch(getUserProfile(res.data.data.id))
												.then((res: any) => dispatch(setAvatarSrcOnHeader(res.data.photos.small)) )
												.then(() => dispatch(initializedAC()))
												.catch(() => dispatch(setFailedInitApp()))
											:	dispatch(initializedAC())
	)
}

const initState: initStateType = {
	initialized: false,
	isInintAppFail: false
}

const initApp = (state = initState, action: ActoinAppType) =>{
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