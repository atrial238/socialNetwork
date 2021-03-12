import {usersAPI} from '../api/api';

const onFollow = (userId) => ({type: FOLLOW, userId}),
		onUnfollow = (userId) => ({type: UNFOLLOW, userId}),
		onSetUsers = (usersArr) => ({type: SET_USERS, usersArr}),
		setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage}),
		setTotalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount}),
		setLoadingAnimation = (isLoad) => ({type: LOADING, isLoad}),
		setButtonDisabled = (id) => ({type: DISABLE_BUTTON, id});

const FOLLOW = 'findUsers_reducer/FOLLOW',
		UNFOLLOW = 'findUsers_reducer/UNFOLLOW',
		SET_USERS = 'findUsers_reducer/SET_USERS',
		CURRENT_PAGE = 'findUsers_reducer/CURRENT_PAGE',
		TOTAL_COUNT = 'findUsers_reducer/TOTAL_COUNT',
		LOADING = 'findUsers_reducer/LOADING',
		DISABLE_BUTTON = 'findUsers_reducer/DISABLE_BUTTON';

const followUser = (state, userId) => {
			return {...state ,users: state.users.map(friend => friend.id === userId ? {...friend, followed: true} : friend)}
		},
		unfollowUser = (state, userId) => {
			return {...state, users: state.users.map(friend => friend.id === userId ? {...friend, followed: false} : friend)}
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
		case FOLLOW:
			return followUser(state, action.userId);
		case UNFOLLOW:
			return unfollowUser(state, action.userId);
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

// export const getUsersThunk = (page, friendPerPage) => (dispatch) =>  {

// 	usersAPI.getUsers(page, friendPerPage)
// 		.then(res => {
// 			dispatch(setLoadingAnimation(false));
// 			dispatch(onSetUsers(res.items));
// 			dispatch(setTotalCount(res.totalCount));
// 			}
// 		)

// }
export const getUsersThunk = (page, friendPerPage) => async (dispatch) => {

	dispatch(setCurrentPage(page));
	dispatch(setLoadingAnimation(true));
	const res = await usersAPI.getUsers(page, friendPerPage)
	dispatch(setLoadingAnimation(false));
	dispatch(onSetUsers(res.items));
	dispatch(setTotalCount(res.totalCount));
	
}
export const followThunk = (id) => async (dispatch) => {

	dispatch(setButtonDisabled(id));
	const res = await usersAPI.follow(id)
	dispatch(setButtonDisabled(id));
	if(!res.resultCode) dispatch(onFollow(id));
		
}
export const unfollowThunk = (id) => async (dispatch) =>{

	dispatch(setButtonDisabled(id));
	const res = await usersAPI.unfollow(id)
	dispatch(setButtonDisabled(id));
	if(!res.resultCode) dispatch(onUnfollow(id));

}
export default findUsersReducer;