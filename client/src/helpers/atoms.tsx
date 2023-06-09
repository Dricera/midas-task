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
		post_id: '',
		post_title: '',
		post_content: '',
		author_id: '',
		category_id: 1,
		created_at:''
	}
})

const localStorageEffect = (key: string) => ({ setSelf, onSet }) => { 
	const savedValue = localStorage.getItem(key)
	if (savedValue != null || savedValue != undefined || savedValue != '') {
		setSelf(JSON.parse(savedValue))
	}
	onSet((newValue) => {
		localStorage.setItem(key, JSON.stringify(newValue))
	})
}

export const authState = atom({
	key: 'authState',
	default: JSON.parse(localStorage.getItem("user"))||{},
	
	effects: [localStorageEffect('authToken')],

	
})



export default atoms