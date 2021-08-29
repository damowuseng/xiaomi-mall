import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://127.0.0.1:9000/api/',
		timeout: 5000
	})
	
	instance.interceptors.request.use(config => {
		return config
	}, err => {
		console.log(err)
	})
	
	instance.interceptors.response.use(response => {
		return response
	}, error => {
		return error
	})
	
	return instance(config)
}

