/* eslint-disable @typescript-eslint/no-explicit-any */
// API Call logic using axios
import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:8080/api',
});
api.defaults.headers.post['Content-Type'] = 'application/json';

export const registerUser = (payload: any) => api.post(`/user`, payload);
// export const getAllUsers = () => api.get(`/users`);
export const updateUserById = (id: any, payload: any) => api.put(`/user/${id}`, payload);
export const deleteUserById = (id: any) => api.delete(`/user/${id}`);
export const getUserById = (id: any) => api.get(`/user/${id}`);
export const login = (payload: any) => api.post(`/login`, payload);

export const createPost = (payload: any) => api.post(`/post`, payload);
export const updatePostById = (id: any, payload: any) => api.put(`/post/${id}`, payload);
export const deletePostById = (id: any) => api.delete(`/post/${id}`);
export const getPostById = (id: any) => api.get(`/post/${id}`);


const apis = {
	registerUser,
	updateUserById,
	deleteUserById,
	getUserById,
	login,
	createPost,
	updatePostById,
	deletePostById,
	getPostById,
};

export default apis;