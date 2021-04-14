import {SET_USERS, CURRENT_PAGE, TOTAL_COUNT, USER_LOADING_FAIL, LOADING} from '../findUsers-reducer';

// types for action creators
type photos = {
	small: string | boolean
	large: string | boolean
}
export type userType = {
	name: string
	id: number
	uniqueUrlName: string | null
	photos: photos[]
	status: string | null
	followed: boolean
	isButtonDisable?: boolean
}
export type isUserLoadingFailType = {
	type: typeof USER_LOADING_FAIL,
	isFailed: boolean
}
export type setUserType = {
	type: typeof SET_USERS,
	usersArr: Array<userType>
}
export type currentPageType = {
	type: typeof CURRENT_PAGE
	currentPage: number
}
export type setTotalCountType = {
	type: typeof TOTAL_COUNT
	totalCount: number
}
export type setLoadingType = {
	type: typeof LOADING
	isLoad:boolean
}

// types for initial state
export type initStateType = {
	users: userType[] | null,
	numberCurrentPage: number | null,
	friendPerPage: number | null,
	totalFriend: number | null,
	isLoading: boolean | null,
	isUserLoadingFail: boolean | null
}

//types for reducer
export type actionType = {
	type: string | undefined
	usersArr?: userType[] | undefined
	currentPage?: number | undefined
	friendPerPage?: number | undefined
	totalCount?: number | undefined
	isLoad?: boolean | undefined
	isFailed?: boolean | undefined
}
