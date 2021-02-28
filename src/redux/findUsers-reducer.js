export const onFollow = (userId) => ({type: FOLLOW, userId});
export const onUnfollow = (userId) => ({type: UNFOLLOW, userId});
export const onSetUsers = (usersArr) => ({type: SET_USERS, usersArr});
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount});
export const setLoadingAnimation = (isLoad) => ({type: LOADING, isLoad})

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const LOADING = 'LOADING';

const followUser = (state, userId) => {
	return {...state,users: state.users.map(friend => friend.id === userId ? {...friend,followed: true} : friend)}
}
const unfollowUser = (state, userId) => {
	return {...state, users: state.users.map(friend => friend.id === userId ? {...friend, followed: false} : friend)}
}
const setUsers = (state, usersArr) => ({...state, users: usersArr});
const setActivePage = (state, currentPage) => ({...state, numberCurrentPage: currentPage});
const setTotalUser = (state, totalCount) => ({...state, totalFriend: totalCount});
const setLoadingProcces = (state, isLoad) => ({...state, isLoading: isLoad});

const initState = {
	users: [],
	numberCurrentPage: 1,
	friendPerPage: 4,
	totalFriend: 30,
	isLoading: true
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
			return setLoadingProcces(state, action.isLoad)
		default:
			return state;
	}
}

export default findUsersReducer;