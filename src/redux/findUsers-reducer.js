export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (usersArr) => ({type: SET_USERS, usersArr});

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const followUser = (state, userId) => {
	return {
		...state,
		users: state.users.map(friend => friend.id === userId ? {...friend, followed: true} : friend)
	}
}
const unfollowUser = (state, userId) => {
	return {
		...state,
		users: state.users.map(friend => friend.id === userId ? {...friend, followed: false} : friend)
	}
}
const setUsers = (state, usersArr) => {
	
	return {...state, users: [...state.users, ...usersArr]}
}
const initState = {
	users: []
}
const findUsersReducer = (state = initState, action) => {
	switch(action.type){
		case FOLLOW:
			return followUser(state, action.userId);
		case UNFOLLOW:
			return unfollowUser (state, action.userId);
		case SET_USERS: 
			return setUsers(state, action.usersArr)
		default: 
			return state;
	}
}

export default findUsersReducer;