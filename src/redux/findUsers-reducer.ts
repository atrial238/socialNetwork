import {usersAPI} from '../api/api';
import {isUserLoadingFailType, setUserType, userType, currentPageType,
	setTotalCountType, setLoadingType, initStateType} from './types/find-user-reducer-types';

//action creators
const onSetUsers = (usersArr: userType[]): setUserType => ({type: SET_USERS, usersArr}),
		setCurrentPage = (currentPage: number): currentPageType => ({type: CURRENT_PAGE, currentPage}),
		setTotalCount = (totalCount: number): setTotalCountType => ({type: TOTAL_COUNT, totalCount}),
		setLoadingAnimation = (isLoad: boolean): setLoadingType => ({type: LOADING, isLoad}),
		setUserLoadingFail = (isFailed: boolean): isUserLoadingFailType => ({type: USER_LOADING_FAIL, isFailed});

//type for action
export const SET_USERS = 'findUsers_reducer/SET_USERS';
export const CURRENT_PAGE = 'findUsers_reducer/CURRENT_PAGE';
export const TOTAL_COUNT = 'findUsers_reducer/TOTAL_COUNT';
export const LOADING = 'findUsers_reducer/LOADING';
export const USER_LOADING_FAIL = 'findUsers_reducer/USER_LOADING_FAIL';


// helper functions for the reducer to be smaller
const setUsers = (state: initStateType, usersArr: userType[]) => {
			return {...state, users: usersArr.map(user => ({...user, isButtonDisable: false}))}
		},
		setActivePage = (state: initStateType, currentPage: number) => ({...state, numberCurrentPage: currentPage}),
		setTotalUser = (state: initStateType, totalCount: number) => ({...state, totalFriend: totalCount}),
		setLoadingProcces = (state: initStateType, isLoad: boolean) => ({...state, isLoading: isLoad});
	

// initial state
 const initState: initStateType = {
	users: [],
	numberCurrentPage: 1,
	friendPerPage: 10,
	totalFriend: 100,
	isLoading: true,
	isUserLoadingFail: false 
}

// reducer
function findUsersReducer  (state = initState, action: any) {
	switch (action.type) {
		case SET_USERS:
			return setUsers(state, action.usersArr);
		case CURRENT_PAGE:
			return setActivePage(state, action.currentPage);
		case TOTAL_COUNT:
			return setTotalUser(state, action.totalCount);
		case LOADING: 
			return setLoadingProcces(state, action.isLoad);
		case USER_LOADING_FAIL:
			return {...state, isUserLoadingFail: action.isFailed};
		default:
			return state;
	}
}

// thunk
export const getUsers = (page: number, friendPerPage: number) => async (dispatch: any) => {
	try{
		dispatch(setUserLoadingFail(false));
		dispatch(setCurrentPage(page));
		dispatch(setLoadingAnimation(true));
		const res = await usersAPI.getUsers(page, friendPerPage)
		dispatch(setLoadingAnimation(false));
		dispatch(onSetUsers(res.items));
		dispatch(setTotalCount(res.totalCount));
	}catch(e){
		dispatch(setUserLoadingFail(true));
	}
}
export default findUsersReducer;