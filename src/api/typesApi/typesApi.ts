import {userType} from '../../redux/types/find-user-reducer-types'

interface Base {
	messages: Array<string>
	resultCode: number
}
export interface GetUsersResondType {
	error: string | null
	totalCount: number
	items: Array<userType>
}

export interface FollowUserType extends Base {
	data: object
	fieldsErrors: Array<string>
}

export interface PostAvatarType extends Base {
	data: {small: string, large: string}
}

export interface CommonResponseType extends Base {
	resultCode: number
}

export interface IsAuthorizationType extends Base {
	data: {id: number, email: string, login: string}
}

export interface GetCaptchaType {
	url: string
}