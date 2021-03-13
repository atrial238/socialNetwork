import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {'API-KEY': '7a0e6aca-fbf9-433d-84b6-198a6c1f2d19'},
	withCredentials: true
})

export const usersAPI = {

	getUsers(currentPage = 1, friendPerPage = 4){
		return instance.get(`users?page=${currentPage}&count=${friendPerPage}` )
			.then(res => res.data);
	},
	follow(id){
		return instance.post('follow/' + id)
			.then(res => res.data)
	},
	unfollow(id){
		return instance.delete('follow/' + id)
			.then(res => res.data)
	}
}

export const profileAPI = {
	getUserProfile(id){
		return instance.get('profile/' + id)
	},
	getUserStatus(id){
		return instance.get('/profile/status/' + id)
	},
	updateMyStatus(status){
		return instance.put('/profile/status', {status})
	}
}

export const authAPI = {
	isAuthorization(){
		return instance.get('auth/me')
	},
	logInMe(email, password, rememberMe){
		return instance.post('/auth/login', {email, password, rememberMe})
	},
	logoutUser(){
		return instance.delete('/auth/login')
	}
}
