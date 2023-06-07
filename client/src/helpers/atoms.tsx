import { RecoilState,atom } from "recoil"
const atoms = {}

export const postState = atom({
	key: 'postState',
	default: {
		title: '',
		body: '',
	}
})

export default atoms