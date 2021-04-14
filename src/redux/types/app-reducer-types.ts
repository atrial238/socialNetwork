import {INITIALIZED_SUCCESS, INITIALIZED_FAIL} from '../app-reducer';

export type initializeType = {type: typeof INITIALIZED_SUCCESS}
export type failedInitType = {type: typeof INITIALIZED_FAIL}

export type initStateType ={
	initialized: boolean
	isInintAppFail: boolean
}
