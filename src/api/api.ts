import { profileDataType } from './../redux/types/profile-reducer-types';
import  axios from 'axios';
import { CommonResponseType, FollowUserType, GetCaptchaType, 
			GetUsersResondType, IsAuthorizationType, PostAvatarType } from './typesApi/typesApi';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {'API-KEY': '7a0e6aca-fbf9-433d-84b6-198a6c1f2d19'},
	withCredentials: true
})

export const usersAPI = {

	getUsers(currentPage = 1, friendPerPage = 4){
		return instance.get<GetUsersResondType>(`users?page=${currentPage}&count=${friendPerPage}` )
			.then(res => res.data);
	},
	
}

export const profileAPI = {
	getUserProfile(id: number){
		return instance.get<profileDataType>('profile/' + id)
	},
	getUserStatus(id: number){
		return instance.get<string>('/profile/status/' + id)
	},
	getIsUserFollowed(id: number){
		return instance.get<boolean>('/follow/' + id)
	},
	followUser(id: number){
		return instance.post<FollowUserType>('/follow/' + id)
	},
	unfollowUser(id: number){
		return instance.delete<FollowUserType>('/follow/' + id)
	},
	updateUserStatus(status: string){
		return instance.put<CommonResponseType>('/profile/status', {status})
	},
	postAvatar(file: File){
		const formData = new FormData();
		formData.append('image', file);
		return instance.put<PostAvatarType>('/profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
	},
	postDataProfile(data: profileDataType){
		return instance.put<CommonResponseType>('/profile', data)
	}
}

export const authAPI = {
	isAuthorization(){
		return instance.get<IsAuthorizationType>('auth/me')
	},
	loginUser(email: string, password: string, rememberMe: boolean, captcha: string | null){
		return instance.post<CommonResponseType>('/auth/login', {email, password, rememberMe, captcha})
	},
	logoutUser(){
		return instance.delete<CommonResponseType>('/auth/login')
	}
}

export const secureAPI = {
	getCaptcha(){
		return instance.get<GetCaptchaType>('/security/get-captcha-url')
	}
}