import {usersAPI} from '../api/api';

//action creators
const onSetUsers = (usersArr) => ({type: SET_USERS, usersArr}),
		setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage}),
		setTotalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount}),
		setLoadingAnimation = (isLoad) => ({type: LOADING, isLoad}),
		setUserLoadingFail = (boolean) => ({type: USER_LOADING_FAIL, boolean});
		
//type for action
const SET_USERS = 'findUsers_reducer/SET_USERS',
		CURRENT_PAGE = 'findUsers_reducer/CURRENT_PAGE',
		TOTAL_COUNT = 'findUsers_reducer/TOTAL_COUNT',
		LOADING = 'findUsers_reducer/LOADING',
		USER_LOADING_FAIL = 'findUsers_reducer/USER_LOADING_FAIL';
		
// helper functions for the reducer to be smaller
const setUsers = (state, usersArr) => {
			return {...state, users: usersArr.map(user => ({...user, isButtonDisable: false}))}
		},
		setActivePage = (state, currentPage) => ({...state, numberCurrentPage: currentPage}),
		setTotalUser = (state, totalCount) => ({...state, totalFriend: totalCount}),
		setLoadingProcces = (state, isLoad) => ({...state, isLoading: isLoad});
		

// initial state
const initState = {
	users: [],
	numberCurrentPage: 1,
	friendPerPage: 10,
	totalFriend: 100,
	isLoading: true,
	isUserLoadingFail: false
}

// reducer
const findUsersReducer = (state = initState, action) => {
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
			return {...state, isUserLoadingFail: action.boolean};
		default:
			return state;
	}
}

// thunk
export const getUsers = (page, friendPerPage) => async (dispatch) => {
	try{
		dispatch(setUserLoadingFail(false))
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