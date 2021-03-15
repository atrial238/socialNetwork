import {usersAPI} from '../api/api';

const followUnfollowAC = (userId) => ({type: FOLLOW_UNFOLLOW, userId}),
		onSetUsers = (usersArr) => ({type: SET_USERS, usersArr}),
		setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage}),
		setTotalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount}),
		setLoadingAnimation = (isLoad) => ({type: LOADING, isLoad}),
		setButtonDisabled = (id) => ({type: DISABLE_BUTTON, id});

const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW',
		SET_USERS = 'findUsers_reducer/SET_USERS',
		CURRENT_PAGE = 'findUsers_reducer/CURRENT_PAGE',
		TOTAL_COUNT = 'findUsers_reducer/TOTAL_COUNT',
		LOADING = 'findUsers_reducer/LOADING',
		DISABLE_BUTTON = 'findUsers_reducer/DISABLE_BUTTON';

const followUnfollowUser = (state, userId) => {
			return {...state, 
						users: state.users.map(friend => 
							friend.id === userId ? {...friend, followed: !friend.followed} : friend)};
		},
		setUsers = (state, usersArr) => {
			return {...state, users: usersArr.map(user => ({...user, isButtonDisable: false}))}
		},
		setActivePage = (state, currentPage) => ({...state, numberCurrentPage: currentPage}),
		setTotalUser = (state, totalCount) => ({...state, totalFriend: totalCount}),
		setLoadingProcces = (state, isLoad) => ({...state, isLoading: isLoad}),
		toggleButton = (state, id) => {
			return {
				...state,
				users: state.users.map(user => user.id === id ? {...user,  isButtonDisable: !user.isButtonDisable} : user)
			}
		}

const initState = {
	users: [],
	numberCurrentPage: 1,
	friendPerPage: 4,
	totalFriend: 30,
	isLoading: true,
}

const findUsersReducer = (state = initState, action) => {
	
	switch (action.type) {
		case FOLLOW_UNFOLLOW:
			return  followUnfollowUser(state, action.userId);
		case SET_USERS:
			return setUsers(state, action.usersArr);
		case CURRENT_PAGE:
			return setActivePage(state, action.currentPage);
		case TOTAL_COUNT:
			return setTotalUser(state, action.totalCount);
		case LOADING: 
			return setLoadingProcces(state, action.isLoad);
		case DISABLE_BUTTON:
			return toggleButton(state, action.id)
		default:
			return state;
	}
}


const followUnfollowHelper = async (id, methodAPI, dispatch) => {
	dispatch(setButtonDisabled(id));
	const res = await methodAPI(id);
	dispatch(setButtonDisabled(id));
	if(!res.resultCode) dispatch(followUnfollowAC(id));
}

export const followThunk = (id) => (dispatch) => followUnfollowHelper(id, usersAPI.follow,  dispatch);
export const unfollowThunk = (id) => (dispatch) => followUnfollowHelper(id, usersAPI.unfollow,  dispatch);


export const getUsersThunk = (page, friendPerPage) => async (dispatch) => {

	dispatch(setCurrentPage(page));
	dispatch(setLoadingAnimation(true));
	const res = await usersAPI.getUsers(page, friendPerPage)
	dispatch(setLoadingAnimation(false));
	dispatch(onSetUsers(res.items));
	dispatch(setTotalCount(res.totalCount));
	
}
export default findUsersReducer;