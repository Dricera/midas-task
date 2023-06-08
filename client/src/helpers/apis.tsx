/* eslint-disable @typescript-eslint/no-explicit-any */
// API Call logic using axios
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const api = axios.create({
	baseURL: 'http://127.0.0.1:8080/index.php',
});

export const registerUser = (payload: any) => api.post(`/user`, payload);
// export const getAllUsers = () => api.get(`/users`);
export const updateUserById = (id: any, payload: any) => api.put(`/user/${id}`, payload);
export const deleteUserById = (id: any) => api.delete(`/user/${id}`);
export const getUserById = (id: any) => api.get(`/user/${id}`);
export const userLogin = (payload: any) => api.post(`/user/login`, payload);

export const createPost = (payload: any) => api.post(`/post`, payload);
export const updatePostById = (id: any, payload: any) => api.put(`/post/${id}`, payload);
export const deletePostById = (id: any) => api.delete(`/post/${id}`);
export const getPostById = (id: any) => api.get(`/post/${id}`);

export const decodeToken = (token: any) => {
	return jwt_decode(token)
}

// bearer token from localstorage or react state
export const setAuthToken = (token: any) => {
	if (token) {
		// apply to every request
		api.defaults.headers.common.Authorization = token;
	} else {
		// delete auth header
		delete api.defaults.headers.common.Authorization;
	}
	const decodedToken = decodeToken(token)
	console.log(decodedToken)

	
//use the authstate atom and put the jwt decoded token into atom values
return decodedToken
}



const apis = {
	registerUser,
	updateUserById,
	deleteUserById,
	getUserById,
	userLogin,
	createPost,
	updatePostById,
	deletePostById,
	getPostById,
};

export default apis;