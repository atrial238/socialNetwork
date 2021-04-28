import {INITIALIZED_SUCCESS, INITIALIZED_FAIL} from '../app-reducer';
import { avatarSrcOnHeaderType } from './auth-reucer-types';

export type initializeType = {type: typeof INITIALIZED_SUCCESS}
export type failedInitType = {type: typeof INITIALIZED_FAIL}

export type initStateType ={
	initialized: boolean
	isInintAppFail: boolean
}
export type ActoinAppType = initializeType | failedInitType | avatarSrcOnHeaderType
