import {  atom } from "recoil"
const atoms = {}

export const userState = atom({
	key: 'userState',
	default: {
		email: '',
		password: '',
		role: '',
		name: '',
		expires: '',

	}
})

export const postState = atom({
	key: 'postState',
	default: {
		title: '',
		body: '',
	}
})

export const authState = atom({
	key: 'authState',
	default:  {}

	
})



export default atoms