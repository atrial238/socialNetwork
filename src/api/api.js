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
	getUser(id){
		return instance.get('profile/' + id)
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

export const authAPI = {
	authorization(){
		return instance.get('auth/me')
	}
}
