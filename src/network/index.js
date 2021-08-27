import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: '',
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

