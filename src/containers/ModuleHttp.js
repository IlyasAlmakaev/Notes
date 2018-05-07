const BASE_URL = 'http://localhost:3000/'

export const request = (url, data, method) => {
    return fetch(BASE_URL + url, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},  
			body: data
		})
}

export const getRequest = (url, method, id) => {
    return fetch(BASE_URL + url, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'text/plain',
				'access_token': id
			}
		})
}

export const postRequest = (url, method, id, data) => {
    return fetch(BASE_URL + url, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
				'access_token': id
			},  
			body: data
		})
}
